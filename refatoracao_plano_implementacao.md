# Plano de Implementação — Migração JS Inline → SQLite

## Objetivo

Substituir os 9 arquivos JS de dados bíblicos (~28MB em memória) por um banco SQLite, e migrar os dados de usuário (marcações, favoritos, comentários) do LocalStorage para o SQLite.

## Schema do Banco

### Tabelas read-only (shipadas com o app em `www/assets/biblia.db`)

```sql
CREATE TABLE verses (
  id TEXT PRIMARY KEY,          -- "GEN_1_1"
  book_index INTEGER NOT NULL,
  chapter INTEGER NOT NULL,
  verse INTEGER NOT NULL,
  blv TEXT, web TEXT,
  nvi TEXT, aa TEXT,
  acf TEXT, kjv TEXT,
  grc TEXT, heb TEXT,
  translit TEXT
);

CREATE TABLE books (
  id INTEGER PRIMARY KEY,
  abbreviation TEXT NOT NULL,
  name_pt TEXT NOT NULL,
  name_en TEXT NOT NULL,
  chapters INTEGER NOT NULL,
  verses_per_chapter TEXT       -- JSON array: "[31,25,24,...]"
);
```

### Tabelas graváveis (em `cordova.file.dataDirectory`)

```sql
CREATE TABLE user_marks (
  verse_id TEXT NOT NULL PRIMARY KEY REFERENCES verses(id),
  corblv TEXT,                  -- cor p/ pt-BR (ex: "#ffaa00")
  corweb TEXT,                  -- cor p/ en-US (ex: "#00aaff")
  favorito INTEGER DEFAULT 0,
  updated_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE user_comments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  verse_id TEXT NOT NULL REFERENCES verses(id),
  texto TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

CREATE INDEX idx_comments_verse ON user_comments(verse_id);
```

## Fluxo de Cores por Idioma

- Se `nacionalidade = "pt-BR"` → usar `user_marks.corblv` como cor de destaque
- Se `nacionalidade = "en-US"` → usar `user_marks.corweb` como cor de destaque

## Algoritmo de Chave `id` (SIGLA_CAP_VER)

A chave `id` segue o padrão do Format 3 (grc/heb/translit):

```
GEN_1_1 = Gênesis capítulo 1 versículo 1
MAT_1_1 = Mateus capítulo 1 versículo 1
```

As siglas padronizadas para os 66 livros:

```
GEN,EXO,LEV,NUM,DEU,JOS,JDG,RUT,1SA,2SA,1KI,2KI,1CH,2CH,EZR,NEH,EST,JOB,PSA,PRO,
ECC,SNG,ISA,JER,LAM,EZK,DAN,HOS,JOL,AMO,OBA,JON,MIC,NAM,HAB,ZEP,HAG,ZEC,MAL,
MAT,MRK,LUK,JHN,ACT,ROM,1CO,2CO,GAL,EPH,PHP,COL,1TH,2TH,1TI,2TI,TIT,PHM,HEB,
JAS,1PE,2PE,1JN,2JN,3JN,JUD,REV
```

## Script de Geração do Banco (`scripts/build-db.js`)

### Inputs
- `www/js/biblias/blv.js` — formato 1
- `www/js/biblias/web.js` — formato 1
- `www/js/biblias/nvi.js` — formato 2
- `www/js/biblias/aa.js` — formato 2
- `www/js/biblias/acf.js` — formato 2
- `www/js/biblias/kjv.js` — formato 2
- `www/js/biblias/grc.js` — formato 3
- `www/js/biblias/heb.js` — formato 3
- `www/js/biblias/translit.js` — formato 3
- `www/js/bases/baseversos.js` — metadados (quantidade de capítulos/versos)
- `www/js/main.js` — nomes dos livros (arrays `livrospt`, `livroseng`, `livs`)

### Processamento

1. **Formato 1** (blv, web):
   ```js
   base[bookIndex].capitulos[cap][verse]
   bookIndex = índice numérico (1..66)
   ```
   Para cada `bookIndex`, iterar `cap` de 1..N e `verse` de 1..M, gerar chave `SIGLA_CAP_VER`.

2. **Formato 2** (nvi, aa, acf, kjv):
   ```js
   array[bookIndex-1].chapters[cap-1][cap][verse]
   ```
   Mesmo processo, ajustando índices (array 0-based, cap/verse 1-based).

3. **Formato 3** (grc, heb, translit):
   ```js
   obj["SIGLA_CAP_VER"] = texto
   ```
   Chave já está no formato correto. Inserir diretamente.

4. **Tabela `books`**:
   - Usar `baseversos[j].qtecapitulos` e `baseversos[j].qteversos`
   - Usar `livs[]` para sigla (já em maiúsculas)
   - Usar `livrospt[]` e `livroseng[]` para nomes

### Output
- `www/assets/biblia.db` (~28MB estimado)

### Dependências do script
```bash
npm install --save-dev better-sqlite3
```

## Camada de Acesso SQLite (`www/js/sqlite.js`)

```js
// Abre/fecha conexão
async function initBibleDb()
async function closeDb()

// Leitura bíblica
async function getVerse(version, bookIndex, chapter, verse)
async function getChapter(version, bookIndex, chapter)
async function getAllVersions(bookIndex, chapter, verse)

// Metadados
async function getBookInfo(bookIndex)
async function getChapterCount(bookIndex)
async function searchText(version, term)

// Marcações do usuário
async function upsertUserMark(verseId, corblv, corweb, favorito)
async function getUserMark(verseId)
async function getUserMarksByColor(cor, idioma)
async function getAllUserMarks()
async function deleteUserMark(verseId)

// Comentários
async function addComment(verseId, texto)
async function updateComment(commentId, texto)
async function deleteComment(commentId)
async function getComments(verseId)
```

