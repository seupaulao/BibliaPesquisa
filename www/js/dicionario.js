
  function setMensagemDicionario(tipo, msg)
  {
    if (msg.length > 0)
    {
            document.getElementById("errodicionario").innerHTML="<h3>"+tipo+"</h3><p>"+msg+"</p>";
            w3.show("#errodicionario");
    } else {
            document.getElementById("errodicionario").innerHTML="&nbsp;";
            w3.hide("#errodicionario");
   } 
  } 

function limparDicionario()
{
        document.getElementById("textoPesquisaDicionario").value="";
        document.getElementById("saidaDicionario").innerHTML="";
        setMensagemDicionario("",""); 
}

function significadoDicionario(palavra)
{
        var elemento = document.getElementById("saidaDicionario");
        var achou = false;
        setMensagemDicionario("","");
        let valor = ""; 
        for(var i=0; i < base1.length; i++)
        {
            if (palavra.toLowerCase()==base1[i].palavra.trim().toLowerCase()){
                valor += "<h3>" + palavra + "</h3><br>" + base1[i].texto + "<p>&nbsp;</p><p>&nbsp;</p>";
                achou = true;
                break;
            }
        }

        for(var i=0; i < base2.length; i++)
          {
              if (palavra.toLowerCase()==base2[i].palavra.trim().toLowerCase()){
                  valor += "<h3>" + palavra + "</h3><br>" + base2[i].texto + "<p>&nbsp;</p><p>&nbsp;</p>";
                  achou = true;
                  break;
              }
        }

        elemento.innerHTML = valor;

        if (!achou) {
          setMensagemDicionario("ALERTA","Palavra n&atilde;o encontrada na base de dados.");
        }

  abrirTela('dicionario');
}

function pesquisarDicionario() {
        var busca = document.getElementById("textoPesquisaDicionario");
        significadoDicionario(busca.value);
}

function carregarDicionarioLetra(letra)
{
   var elemento = document.getElementById("listapalavras");
   str = "";
   for(var i = 0; i < base2.length; i++)
   {
        if (letra.toUpperCase() == base2[i].palavra[0].toUpperCase())
        {
           if (i % 2 == 0)
           {
             str += "<div class='w3-container w3-gray' onclick='significadoDicionario(\""+base2[i].palavra+"\")'>" +base2[i].palavra+ "</div>";
           } else {
             str += "<div class='w3-container w3-teal' onclick='significadoDicionario(\""+base2[i].palavra+"\")'>" +base2[i].palavra+ "</div>";
           }
        }
   }
   elemento.innerHTML=str+"<p>&nbsp;</p><p>&nbsp;</p>";
   abrirTela('dicionariolistapalavras');
}
