function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Connection type: ' + states[networkState]);
}

function isConectado()
{
    var networkState = navigator.connection.type;
    return networkState != Connection.NONE; 
}

function zeros(num, valor)
{
	var v = valor + "";
	var t = v.length;
	var s = "";
	for(var i = t ; i < num; i++)
	{
		s += "0";
	}
	return (s+v);
}

function contarZeros(cap,valor)
{
	if (cap==119)
    {
		return zeros(3,valor);
	}
	return zeros(2, valor);
}


function extrairVerso(b,c,v)
{
  return base[b].capitulos[c][v];
}


function extrairVersoBase(baseversao,b,c,v)
{
  return baseversao[b].capitulos[c][v];
}

function extrairVersoBaseTipo1(baseversao,b,c,v)
{
  return baseversao[b-1].chapters[c-1][c][v];
}

function extrairVersoBaseTranslit(b,c,v,isTranslit) {
  // console.log(b,c,v);
   let abl = [
      "GEN","EXO","LEV","NUM","DEU","JOS","JDG","RUT","1SA","2SA",
      "1KI","2KI","1CH","2CH","EZR","NEH","EST","JOB","PSA","PRO",
      "ECC","SOL","ISA","JER","LAM","EZE","DAN","HOS","JOE","AMO",
      "OBA","JON","MIC","NAH","HAB","ZEP","HAG","ZEC","MAL","MAT",
      "MAR","LUK","JOH","ACT","ROM","1CO","2CO","GAL","EPH","PHI",
      "COL","1TH","2TH","1TI","2TI","TIT","PHM","HEB","JAM","1PE",
      "2PE","1JO","2JO","3JO","JUD","REV"
   ];
   let abrevLivro = abl[b-1].toUpperCase();
   let chave = abrevLivro + "_" + c + "_" + v;
   //console.log(chave);
   let isVelho = b < 40;
   if (isTranslit) {
      return translit[chave];
   }
   else {
      if (isVelho) {
         return heb[chave];
      } else {
         return grc[chave];
      }
   }
}


function enderecoVerso(b,c,v)
{
   if (b<40)
   {
      return livrosVelho[b-1]+"&nbsp;"+c+":"+v;
   } else {
      return livrosNovo[b-40]+"&nbsp;"+c+":"+v;
   }
}

function enderecoVersoCompartilhar(b,c,v)
{
   return base[b].livro+" "+c+":"+v;
}


function addDays(date, days) {
  var result = date;
  result.setDate(result.getDate() + days);
  return result;
}

function getDataPtFormatado(data)
{
   var dia = data.getDate();
   var mes = data.getMonth()+1;
   var ano = data.getFullYear();
   var sem = data.getDay();
   return semanapt[sem]+", "+dia+"/"+mes+"/"+ano;
}

function getDataEnFormatado(data)
{
   var dia = data.getDate();
   var mes = data.getMonth()+1;
   var ano = data.getFullYear();
   var sem = data.getDay();
   return semanaen[sem]+", "+mes+"/"+dia+"/"+ano;
}
