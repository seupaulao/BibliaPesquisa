
    var buscas = [];
    var resultados = [];
    var fresultados=[];
    var glistaAbrev = [];
    var glistaAbrevVelho = [];
    var glistaAbrevNovo = [];
    var glistaAbrevVelhoI = [];
    var glistaAbrevNovoI = [];
    var vetorComentarioPesquisar=[];
    var houvepesquisacomresultado=false;
    function zerarBuscasResultados() {
        buscas = [];
        resultados = [];
    }

    function getVetorComentarioPesquisar()
    {
        return vetorComentarioPesquisar;
    }

    function montarListaAbreviatura()
    {
       for (j=0; j<glistaAbrev.length; j++) {
           if (getVersaoAtualMain() == 1) {
                  if (j<39) {
                       if (glistaAbrevVelhoI.length < 39) glistaAbrevVelhoI.push(glistaAbrev[j]);
                   } else {
                       if (glistaAbrevNovoI.length < 27) glistaAbrevNovoI.push(glistaAbrev[j]);
                   }
           } else { 
                   if (j<39) {
                       if (glistaAbrevVelho.length < 39) glistaAbrevVelho.push(glistaAbrev[j]);
                   } else {
                       if (glistaAbrevNovo.length < 27) glistaAbrevNovo.push(glistaAbrev[j]);
                   }
           }
       }
    }

