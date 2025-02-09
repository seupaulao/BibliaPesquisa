let vetorPlanoEstudo=[];
let posicaoPlanoEstudo;
let ultimoSelid;

const getVetorPlanoEstudo=function(){ return vetorPlanoEstudo; }
const setVetorPlanoEstudo=function(valor) { vetorPlanoEstudo=valor; }
const getPosicaoPlanoEstudo=function() { return posicaoPlanoEstudo; }
const setPosicaoPlanoEstudo=function(valor) { posicaoPlanoEstudo=valor; }
const getUltimoSelid=function() { return ultimoSelid; }
const setUltimoSelid=function(valor) { ultimoSelid=valor; }

function mostrarLivros()
{
	let elemento = document.getElementById("ltextlivros");
   let texto = "<div class='w3-row'>";
   let cores = ['w3-cyan','w3-gray'];
   let c = 1;
   let d = 0;
   let nacional = getNacionalidade()=='pt-BR';
   texto += nacional ? "<div class='w3-col w3-border s12 w3-center w3-gray'><h3 class='w3-text-orange' style='text-shadow:1px 1px 0 #444'>Velho Testamento</h3></div>" : "<div class='w3-col w3-border s12 w3-center w3-gray'><h3 class='w3-text-orange' style='text-shadow:1px 1px 0 #444'>Old Testament</h3></div>"; 
	 for (let i = 0; i < 39; i+=1)
	 {
      let temp1 = "<div onclick='irparalivro("+parseInt(c)+")' class='w3-col w3-btn w3-border s6 w3-padding-16'>" + (nacional ? abrevpt[i] : abreveng[i]) + "<br>" + (nacional ? livrospt[i] : livroseng[i]) + "</div>";
      texto += temp1;
      if (c % 2 == 0)
      {
         texto += "</div><div class='w3-row'>"        
      }
      c+=1;
      d+=1;
      if (d >= cores.length) d = 0;
	 }
	 texto += "</div>";
    c = 40;
    d = 0;
    texto += nacional ? "<div class='w3-col w3-border s12 w3-center w3-gray'><h3 class='w3-text-orange' style='text-shadow:1px 1px 0 #444'>Novo Testamento</h3></div>" : "<div class='w3-col w3-border s12 w3-center w3-gray'><h3 class='w3-text-orange' style='text-shadow:1px 1px 0 #444'>New Testament</h3></div>"; 
	 for (let i = 39; i < 66; i+=1)
	 {
      let temp1 = "<div onclick='irparalivro("+parseInt(c)+")' class='w3-col w3-btn w3-border s6 w3-padding-16'>" + (nacional ? abrevpt[i] : abreveng[i]) + "<br>" + (nacional ? livrospt[i] : livroseng[i]) + "</div>";
      texto += temp1;
      if (c % 2 == 0)
      {
         texto += "</div><div class='w3-row'>"        
      }
      c+=1;
      d+=1;
      if (d >= cores.length) d = 0;
	 }
	 texto += "</div>";
	 elemento.innerHTML = texto ;
}

function mostrarCapitulos()
{
	 var elemento = document.getElementById("ltextcapitulos");
	 var elemento1 = document.getElementById("idtxtnr1");
   elemento1.innerHTML = base[getLivroMain()].livro == 'Apocalipse' ? 'Revelação' :  base[getLivroMain()].livro;
   var c = 1;
	 var texto = "<div class='w3-row'>";
         
         for (var i = 0 ; i < base[getLivroMain()].qtecapitulos; i+=1)
         {
		  texto += "<div class='w3-col s3 w3-btn w3-padding-16 w3-gray w3-border' onclick='irparacapitulo("+(i+1)+")'>" + contarZeros((i+1),(i+1)) + "</div>";
		  if (c % 4 == 0)
		  {
		  	texto += "</div><div class='w3-row'>";
      }
      c += 1;
         }
	texto += "</div>";
	elemento.innerHTML = texto;
}

