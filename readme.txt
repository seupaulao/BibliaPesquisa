-- usar o simulate android para testes rapidos e com debug no vscode

instalar 

$ npm install -g cordova-simulate

usar
 
$ simulate android


-- geracao normal : cordova build android

-- verificar problema da assinatura 

-- proximas versoes biblia pesquisa --

biblia pesquisa 2.0

OK 01. comparativo limitado a 500 palavras em outras versões
OK 02. comparativo não deixar compartilhar e nem selecionar
OK 03. comparador textus receptus com transliteracao  
OK 04. alterar menu "Estudo" para "Plano de Estudos"
OK - abrir direto na tela de plano de estudos ao clicar no menu lateral
OK   05. remover textus receptus e wlc com toda a sua navegação [PROBLEMA] 
OK    ** ao fazer quebra a aplicação **
OK 06. remover deuterocanonicos
OK 07. tentar colocar mais 3 a 4 cores nas marcações
OK 08. colocar a disposição dos icones de seleção na vertical a esquerda
OK 09. na seleção de livros deixar em 2 colunas
OK     e identificar o antigo testamento e o novo testamento 
OK 10. na seleção de livros, colocar o nome do livro também abaixo da sigla
OK     - correção da listagem de livros, pegando livros do AT no NT 
OK 11. no histórico
OK      - colocar a cor do marcador
OK      - separar todos os versos e não mais colocar eles agrupados
ok * topo fixo
ok * ao voltar, na leitura, ir para o topo da página 
ok * testar telas por conta da alteração de topo fixo 
ok * muitas funções quebraram com a última atualização no mobile, verificar cada uma delas
ok * limpando codigo e telas não usadas 
ok * limpar libjs e css não usados
ok * historico - ordenar por cores
ok * colocar controle de tamanho do texto original  
ok * exibir/esconder texto original + transliteracao
ok * testar o plano de estudo
ok  - nao existe mais botao de ir pro lado, agora o controle é com hammer 
ok  - viabilizar navegação : remover forma atual, colocar quadrados de dias
ok    - pintar dia LIDO de VERDE
ok      - dizer ao usuario chegar no final e clicar no botao dizendo que acabou o estudo do dia
ok    - deixar vermelho o dia que falta ser LIDO
ok    - O Botao REINICIAR PLANO deve zerar a leitura do plano corrente
ok      - historico nao esta funcionando - nao esta apresentando msg se nao tiver dados
ok  - problema base biblica transliteracao e texto original [faltando]
ok  - remover botão compartilhar
ok - como eh possivel agora fazer zoom, removi o aumentar e reduzir tamanho da fonte  
ok  - dar espaço entre barra e corpo da tela - verificar espaçamento de pesquisar e configuracao
ok - botão topo 
ok - cuidado com o splashscreen, está aparecendo apenas o cordova
ok - gerar arte 
- **habilitar zoom** - PROBLEMA - NAO CONSEGUI   
ok - ao alterar para modo claro/escuro cuidado com a fonte dos menus - não está mudando para contrastar  

ok - listagem de livros deve ficar no padrão anterior - lado a lado : antigo e novo testamento  

ok - novo esquema de cores para separação de livros em grupos

ok - colocar botão adicional na marcação para gramática 
ok   - ver a base de analise sintatica e tradução
ok     - só grego 

ok - aos usar os recursos : comparador, e analise sintatica o texto da leitura esta rolando pra baixo. Corrigir essa falha , pois eh pra ficar no mesmo lugar, ou na volta da tela ir pro inicio.

ok - padronizando animação de entrada na tela 

ok - na analise sintatica quando nao apresentar dados 
ok mostrar a Alerta - caixa amarela: "Dados não foram encontrados ou 
ok funcionalidade para o item está em desenvolvimento."

OK - colocar animação fade no 'Histórico ordenado por cores'

ok - cor do menu deve ser azul, independente se está no modo claro ou escuro 

ok - removido temporariamente a analise sintatica do texto hebraico até baixar a base 

- colocar animação de virada de página na leitura -> para esquerda e para direita

- re-gerar os icones de : 
  - marcação, 
  - gramática, 
  - comparação, 
  - Espírito de Profecia 
  - logo ?
  - splashscreen ? 
  
- corrigir ir para na seleção de verso
  I. texto original habilitado
    1. texto normal 
    2. texto médio
    3. texto grande
OK  II. texto original desabilitado

- fazer ou remover tela de ajuda

- compras e propagandas
   - banner no final 
   - video
      - dicionario
	    - mapas 
	      - 1 video a cada 5 acessos

- habilitar compra do app
  - remover propagandas
  - definir preço 2.99 - 8.99 ??
    - guardar identificador das pessoas que comprararm o app para futuras releases
      - como fazer isso ?? 

- publicar

Próxima versão 
  -> trazer a referencia cruzada e sintaxe hebraico
  -> busca sintática por numeros strong
  -> na configuração de cores da barra de cabeçalho, 
alterar a cor do menu para uma cor mais 'leve'
ou mais 'pesada' com base na cor selecionada do cabeçalho. 
As cores do menu devem ficar dependentes
da seleção de cor do cabeçalho e não do fundo branco ou preto.
-> terminar de escrever a base para os livros do espírito de profecia
-> juntar links para base do espírito de profecia
    - ao navegar um texto que esta descrito no EP, habilitar botão
    que faz um link direto para EGWScripts
    - botão deve ter comportamento similar ao "Topo" 
