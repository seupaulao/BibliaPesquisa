# Checklist de Implementação — Migração JS Inline → SQLite

## Pré-requisitos

- [ ] Revisar e aprovar schema final em `refatoracao_plano_implementacao.md`
- [ ] Entender os 3 formatos de arquivo JS existentes
- [ ] Identificar todos os pontos de acesso aos dados bíblicos no código atual

## Fase 1 — Script de Geração do Banco

- [ ] Instalar `better-sqlite3` como devDependency
- [ ] Criar `scripts/build-db.js` com leitura de todos os 9 arquivos JS
- [ ] Mapear `baseversos.js` + `main.js` (livrospt, livroseng, livs) para tabela `books`
- [ ] Gerar tabela `verses` com chave `id` no padrão `SIGLA_CAP_VER`
- [ ] Gerar tabela `books` com metadados
- [ ] Executar script e validar `www/assets/biblia.db`
- [ ] Verificar contagem de versos (ex: 31102 total)
- [ ] Verificar integridade de amostras (ex: João 3:16 em cada versão)

## Fase 2 — Camada de Acesso SQLite

- [ ] Criar `www/js/sqlite.js` com funções async
- [ ] Implementar abertura/attach dos dois bancos (biblia.db + user.db)
- [ ] Implementar `getVerse()`, `getChapter()`, `getAllVersions()`
- [ ] Implementar `getBookInfo()`, `getChapterCount()`
- [ ] Implementar `searchText()` com `LIKE`
- [ ] Implementar `upsertUserMark()`, `getUserMark()`, `getAllUserMarks()`
- [ ] Implementar `addComment()`, `updateComment()`, `deleteComment()`, `getComments()`
- [ ] Implementar migrador `migrateFromLocalStorage()`
- [ ] Adicionar plugin `cordova-sqlite-storage` no `config.xml`

## Fase 3 — Refatorar `util.js`

- [ ] Converter `extrairVerso()` para async
- [ ] Converter `extrairVersoBase()` para async
- [ ] Converter `extrairVersoBaseTipo1()` para async
- [ ] Converter `extrairVersoBaseTranslit()` para async
- [ ] Atualizar todos os callers das 4 funções para usar await

## Fase 4 — Refatorar `main.js`

- [ ] Simplificar `carregarVersao()` — não precisa mais trocar `base`
- [ ] Converter `numeroCapitulos()` para async
- [ ] Atualizar callers de `numeroCapitulos()`

## Fase 5 — Refatorar `leitura.js`

- [ ] Converter `carregar()` para async com `getChapter()`
- [ ] Aplicar `corblv` ou `corweb` conforme idioma selecionado
- [ ] Ajustar `carregarTextoOriginal()` para usar `getChapter()` com versão grc/heb/translit
- [ ] Ajustar `selecionarTexto()` para usar `upsertUserMark()`

## Fase 6 — Refatorar `pesquisando.js`

- [ ] Converter `varrerVersos()` para usar `searchText()` via SQL
- [ ] Ajustar `varrerVersos()` para respeitar limite de 500 caracteres (NVI/AA/ACF/KJV)
- [ ] Ajustar callers de busca

## Fase 7 — Refatorar `banco.js`

- [ ] Substituir `slotSelecao0..3` e `slotMarcacao0..3` por tabela `user_marks`
- [ ] Substituir `slotComentario0..3` por tabela `user_comments`
- [ ] Adaptar `carregarEstrutura()` para queries SQL
- [ ] Adaptar `salvarMarcacaoComentarioBanco()` para upsert
- [ ] Garantir que cores são salvas em coluna específica por idioma (corblv vs corweb)

## Fase 8 — Refatorar `listando.js`

- [ ] Histórico de favoritos buscar em `user_marks.favorito = 1`
- [ ] Listagem por cor buscar `corblv` ou `corweb` conforme idioma
- [ ] Exibir texto do verso via JOIN com `verses`

## Fase 9 — Refatorar `planos.js`

- [ ] Substituir `blv[chave]` por `getAllVersions(b,c,v).blv`
- [ ] Ajustar `lerTexto()` e `getVersosCapitulo()`

## Fase 10 — Refatorar `planosEstudo.js`

- [ ] Ajustar `getBlvOrWeb()` para usar `getVerse()` com versão adequada

## Fase 11 — Refatorar `configuracao.js`

- [ ] Ações "apagar favoritos" executar `DELETE FROM user_marks`
- [ ] Ações "apagar comentários" executar `DELETE FROM user_comments`
- [ ] Ações "apagar histórico" executar `DELETE FROM user_marks`

## Fase 12 — Inicialização no `index.js`

- [ ] Chamar `initDatabases()` antes de `iniciar()`
- [ ] Chamar `migrateFromLocalStorage()` se primeira execução

## Fase 13 — Remover Importações Antigas

- [ ] Remover `<script src="js/biblias/blv.js">` do `index.html`
- [ ] Remover `<script src="js/biblias/web.js">` do `index.html`
- [ ] Remover `<script src="js/biblias/nvi.js">` do `index.html`
- [ ] Remover `<script src="js/biblias/aa.js">` do `index.html`
- [ ] Remover `<script src="js/biblias/acf.js">` do `index.html`
- [ ] Remover `<script src="js/biblias/kjv.js">` do `index.html`
- [ ] Remover `<script src="js/biblias/grc.js">` do `index.html`
- [ ] Remover `<script src="js/biblias/heb.js">` do `index.html`
- [ ] Remover `<script src="js/biblias/translit.js">` do `index.html`
- [ ] Adicionar `<script src="js/sqlite.js">` no `index.html`
- [ ] Adicionar `www/assets/biblia.db` à cópia do `config.xml`

## Fase 14 — Testes

- [ ] Testar leitura de capítulo completo em cada versão
- [ ] Testar busca textual em todas as versões
- [ ] Testar busca com caracteres especiais (acentos, transliteração)
- [ ] Testar marcação de versos com corblv e corweb
- [ ] Testar favoritar/desfavoritar versos
- [ ] Testar adicionar/editar/excluir comentários
- [ ] Testar migração de dados do LocalStorage antigo
- [ ] Testar comparador entre versões
- [ ] Testar planos de leitura
- [ ] Testar dicionário/mapas (se aplicável)
- [ ] Testar performance de carregamento de capítulo
- [ ] Testar cooldown de anúncios (não relacionado ao banco, mas precisa continuar funcionando)

## Fase 15 — Build e Distribuição

- [ ] Executar `scripts/build-db.js` para gerar `www/assets/biblia.db` final
- [ ] Buildar APK/AAB com Cordova
- [ ] Testar em dispositivo físico/emulador Android