function mostrarVersos(cap)
{
	 var elemento = document.getElementById("ltextversos");
	 var elemento1 = document.getElementById("idtxtnr2");
     elemento1.innerHTML = base[getLivroMain()].livro == 'Apocalipse' ? 'Revelação' :  base[getLivroMain()].livro + "&nbsp;" + getCapituloMain();

	 var texto = "<div class='w3-row'>";
	 var index = 1;
     var bbase = getNacionalidade() == 'pt-BR' ? blv : web;
	   while (bbase[getLivroMain()].capitulos[getCapituloMain()][index] != undefined)
	   {
		  texto += "<div class='w3-col s3 w3-btn w3-padding-16 w3-gray w3-border' onclick='irpara("+index+")'>" + contarZeros(cap,index) + "</div>";
		  if (index % 4 == 0)
		  {
			texto += "</div><div class='w3-row'>";
		  }
		  index += 1;
	   }
	texto += "</div>";
	elemento.innerHTML = texto;
}


function buscar()
{
   w3.hide("#telaModalControlesLeitura");
   bbuscasimples=true;
   carregar();
}

function escreveMarcacao(t1, va, b, c, v)
{
        var selecaoid = getIdESelecao(va, b, c, v);
        var selecaocor = getCorESelecao(selecaoid);

        if (tempselecao.length <= 0)
        {
          if (selecaoid >= 0)
          {
            return "<p>" + v + " : <span id='v"+v+"' class='w3-text-black' style='background-color:"+selecaocor+"'><span onclick='preselecao("+va+","+b+","+c+","+v+")'>" + t1 + "</span></span></p>";
          }
              return "<p>" + v + " : <span id='v"+v+"'><span onclick='preselecao("+va+","+b+","+c+","+v+")'>" + t1 + "</span></span></p>";
        } else {
              for(var i = 0; i < tempmarcacao.length ; i++)
              {
                 if (testeVersoTemp(tempmarcacao[i], va, b, c, v))
                 {
	                return "<p>" + v + " : <span id='v"+v+"' style='color: green; text-decoration: underline'><span onclick='preselecao("+va+","+b+","+c+","+v+")'>" + t1 + "</span></span></p>";
                 }
              }
              return "<p>" + v + " : <span id='v"+v+"'><span onclick='preselecao("+va+","+b+","+c+","+v+")'>" + t1 + "</span></span></p>";
        }
}



function carregar()  {
   var detalhe = "";
   setVersiculoMain(1);
   buscasimples = document.getElementById("buscasimples");
   mostrarVersos(getCapituloMain());
   mostrarCapitulos();
   setLivroCapituloBD(getLivroMain(), getCapituloMain());
   if (bbuscasimples)
   {
       var t1 = extrairVerso(getLivroMain(), getCapituloMain(), getVersiculoMain());
	   while (t1 != null)
	   {
		  rx1=new RegExp(buscasimples.value,"g");
		  t1 = t1.replace(rx1, "<b>"+buscasimples.value+"</b>");
                  detalhe = detalhe + escreveMarcacao(t1, getVersaoAtualMain(), getLivroMain(), getCapituloMain(), getVersiculoMain());
     	          setVersiculoMain(getVersiculoMain()+1);
		  t1 = extrairVerso(getLivroMain(), getCapituloMain(), getVersiculoMain());
	   }
   } else {
           document.getElementById("capitulob1").innerHTML = "";

           var t1 = extrairVerso(getLivroMain(), getCapituloMain(), getVersiculoMain());
	       while (t1 != null)
	       {
             if (getExibirTO() == 1) {
                let oo = extrairVersoBaseTranslit(getLivroMain(), getCapituloMain(), getVersiculoMain(), false);
                let oot = extrairVersoBaseTranslit(getLivroMain(), getCapituloMain(), getVersiculoMain(), true);
               detalhe = detalhe + 
               escreveMarcacao(t1, getVersaoAtualMain(), getLivroMain(), getCapituloMain(), getVersiculoMain())
               + "<p style='font-size: "+tamanhoFonteTextoOriginal+"px'>"+ oo + "</p>"
               + "<p>"+ oot + "</p>";
             } else {
                detalhe = detalhe + 
                          escreveMarcacao(t1, getVersaoAtualMain(), getLivroMain(), getCapituloMain(), getVersiculoMain());
             }
	          setVersiculoMain(getVersiculoMain()+1);
        		 t1 = extrairVerso(getLivroMain(), getCapituloMain(), getVersiculoMain());
	       }

    }



   nomecap=document.getElementById("nomecap");
   n1 = document.getElementById("nomelivro");
   bbuscasimples = false;
   nomecap.innerHTML="<b>" + getCapituloMain() + "</b>";
   n1.innerHTML=base[getLivroMain()].livro;
   document.getElementById("capitulob1").innerHTML= "<p>&nbsp;</p>"+detalhe+"<p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>";
   
}

