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
- ao clicar no versiculo do 'ir para' está ok apenas para texto normal 
  - se texto medio ou grande, ele se perde: adaptar!
- listagem de livros deve ficar no padrão anterior
lado a lado : antigo e novo testamento  
- colocar botão adicional na marcação para 
  - ver o texto receptus do verso 
  - ver a transliteração do verso 
  - ver a referencia cruzada 
  - ver a base de analise sintatica e tradução  
- remover do botao de biblia lado-a-lado, a parte do texto receptus [pois sera no comando acima] 
- tentar colocar item textus receptus original
  - o item de leitura deve ser o mesmo usado na leitura padrão [livro,capitulo,versiculo]  
- ao alterar para modo claro/escuro cuidado com a fonte dos menus - não está mudando para contrastar  
- cuidado com o splashscreen, está aparecendo apenas o cordova
ok - remover hammer.js 
ok     - habilitar o zoom na app [se ja não estiver habilitado]
ok 	   - re-colocar botões avançar, retroceder capítulo
ok     - remover/comentar gesto puxar pra esquerda e puxar pra direita	
- juntar links para base do espírito de profecia
    - ao navegar um texto que esta descrito no EP, habilitar botão
    que faz um link direto para EGWScripts	
- compras e propagandas
   - banner no final 
   - video
      - dicionario
	  - mapas 
	    1 video a cada 5 acessos
- habilitar compra do app
  - remover propagandas
  - definir preço 2.99 - 8.99 ?? 
- gerar arte 
- publicar


biblia pesquisa 2.2

1. integrar mapas aos textos

2. zoom na tela 
  - problema é o hammer, apenas no div 'capitulob1' que é a leitura, 
  por default ele desabilita o pinch e o rotate para nao ter element blocking
  - no resto do app por nao usar hammer o zoom funciona de boa 

