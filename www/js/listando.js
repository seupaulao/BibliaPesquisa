

function setMensagemListando(tipo, msg)
{
    if (msg.length > 0)
    {
            document.getElementById("errolistando").innerHTML="<h3>"+tipo+"</h3><p>"+msg+"</p>";
            w3.show("#errolistando");
    } else {
            document.getElementById("errolistando").innerHTML="&nbsp;";
            w3.hide("#errolistando");
   } 
}

function escreverSelecaoMarcacaoVerso(va, b, c, v, cor)
{
  loadVersion(va);
  return getSiglaVersaoPorId(va)+"&nbsp;"+enderecoVerso(b,c,v) + "&nbsp;&nbsp;<span style='background-color:"+cor+"'>" + extrairVerso(b,c,v)+ "</span>";
} 

function escreverSelecaoMarcacaoVersoCompartilhar(va, b, c, v)
{
  return getSiglaVersaoPorId(va)+"  "+enderecoVersoCompartilhar(b,c,v) + "  " + extrairVerso(b,c,v);
} 

function carregarListandoComentarios(nomeelemento, idselecao)
{
        var elemento = document.getElementById(nomeelemento);
        var str = "";
        carregarEstrutura();
        if (eComentario.length > 0) {   
                      for (var j=0; j < eComentario.length; j++)
                      {
                           if (idselecao == eComentario[j].selecaoid)
                           {
                              var cor = j % 2 == 0 ? "w3-lime" : "w3-teal";
                              
                              str += "<div class='w3-panel "+cor+"'>" + eComentario[j].comentario + "</div><div class='w3-container w3-center'> " +
                                                                         "<span class='w3-btn w3-border w3-blue w3-large' onclick='abrirTelaListandoComentario("+idselecao+","+eComentario[j].id+",\""+eComentario[j].comentario+"\")'><img src='img/comentar32.png'></img></span>" +
                                                                         "<span class='w3-btn w3-border w3-red w3-large' onclick='listandoExcluirComentario("+idselecao+","+eComentario[j].id+")'><img src='img/menos32.png'></img></span>" +
                                                                         "<span class='w3-btn w3-border w3-green w3-large' onclick='listandoCompartilharComentario(\""+eComentario[j].comentario+"\")'><img src='img/compartilhar32.png'></img></span></div>";
                           }
                      }
        }
        elemento.innerHTML=str;

}

function getIDSelecaoESelecaoPorCor(cor) {
   // console.log(eSelecao.length);
   let ids = [];
   for (let i = 0; i < eSelecao.length; i++)
      {  
         // console.log(i);
         if (eSelecao[i].cor == cor) {
            ids.push( eSelecao[i].id );
         } 
      }
      return ids;
}

function printESelecao() {
   console.log(eSelecao);
   console.log(eMarcacao);
}

