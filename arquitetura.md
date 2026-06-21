# Arquitetura do BibliaPesquisa

## Visão Geral

**BibliaPesquisa** é um aplicativo mobile híbrido (Cordova/Android) de código aberto para leitura, pesquisa e estudo da Bíblia. Desenvolvido por PJLAApps, utiliza JavaScript puro com auxílio da biblioteca W3.CSS para interface.

## Stack Tecnológica

- **Plataforma:** Apache Cordova (Android + Browser)
- **Linguagem:** JavaScript (vanilla), HTML5, CSS3
- **UI Framework:** W3.CSS (biblioteca CSS leve) + Hammer.js (gestos touch)
- **Banco de Dados:** LocalStorage (armazenamento chave-valor no navegador)
- **Monetização:** AdMob (banner + rewarded video) - `admob-plus-cordova`
- **Plugins:** SocialSharing, Admob Free, ES6 Promise

## Estrutura de Diretórios

```
BibliaPesquisa/
├── www/                      # Aplicação web principal
│   ├── index.html            # Single-page (todas as telas em um HTML)
│   ├── css/
│   │   ├── w3.css            # Framework CSS
│   │   ├── myStyle.css       # Estilos customizados (botões fixos, sidenav, etc.)
│   │   └── index.css
│   ├── js/
│   │   ├── main.js           # Variáveis globais e função de inicialização
│   │   ├── index.js          # Entry point, onload, initAds (AdMob)
│   │   ├── banco.js          # Camada de persistência (LocalStorage CRUD)
│   │   ├── navegacao.js      # Navegação entre telas, menu lateral, backbutton
│   │   ├── leitura.js        # Leitura de capítulos, marcação, comparação, sintaxe
│   │   ├── pesquisando.js    # Busca textual na Bíblia
│   │   ├── listando.js       # Histórico de marcações e comentários
│   │   ├── planosEstudo.js   # Planos de leitura bíblica (Ano Bíblico, etc.)
│   │   ├── configuracao.js   # Preferências (cor, idioma, fonte, TO)
│   │   ├── mapa.js           # Exibição de mapas bíblicos
│   │   ├── dicionario.js     # Dicionário bíblico
│   │   ├── util.js           # Funções utilitárias (formatação, datas, extração)
│   │   ├── planos.js         # Dados dos planos com Espírito de Profecia (EGW)
│   │   ├── biblias/          # Dados das traduções bíblicas
│   │   │   ├── blv.js        # Bíblia Livre (português)
│   │   │   ├── web.js        # World English Bible (inglês)
│   │   │   ├── nvi.js        # Nova Versão Internacional
│   │   │   ├── aa.js         # Almeida Atualizada
│   │   │   ├── acf.js        # Almeida Corrigida e Fiel
│   │   │   ├── kjv.js        # King James Version
│   │   │   ├── grc.js        # Grego (Textus Receptus)
│   │   │   ├── heb.js        # Hebraico (WLC)
│   │   │   └── translit.js   # Transliterações
│   │   ├── bases/
│   │   │   ├── baseversos.js # Metadados (qte capítulos/versos por livro)
│   │   │   ├── base1.js      # Dicionário parte 1
│   │   │   └── base2.js      # Dicionário parte 2
│   │   ├── strong/           # Números Strong grego
│   │   │   └── gregorefs.js, gregorefx.js, greekrefdireta.js, etc.
│   │   └── lib/              # Bibliotecas externas
│   │       ├── w3.js         # W3.CSS JS helper
│   │       └── hammer.min.js # Touch gestures
│   └── img/                  # Ícones e bandeiras
├── config.xml                # Configuração Cordova
├── package.json              # Dependências npm e plugins Cordova
├── res/                      # Recursos Android (launcher icons, splash)
├── platforms/                # Compilados Cordova
├── plugins/                  # Plugins Cordova
└── assets/                   # Assets de design (logo, ícones)
```

## Arquitetura de Código

### 1. Single-Page Application (SPA)

