
function mudarCor(novacor)
{

    tablinks = document.getElementsByClassName("cabecalho");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(corpadrao, novacor);
    }
    tablinks = document.getElementsByClassName("rodape");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(corpadrao, novacor);
    }
    corpadrao=novacor;
    db.setItem("corcabecalho",novacor);
}

function getExibirTO()
{
  return db.getItem("exibirTextoOriginal");
}

function exibirTO() {
      db.setItem("exibirTextoOriginal", 1);
      w3.hide("#idexibirto");
      w3.show("#idnaoexibirto");
}

function naoExibirTO() {
      db.setItem("exibirTextoOriginal", 0);
      w3.show("#idexibirto");
      w3.hide("#idnaoexibirto");
}

function mudarFundoBranco()
{
  setPadraoCorFundo(1);
}

function mudarFundoPreto()
{
  setPadraoCorFundo(2);
}

function setPadraoCorFundo(tipo)
{
  if (tipo==1) {
    document.body.style.backgroundColor="white";
    document.body.style.color="black"; 
  } else {
    document.body.style.backgroundColor="black";
    document.body.style.color="white";
  }
  db.setItem("corfundo",tipo);
}

function carregarCores()
{
   var t1 = db.getItem("corcabecalho"); 
   corpadrao = "w3-lime";
   if (t1 == undefined || t1 == "" || t1 == null || t1 == NaN)
   {
      db.setItem("corcabecalho","w3-lime"); 
      db.setItem("corfundo",1);
   }

   mudarCor(db.getItem("corcabecalho"));
   setPadraoCorFundo(db.getItem("corfundo"));
   
}

function isValorDbNull(t)
{
   return (t == undefined || t == "" || t == null || t == NaN);
}

function testarIdioma(t1)
{
  if (t1 == "en-US")
  {
     idiomaIngles();
  } else {
     idiomaPortugues();
  }
}

isPortugues = function ()
{
   return getNacionalidade().indexOf('pt') >= 0; 
}

isIngles = function ()
{
   return getNacionalidade().indexOf('en') >= 0; 
}

isFrances = function ()
{
   return getNacionalidade().indexOf('fr') >= 0; 
}

isEspanhol = function ()
{
   return getNacionalidade().indexOf('es') >= 0; 
}

getIdioma=function()
{
   return getNacionalidade().substr(0,2);
}

function getNacionalidade()
{
  return db.getItem("idioma");
}






function getFonte()
{
  return db.getItem("fonte");
}

function getTamanhoFonte()
{
  return db.getItem("tamanhofonte");
}


function carregarIdioma()
{
  var t1 = db.getItem("idioma");
  if (isValorDbNull(t1))
  {
     getLocaleName();
     var t2 = db.getItem("idioma");
     if (isValorDbNull(t2)) {
        idiomaPortugues();
     } else {
        testarIdioma(t2);
     }
  } else {
      testarIdioma(t1);
  }
}

function alterarFonte(valor)
{
  w3.removeClass("#capitulob1","fonte1");
  w3.removeClass("#capitulob1","fonte2");
  w3.removeClass("#capitulob1","fonte3");
  w3.removeClass("#capitulostr","fonte1");
  w3.removeClass("#capitulostr","fonte2");
  w3.removeClass("#capitulostr","fonte3");
  w3.removeClass("#capitulowlc","fonte1");
  w3.removeClass("#capitulowlc","fonte2");
  w3.removeClass("#capitulowlc","fonte3");

  var t;
  if (valor=="1") t="fonte1"
  else if (valor=="2") t="fonte2"
  else if (valor=="3") t="fonte3"
  else t="";
  if (t.length > 0) { 
     w3.addClass("#capitulob1",t);
     w3.addClass("#capitulostr",t);
     w3.addClass("#capitulowlc",t);
  }
}
function alterarTamanhoFonte(valor)
{
  w3.removeClass("#capitulob1","w3-medium");
  w3.removeClass("#capitulob1","w3-xlarge");
  w3.removeClass("#capitulob1","w3-xxlarge");
  w3.removeClass("#capitulostr","w3-medium");
  w3.removeClass("#capitulostr","w3-xlarge");
  w3.removeClass("#capitulostr","w3-xxlarge");
  w3.removeClass("#capitulowlc","w3-medium");
  w3.removeClass("#capitulowlc","w3-xlarge");
  w3.removeClass("#capitulowlc","w3-xxlarge");
  var t;
  if (valor=="1") t="w3-xlarge"
  else if (valor=="2") t="w3-xxlarge"
  else t="w3-medium";
  w3.addClass("#capitulob1",t);
  w3.addClass("#capitulostr",t);
  w3.addClass("#capitulowlc",t);
}