function preselecaocontem(temp, va, livro, cap, verso)
{
        var posicao = -1;
        for (var i = 0; i < temp.length ; i++)
        {
           if (testeVersoTemp(temp[i], va, livro, cap, verso))
           {
              posicao = i;
              break;
           }
        }
        return posicao;
}

/*
 * Deve abrir a tela de cor apenas quando o botao 'Marcar' for clicado
 * Deve fechar a tela de cor de 3 formas:
   a. através do botão X
   b. através das desmarcação de todos os elementos
   c. clicando numa cor
*/
function preselecao(va, livro, cap, verso)
{
  if (tempselecao.length <= 0 && tempmarcacao.length <= 0)
  {
     tempselecao.push({'id':tempselecao.length,'cor':null});
     tempmarcacao.push({'selecaoid':tempselecao[0].id, 'id': tempmarcacao.length, 'versao':va, 'livro':livro, 'capitulo':cap, 'verso':verso});
     document.getElementById("marBtn").style.display = "block";
  // openNav();
     document.getElementById("cmpBtn").style.display = "block";
     document.getElementById("shaBtn").style.display = "block";
  }
  else {
     var posicao = preselecaocontem(tempmarcacao, va, livro, cap, verso);
     if (posicao < 0)
     {
        tempmarcacao.push({'selecaoid':tempselecao[0].id, 'id':tempmarcacao.length, 'versao':va, 'livro':livro, 'capitulo':cap, 'verso':verso});
        tempmarcacao[tempmarcacao.length-1].id = tempmarcacao.length;
     } else {
        tempmarcacao.splice(posicao,1);
     }
     if (tempmarcacao.length <= 0)
     {
        tempselecao = [];
        document.getElementById("marBtn").style.display = "none";
        document.getElementById("cmpBtn").style.display = "none";
        document.getElementById("shaBtn").style.display = "none";
        closeNav();
     }
  }
 carregar();
}



function incluirTempComentarioNegocio()
{
   var elemento = document.getElementById("txtcomentario");
   if (elemento.value.length > 0)
   {
        var contar = tempcomentario.length + 1;
        tempcomentario.push({'selecaoid': tempselecao[0].id, 'id': contar, 'comentario': elemento.value});
        elemento.value = "";
        carregarListaComentarios("comentarCompartilhar","listaComentarios2");
   }
}

function carregarListaResultadoPesquisar(elemento)
{
   var str = "";
   var lista = getVetorComentarioPesquisar();
   for(var i = 0; i < lista.length; i++)
   {
        str += "<p>"+lista[i]+"</p>";
   }
   document.getElementById("totalizadores").innerHTML=str;
}

