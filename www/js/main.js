var book;
var cap;
var vers;
var nomeversao;
var nomecap;
var b1;
var n1;
var versaoAtual=0;
var base="";
var gversos;
var buscasimples;
var bbuscasimples=false;
var versaoMarcacao;
var livroMarcacao;
var capituloMarcacao;
var versoMarcacao;
var tamanhoFonteTextoOriginal = 24;
var livrosVelho=["G&ecirc;nesis","&Ecirc;xodo","Lev&iacute;tico","N&uacute;meros","Deuteron&ocirc;mio","Josu&eacute;","Ju&iacute;zes","Rute","1 Samuel", "2 Samuel", "1 Reis", "2 Reis",
                        "1 Cr&ocirc;nicas", "2 Cr&ocirc;nicas", "Esdras", "Neemias", "Ester", "J&oacute;",
                        "Salmos", "Prov&eacute;rbios","Eclesiastes","C&acirc;nticos","Isa&iacute;as","Jeremias","Lamenta&ccedil;&otilde;es de Jeremias","Ezequiel","Daniel","Os&eacute;ias","Joel","Am&oacute;s","Obadias",
                        "Jonas","Miqu&eacute;ias","Naum","Habacuque","Sofonias","Ageu","Zacarias","Malaquias"];
var livrosNovo=["Mateus","Marcos","Lucas","Jo&atilde;o","Atos","Romanos","1 Cor&iacute;ntios","2 Cor&iacute;ntios","G&aacute;latas","Ef&eacute;sios","Filipenses","Colossenses","1 Tessalonicenses","2 Tessalonicenses",
                       "1 Tim&oacute;teo","2 Tim&oacute;teo", "Tito", "Filemom", "Hebreus", "Tiago", "1 Pedro", "2 Pedro","1 Jo&atilde;o","2 Jo&atilde;o","3 Jo&atilde;o",
                       "Judas","Revelação"];