function escolherFonte0()
{
 db.setItem("fonte","0");
 alterarFonte("0");
 w3.addClass("#idfonte0","w3-disabled");
 w3.removeClass("#idfonte1","w3-disabled");
 w3.removeClass("#idfonte2","w3-disabled");
 w3.removeClass("#idfonte3","w3-disabled");
}
function escolherFonte1()
{
 db.setItem("fonte","1");
 alterarFonte("1");
 w3.removeClass("#idfonte0","w3-disabled");
 w3.addClass("#idfonte1","w3-disabled");
 w3.removeClass("#idfonte2","w3-disabled");
 w3.removeClass("#idfonte3","w3-disabled");
}
function escolherFonte2()
{
 db.setItem("fonte","2");
 alterarFonte("2");
 w3.removeClass("#idfonte0","w3-disabled");
 w3.removeClass("#idfonte1","w3-disabled");
 w3.addClass("#idfonte2","w3-disabled");
 w3.removeClass("#idfonte3","w3-disabled");
}
function escolherFonte3()
{
 db.setItem("fonte","3");
 alterarFonte("3");
 w3.removeClass("#idfonte0","w3-disabled");
 w3.removeClass("#idfonte1","w3-disabled");
 w3.removeClass("#idfonte2","w3-disabled");
 w3.addClass("#idfonte3","w3-disabled");
}

function getTamanhoFonteTextoOriginal()
{
  return db.getItem("tamanhoFonteTextoOriginal");
}

function reduzirTamFonteOri() {
     tamanhoFonteTextoOriginal = tamanhoFonteTextoOriginal - 2;
     if (tamanhoFonteTextoOriginal < 12) tamanhoFonteTextoOriginal = 12;
     db.setItem("tamanhoFonteTextoOriginal",tamanhoFonteTextoOriginal);
     document.getElementById("idtamanhofontetextooriginal").innerHTML = "<b>"+tamanhoFonteTextoOriginal+"</b>";
}
function aumentarTamFonteOri() {
   tamanhoFonteTextoOriginal = tamanhoFonteTextoOriginal + 2;
   if (tamanhoFonteTextoOriginal > 32) tamanhoFonteTextoOriginal = 32; 
   db.setItem("tamanhoFonteTextoOriginal",tamanhoFonteTextoOriginal);
   document.getElementById("idtamanhofontetextooriginal").innerHTML = "<b>"+tamanhoFonteTextoOriginal+"</b>";
}

function escolherTamanhoFonte0()
{
 db.setItem("tamanhofonte","0");
 alterarTamanhoFonte("0");
 w3.addClass("#idtamfonte0","w3-disabled");
 w3.removeClass("#idtamfonte1","w3-disabled");
 w3.removeClass("#idtamfonte2","w3-disabled");
}
function escolherTamanhoFonte1()
{
 db.setItem("tamanhofonte","1");
 alterarTamanhoFonte("1");
 w3.removeClass("#idtamfonte0","w3-disabled");
 w3.addClass("#idtamfonte1","w3-disabled");
 w3.removeClass("#idtamfonte2","w3-disabled");
}
function escolherTamanhoFonte2()
{
 db.setItem("tamanhofonte","2");
 alterarTamanhoFonte("2");
 w3.removeClass("#idtamfonte0","w3-disabled");
 w3.removeClass("#idtamfonte1","w3-disabled");
 w3.addClass("#idtamfonte2","w3-disabled");
}


function carregarFonte()
{
   var v = db.getItem("fonte");
   if (isValorDbNull(v))
   {
       escolherFonte0();
   } else {
       if (v == "0") escolherFonte0()
       else if (v == "1") escolherFonte1()
       else if (v == "2") escolherFonte2()
       else escolherFonte3();
   }
}

function carregarTamanhoFonte()
{
   var v = db.getItem("tamanhofonte");
   if (isValorDbNull(v))
   {
       escolherTamanhoFonte0();
   } else {
       if (v == "0") escolherTamanhoFonte0()
       else if (v == "1") escolherTamanhoFonte1()
       else escolherTamanhoFonte2();
   }
}