function carregarListaComentarios(tela, nomeElemento)
{
  var str="";
  for(var i = 0; i < tempcomentario.length; i++)
  {
     if (tela=="comentarCompartilhar")
     {
         str += "<p>" + tempcomentario[i].comentario + "</p><button class='w3-btn w3-border w3-teal' onclick='editarTempComentarioNegocio("+tempcomentario[i].id+")'>Editar</button><button class='w3-btn w3-border w3-teal' onclick='compartilharTempComentarioNegocio("+tempcomentario[i].id+")'>Compartilhar</button>";
     } else {
         str += "<p>" + tempcomentario[i].comentario + "</p>";
     }
  }
  document.getElementById(nomeElemento).innerHTML = str;
}

function excluirTempComentarioNegocio(posicao)
{
  document.getElementById("txtcomentario").value = "";
  w3.addClass("#btnExcluirComentario","w3-disabled");
}

function editarTempComentarioNegocio(posicao)
{
  document.getElementById("txtcomentario").value = tempcomentario[posicao-1].comentario;
  var idantigo = posicao;
  var vetornovo=[];
  for(var i=0; i<tempcomentario.length; i++)
  {
     if (tempcomentario[i].id!=idantigo)
     {
         vetornovo.push({'selecaoid': tempcomentario[i].selecaoid, 'id': tempcomentario[i].id, 'comentario': tempcomentario[i].comentario});
     }
  }
  tempcomentario=vetornovo;
  carregarListaComentarios("comentarCompartilhar","listaComentarios2");
  w3.removeClass("#btnExcluirComentario","w3-disabled");
}

function carregarListaVersos(tela, nomeElemento)
{
  var str="";
  for(var i = 0; i < tempmarcacao.length; i++)
  {
     var b = tempmarcacao[i].livro;
     var c = tempmarcacao[i].capitulo;
     var v = tempmarcacao[i].verso;
     str += "<p>" + enderecoVerso(b,c,v)+"&nbsp;&nbsp;"+extrairVerso(b,c,v) + "</p>";
  }
  document.getElementById(nomeElemento).innerHTML = str;
}
/*
Se limite caracteres < 0 Entao pegar todo o texto a ser comparado
Se limite caracteres > 0 Entao comparativo funciona do 1 .. limite caracteres
*/
function retornaPadraoListaVersoComparar(nome, baseversao, tipo, limiteCaracteres)
{
  var str="";
  str += "<div class='cabecalho w3-panel w3-lime'><h4>"+nome+"</h4></div>";
  let somaTexto = '';
  let primeiraVez = true;
  for(var i = 0; i < tempmarcacao.length; i++)
  {
     var b = tempmarcacao[i].livro;
     var c = tempmarcacao[i].capitulo;
     var v = tempmarcacao[i].verso;
     
     let enderecoVersoBase = enderecoVerso(b,c,v);
     if (tipo == 0)
     {
         let texto = extrairVersoBase(baseversao,b,c,v);
         let tamTextoAnterior = somaTexto.length;
         somaTexto += texto;
         if (limiteCaracteres >= 0) {
            if (somaTexto.length > limiteCaracteres && primeiraVez) {
               texto = texto.substring(0, limiteCaracteres - tamTextoAnterior) + '...';
               str += "<p>" + enderecoVersoBase +"&nbsp;&nbsp;"+ texto + "</p>";
               primeiraVez = false;
            }
            else if (somaTexto.length <= limiteCaracteres) {
               str += "<p>" + enderecoVersoBase +"&nbsp;&nbsp;"+ texto + "</p>";
            } 
         }
         else {
            str += "<p>" + enderecoVersoBase +"&nbsp;&nbsp;"+ texto + "</p>";
         }    
     } else {
         let texto = extrairVersoBaseTipo1(baseversao,b,c,v);
         let tamTextoAnterior = somaTexto.length;
         somaTexto += texto;
         if (limiteCaracteres >= 0) {
            if (somaTexto.length > limiteCaracteres && primeiraVez) {
               texto = texto.substring(0, limiteCaracteres - tamTextoAnterior) + '...';
               str += "<p>" + enderecoVersoBase +"&nbsp;&nbsp;"+ texto + "</p>";
               primeiraVez = false;
            }
            else if (somaTexto.length <= limiteCaracteres) {
               str += "<p>" + enderecoVersoBase +"&nbsp;&nbsp;"+ texto + "</p>";
            } 
         }
         else {
            str += "<p>" + enderecoVersoBase +"&nbsp;&nbsp;"+ texto + "</p>";
         }   
   }

  }
  return str;

}