var livrospt = [
    "G&ecirc;nesis","&Ecirc;xodo","Lev&iacute;tico","N&uacute;meros","Deuteron&ocirc;mio","Josu&eacute;","Ju&iacute;zes","Rute","1 Samuel", "2 Samuel", "1 Reis", "2 Reis",
                        "1 Cr&ocirc;nicas", "2 Cr&ocirc;nicas", "Esdras", "Neemias", "Ester", "J&oacute;",
                        "Salmos", "Prov&eacute;rbios","Eclesiastes","C&acirc;nticos","Isa&iacute;as","Jeremias","Lamenta&ccedil;&otilde;es de Jeremias","Ezequiel","Daniel","Os&eacute;ias","Joel","Am&oacute;s","Obadias",
                        "Jonas","Miqu&eacute;ias","Naum","Habacuque","Sofonias","Ageu","Zacarias","Malaquias",
                        "Mateus","Marcos","Lucas","Jo&atilde;o","Atos","Romanos","1 Cor&iacute;ntios","2 Cor&iacute;ntios","G&aacute;latas","Ef&eacute;sios","Filipenses","Colossenses","1 Tessalonicenses","2 Tessalonicenses",
                       "1 Tim&oacute;teo","2 Tim&oacute;teo", "Tito", "Filemom", "Hebreus", "Tiago", "1 Pedro", "2 Pedro","1 Jo&atilde;o","2 Jo&atilde;o","3 Jo&atilde;o",
                       "Judas","Apocalipse"
]
var livroseng=['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Esther', 'Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi', 'Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 'Jude', 'Revelation'];
var livrosVelhoEng=['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Esther', 'Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi'];
var livrosNovoEng=['Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 'Jude', 'Revelation'];
var abreveng=['Gen', 'Exo', 'Lev', 'Num', 'Deu', 'Jos', 'Jdg', 'Rut', '1Sa', '2Sa', '1Ki', '2Ki', '1Ch', '2Ch', 'Ezr', 'Neh', 'Est', 'Job', 'Psa', 'Pro', 'Ecc', 'Sng', 'Isa', 'Jer', 'Lam', 'Ezk', 'Dan', 'Hos', 'Jol', 'Amo', 'Oba', 'Jon', 'Mic', 'Nam', 'Hab', 'Zep', 'Hag', 'Zec', 'Mal', 'Mat', 'Mrk', 'Luk', 'Jhn', 'Act', 'Rom', '1Co', '2Co', 'Gal', 'Eph', 'Php', 'Col', '1Th', '2Th', '1Ti', '2Ti', 'Tit', 'Phm', 'Heb', 'Jas', '1Pe', '2Pe', '1Jn', '2Jn', '3Jn', 'Jud', 'Rev'];
var abrevpt=['Gn','Êx','Lv','Nm','Dt','Js','Jz','Rt','1Sm','2Sm','1Rs','2Rs','1Cr','2Cr','Ed','Ne','Et','Jó','Sl','Pv','Ec','Ct','Is','Jr','Lm','Ez','Dn','Os','Jl','Am','Ob','Jn','Mq','Na','Hc','Sf','Ag','Zc','Ml','Mt','Mc','Lc','Jo','At','Rm','1Co','2Co','Gl','Ef','Fp','Cl','1Ts','2Ts','1Tm','2Tm','Tt','Fm','Hb','Tg','1Pe','2Pe','1Jo','2Jo','3Jo','Jd','Ap'];
var livs=['GEN','EXO','LEV','NUM','DEU','JOS','JDG','RUT','1SA','2SA','1KI','2KI','1CH','2CH','EZR','NEH','EST','JOB','PSA','PRO','ECC','SNG','ISA','JER','LAM','EZK','DAN','HOS','JOL','AMO','OBA','JON','MIC','NAM','HAB','ZEP','HAG','ZEC','MAL'];

tempselecao=[];
tempmarcacao=[];
tempcomentario=[];

var semanapt=['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
var semanaen=['Sunday','Monday','Tuesday','Wedsneday','Thursday','Friday','Saturday'];


function estouNoNovoMandamento() {
   return getLivroMain() >= 40;
}

function getCapituloMain()
{
    return cap;
}
function getLivroMain()
{
    return book;
}
function getVersiculoMain()
{
    return vers;
}
function getVersaoAtualMain()
{
    return versaoAtual;
}

function setCapituloMain(valor)
{
    cap=valor;
}
function setLivroMain(valor)
{
    book=valor;
}
function setVersiculoMain(valor)
{
    vers=valor;
}
function setVersaoAtualMain(valor)
{
    versaoAtual=valor;
}

function iniciar()
{

   openDatabase();
   if (db!=null)
   {
         carregarEstrutura();
         carregarCores();
         carregarIdioma();
         carregarFonte();
         carregarTamanhoFonte();
       //  db.removeItem("exibirTextoOriginal");
         tamanhoFonteTextoOriginal = getTamanhoFonteTextoOriginal() == null ? 24 : getTamanhoFonteTextoOriginal();
         document.getElementById("idtamanhofontetextooriginal").innerHTML = "<b>"+tamanhoFonteTextoOriginal+"</b>";
         if (getExibirTO() == null) {
            db.setItem("exibirTextoOriginal", 0);
         }
         if (getExibirTO() == 1) {
            exibirTO();
         } else {
            naoExibirTO();
         }
   }
   setVersaoAtualMain(0);
   setVersiculoMain(1);
   getLivroCapituloBD();
   carregarVersao();
   carregar();
   bbuscasimples=false;
   //abrirTela('princ');
    abrirTelaLeitura();

}

function getIdResultadosPorVersao(versao)
  {
     if (versao=='BLV') setVersaoAtualMain(0);
     else if (versao=='WEB') setVersaoAtualMain(1);
     carregarVersao();
     return getVersaoAtualMain();
  }

function loadVersion(versao)
{
	setVersaoAtualMain(versao);
	carregarVersao();
	carregar();
}
function carregarVersao2(c)
{
    loadVersion(c);
    abrirTela('leitura');
}

function getSiglaVersaoPorId(id)
{
   switch(id)
   {
      case 0: return "BLV";
      case 1: return "WEB";
   }
}

function getNomeVersaoPorId(id)
{
   switch(id)
   {
      case 0: return "Bíblia Livre";
      case 1: return "World English Bible";
   }
}

function carregarVersao()
{
   switch(versaoAtual)
   {
     case 0: base = blv; break;
     case 1: base = web; break;
   }
}

function numeroCapitulos()
{
   return base[getLivroMain()].qtecapitulos;
}