function getLocaleName() {
  //  navigator.globalization.getLocaleName(onSuccess, onError);
    function onSuccess(locale) {
        db.setItem("idioma",locale.value);
        return 
    }
    function onError(){
        db.removeItem("idioma");
    }
}


function idiomaPortugues()
{
 db.setItem("idioma","pt-BR");
 w3.removeClass("#idingles","w3-disabled");
 w3.addClass("#idportugues","w3-disabled");



 document.getElementById("idtitulo01").innerHTML="Ler";

 document.getElementById("idtitulo02").innerHTML="Pesquisar";
 document.getElementById("idtitulo02_1").innerHTML="Pesquisar";
 document.getElementById("idtitulo02_2").innerHTML="Pesquisar";
 document.getElementById("idtitulo02_3").innerHTML="Pesquisar";
 document.getElementById("idtitulo02_4").innerHTML="Pesquisar";

 document.getElementById("idtitulo03").innerHTML="Hist&oacute;rico";
 document.getElementById("idtitulo03a").innerHTML="Hist&oacute;rico por Cores";
 document.getElementById("idtitulo03_1").innerHTML="Hist&oacute;rico";
 document.getElementById("idtitulo03_2").innerHTML="Hist&oacute;rico";
 document.getElementById("idtitulo04").innerHTML="Dicion&aacute;rio";
 document.getElementById("idtitulo04_1").innerHTML="Dicion&aacute;rio";
 document.getElementById("idtitulo04_2").innerHTML="Dicion&aacute;rio";
 document.getElementById("idtitulo04_3").innerHTML="Dicion&aacute;rio";
 document.getElementById("idtitulo05").innerHTML="Mapas";
 document.getElementById("idtitulo05_1").innerHTML="Mapas";
 document.getElementById("idtitulo05_2").innerHTML="Mapas";
 document.getElementById("idtitulo06").innerHTML="Configura&ccedil;&atilde;o";
 document.getElementById("idtitulo06_1").innerHTML="Configura&ccedil;&atilde;o";
 document.getElementById("idtitulo07_1").innerHTML="Planos de Estudo";


 document.getElementById("idselecionarcorpadrao").innerHTML="Selecione a cor padr&atilde;o";
 document.getElementById("idselecionarcorfundo").innerHTML="Selecione a cor de fundo";
 document.getElementById("idselecionaridioma").innerHTML="Selecione o idioma";

 document.getElementById("idtopo_1").innerHTML="Topo";
 document.getElementById("idtopo_2").innerHTML="Topo";
 document.getElementById("idtopo_3").innerHTML="Topo";

 document.getElementById("idtopo_5").innerHTML="Topo";
 document.getElementById("idtopo_7").innerHTML="Topo";
 document.getElementById("idvoltar").innerHTML="Voltar";
 document.getElementById("idescolhacorq").innerHTML="Escolha uma outra cor";
 document.getElementById("idcomentarios_1").innerHTML="Coment&aacute;rios";
 document.getElementById("idcomentarios_2").innerHTML="Coment&aacute;rios";
 document.getElementById("idcomentarcompartilhar").innerHTML="Comentar e Compartilhar";
 document.getElementById("idtotalizador").innerHTML="Totalizadores";
 document.getElementById("idmsg02").innerHTML="Clique em uma n&uacute;mero para abrir o cap&iacute;tulo";
 document.getElementById("idmsg03").innerHTML="Clique em uma n&uacute;mero para ir ao vers&iacute;culo";
 document.getElementById("idmsg04").innerHTML="Clique em um livro";

 document.getElementById("idmsg05").innerHTML="Explica&ccedil;&atilde;o";
 document.getElementById("idmsg06").innerHTML="Clique nos totalizadores de cada vers&atilde;o do velho ou novo testamento para detalhar os versos";
 document.getElementById("idmsg09").innerHTML="Selecione um mapa para ver";

 document.getElementById("idmsg10").innerHTML="Mundo Antigo";
 document.getElementById("idmsg11").innerHTML="Egito e Sinai";
 document.getElementById("idmsg12").innerHTML="As 12 Tribos de Israel";
 document.getElementById("idmsg13").innerHTML="Saul, Davi e Salom&atilde;o";
 document.getElementById("idmsg14").innerHTML="Israel e Jud&aacute;";
 document.getElementById("idmsg15").innerHTML="Jerusal&eacute;m no Velho Testamento";
 document.getElementById("idmsg16").innerHTML="Imp&eacute;rio ass&iacute;rio";
 document.getElementById("idmsg17").innerHTML="Imp&eacute;rio persa, babil&ocirc;nio e grego";
 document.getElementById("idmsg18").innerHTML="Imp&eacute;rio romano no tempo de Jesus";
 document.getElementById("idmsg19").innerHTML="Palestina no tempo de Jesus";
 document.getElementById("idmsg20").innerHTML="Jerusal&eacute;m no tempo de Jesus";
 document.getElementById("idmsg21").innerHTML="Plantas do templo";
 document.getElementById("idmsg22").innerHTML="Primeira viagem de Paulo";
 document.getElementById("idmsg23").innerHTML="Segunda viagem de Paulo";
 document.getElementById("idmsg24").innerHTML="Terceira viagem de Paulo";
 document.getElementById("idmsg25").innerHTML="Viagem de Paulo a Roma";
 document.getElementById("idmsg26").innerHTML="Clique sobre uma letra para listar as palavras que iniciam com essa letra";
 document.getElementById("idmsg27").innerHTML="Clique em uma palavra para ver o seu significado";
// document.getElementById("idmsg28").innerHTML="Exibir todas as vers&otilde;es?";
 document.getElementById("idmsg29").innerHTML="Gire o smartphone para colocar em modo paisagem";


 document.getElementById("textoPesquisa").placeholder="Texto para pesquisar";
 document.getElementById("textoPesquisaDicionario").placeholder="Palavra para pesquisar";

 document.getElementById("idselecionarfonte").innerHTML="Selecione a fonte";
 document.getElementById("idselecionartamfonte").innerHTML="Selecione o tamanho da fonte";
 document.getElementById("idfonte0").innerHTML="Texto";
 document.getElementById("idfonte1").innerHTML="Texto";
 document.getElementById("idfonte2").innerHTML="Texto";
 document.getElementById("idfonte3").innerHTML="Texto";
 document.getElementById("idtamfonte0").innerHTML="Normal";
 document.getElementById("idtamfonte1").innerHTML="M&eacute;dio";
 document.getElementById("idtamfonte2").innerHTML="Grande";


document.getElementById("idtitulobasedados").innerHTML="Base de Dados";
document.getElementById("idmsgdeletevers").innerHTML="Apagar versos do hist&oacute;rico?";
document.getElementById("idmsgdeletecomments").innerHTML="Apagar todos os coment&aacute;rios?";

document.getElementById("msgenddayread").innerHTML="Dia Finalizado com sucesso";
document.getElementById("msgsaveandreturn").innerHTML="Salvar e Voltar ao Plano de Estudos";
// document.getElementById("msgtextusreceptusread").innerHTML="Clique no manuscrito que deseja ler";

}

