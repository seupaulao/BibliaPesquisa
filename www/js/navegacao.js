var telanavegacao = [];


//function abrirLivroDtn(sigla) 
//{
//   leituraDeuterocanonico(sigla);
//   abrirTela('telaleituratextodtn');
//}

function abrirTela(tela)
{
    closeNav3();
    telanavegacao.push(tela);
    var x = document.getElementsByClassName("tela");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    document.getElementById(tela).style.display = "block";
}



function voltarATela(tela)
{
    var x = document.getElementsByClassName("tela");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    document.getElementById(tela).style.display = "block";
}


document.addEventListener("backbutton", onBackKeyDown, false);  
function onBackKeyDown(e) { 
   e.preventDefault(); 
   abrirTelaAnterior();
/*   if (getIdFuncionalidadeBotaoVoltar()=="0") { 
     abrirTelaAnterior();
   } else {
     abrirTelaPrincipal();
   } */
}

function abrirTelaAnterior()
{
   desfazer(); 
   var tela = telanavegacao[telanavegacao.length-2];
   telanavegacao.pop();
   if (tela==null) 
   {
      abrirTelaPrincipal(); 
   } else {
      voltarATela(tela);
   }
}

function abrirTelaConfiguracao()
{
   closeNav3();
  // if(AdMob) AdMob.showInterstitial();
   w3.hide("#msgConfig");
   abrirTela('configuracao');
}

function abrirTelaDicionario()
{
   closeNav3();
   // if(AdMob) AdMob.showInterstitial();
    w3.hide("#errodicionario");
    abrirTela('dicionario');
}

function abrirTelaEstudos()
{
   closeNav3();
  //  if(AdMob) AdMob.showInterstitial();
    abrirTela('princestudos');
}

function abrirTelaPrincipal()
{
   closeNav3();
   closeNav2();
   desfazer(); 
   telanavegacao = [];

  // if(AdMob) AdMob.prepareInterstitial( {adId:admobid.interstitial, autoShow:false} );

   abrirTela('princ');

}

function abrirTelaPlanoEstudo()
{
   closeNav3();
   //carregarPlanosBD();
   carregarDivPlanosEstudo();
   abrirTela('planosestudo');
}

function irpara(versiculo)
{
       abrirTela("leitura");
       document.getElementById("leiturarodape").innerHTML="<a id='idvchave1' href='#v"+(versiculo-3)+"'>temp</a>";
       document.getElementById("idvchave1").click();
       document.getElementById("leiturarodape").innerHTML = "";
}


function irparacapitulo(capitulo)
{
	setCapituloMain(capitulo);
	carregar();
    abrirTela('leituraversos');
    topFunction();
}

function irparalivro(ibk)
{
	setLivroMain(ibk);
	setCapituloMain(1);
	carregar();
    abrirTela('leituracapitulos');
    topFunction();
}


function mostrarMenuLivros()
{
   desfazer();
   fecharTelaModalControlesLeitura();
   mostrarLivros();
   abrirTela("leituralivros");
}

function mostrarMenuLeituraVersoes()
{
   desfazer();
   fecharTelaModalControlesLeitura();
   abrirTela("leituraversoes");
}
function mostrarMenuLeituraCapitulos()
{
   desfazer();
   fecharTelaModalControlesLeitura();
   abrirTela("leituracapitulos");
}
function mostrarMenuLeituraVersos()
{
   desfazer();
   fecharTelaModalControlesLeitura();
   abrirTela("leituraversos");
}

function desfazer()
{
   tempmarcacao = [];
   tempcomentario = [];
   tempselecao = [];
   carregar();
   document.getElementById("marBtn").style.display = "none";
   document.getElementById("cmpBtn").style.display = "none";
   document.getElementById("shaBtn").style.display = "none";
  // document.getElementById("comBtn").style.display = "none";
}

function desfazerEVoltar()
{
   desfazer();
   abrirTela("leitura");
}

function posSalvarMarcacaoComentarioTela()
{
  desfazerEVoltar();
  closeNavSimples();
 // document.getElementById("comBtn").style.display = "block";
}

function salvarMarcacaoComentarioTela()
{
  salvarMarcacaoComentarioBanco(tempselecao, tempmarcacao, tempcomentario);
  posSalvarMarcacaoComentarioTela();
}

function abrirTelaAjuda()
{
   closeNav3();
   abrirTela("ajuda");
}

function abrirTelaSermonetes()
{
   closeNav3();
   abrirTela("sermonetes");
}

function abrirTelaMensagens()
{
   closeNav3();
   abrirTela("mensagens");
}


function openNav() {
    document.getElementById("mySidenav").style.width = "125px";
}

function closeNavSimples() {
    document.getElementById("mySidenav").style.width = "0";
}

function closeNav() {
    desfazer();
    document.getElementById("mySidenav").style.width = "0";
}

function openNav2() {
  document.getElementById("mySidenav2").style.width = "125px";
}

function closeNav2() {
  document.getElementById("mySidenav2").style.width = "0";
}

function openNav3() {
  document.getElementById("mySidenav3").style.width = "200px";
}

function closeNav3() {
  document.getElementById("mySidenav3").style.width = "0";
}

function openNav4() {
  document.getElementById("myBotnav").style.height = "200px";
}

function closeNav4() {
  document.getElementById("myBotnav").style.height = "0";
}


function abrirTelaLeituraTextoOriginal()
{
  abrirTela('princtextooriginal');
}

