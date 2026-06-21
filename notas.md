# Notas sobre o Projeto BibliaPesquisa

## O que o programa faz

Aplicativo mobile para leitura e estudo da Bíblia com múltiplas versões (BLV, WEB, NVI, AA, ACF, KJV, grego/hebraico), busca textual, marcação colorida de versos, comparação entre traduções, análise gramatical (números Strong grego), dicionário bíblico, mapas históricos, planos de leitura e integração com o Espírito de Profecia (Ellen G. White). Possui monetização via AdMob (banner + rewarded video).

## Observações Técnicas

### Pontos Fortes
- **Offline-first**: todas as bases bíblicas e dicionários estão embarcados como arquivos JS, sem necessidade de internet para leitura
- **Código autossuficiente**: sem frameworks modernos (React, Angular, Vue), apenas JS puro + W3.CSS
- **SPA funcional**: navegação fluida com pilha de telas e animações CSS

### Pontos de Atenção

- [ ] **LocalStorage como banco**: dados armazenados como strings CSV concatenadas (ex: `"1,#ffaa00;2,#00aaff;"`). Não há estrutura relacional, índices ou consultas. Escalabilidade limitada a ~5-10MB.
- [ ] **Código monolítico**: toda a interface está em um único `index.html` (~822 linhas). A lógica está distribuída em vários JS sem módulos ou namespaces. Variáveis globais abundantes (`book`, `cap`, `vers`, etc.) em `main.js`.
- [ ] **Dados bíblicos inline**: as traduções (BLV, WEB, etc.) são arquivos JS com objetos enormes em memória. Ex: `blv.js`, `web.js`, `nvi.js`, `aa.js`, `acf.js`, `kjv.js` contêm capítulos inteiros. Isso aumenta o consumo de memória e o tempo de carregamento inicial.
- [ ] **Segurança**: Content-Security-Policy está comentado no HTML (`<!--meta http-equiv...-->`). O app acessa `*` (todas origens) via `config.xml`.
- [ ] **Plugins desatualizados**: `cordova-plugin-admob-free` (substituído pelo `admob-plus-cordova` que já está nas dependências). Há código comentado referente ao AdMob antigo.
- [ ] **Código legado comentado**: muitas funções antigas comentadas ou inacabadas (ex: `abrirTelaSermonetes`, `abrirTelaMensagens`, `abrirTelaTextoOriginalLeitura`, funções TR/WLC).
- [ ] **Sem testes**: `npm test` apenas echoa "no test specified". Não há estrutura de testes unitários ou de integração.
- [ ] **Dicionário incompleto**: `base1.js` e `base2.js` contêm o dicionário bíblico. Se a palavra não for encontrada, exibe "Palavra não encontrada na base de dados".
- [ ] **Tradução manual**: textos em pt-BR e en-US são definidos manualmente em `configuracao.js` (~200 linhas de `innerHTML`). Sem i18n library.
- [ ] **Análise sintática limitada**: a função `carregarSintaxe()` só funciona para grego (NT). Hebraico (AT) está pendente ("TODO").
- [ ] **Propagandas**: o `index.js` gerencia banner e rewarded ad. O vídeo recompensado esconde o banner por 3 minutos. O banner é exibido novamente após esse período.
- [ ] **Espírito de Profecia**: o arquivo `planos.js` contém URLs para egwwritings.org e um plano anual que integra leitura bíblica com os livros de Ellen White. A funcionalidade de "link direto para EGW" nos versos ainda está em TODO no `readme.txt`.

## Roadmap (do readme.txt)

### Versão 2.0 (atual) - Completado
- Comparativo limitado a 500 palavras
- Remoção de deuterocanônicos e Textus Receptus/WLC
- 15 cores de marcação
- Seletor de livros em 2 colunas (AT/NT)
- Histórico ordenado por cores
- Controle de tamanho do texto original
- Plano de Estudos reformulado (quadrados de dias, verde=lido, vermelho=não lido)
- Modo claro/escuro
- Análise sintática grega (Strong numbers)

### Próxima Versão (pendente)
- Compra in-app para remover propagandas (precisa de backend)
- Referência cruzada e sintaxe hebraico
- Busca sintática por números Strong hebraico (8674 entradas)
- Integração com Espírito de Profecia no momento da leitura
- Melhoria nas cores do menu com base na cor do cabeçalho
- Finalizar base de dados dos livros do Espírito de Profecia