function idiomaIngles()
{
 db.setItem("idioma","en-US");
 w3.addClass("#idingles","w3-disabled");
 w3.removeClass("#idportugues","w3-disabled");
 document.getElementById("idtitulo01").innerHTML="Read";
 document.getElementById("idtitulo02").innerHTML="Search";
 document.getElementById("idtitulo02_1").innerHTML="Search";
 document.getElementById("idtitulo02_2").innerHTML="Search";
 document.getElementById("idtitulo02_3").innerHTML="Search";
 document.getElementById("idtitulo02_4").innerHTML="Search";
 document.getElementById("idtitulo03").innerHTML="History"; 
 document.getElementById("idtitulo03a").innerHTML="History"; 
 document.getElementById("idtitulo03_1").innerHTML="History";
 document.getElementById("idtitulo03_2").innerHTML="History";
 document.getElementById("idtitulo04").innerHTML="Dictionary";
 document.getElementById("idtitulo04_1").innerHTML="Dictionary";
 document.getElementById("idtitulo04_2").innerHTML="Dictionary";
 document.getElementById("idtitulo04_3").innerHTML="Dictionary";
 document.getElementById("idtitulo05").innerHTML="Maps";
 document.getElementById("idtitulo05_1").innerHTML="Maps";
 document.getElementById("idtitulo05_2").innerHTML="Maps";
 document.getElementById("idtitulo06").innerHTML="Config";
 document.getElementById("idtitulo06_1").innerHTML="Config";

//  document.getElementById("idtitulo07").innerHTML="Study Plans";
 document.getElementById("idtitulo07_1").innerHTML="Study Plans";
 document.getElementById("idmenu02").innerHTML="Study Plans";



 document.getElementById("idselecionarcorpadrao").innerHTML="Select standard color";
 document.getElementById("idselecionarcorfundo").innerHTML="Selecione background color";
 document.getElementById("idselecionaridioma").innerHTML="Select nationality";

//  document.getElementById("idtopo").innerHTML="Top";
 document.getElementById("idtopo_1").innerHTML="Top";
 document.getElementById("idtopo_2").innerHTML="Top";
 document.getElementById("idtopo_3").innerHTML="Top";
//  document.getElementById("idtopo_4").innerHTML="Top";
 document.getElementById("idtopo_5").innerHTML="Top";
 document.getElementById("idtopo_7").innerHTML="Top";

 document.getElementById("idvoltar").innerHTML="Back";
 document.getElementById("idescolhacorq").innerHTML="Choose another color";
 document.getElementById("idcomentarios_1").innerHTML="Comments";
 document.getElementById("idcomentarios_2").innerHTML="Comments";
 document.getElementById("idcomentarcompartilhar").innerHTML="Shared and Comment";
 document.getElementById("idtotalizador").innerHTML="Summary";
 document.getElementById("idmsg02").innerHTML="Click a number to open a chapter";
 document.getElementById("idmsg03").innerHTML="Click a number to go to the verse";
 document.getElementById("idmsg04").innerHTML="Select a book";

 document.getElementById("idmsg05").innerHTML="Explanation";
 document.getElementById("idmsg06").innerHTML="Click on the totalizers of each version of the old or new testament to detail the verses";

 document.getElementById("idmsg09").innerHTML="Select a map to detail";

 document.getElementById("idmsg10").innerHTML="Old world";
 document.getElementById("idmsg11").innerHTML="Egypt and Sinai";
 document.getElementById("idmsg12").innerHTML="The 12 Tribes of Israel";
 document.getElementById("idmsg13").innerHTML="Saul, Davi and Solomon";
 document.getElementById("idmsg14").innerHTML="Israel e Judah";
 document.getElementById("idmsg15").innerHTML="Jerusalem in the old testament";
 document.getElementById("idmsg16").innerHTML="Assyrian Empire";
 document.getElementById("idmsg17").innerHTML="Persian, Babylonian and Greek Empire";
 document.getElementById("idmsg18").innerHTML="Roman empire in the time of Jesus";
 document.getElementById("idmsg19").innerHTML="Palestine in the time of Jesus";
 document.getElementById("idmsg20").innerHTML="Jerusalem in the time of Jesus";
 document.getElementById("idmsg21").innerHTML="Temple plants";
 document.getElementById("idmsg22").innerHTML="First Paul's trip";
 document.getElementById("idmsg23").innerHTML="Second Paul's trip";
 document.getElementById("idmsg24").innerHTML="Third Paul's trip";
 document.getElementById("idmsg25").innerHTML="Paul's trip to Rome";
 document.getElementById("idmsg26").innerHTML="Click on a letter to list words beginning with that letter";
 document.getElementById("idmsg27").innerHTML="Click on a word to see its meaning";
// document.getElementById("idmsg28").innerHTML="Show all versions?";
 document.getElementById("idmsg29").innerHTML="Turn your smartphone to landscape mode";

 document.getElementById("textoPesquisa").placeholder="Text to search";
 document.getElementById("textoPesquisaDicionario").placeholder="Word to search";

 document.getElementById("idselecionarfonte").innerHTML="Select font";
 document.getElementById("idselecionartamfonte").innerHTML="Select font size";
 document.getElementById("idfonte0").innerHTML="Text";
 document.getElementById("idfonte1").innerHTML="Text";
 document.getElementById("idfonte2").innerHTML="Text";
 document.getElementById("idfonte3").innerHTML="Text";
 document.getElementById("idtamfonte0").innerHTML="Normal";
 document.getElementById("idtamfonte1").innerHTML="Large";
 document.getElementById("idtamfonte2").innerHTML="Huge";

document.getElementById("idmsgdeletevers").innerHTML="Erase all marked verses?";
document.getElementById("idmsgdeletecomments").innerHTML="Erase all comments?";

document.getElementById("msgenddayread").innerHTML="Day ended successfully";
document.getElementById("msgsaveandreturn").innerHTML="Save and Return to Study Plans";
// document.getElementById("msgtextusreceptusread").innerHTML="Click on the manuscript you want to read";
document.getElementById("idtitulobasedados").innerHTML="Database";

}