function carregarListandoMarcacoes(id, ordenarPorCores)
{
   var elemento = document.getElementById(id);
   var str="";
   var vetorCores = ['#ffffcc', '#ffaa00', '#9481e0', '#00aaff', '#ffff4d', '#66ff33', '#9acde7', '#00ffff', '#cccc00', '#f0abac', '#ff0000', '#99ffcc', '#a88c6a', '#cc33ff', '#ba6bae'];
   carregarEstrutura();
   // printESelecao();


   if (eSelecao.length > 0)
   {
           w3.show("#"+id); 
           setMensagemListando("", "");
           if (!ordenarPorCores) {
            for (let i = eSelecao.length-1; i >= 0 ; i--)
               {
                  let idselecao = eSelecao[i].id;
                  let corselecao = eSelecao[i].cor;
                  if(corselecao=="#ffffff") continue;
                //  str += "<div class='w3-container w3-card-4 w3-white w3-margin'>";
                  if (eMarcacao.length > 0) {
                          for (let j=0; j<eMarcacao.length; j++)
                          {
                               if (idselecao == eMarcacao[j].selecaoid)
                               {
                                  str += "<div class='w3-container w3-card-4 w3-white w3-margin'>";
                                  str += "<p>" + escreverSelecaoMarcacaoVerso(eMarcacao[j].versao, eMarcacao[j].livro, eMarcacao[j].capitulo, eMarcacao[j].verso, corselecao) + "</p>";
                                  // tentar colocar o flexlayout aqui
                                  str += "<div class='w3-panel' style='display:flex; justify-content:center'>";
                                  str += "<span class='w3-btn  w3-blue' onclick='abrirTelaListandoComentario("+idselecao+",null,null)'><img src='img/comentar32.png'></img></span>"
                                  str += "<span class='w3-btn  w3-blue w3-margin-left w3-margin-right' onclick='listandoExcluirSelecaoMarcacao("+idselecao+")'><img src='img/menos32.png'></img></span>"
                                  str += "<span class='w3-btn  w3-blue' onclick='listandoCompartilharSelecao("+idselecao+")'><img src='img/compartilhar32.png'></img></span>"
                                  str +="</div></div>";
                               }
                          }
                  }
               }            
           } else {
              for (let k = 0; k < vetorCores.length; k++) {
               let idsselecao = getIDSelecaoESelecaoPorCor(vetorCores[k]);
                // console.log(k,vetorCores[k],idselecao);
               for (let id = 0; id < idsselecao.length; id++) {
                  let idselecao = idsselecao[id];
                  if (eMarcacao.length > 0) {
                     for (let j=0; j<eMarcacao.length; j++)
                     {
                          if (idselecao == eMarcacao[j].selecaoid)
                          {
                           //console.log('entrou');
                             str += "<div class='w3-container w3-card-4 w3-white w3-margin'>";
                             str += "<p>" + escreverSelecaoMarcacaoVerso(eMarcacao[j].versao, eMarcacao[j].livro, eMarcacao[j].capitulo, eMarcacao[j].verso, vetorCores[k]) + "</p>";
                             // tentar colocar o flexlayout aqui
                             str += "<div class='w3-panel' style='display:flex; justify-content:center'>";
                             str += "<span class='w3-btn  w3-blue' onclick='abrirTelaListandoComentario("+idselecao+",null,null)'><img src='img/comentar32.png'></img></span>"
                             str += "<span class='w3-btn  w3-blue w3-margin-left w3-margin-right' onclick='listandoExcluirSelecaoMarcacao("+idselecao+")'><img src='img/menos32.png'></img></span>"
                             str += "<span class='w3-btn  w3-blue' onclick='listandoCompartilharSelecao("+idselecao+")'><img src='img/compartilhar32.png'></img></span>"
                             str +="</div></div>";
                          }
                     }
                  }
               } 
              }
           }
           elemento.innerHTML = str+"<p>&nbsp;</p><p>&nbsp;</p>";
   } else {
      setMensagemListando("Alerta", "Sem versos marcados")
      elemento.innerHTMl=""; 
      w3.hide("#"+id); 
  }

}

function listandoIncluirComentario(selid)
{
   var texto = document.getElementById('txtlistandocomentario').value;
   inserirComentarioBanco(selid, null, texto);
   abrirTelaListandoComentario(selid,null,null); 
}

function listandoExcluirComentario(selid, id)
{
   
   excluirComentarioBanco(selid, id);
   abrirTelaListandoComentario(selid,null,null); 
}

function listandoAlterarComentario(selid, id)
{
  excluirComentarioBanco(selid, id);
  var texto = document.getElementById('txtlistandocomentario').value;
  inserirComentarioBanco(selid, id, texto);
  abrirTelaListandoComentario(selid,null,null); 
}

function listandoCompartilharComentario(comentario)
{
  window.plugins.socialsharing.share(comentario);
}

function listandoCancelarEdicaoComentario()
{
  abrirTelaListando(); 
}

function listandoExcluirSelecaoMarcacao(selid)
{
   excluirSelecaoBanco(selid);
   abrirTelaListando(); 
}

function listandoCompartilharSelecao(selid) 
{
      var str = "";
      //for (var i = 0; i < eSelecao.length; i++)
      //     {
              //var idselecao = eSelecao[i].id;
//              var corselecao = eSelecao[i].cor;
              if (eMarcacao.length > 0) {
              str += "\nVersos\n\n";
                      for (var j=0; j<eMarcacao.length; j++)
                      {
                           if (selid == eMarcacao[j].selecaoid)
                           {
                              str += escreverSelecaoMarcacaoVersoCompartilhar(eMarcacao[j].versao, eMarcacao[j].livro, eMarcacao[j].capitulo, eMarcacao[j].verso) + "\n";
                           }
                      }
              }
              if (eComentario.length > 0) {               
              str += "\nComentários\n\n";
                      for (var j=0; j < eComentario.length; j++)
                      {
                           if (selid == eComentario[j].selecaoid)
                           {
                              str += eComentario[j].comentario + "\n";
                           }
                      }
              }
       //    }
     window.plugins.socialsharing.share(str);
}