Todas as telas são `<div>` com `id` único, exibidas/ocultadas por `display: block/none`. Controlado por `navegacao.abrirTela()`.

### 2. Fluxo de Dados

```
Usuário → index.html → main.iniciar()
  → banco.openDatabase() (LocalStorage)
  → carregar preferências (cor, idioma, fonte)
  → carregar versão ativa (BLV ou WEB)
  → abrirTelaLeitura()
```

### 3. Camada de Persistência (`banco.js`)

- **LocalStorage** com schema textual (CSV-like separado por `;`)
- Tabelas: `slotSelecao0`, `slotMarcacao0`, `slotComentario0`
- Estruturas em memória: `eSelecao[]`, `eMarcacao[]`, `eComentario[]`
- Plano de Estudos: chave `slotPlanos` (formato `sigla,dia;`)

### 4. Navegação (`navegacao.js`)

- Pilha de telas (`telanavegacao[]`) para suporte ao botão "voltar"
- Menu lateral `mySidenav3` com 9 opções principais
- Gestos touch (Hammer.js) para navegação entre capítulos (swipe left/right)

### 5. Sistema de Marcação e Cores

O usuário seleciona versos, abre o seletor de cores (15 cores) e salva. Os dados ficam em memória temporária (`tempmarcacao[]`, `tempselecao[]`) até o salvamento definitivo no banco.

### 6. Sistema de Comparação

Ao selecionar versos e clicar "Comparar", exibe o mesmo texto em 7 versões: BLV, NVI, AA, ACF, WEB, KJV e Textus Receptus (grego/hebraico + transliteração). Limitado a 500 caracteres para versões com copyright (NVI, AA, ACF, KJV).

### 7. Análise Sintática (Strong)

Ao selecionar versos do NT e clicar no botão de gramática, consulta o dicionário de números Strong grego (`greekrefdireta.js` + `gregorefs.js`), exibindo palavra, transliteração, tradução e classe gramatical.

### 8. Planos de Estudo

10 planos pré-definidos (Ano Bíblico 3/5 cap/dia, Pentateuco, Sabedoria, Profetas, Evangelhos, etc.). Cada dia é um quadrado vermelho (não lido) ou verde (lido). Salvos em `slotPlanos` no LocalStorage.

### 9. Internacionalização

Suporte a **pt-BR** e **en-US** via chaves `db.getItem("idioma")`. Textos da interface trocados dinamicamente por `document.getElementById.innerHTML`.

## Fluxo de Telas

```
Menu Principal → Ler (leitura)
               → Pesquisar (pesquisando)
               → Histórico (listando)
               → Histórico por Cores
               → Dicionário (dicionario)
               → Mapas (mapa)
               → Plano de Estudos (planosestudo)
               → Configuração (configuracao)
               → Ajude Esse Projeto (ajuda)
```

## Modelo de Dados (LocalStorage)

| Chave | Formato | Descrição |
|-------|---------|-----------|
| `slotSelecaoN` | `id,cor;id,cor;...` | Seleções de cor |
| `slotMarcacaoN` | `selid,id,versao,livro,cap,verso;...` | Versos marcados |
| `slotComentarioN` | `selid,id,texto;...` | Comentários |
| `slotPlanos` | `sigla,dia;sigla,dia;...` | Dias lidos por plano |
| `slotLivroCapitulo` | `livro_capitulo` | Última posição de leitura |
| `corcabecalho` | `w3-lime` (ex.) | Cor do cabeçalho |
| `corfundo` | `1` ou `2` | Modo claro/escuro |
| `idioma` | `pt-BR` ou `en-US` | Idioma |
| `fonte` | `0`-`3` | Família da fonte |
| `tamanhofonte` | `0`-`2` | Tamanho da fonte |
| `exibirTextoOriginal` | `1` ou `-1` | Mostrar TO + transliteração |
| `tamanhoFonteTextoOriginal` | `12`-`32` | Tamanho da fonte do TO |
| `FLAG_USANDO_PLANO_ESTUDO` | `0` ou `1` | Modo plano de estudo |