function retornaPadraoListaVersoCompararTextusReceptus(nome) {
   let str = "<div class='cabecalho w3-panel w3-lime'><h4>"+nome+"</h4></div>";
   for(var i = 0; i < tempmarcacao.length; i++)
   {
      let b = tempmarcacao[i].livro;
      let c = tempmarcacao[i].capitulo;
      let v = tempmarcacao[i].verso;
      let enderecoVersoBase = enderecoVerso(b,c,v);
      let texto = extrairVersoBaseTranslit(b,c,v,false);
      str += "<p>" + enderecoVersoBase +"&nbsp;&nbsp;"+ texto + "</p>";
      let transliteracao = extrairVersoBaseTranslit(b,c,v,true);
      str += "<p>" + enderecoVersoBase +"&nbsp;&nbsp;"+ transliteracao + "</p>";
   }
   return str;
}

function carregarListaVersosComparar(nomeElemento)
{
  var str = "";

  str += retornaPadraoListaVersoComparar("Biblia Livre",blv,0,-1);
  str += retornaPadraoListaVersoComparar("Nova Vers&atilde;o Internacional",nvi,1,500);
  str += retornaPadraoListaVersoComparar("Almeida Atualizada",aa,1,500);
  str += retornaPadraoListaVersoComparar("Almeida Corrigida e Fiel",acf,1,500);
  str += retornaPadraoListaVersoComparar("World English Bible",web,0,-1);
  str += retornaPadraoListaVersoComparar("King James Version",kjv,1,500);
  str += retornaPadraoListaVersoCompararTextusReceptus("Textus Receptus/WLC");

  document.getElementById(nomeElemento).innerHTML = str;
}


function compartilharTempVersoComentarioNegocio()
{
   var str = "";
   for(var i = 0; i < tempmarcacao.length; i++)
   {
      var b = tempmarcacao[i].livro;
      var c = tempmarcacao[i].capitulo;
      var v = tempmarcacao[i].verso;
      str += enderecoVersoCompartilhar(b,c,v)+"  "+extrairVerso(b,c,v);
   }
   if (tempcomentario.length > 0)
   {
     for(var i = 0; i < tempcomentario.length; i++)
     {
        var comentario = tempcomentario[i].comentario;
        str += comentario;
     }
   }
   if (str.length > 0)
   {
     window.plugins.socialsharing.share(str);
   }
}


function compartilharTempComentarioNegocio(posicao)
{
  var str = tempcomentario[posicao-1].comentario;
  window.plugins.socialsharing.share(str);
}

function compartilharEComentarioNegocio(selid, id)
{
  var cc="";
  for(var i=0; i<eComentario.length; i++){
     if(eComentario[i].selecaoid == selid && eComentario[i].id == id)
     {
       cc = eComentario[i].comentario;
       break;
     }
  }
  if (cc.length > 0)
  {
    window.plugins.socialsharing.share(cc);
  }
}

function selecaoCorPicker()
{
  var elemento = document.getElementById("htmlColorPicker");
  tempselecao[0].cor = elemento.value;
}

function selecaoCor(cor)
{
  var elemento = document.getElementById("htmlColorPicker");
  elemento.value=cor;
  tempselecao[0].cor = cor;
  salvarMarcacaoComentarioTela();
}

function deselecaoCor()
{
  removerMarcacaoComentarioBanco(tempselecao,tempmarcacao,tempcomentario);
  posSalvarMarcacaoComentarioTela();
}






