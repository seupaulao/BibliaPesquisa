

function carregarMapa(id)
{
    var elemento = document.getElementById("meumapa");
    var fonte = "img/mapas/m"+id+".jpg";
    elemento.innerHTML = "<img src='" + fonte + "' width='100%'/>";
    var elemento2 = document.getElementById("nomeDoMapa");
    var idtitulo2 = "idmsg" + (9 + parseInt(id));
    elemento2.innerHTML=document.getElementById(idtitulo2).innerHTML;
//    iniciarCanvas(fonte);
    abrirTela('mapa01');
}