function abrirTelaTextoOriginalLeitura(versao)
{
  w3.show("#fontetr");
  w3.hide("#fontewlc");
  setVersaoAtualMain(versao);
  setLivroMain(43);
  setCapituloMain(1);
  carregarVersao();
  //carregarReceptus();
  //carregarReceptusWlc();
  abrirTela('telaleituratextooriginal');
}

function abrirTelaTextoOriginalLeituraGr()
{
  abrirTelaTextoOriginalLeitura(2);
}



function abrirTelaTextoOriginalLeituraHb()
{
  w3.show("#fontewlc");
  w3.hide("#fontetr");
  setVersaoAtualMain(0);
  setLivroMain(1);
  setCapituloMain(1);
  carregarVersao();
  //carregarReceptusWlc();
  abrirTela('telaleituratextooriginal');

}

/*
function abrirTelaDetalharTR()
{
  abrirTela('telaleituratextooriginaldetalhar');
}
*/
function abrirTelaModalControlesLeitura()
{  
   //closeNav2();
   desfazer();
   w3.show("#telaModalControlesLeitura");
}

function fecharTelaModalControlesLeitura()
{  
   w3.hide("#telaModalControlesLeitura");
}

function abrirTelaListando()
{
   carregarListandoMarcacoes("listandomarcacoes", false);
   carregarCores();
   abrirTela('listando');
}

function abrirTelaListandoCores()
{
   carregarListandoMarcacoes("listandomarcacoes", true);
   carregarCores();
   abrirTela('listando');
}

function abrirTelaListandoComentario(selid, idcomentario, texto)
{
  carregarListandoComentarios("lcomentarios",selid);
  abrirTela('listandocomentario');
  var elemento = document.getElementById("listandocomentariobotao");
  if (idcomentario == null)
  {
    document.getElementById('txtlistandocomentario').value="";
    elemento.innerHTML="<span onclick='listandoIncluirComentario("+selid+")' class='w3-btn w3-border w3-blue'><img src='img/mais32.png'></img></span>";
  } else {
    document.getElementById('txtlistandocomentario').value=texto;
    elemento.innerHTML="<span onclick='listandoAlterarComentario("+selid+","+idcomentario+")' class='w3-btn w3-border w3-blue'><img src='img/mais32.png'></img></span>";
  }
}

abrirTelaAcabouPlanoEstudoDia=function()
{
   abrirTela('acabouplanoestudodia');
}

function abrirTelaLeitura()
{
   if (getNacionalidade() == "en-US" && (getNacionalidade() != undefined || getNacionalidade() == null))
   {
      setVersaoAtualMain(1);
   } else {
      setVersaoAtualMain(0);
   }
   //TODO na desabilitar flag de PLANO DE ESTUDO para usar as rotinas normais de navegação no modo LEITURA
   db.setItem("FLAG_USANDO_PLANO_ESTUDO", 0);
   carregarCores();
   carregarEstrutura();
   carregarVersao();
   carregar();
   w3.hide("#botoesPlanoEstudo");
   w3.show("#botoesLeitura");
   w3.removeClass("#nomelivro","w3-disabled");
   w3.removeClass("#nomecap","w3-disabled");
   document.getElementById("nomelivro").disabled=false;
   document.getElementById("nomecap").disabled=false;

   abrirTela('leitura');
}

function abrirTelaLeituraControle(vetorstring)
{
   if (getNacionalidade() == "en-US" && (getNacionalidade() != undefined || getNacionalidade() == null))
   {
      setVersaoAtualMain(1);
   } else {

      setVersaoAtualMain(0);
   }
   carregarCores();
   carregarEstrutura();
   carregarVersao();
   construirVetorPlanoEstudo(vetorstring);
   //TODO essa tela foi removida, nao existe mais essa base, portanto nao consigo recuperar o 
   //andamento desse controle
   w3.show("#botoesPlanoEstudo");
   w3.addClass("#nomelivro","w3-disabled");
   w3.addClass("#nomecap","w3-disabled");
   document.getElementById("nomelivro").disabled=true;
   document.getElementById("nomecap").disabled=true;
   w3.hide("#botoesLeitura");
   abrirTela('leitura');
}


function abrirTelaComparar()
{
  carregarListaVersosComparar("listaVersosComparar");
  abrirTela("telaComparar");
}

function abrirTelaMarcacao()
{
  //carregarListaComentarios("marcarComentarCompartilhar","listaComentarios");
  //carregarListaVersos("marcarComentarCompartilhar","listaVersos");
  //abrirTela("marcarComentarCompartilhar");
  document.getElementById("marBtn").style.display = "none";
  openNav();
}

function abrirTelaComentarioPesquisar()
{
  if (houvepesquisacomresultado)
  {
      carregarListaResultadoPesquisar("totalizadores");
      abrirTela("pesquisandobibliacomentario");
  }
}



function salvarComentarioTela()
{
  var elemento = document.getElementById("txtcomentario");
  salvarComentario(versaoMarcacao, livroMarcacao, capituloMarcacao, versoMarcacao, elemento.value);
  fecharTelaComentario();
}

function salvarMarcacaoTela(cor)
{
   salvarMarcacao(versaoMarcacao, livroMarcacao, capituloMarcacao, versoMarcacao, cor);
   carregar();
   fecharTelaMarcacao();
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
    //document.getElementById("comBtn").style.display = "none";
}