/*
   1. varrer versos retorna 2 vetores ; fazer essa saida ser por versao pesquisada
   e não por versão específica

*/
function varrerVersos (texto, livros, vresultados) {
       //let totalVelho=0;
       //var totalNovo=0;
       //var total=0;
       var palavraProcurada = texto;
       glistaAbrev = [];
       //busca
       for (j=1; j<67; j++)
       {
           var versos=[];
           glistaAbrev.push(livros[j].abrev);
           quantidade = 0;
           for (p=1; p<=baseversos[j].qtecapitulos; p++)
           {
               for (i=1;i<=baseversos[j].qteversos[p-1];i++)
               {
     		         var verso = livros[j].capitulos[p][i];
                     if (verso != undefined)
                     {
                         //console.log(verso,p,i);
				         var re = palavraProcurada;
                         var padrao = new RegExp("\\s"+re.trim().toLowerCase()+"[\\s\\.\\,\\;]","g");
                         if (padrao.test(verso.trim().toLowerCase())){
                             referencia = livros[j].livro + " "+ p + ":" + i;
                             versos.push({versiculo: referencia, texto: tornarPalavraNegrito(palavraProcurada, verso)});
                             vetor=verso.toLowerCase().split(texto.toLowerCase());
                             quantidade = quantidade + vetor.length-1;
                         }
                     }
               }
           }
           if (quantidade > 0) {
               vresultados.push({'abrev': livros[j].abrev, 'idlivro': j, 'livro': livros[j].livro, 'quantidade':quantidade, 'palavraProcurada': texto, 'versos': versos})
           }
       }

       //if (glistaAbrev.length == 66)
       //{
            montarListaAbreviatura();
       //}

    }

    Object.defineProperty(String.prototype, 'capitalize', {
        value: function() {
          return this.charAt(0).toUpperCase() + this.slice(1);
        },
        enumerable: false
      });

    function tornarPalavraNegrito(palavra, verso)
    {
       return verso
       .replace(new RegExp(palavra,"g"), "<b>"+palavra+"</b>")
       .replace(new RegExp(palavra.capitalize(),"g"), "<b>"+palavra.capitalize()+"</b>");
    }

    function pesquisar()
    {
	var busca = document.getElementById("textoPesquisa");
        if (busca.value.length >0) {
            
            setVersaoAtualMain(0);
            carregarVersao();
            var r0 = [];
            varrerVersos(busca.value, base, r0);

            setVersaoAtualMain(1);
            carregarVersao();
            var r1 = [];
            varrerVersos(busca.value, base, r1);


            if (r0.length > 0|| r1.length > 0)
            {
                    houvepesquisacomresultado=true;

                    vetorComentarioPesquisar=[];

                    fresultados = [{'versao':'BLV', 'resultado':r0},{'versao':'WEB','resultado':r1}];

                    realizarContagem(fresultados,0);
                    realizarContagem(fresultados,1);
                    //var chk = document.getElementById("chkversoes").checked;
                    if (getNacionalidade() == "en-US")
                    {
                           w3.show("#saidaVersoesIngles");
                           w3.hide("#saidaVersoesPortugues");
                    } else {
                           w3.show("#saidaVersoesPortugues");
                           w3.hide("#saidaVersoesIngles");
                    }
 
                    w3.show("#saidaPesquisar"); 
                    //document.getElementById("terceirobotao").innerHTML="<button id='btterceirobotao' class='w3-button w3-section w3-ripple w3-padding w3-lime w3-round' onclick='abrirTelaComentarioPesquisar()'>"+(getNacionalidade()=='pt-BR'?"Compartilhar":"Shared")+"</button>";
                    w3.removeClass("#terceirobotao","w3-disabled");
                    setMensagemPesquisandoBiblia("","");
            } else {
                    var title=getNacionalidade()=='pt-BR'?"ERRO":"ERROR";
                    var msg=getNacionalidade()=='pt-BR'?"Sem resultados para essa consulta. Refa&ccedil;a a opera&ccedil;&atilde;o.":"No results. Change your parameters and do another search";
                    setMensagemPesquisandoBiblia(title,msg);
                    w3.removeClass("#terceirobotao","w3-disabled");
                    w3.addClass("#terceirobotao","w3-disabled");
                    //document.getElementById("terceirobotao").innerHTML="&nbsp;";
            }

           // busca.value = "";
        }
  }

  function setMensagemPesquisandoBiblia(tipo, msg)
  {
    if (msg.length > 0)
    {
            document.getElementById("erropesquisandobiblia").innerHTML="<h3>"+tipo+"</h3><p>"+msg+"</p>";
            w3.show("#erropesquisandobiblia");
    } else {
            document.getElementById("erropesquisandobiblia").innerHTML="&nbsp;";
            w3.hide("#erropesquisandobiblia");
   } 
  }



  function realizarContagem(estrutura, id)
  {
      var totalVelho = 0;
      var totalNovo = 0;
      var listaNovo;
      var listaVelho;

      if (id==0)
      {
          listaNovo=glistaAbrevNovo;
          listaVelho=glistaAbrevVelho;
      } else {
          listaNovo=glistaAbrevNovoI;
          listaVelho=glistaAbrevVelhoI;
      }

      for (var i=0; i< estrutura[id].resultado.length; i++)
      {
            var item = estrutura[id].resultado[i];
            if (listaVelho.indexOf(item.abrev)>0){
              totalVelho += item.quantidade;
            }

            if (listaNovo.indexOf(item.abrev)>0){
               totalNovo += item.quantidade;
            }
      }
      var texto = getNacionalidade()=='pt-BR' ? ("Versao : " + estrutura[id].versao + " - Total Velho Testamento : " + totalVelho + ";  Total Novo Testamento : " + totalNovo) : ("Version : " + estrutura[id].versao + " - Old Testament Total : " + totalVelho + ";  New Testament Total : " + totalNovo);
      vetorComentarioPesquisar.push(texto);
      document.getElementById("totalVelho"+estrutura[id].versao).innerHTML = "<span>"+(getNacionalidade()=='pt-BR' ? "Total Velho: ":"Old: ") + totalVelho + "</span>";
      document.getElementById("totalNovo"+estrutura[id].versao).innerHTML = "<span>"+(getNacionalidade()=='pt-BR' ? "Total Novo: ":"New: ") + totalNovo + "</span>";

  }

  function limparResultadoPesquisar()
  {
    document.getElementById("totalVelhoBLV").innerHTML = "";
    document.getElementById("totalNovoBLV").innerHTML = "";
    document.getElementById("totalVelhoWEB").innerHTML = "";
    document.getElementById("totalNovoWEB").innerHTML = "";
    w3.hide("#saidaPesquisar");
    w3.removeClass("#terceirobotao","w3-disabled"); 
    w3.addClass("#terceirobotao","w3-disabled"); 
    //document.getElementById("terceirobotao").innerHTML="&nbsp;";
    setMensagemPesquisandoBiblia("","");
    document.getElementById("textoPesquisa").value="";
    houvepesquisacomresultado=false;
  }

  /* preparar as funcoes abaixo para entrada em ingles - versoes : KJV e BBE*/
  function abrirtotallivros(idtela, tipo, versao)
  {
      getIdResultadosPorVersao(versao);
      if (tipo == "velho")
       {
		   listarTestamento(getVersaoAtualMain() == 1 ? glistaAbrevVelhoI : glistaAbrevVelho, getVersaoAtualMain());
       }
       else {
		   listarTestamento(getVersaoAtualMain() == 1 ? glistaAbrevNovoI : glistaAbrevNovo, getVersaoAtualMain());
       }
       abrirTela(idtela);
  }

	function listarTestamento(lista, id)
	{
		var elemento = document.getElementById("resultadolivros");
		var lstr = "<ul class='w3-ul w3-hoverable'>" ;
        var cor = "w3-orange"; 
		for(var i=0; i < fresultados[id].resultado.length; i++)
		{
            if (i % 2 == 0) cor="w3-orange"
            else cor="w3-green";
			var resultado = fresultados[id].resultado[i];
                        if (lista.indexOf(resultado.abrev)>=0) {
                           lstr += "<li onclick='abrirVersosLivro(\""+resultado.abrev+"\","+id+")'>" + resultado.livro + " : " + resultado.quantidade + "</li>";
                        }
		}
		lstr += "</ul><p>&nbsp;</p><p>&nbsp;</p>";
		elemento.innerHTML = lstr;
	}

    function abrirVersosLivro(abreviatura, id)
    {
		var elemento = document.getElementById("resultadolivroversos");
                var elemento1 = document.getElementById("nomeDoLivro");

		var lstr = "<ul class='w3-ul w3-hoverable'>" ;
		for(var i=0; i < fresultados[id].resultado.length; i++)
		{
		       var resultado = fresultados[id].resultado[i];
                       var versao = fresultados[id].versao;
                       if (resultado.abrev == abreviatura)
                       {
                        elemento1.innerHTML = resultado.livro;
                        for (var j = 0; j < resultado.versos.length; j++) {
                            var vverso = resultado.versos[j];
                            lstr += "<li><span onclick='abrirVersoNaBiblia(\""+versao+"\",\""+vverso.versiculo+"\","+resultado.idlivro+")'>" + vverso.versiculo + " : " +   vverso.texto + "</span></li>";
                        }
                        break;
                    }
		}
		lstr += "</ul><p>&nbsp;</p><p>&nbsp;</p>";
		elemento.innerHTML = lstr;
                abrirTela("pesquisandobibliaversos");

    }

    function abrirVersoNaBiblia(versao, referencia, idlivro)
    {
       var v1 = referencia.split(" ");
       var livro = v1.length > 2 ? v1[0]+" "+v1[1] : v1[2];
       var v2    = v1.length > 2 ? v1[2].split(":") : v1[1].split(":");
       var capitulo = v2[0];
       var versiculo = v2[1];
       var posicaolivro=idlivro;

       if (getNacionalidade() == "en-US" && (getNacionalidade() != undefined || getNacionalidade() == null))
       {
          setVersaoAtualMain(1);
       } else {
          setVersaoAtualMain(0);
       }
       setLivroMain(parseInt(posicaolivro));
       getIdResultadosPorVersao(versao);
       setCapituloMain(parseInt(capitulo));
       setVersiculoMain(parseInt(versiculo));
       w3.hide("#botoesPlanoEstudo");
       w3.show("#botoesLeitura");
       carregar();
       abrirTela("leitura");
       document.getElementById("leiturarodape").innerHTML="<a id='idvchave1' href='#v"+versiculo+"'>temp</a>";
       document.getElementById("idvchave1").click();
       document.getElementById("leiturarodape").innerHTML = "";
    }


function compartilharPesquisandoBiblia()
{
   var str1 = "";
   var lista = getVetorComentarioPesquisar();
   for(var i = 0; i < lista.length; i++)
   {
        str1 += lista[i]+"\n";
   }
   var str2 = document.getElementById("txtpesquisandobibliacomentario").value;
   var str = str1 + "\n\n\n" + str2;
   window.plugins.socialsharing.share(str);
}

   