## Mapeamento de Funções Antigas para Novas

| Função Antiga (síncrona) | Nova Função (async) | Arquivo |
|--------------------------|---------------------|---------|
| `extrairVerso(b,c,v)` | `getVerse(versaoAtual, b, c, v)` | `util.js` |
| `extrairVersoBase(baseversao,b,c,v)` | `getVerse(versao, b, c, v)` | `util.js` |
| `extrairVersoBaseTipo1(baseversao,b,c,v)` | `getVerse(versao, b, c, v)` | `util.js` |
| `extrairVersoBaseTranslit(b,c,v,isTranslit)` | `getAllVersions(b,c,v)` → campo grc/heb/translit | `util.js` |
| `base[book].qtecapitulos` | `getChapterCount(book)` | `main.js` |
| `baseversos[j].qtecapitulos` | `getBookInfo(j).chapters` | `pesquisando.js` |
| `baseversos[j].qteversos[p-1]` | `getBookInfo(j).verses_per_chapter[p-1]` | `pesquisando.js` |
| `base[book].livro` | `getBookInfo(book).name_pt/en` | `leitura.js` |
| `base[book].abrev` | `getBookInfo(book).abbreviation` | `leitura.js` |
| `blv[chave]` | `getAllVersions(b,c,v).blv` | `planos.js` |
| `salvarMarcacaoComentarioBanco()` | `upsertUserMark()` + `addComment()` | `banco.js` |
| `carregarEstrutura()` | `getAllUserMarks()` + `getComments()` | `banco.js` |
| `excluirSelecaoBanco(selid)` | `deleteUserMark(verseId)` | `banco.js` |

## Arquivos a Modificar

| Arquivo | Tipo de Mudança |
|---------|----------------|
| `scripts/build-db.js` | **Criar** — script Node de geração do banco |
| `www/assets/biblia.db` | **Criar** — banco SQLite gerado |
| `www/js/sqlite.js` | **Criar** — camada de acesso |
| `package.json` | Adicionar `better-sqlite3` (dev) e `cordova-sqlite-storage` (plugin) |
| `config.xml` | Adicionar plugin `cordova-sqlite-storage` |
| `www/index.html` | Remover 9 `<script>` de dados + adicionar `sqlite.js` |
| `www/js/main.js` | `carregarVersao()` simplificado, `numeroCapitulos()` async |
| `www/js/util.js` | 4 funções de extração viram async |
| `www/js/leitura.js` | `carregar()` async, aplicar cor por idioma |
| `www/js/pesquisando.js` | `varrerVersos()` → busca via SQL |
| `www/js/listando.js` | Histórico via SQLite |
| `www/js/banco.js` | Substituir LocalStorage por SQLite |
| `www/js/planos.js` | `lerTexto()` e `getVersosCapitulo()` via SQLite |
| `www/js/planosEstudo.js` | Ajustar `getBlvOrWeb()` |
| `www/js/index.js` | Inicializar SQLite antes de `iniciar()` |
| `www/js/configuracao.js` | Ações "apagar" agora operam no SQLite |

## Estratégia de Banco em 2 Arquivos

O banco será dividido em DOIS arquivos físicos:

1. **`biblia.db`** (read-only, em `www/assets/`)
   - Tabelas: `verses`, `books`
   - Shipado com o app, substituído a cada atualização via `config.xml`

2. **`user.db`** (gravável, em `cordova.file.dataDirectory`)
   - Tabelas: `user_marks`, `user_comments`
   - Criado na primeira execução, NUNCA substituído em updates

### Fluxo de inicialização

```js
async function initDatabases() {
  // 1. Abre o banco do usuário (cria se não existir)
  const userDb = await openDatabase('user.db');
  await createUserTables(userDb);

  // 2. Abre o banco bíblico (read-only)
  const bibleDb = await openDatabase('biblia.db');

  // 3. Faz attach do bibleDb no userDb para queries cross-db
  await userDb.executeSql('ATTACH DATABASE ? AS bible', [biblePath]);
}
```

### Benefício
- Dados de usuário nunca se perdem em atualizações
- Dados bíblicos podem ser atualizados independentemente
- Queries de leitura que precisam de ambos (ex: listar versos favoritos com texto) usam `ATTACH`

## Migração de Dados do LocalStorage

Na primeira execução após a instalação, verificar se há dados no LocalStorage:

```js
async function migrateFromLocalStorage() {
  const oldSelecao = localStorage.getItem('slotSelecao0');
  if (!oldSelecao) return; // já migrou ou não há dados

  // 1. Ler seleções, marcações e comentários
  // 2. Agrupar por verse_id
  // 3. Inserir em user_marks e user_comments
  // 4. Apagar chaves do LocalStorage
}
```

## Como o `carregar()` Funcionará

```js
async function carregar() {
  const livro = getLivroMain();
  const cap = getCapituloMain();
  const versao = getVersaoAtualMain();
  const isPt = getNacionalidade() === 'pt-BR';

  const chapterData = await getChapter(versao, livro, cap);
  let detalhe = '';

  for (const row of chapterData) {
    const mark = await getUserMark(row.id);
    const cor = isPt ? mark?.corblv : mark?.corweb;

    detalhe += `<p>${row.verse}: <span id='v${row.verse}'` +
      (cor ? ` style='background-color:${cor}'` : '') +
      ` onclick='preselecao(...)'>${row.text}</span></p>`;
  }

  // Exibir texto original se ativado
  if (getExibirTO() === 1) {
    // getChapter('grc', livro, cap) + getChapter('translit', livro, cap)
  }

  document.getElementById('capitulob1').innerHTML = detalhe;
}
```
