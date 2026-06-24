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
- [x] **Plugins desatualizados**: `cordova-plugin-admob-free` removido, `cordova-android` atualizado para `^15.0.0`, `cordova` para `^13.0.0`. `admob-plus-cordova` mantido como única lib de ads.
- [ ] **Código legado comentado**: muitas funções antigas comentadas ou inacabadas (ex: `abrirTelaSermonetes`, `abrirTelaMensagens`, `abrirTelaTextoOriginalLeitura`, funções TR/WLC).
- [x] **Sem testes**: `npm test` agora executa `vitest run`. Testes criados em `tests/util.test.js` (6 testes para funções utilitárias e parser YAML).
- [ ] **Dicionário incompleto**: `base1.js` e `base2.js` contêm o dicionário bíblico. Se a palavra não for encontrada, exibe "Palavra não encontrada na base de dados".
- [ ] **Tradução manual**: textos em pt-BR e en-US são definidos manualmente em `configuracao.js` (~200 linhas de `innerHTML`). Sem i18n library.
- [ ] **Análise sintática limitada**: a função `carregarSintaxe()` só funciona para grego (NT). Hebraico (AT) está pendente ("TODO").
- [x] **Propagandas**: `index.js` refatorado com configuração externa via `config.yaml`. Cooldown alterado de 3 para 120 minutos (definido em `config.yaml:noBannerCooldownMinutes`).
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

---

## Como Executar a Refatoração — SQLite

### Arquivos de Planejamento

- **`refatoracao_plano_implementacao.md`** — contém o schema final, o mapeamento de funções antigas para novas, o algoritmo de chave `SIGLA_CAP_VER`, a estratégia de 2 bancos (biblia.db + user.db), e o fluxo detalhado de cada componente.
- **`tasks.md`** — checklist com 15 fases numeradas na ordem de execução.
- foi criado um branch separado para refatoração

### Método de Trabalho

1. **Escolha uma fase em `tasks.md`** e mova-a de `[ ]` para `[X]` à medida que avança.
2. **Antes de começar cada fase**, leia a seção correspondente em `refatoracao_plano_implementacao.md` para entender o design e as funções envolvidas.
3. **Após concluir uma fase**, execute `npm test` (e/ou `cordova run android`) para validar que nada quebrou.
4. **Commits**: faça um commit por fase (ou por arquivo, se a fase for grande) com mensagem descritiva. Ex: `git commit -m "fase2: sqlite.js com getVerse/getChapter/searchText"`.
5. **Se encontrar um imprevisto**, atualize este `notas.md` e o `refatoracao_plano_implementacao.md` com a decisão tomada.

### Dependências entre Fases

```
Fase 1 (build-db.js) → Fase 2 (sqlite.js) → Fase 3 (util.js)
                                              Fase 4 (main.js)
                                              Fase 5 (leitura.js)
                                              Fase 6 (pesquisando.js)
                                              Fase 7 (banco.js)
                                              Fase 8 (listando.js)
                                              Fase 9 (planos.js)
                                              Fase 10 (planosEstudo.js)
                                              Fase 11 (configuracao.js)
                            Fase 12 (index.js, inicialização)
                            Fase 13 (index.html, remover scripts)
                Fase 14 (testes) — pode começar em paralelo após Fase 2
                Fase 15 (build) — última
```

### Roteiro Resumido

| Fase | Ação | Arquivo(s) Principal(is) |
|------|------|--------------------------|
| 1 | Gerar biblia.db | `scripts/build-db.js` |
| 2 | Criar sqlite.js | `www/js/sqlite.js` |
| 3 | Refatorar extração | `www/js/util.js` |
| 4 | Refatorar main | `www/js/main.js` |
| 5 | Refatorar leitura | `www/js/leitura.js` |
| 6 | Refatorar busca | `www/js/pesquisando.js` |
| 7 | Refatorar banco | `www/js/banco.js` |
| 8 | Refatorar listagem | `www/js/listando.js` |
| 9 | Refatorar planos | `www/js/planos.js` |
| 10 | Refatorar planosEstudo | `www/js/planosEstudo.js` |
| 11 | Refatorar config | `www/js/configuracao.js` |
| 12 | Inicialização | `www/js/index.js` |
| 13 | Remover scripts antigos | `www/index.html` |
| 14 | Testes | — |
| 15 | Build | — |

### Comandos Úteis

```bash
# Gerar banco (Fase 1)
node scripts/build-db.js

# Rodar testes
npm test

# Build Android
cordova build android

# Testar no dispositivo
cordova run android --device
```

### Observações Importantes

- O banco `biblia.db` (read-only) deve estar em `www/assets/` e ser copiado pelo `config.xml` com `<resource-file src="www/assets/biblia.db" target="assets/biblia.db" />`.
- O banco `user.db` (gravável) é criado na primeira execução em `cordova.file.dataDirectory`.
- A migração do LocalStorage é irreversível: após migrar, as chaves antigas são deletadas. Faça backup ou mantenha um flag `migrated` no SQLite.
- O script `build-db.js` usa `better-sqlite3` (Node.js, não Cordova). Ele é executado apenas durante o desenvolvimento para gerar o banco que será embarcado no app.
- O app em runtime usa `cordova-sqlite-storage` (plugin Cordova), que é um SQLite nativo para Android/iOS.
