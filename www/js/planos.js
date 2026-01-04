const livrosstring = '{"PP": "Patriarcas e Profetas","PR": "Profetas e Reis", "AA": "Atos dos Apóstolos", "DTN": "O Desejado de Todas as Nações", "PJ": "Parábolas de Jesus","GC": "O Grande Conflito"}';

const urllivrospdf = '{"PP": "https://ellenwhiteaudio.org/ebooks/pt/ellenwhite/Patriarcas%20e%20Profetas.pdf","PR": "https://ellenwhiteaudio.org/ebooks/pt/ellenwhite/Profetas%20e%20Reis.pdf", "AA": "https://ellenwhiteaudio.org/ebooks/pt/ellenwhite/Atos%20dos%20Ap%C3%B3stolos.pdf", "DTN": "https://ellenwhiteaudio.org/ebooks/pt/ellenwhite/O%20Desejado%20de%20Todas%20as%20Na%C3%A7%C3%B5es.pdf", "PJ": "https://ellenwhiteaudio.org/ebooks/pt/ellenwhite/Par%C3%A1bolas%20de%20Jesus.pdf","GC": "https://ellenwhiteaudio.org/ebooks/pt/ellenwhite/O%20Grande%20Conflito%20%28condensado%29.pdf"}';

const urllivros = '{"PP": "https://ellenwhiteaudio.org/pt/patriarcas-e-profetas/",'+
                    '"PR": "https://ellenwhiteaudio.org/pt/profetas-e-reis/",'+
                    '"AA": "",'+
                    '"DTN": "https://ellenwhiteaudio.org/pt/desejado-de-todas-as-nacoes/",' +
                    '"PJ": "https://ellenwhiteaudio.org/pt/parabolas-de-jesus/",'+
                    '"GC": "https://ellenwhiteaudio.org/pt/grande-conflito/"}';

const urlellenwhite = 'https://ellenwhiteaudio.org/pt/ebooks-egw/';

const livros_biblia_refs=["GEN","EXO","LEV","NUM","DEU","JOS","JDG","RUT","1SA","2SA",
                          "1KI","2KI","1CH","2CH","EZR","NEH","EST","JOB","PSA","PRO",
                          "ECC","SOL","ISA","JER","LAM","EZE","DAN","HOS","JOE","AMO",
                          "OBA","JON","MIC","NAH","HAB","ZEP","HAG","ZEC","MAL","MAT",
                          "MAR","LUK","JOH","ACT","ROM","1CO","2CO","GAL","EPH","PHI",
                          "COL","1TH","2TH","1TI","2TI","TIT","PHM","HEB","JAM","1PE",
                          "2PE","1JO","2JO","3JO","JUD","REV"];

const livros_biblia=['GÊNESIS',"ÊXODO","LEVÍTICO","NÚMEROS","DEUTERONÔMIO",
    "JOSUÉ","JUÍZES","RUTE","I SAMUEL","II SAMUEL",
    "I REIS","II REIS","I CRÔNICAS","II CRÔNICAS","ESDRAS",
    "NEEMIAS","ESTER","JÓ","SALMOS","PROVÉRBIOS","ECLESIASTES",
    "CANTARES","ISAÍAS","JEREMIAS","LAMENTAÇÕES","EZEQUIEL","DANIEL",
    "OSÉIAS","JOEL","AMÓS","OBADIAS","JONAS","MIQUÉIAS","NAUM",
    "HABACUQUE","SOFONIAS","AGEU","ZACARIAS","MALAQUIAS","MATEUS",
    "MARCOS","LUCAS","JOÃO","ATOS","ROMANOS","I CORÍNTIOS","II CORÍNTIOS",
    "GÁLATAS","EFÉSIOS","FILIPENSES","COLOSSENSES","I TESSALONICENSES",
    "II TESSALONICENSES","I TIMÓTEO","II TIMÓTEO","TITO","FILEMON",
    "HEBREUS","TIAGO","I PEDRO","II PEDRO","I JOÃO","II JOÃO",
    "III JOÃO","JUDAS","APOCALIPSE"];
//.2: TOC ==> Ex:   https://m.egwwritings.org/pt/book/11125.2/toc
const leitura_ep = {
    'PP01':'https://m.egwwritings.org/pt/book/1815.67',
    'PP02':'https://m.egwwritings.org/pt/book/1815.115',
    'PP03':'https://m.egwwritings.org/pt/book/1815.152',
    'PP04':'https://m.egwwritings.org/pt/book/1815.152',
    'PP05':'https://m.egwwritings.org/pt/book/1815.152',
    'PP06':'https://m.egwwritings.org/pt/book/1815.152',
    'PP07':'https://m.egwwritings.org/pt/book/1815.152',
    'PP08':'https://m.egwwritings.org/pt/book/1815.152',
    'PP09':'https://m.egwwritings.org/pt/book/1815.152',
    'PP10':'https://m.egwwritings.org/pt/book/1815.152',

    'PP11':'https://m.egwwritings.org/pt/book/1815.67',
    'PP12':'https://m.egwwritings.org/pt/book/1815.115',
    'PP13':'https://m.egwwritings.org/pt/book/1815.152',
    'PP14':'https://m.egwwritings.org/pt/book/1815.152',
    'PP15':'https://m.egwwritings.org/pt/book/1815.152',
    'PP16':'https://m.egwwritings.org/pt/book/1815.152',
    'PP17':'https://m.egwwritings.org/pt/book/1815.152',
    'PP18':'https://m.egwwritings.org/pt/book/1815.152',
    'PP19':'https://m.egwwritings.org/pt/book/1815.152',
    'PP20':'https://m.egwwritings.org/pt/book/1815.152',

    'PP21':'https://m.egwwritings.org/pt/book/1815.67',
    'PP22':'https://m.egwwritings.org/pt/book/1815.115',
    'PP23':'https://m.egwwritings.org/pt/book/1815.152',
    'PP24':'https://m.egwwritings.org/pt/book/1815.152',
    'PP25':'https://m.egwwritings.org/pt/book/1815.152',
    'PP26':'https://m.egwwritings.org/pt/book/1815.152',
    'PP27':'https://m.egwwritings.org/pt/book/1815.152',
    'PP28':'https://m.egwwritings.org/pt/book/1815.152',
    'PP29':'https://m.egwwritings.org/pt/book/1815.152',
    'PP30':'https://m.egwwritings.org/pt/book/1815.152',

    'PP31':'https://m.egwwritings.org/pt/book/1815.67',
    'PP32':'https://m.egwwritings.org/pt/book/1815.115',
    'PP33':'https://m.egwwritings.org/pt/book/1815.152',
    'PP34':'https://m.egwwritings.org/pt/book/1815.152',
    'PP35':'https://m.egwwritings.org/pt/book/1815.152',
    'PP36':'https://m.egwwritings.org/pt/book/1815.152',
    'PP37':'https://m.egwwritings.org/pt/book/1815.152',
    'PP38':'https://m.egwwritings.org/pt/book/1815.152',
    'PP39':'https://m.egwwritings.org/pt/book/1815.152',
    'PP40':'https://m.egwwritings.org/pt/book/1815.152',

    'PP41':'https://m.egwwritings.org/pt/book/1815.67',
    'PP42':'https://m.egwwritings.org/pt/book/1815.115',
    'PP43':'https://m.egwwritings.org/pt/book/1815.152',
    'PP44':'https://m.egwwritings.org/pt/book/1815.152',
    'PP45':'https://m.egwwritings.org/pt/book/1815.152',
    'PP46':'https://m.egwwritings.org/pt/book/1815.152',
    'PP47':'https://m.egwwritings.org/pt/book/1815.152',
    'PP48':'https://m.egwwritings.org/pt/book/1815.152',
    'PP49':'https://m.egwwritings.org/pt/book/1815.152',
    'PP50':'https://m.egwwritings.org/pt/book/1815.152',

    'PP51':'https://m.egwwritings.org/pt/book/1815.67',
    'PP52':'https://m.egwwritings.org/pt/book/1815.115',
    'PP53':'https://m.egwwritings.org/pt/book/1815.152',
    'PP54':'https://m.egwwritings.org/pt/book/1815.152',
    'PP55':'https://m.egwwritings.org/pt/book/1815.152',
    'PP56':'https://m.egwwritings.org/pt/book/1815.152',
    'PP57':'https://m.egwwritings.org/pt/book/1815.152',
    'PP58':'https://m.egwwritings.org/pt/book/1815.152',
    'PP59':'https://m.egwwritings.org/pt/book/1815.152',
    'PP60':'https://m.egwwritings.org/pt/book/1815.152',

    'PP61':'https://m.egwwritings.org/pt/book/1815.67',
    'PP62':'https://m.egwwritings.org/pt/book/1815.115',
    'PP63':'https://m.egwwritings.org/pt/book/1815.152',
    'PP64':'https://m.egwwritings.org/pt/book/1815.152',
    'PP65':'https://m.egwwritings.org/pt/book/1815.152',
    'PP66':'https://m.egwwritings.org/pt/book/1815.152',
    'PP67':'https://m.egwwritings.org/pt/book/1815.152',
    'PP68':'https://m.egwwritings.org/pt/book/1815.152',
    'PP69':'https://m.egwwritings.org/pt/book/1815.152',
    'PP70':'https://m.egwwritings.org/pt/book/1815.152',

	
    'PR71':'https://m.egwwritings.org/pt/book/1816.41',
    'PR72':'https://m.egwwritings.org/pt/book/1816.143',
    'PR73':'https://m.egwwritings.org/pt/book/1816.2748',

    'PR11':'https://m.egwwritings.org/pt/book/1816.41',
    'PR12':'https://m.egwwritings.org/pt/book/1816.143',
    'PR13':'https://m.egwwritings.org/pt/book/1816.2748',
    'PR14':'https://m.egwwritings.org/pt/book/1816.2748',
    'PR15':'https://m.egwwritings.org/pt/book/1816.2748',
    'PR16':'https://m.egwwritings.org/pt/book/1816.41',
    'PR17':'https://m.egwwritings.org/pt/book/1816.143',
    'PR18':'https://m.egwwritings.org/pt/book/1816.2748',
    'PR19':'https://m.egwwritings.org/pt/book/1816.2748',
    'PR20':'https://m.egwwritings.org/pt/book/1816.2748',

    'PR21':'https://m.egwwritings.org/pt/book/1816.41',
    'PR22':'https://m.egwwritings.org/pt/book/1816.143',
    'PR23':'https://m.egwwritings.org/pt/book/1816.2748',
    'PR24':'https://m.egwwritings.org/pt/book/1816.2748',
    'PR25':'https://m.egwwritings.org/pt/book/1816.2748',
    'PR26':'https://m.egwwritings.org/pt/book/1816.41',
    'PR27':'https://m.egwwritings.org/pt/book/1816.143',
    'PR28':'https://m.egwwritings.org/pt/book/1816.2748',
    'PR29':'https://m.egwwritings.org/pt/book/1816.2748',
    'PR30':'https://m.egwwritings.org/pt/book/1816.2748',

    'PR31':'https://m.egwwritings.org/pt/book/1816.41',
    'PR32':'https://m.egwwritings.org/pt/book/1816.143',
    'PR33':'https://m.egwwritings.org/pt/book/1816.2748',
    'PR34':'https://m.egwwritings.org/pt/book/1816.2748',
    'PR35':'https://m.egwwritings.org/pt/book/1816.2748',
    'PR36':'https://m.egwwritings.org/pt/book/1816.41',
    'PR37':'https://m.egwwritings.org/pt/book/1816.143',
    'PR38':'https://m.egwwritings.org/pt/book/1816.2748',
    'PR39':'https://m.egwwritings.org/pt/book/1816.2748',
    'PR40':'https://m.egwwritings.org/pt/book/1816.2748',

    'PR41':'https://m.egwwritings.org/pt/book/1816.41',
    'PR42':'https://m.egwwritings.org/pt/book/1816.143',
    'PR43':'https://m.egwwritings.org/pt/book/1816.2748',
    'PR44':'https://m.egwwritings.org/pt/book/1816.2748',
    'PR45':'https://m.egwwritings.org/pt/book/1816.2748',
    'PR46':'https://m.egwwritings.org/pt/book/1816.41',
    'PR47':'https://m.egwwritings.org/pt/book/1816.143',
    'PR48':'https://m.egwwritings.org/pt/book/1816.2748',
    'PR49':'https://m.egwwritings.org/pt/book/1816.2748',
    'PR50':'https://m.egwwritings.org/pt/book/1816.2748',

    'PR51':'https://m.egwwritings.org/pt/book/1816.41',
    'PR52':'https://m.egwwritings.org/pt/book/1816.143',
    'PR53':'https://m.egwwritings.org/pt/book/1816.2748',
    'PR54':'https://m.egwwritings.org/pt/book/1816.2748',
    'PR55':'https://m.egwwritings.org/pt/book/1816.2748',
    'PR56':'https://m.egwwritings.org/pt/book/1816.41',
    'PR57':'https://m.egwwritings.org/pt/book/1816.143',
    'PR58':'https://m.egwwritings.org/pt/book/1816.2748',
    'PR59':'https://m.egwwritings.org/pt/book/1816.2748',
    'PR60':'https://m.egwwritings.org/pt/book/1816.2748',
	
	
    'DTN01':'https://m.egwwritings.org/pt/book/1813.68',
    'DTN02':'https://m.egwwritings.org/pt/book/1813.104',
    'DTN03':'https://m.egwwritings.org/pt/book/1813.124',
    'DTN04':'https://m.egwwritings.org/pt/book/1813.153',
    'DTN05':'https://m.egwwritings.org/pt/book/1813.177',
    'DTN06':'https://m.egwwritings.org/pt/book/1813.213',
    'DTN07':'https://m.egwwritings.org/pt/book/1813.250',
    'DTN08':'https://m.egwwritings.org/pt/book/1813.286',
    'DTN09':'https://m.egwwritings.org/pt/book/1813.326',
    'DTN10':'https://m.egwwritings.org/pt/book/1813.362',
    'DTN11':'https://m.egwwritings.org/pt/book/1813.424',
    'DTN12':'https://m.egwwritings.org/pt/book/1813.449',

    'DTN13':'https://m.egwwritings.org/pt/book/1813.495',
    'DTN14':'https://m.egwwritings.org/pt/book/1813.525',
    'DTN15':'https://m.egwwritings.org/pt/book/1813.596',
    'DTN16':'https://m.egwwritings.org/pt/book/1813.644',
    'DTN17':'https://m.egwwritings.org/pt/book/1813.700',
    'DTN18':'https://m.egwwritings.org/pt/book/1813.745',
    'DTN19':'https://m.egwwritings.org/pt/book/1813.767',
    'DTN20':'https://m.egwwritings.org/pt/book/1813.826',
    'DTN21':'https://m.egwwritings.org/pt/book/1813.848',
    'DTN22':'https://m.egwwritings.org/pt/book/1813.914',

    'DTN23':'https://m.egwwritings.org/pt/book/1813.973',
    'DTN24':'https://m.egwwritings.org/pt/book/1813.998',
    'DTN25':'https://m.egwwritings.org/pt/book/1813.1036',
    'DTN26':'https://m.egwwritings.org/pt/book/1813.1064',
    'DTN27':'https://m.egwwritings.org/pt/book/1813.1119',
    'DTN28':'https://m.egwwritings.org/pt/book/1813.1172',
    'DTN29':'https://m.egwwritings.org/pt/book/1813.1218',
    'DTN30':'https://m.egwwritings.org/pt/book/1813.1257',
    'DTN31':'https://m.egwwritings.org/pt/book/1813.1299',
    'DTN32':'https://m.egwwritings.org/pt/book/1813.1381',

    'DTN33':'https://m.egwwritings.org/pt/book/1813.1406',
    'DTN34':'https://m.egwwritings.org/pt/book/1813.1439',
    'DTN35':'https://m.egwwritings.org/pt/book/1813.1460',
    'DTN36':'https://m.egwwritings.org/pt/book/1813.1506',
    'DTN37':'https://m.egwwritings.org/pt/book/1813.1530',
    'DTN38':'https://m.egwwritings.org/pt/book/1813.1576',
    'DTN39':'https://m.egwwritings.org/pt/book/1813.1602',
    'DTN40':'https://m.egwwritings.org/pt/book/1813.1636',
    'DTN41':'https://m.egwwritings.org/pt/book/1813.1667',
    'DTN42':'https://m.egwwritings.org/pt/book/1813.1732',

    'DTN43':'https://m.egwwritings.org/pt/book/1813.1755',
    'DTN44':'https://m.egwwritings.org/pt/book/1813.1779',
    'DTN45':'https://m.egwwritings.org/pt/book/1813.1806',
    'DTN46':'https://m.egwwritings.org/pt/book/1813.1855',
    'DTN47':'https://m.egwwritings.org/pt/book/1813.1876',
    'DTN48':'https://m.egwwritings.org/pt/book/1813.1904',
    'DTN49':'https://m.egwwritings.org/pt/book/1813.1963',
    'DTN50':'https://m.egwwritings.org/pt/book/1813.1998',
    'DTN51':'https://m.egwwritings.org/pt/book/1813.2045',
    'DTN52':'https://m.egwwritings.org/pt/book/1813.2117',

    'DTN53':'https://m.egwwritings.org/pt/book/1813.2150',
    'DTN54':'https://m.egwwritings.org/pt/book/1813.2201',
    'DTN55':'https://m.egwwritings.org/pt/book/1813.2235',
    'DTN56':'https://m.egwwritings.org/pt/book/1813.2257',
    'DTN57':'https://m.egwwritings.org/pt/book/1813.2286',
    'DTN58':'https://m.egwwritings.org/pt/book/1813.2311',
    'DTN59':'https://m.egwwritings.org/pt/book/1813.2370',
	
    'DTN60':'https://m.egwwritings.org/pt/book/1813.2395',
    'DTN61':'https://m.egwwritings.org/pt/book/1813.2423',
    'DTN62':'https://m.egwwritings.org/pt/book/1813.2448',
    'DTN63':'https://m.egwwritings.org/pt/book/1813.2508',
    'DTN64':'https://m.egwwritings.org/pt/book/1813.2558',
    'DTN65':'https://m.egwwritings.org/pt/book/1813.2593',
    'DTN66':'https://m.egwwritings.org/pt/book/1813.2652',
    'DTN67':'https://m.egwwritings.org/pt/book/1813.2694',
    'DTN68':'https://m.egwwritings.org/pt/book/1813.2748',
    'DTN69':'https://m.egwwritings.org/pt/book/1813.2781',

    'DTN70':'https://m.egwwritings.org/pt/book/1813.2825',
    'DTN71':'https://m.egwwritings.org/pt/book/1813.2854',
    'DTN72':'https://m.egwwritings.org/pt/book/1813.2898',
    'DTN73':'https://m.egwwritings.org/pt/book/1813.2943',
    'DTN74':'https://m.egwwritings.org/pt/book/1813.3038',
    'DTN75':'https://m.egwwritings.org/pt/book/1813.3085',
    'DTN76':'https://m.egwwritings.org/pt/book/1813.3165',
    'DTN77':'https://m.egwwritings.org/pt/book/1813.3203',
    'DTN78':'https://m.egwwritings.org/pt/book/1813.3302',
    'DTN79':'https://m.egwwritings.org/pt/book/1813.3377',
    'DTN80':'https://m.egwwritings.org/pt/book/1813.3418',
    'DTN81':'https://m.egwwritings.org/pt/book/1813.3466',
    'DTN82':'https://m.egwwritings.org/pt/book/1813.3498',
    'DTN83':'https://m.egwwritings.org/pt/book/1813.3529',
    'DTN84':'https://m.egwwritings.org/pt/book/1813.3551',
    'DTN85':'https://m.egwwritings.org/pt/book/1813.3584',
    'DTN86':'https://m.egwwritings.org/pt/book/1813.3622',
    'DTN87':'https://m.egwwritings.org/pt/book/1813.3682',
	
    'AA01':'https://m.egwwritings.org/pt/book/1806.14',
    'AA02':'https://m.egwwritings.org/pt/book/1806.42',
    'AA03':'https://m.egwwritings.org/pt/book/1806.66',
    'AA04':'https://m.egwwritings.org/pt/book/1806.99',
    'AA05':'https://m.egwwritings.org/pt/book/1806.140',
    'AA06':'https://m.egwwritings.org/pt/book/1806.177',
    'AA07':'https://m.egwwritings.org/pt/book/1806.229',
    'AA08':'https://m.egwwritings.org/pt/book/1806.253',
    'AA09':'https://m.egwwritings.org/pt/book/1806.289',
    'AA10':'https://m.egwwritings.org/pt/book/1806.322',

    'AA11':'https://m.egwwritings.org/pt/book/1806.342',
    'AA12':'https://m.egwwritings.org/pt/book/1806.377',
    'AA13':'https://m.egwwritings.org/pt/book/1806.423',
    'AA14':'https://m.egwwritings.org/pt/book/1806.453',
    'AA15':'https://m.egwwritings.org/pt/book/1806.508',
    'AA16':'https://m.egwwritings.org/pt/book/1806.66',
    'AA17':'https://m.egwwritings.org/pt/book/1806.66',
    'AA18':'https://m.egwwritings.org/pt/book/1806.66',
    'AA19':'https://m.egwwritings.org/pt/book/1806.66',
    'AA20':'https://m.egwwritings.org/pt/book/1806.66',

    'AA21':'https://m.egwwritings.org/pt/book/1806.14',
    'AA22':'https://m.egwwritings.org/pt/book/1806.42',
    'AA23':'https://m.egwwritings.org/pt/book/1806.66',
    'AA24':'https://m.egwwritings.org/pt/book/1806.66',
    'AA25':'https://m.egwwritings.org/pt/book/1806.66',
    'AA26':'https://m.egwwritings.org/pt/book/1806.66',
    'AA27':'https://m.egwwritings.org/pt/book/1806.66',
    'AA28':'https://m.egwwritings.org/pt/book/1806.66',
    'AA29':'https://m.egwwritings.org/pt/book/1806.66',
    'AA30':'https://m.egwwritings.org/pt/book/1806.66',

    'AA31':'https://m.egwwritings.org/pt/book/1806.14',
    'AA32':'https://m.egwwritings.org/pt/book/1806.42',
    'AA33':'https://m.egwwritings.org/pt/book/1806.66',
    'AA34':'https://m.egwwritings.org/pt/book/1806.66',
    'AA35':'https://m.egwwritings.org/pt/book/1806.66',
    'AA36':'https://m.egwwritings.org/pt/book/1806.66',
    'AA37':'https://m.egwwritings.org/pt/book/1806.66',
    'AA38':'https://m.egwwritings.org/pt/book/1806.66',
    'AA39':'https://m.egwwritings.org/pt/book/1806.66',
    'AA40':'https://m.egwwritings.org/pt/book/1806.66',

    'AA41':'https://m.egwwritings.org/pt/book/1806.14',
    'AA42':'https://m.egwwritings.org/pt/book/1806.42',
    'AA43':'https://m.egwwritings.org/pt/book/1806.66',
    'AA44':'https://m.egwwritings.org/pt/book/1806.66',
    'AA45':'https://m.egwwritings.org/pt/book/1806.66',
    'AA46':'https://m.egwwritings.org/pt/book/1806.66',
    'AA47':'https://m.egwwritings.org/pt/book/1806.66',
    'AA48':'https://m.egwwritings.org/pt/book/1806.66',
    'AA49':'https://m.egwwritings.org/pt/book/1806.66',
    'AA50':'https://m.egwwritings.org/pt/book/1806.66',

    'AA51':'https://m.egwwritings.org/pt/book/1806.1866',
    'AA52':'https://m.egwwritings.org/pt/book/1806.1919',
    'AA53':'https://m.egwwritings.org/pt/book/1806.1954',
    'AA54':'https://m.egwwritings.org/pt/book/1806.1979',
    'AA55':'https://m.egwwritings.org/pt/book/1806.2014',
    'AA56':'https://m.egwwritings.org/pt/book/1806.2051',
    'AA57':'https://m.egwwritings.org/pt/book/1806.2086',
    'AA58':'https://m.egwwritings.org/pt/book/1806.2142',
	
    'PJ01':'https://m.egwwritings.org/pt/book/1931.11',
    'PJ02':'https://m.egwwritings.org/pt/book/1931.63',
    'PJ03':'https://m.egwwritings.org/pt/book/1931.237',
    'PJ04':'https://m.egwwritings.org/pt/book/1931.273',
    'PJ05':'https://m.egwwritings.org/pt/book/1931.303',
    'PJ06':'https://m.egwwritings.org/pt/book/1931.325',
    'PJ07':'https://m.egwwritings.org/pt/book/1931.389',
    'PJ08':'https://m.egwwritings.org/pt/book/1931.441',
    'PJ09':'https://m.egwwritings.org/pt/book/1931.527',
    'PJ10':'https://m.egwwritings.org/pt/book/1931.560',

    'PJ11':'https://m.egwwritings.org/pt/book/1931.571',
    'PJ12':'https://m.egwwritings.org/pt/book/1931.633',
    'PJ13':'https://m.egwwritings.org/pt/book/1931.709',
    'PJ14':'https://m.egwwritings.org/pt/book/1931.786',
    'PJ15':'https://m.egwwritings.org/pt/book/1931.883',
    'PJ16':'https://m.egwwritings.org/pt/book/1931.968',
    'PJ17':'https://m.egwwritings.org/pt/book/1931.1047',
    'PJ18':'https://m.egwwritings.org/pt/book/1931.1088',
    'PJ19':'https://m.egwwritings.org/pt/book/1931.1199',
    'PJ20':'https://m.egwwritings.org/pt/book/1931.1251',

    'PJ21':'https://m.egwwritings.org/pt/book/1931.1291',
    'PJ22':'https://m.egwwritings.org/pt/book/1931.1357',
    'PJ23':'https://m.egwwritings.org/pt/book/1931.1433',
    'PJ24':'https://m.egwwritings.org/pt/book/1931.1584',
    'PJ25':'https://m.egwwritings.org/pt/book/1931.1658',
    'PJ26':'https://m.egwwritings.org/pt/book/1931.1929',
    'PJ27':'https://m.egwwritings.org/pt/book/1931.1987',
    'PJ28':'https://m.egwwritings.org/pt/book/1931.2067',
    'PJ29':'https://m.egwwritings.org/pt/book/1931.2164',	
	
    'GC01':'https://m.egwwritings.org/pt/book/11125.47',
    'GC02':'https://m.egwwritings.org/pt/book/11125.139',
    'GC03':'https://m.egwwritings.org/pt/book/11125.179',
	'GC04':'https://m.egwwritings.org/pt/book/11125.237',
    'GC05':'https://m.egwwritings.org/pt/book/11125.317',
    'GC06':'https://m.egwwritings.org/pt/book/11125.401',
	'GC07':'https://m.egwwritings.org/pt/book/11125.506',
    'GC08':'https://m.egwwritings.org/pt/book/11125.629',
    'GC09':'https://m.egwwritings.org/pt/book/11125.752',
    'GC10':'https://m.egwwritings.org/pt/book/11125.817',
	
    'GC11':'https://m.egwwritings.org/pt/book/11125.881',
    'GC12':'https://m.egwwritings.org/pt/book/11125.948',
    'GC13':'https://m.egwwritings.org/pt/book/11125.1066',
	'GC14':'https://m.egwwritings.org/pt/book/11125.1101',
    'GC15':'https://m.egwwritings.org/pt/book/11125.1196',
    'GC16':'https://m.egwwritings.org/pt/book/11125.1301',
	'GC17':'https://m.egwwritings.org/pt/book/11125.1351',
    'GC18':'https://m.egwwritings.org/pt/book/11125.1435',
    'GC19':'https://m.egwwritings.org/pt/book/11125.1551',
    'GC20':'https://m.egwwritings.org/pt/book/11125.1604',
	
    'GC21':'https://m.egwwritings.org/pt/book/11125.1690',
    'GC22':'https://m.egwwritings.org/pt/book/11125.1759',
    'GC23':'https://m.egwwritings.org/pt/book/11125.1834',
	'GC24':'https://m.egwwritings.org/pt/book/11125.1901',
    'GC25':'https://m.egwwritings.org/pt/book/11125.1943',
    'GC26':'https://m.egwwritings.org/pt/book/11125.2024',
	'GC27':'https://m.egwwritings.org/pt/book/11125.2070',
    'GC28':'https://m.egwwritings.org/pt/book/11125.2152',
    'GC29':'https://m.egwwritings.org/pt/book/11125.2212',
    'GC30':'https://m.egwwritings.org/pt/book/11125.2271',
	
    'GC31':'https://m.egwwritings.org/pt/book/11125.2297',
    'GC32':'https://m.egwwritings.org/pt/book/11125.2328',
    'GC33':'https://m.egwwritings.org/pt/book/11125.2389',
	'GC34':'https://m.egwwritings.org/pt/book/11125.2480',
    'GC35':'https://m.egwwritings.org/pt/book/11125.2530',
    'GC36':'https://m.egwwritings.org/pt/book/11125.2620',
	'GC37':'https://m.egwwritings.org/pt/book/11125.2666',
    'GC38':'https://m.egwwritings.org/pt/book/11125.2713',
    'GC39':'https://m.egwwritings.org/pt/book/11125.2755',
    'GC40':'https://m.egwwritings.org/pt/book/11125.2854',
	
    'GC41':'https://m.egwwritings.org/pt/book/11125.2931',
    'GC42':'https://m.egwwritings.org/pt/book/11125.2974',
	
};

const planosstring = '{' +
    '"JAN_1": {"REFS":"PSA_1, PSA_2", "CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"", "NOMES":"Prefacio"},' +
    '"JAN_2": {"REFS":"PSA_3,PSA_4,PSA_5,PSA_6", "CAPBIBLIA":"Salmos 3 a 6", "SIGLAES":"PP", "CAPES":"01", "NOMES":"Porque foi permitido o pecado?"},' +
    '"JAN_3": {"REFS":"PSA_7,PSA_8,GEN_1", "CAPBIBLIA":"Salmos 7 a 8 e Genesis 1", "SIGLAES":"PP", "CAPES":"02", "NOMES":"A Criação"},' +
    '"JAN_4": {"REFS":"PSA_9,PSA_10,GEN_2", "CAPBIBLIA":"Salmos 9 e 10 e Genesis 2", "SIGLAES":"PP", "CAPES":"03", "NOMES":"A Semana Literal"},' +
    '"JAN_5": {"REFS":"PSA_11,PSA_12,GEN_3", "CAPBIBLIA":"Salmos 11 e 12 e Genesis 3", "SIGLAES":"PP", "CAPES":"04", "NOMES":"A Tentação e a Queda"},' +
    '"JAN_6": {"REFS":"PSA_13,PSA_14,PSA_15,PSA_16", "CAPBIBLIA":"Salmos 13 a 16", "SIGLAES":"PP", "CAPES":"05", "NOMES":"O Plano da Redenção"},' +
    '"JAN_7": {"REFS":"PSA_17,GEN_4", "CAPBIBLIA":"Salmos 17 e Genesis 4", "SIGLAES":"PP", "CAPES":"06", "NOMES":"Caim e Abel"},' +
    '"JAN_8": {"REFS":"PSA_19,PSA_20,GEN_5", "CAPBIBLIA":"Salmos 19 a 20 e Genesis 5", "SIGLAES":"PP", "CAPES":"07", "NOMES":"Sete e Enoque"},' +
    '"JAN_9": {"REFS":"PSA_21,GEN_6,GEN_7", "CAPBIBLIA":"Salmos 21 e Genesis 6 e 7", "SIGLAES":"PP", "CAPES":"08", "NOMES":"O Dilúvio"},' +
    '"JAN_10": {"REFS":"GEN_8,GEN_9,GEN_10", "CAPBIBLIA":"Genesis 8 a 10", "SIGLAES":"PP", "CAPES":"09", "NOMES":"Depois do Dilúvio"},' +
    '"JAN_11": {"REFS":"PSA_24,GEN_11", "CAPBIBLIA":"Salmos 24 e Genesis 11", "SIGLAES":"PP", "CAPES":"10", "NOMES":"A Torre de Babel"},' +
    '"JAN_12": {"REFS":"GEN_12,GEN_13,GEN_14,GEN_15", "CAPBIBLIA":"Genesis 12 a 15", "SIGLAES":"PP", "CAPES":"11", "NOMES":"A Vocação de Abraão"},' +
    '"JAN_13": {"REFS":"GEN_16,GEN_17,GEN_18", "CAPBIBLIA":"Genesis 16 a 18", "SIGLAES":"PP", "CAPES":"12", "NOMES":"Abraão em Canaã"},' +
    '"JAN_14": {"REFS":"GEN_20,GEN_21,GEN_22", "CAPBIBLIA":"Genesis 20 a 22", "SIGLAES":"PP", "CAPES":"13", "NOMES":"A Prova de Fé"},' +
    '"JAN_15": {"REFS":"GEN_19", "CAPBIBLIA":"Genesis 19", "SIGLAES":"PP", "CAPES":"14", "NOMES":"A Destruição de Sodoma"},' +
    '"JAN_16": {"REFS":"GEN_23,GEN_24", "CAPBIBLIA":"Genesis 23 a 24", "SIGLAES":"PP", "CAPES":"15", "NOMES":"O Casamento de  Isaque"},' +
    '"JAN_17": {"REFS":"GEN_25,GEN_26,GEN_27", "CAPBIBLIA":"Genesis 25 a 27", "SIGLAES":"PP", "CAPES":"16", "NOMES":"Jacó e Esaú"},' +
    '"JAN_18": {"REFS":"GEN_28,GEN_29,GEN_30,GEN_31", "CAPBIBLIA":"Genesis 28 a 31", "SIGLAES":"PP", "CAPES":"17", "NOMES":"Fuga e Exílio de Jacó"},' +
    '"JAN_19": {"REFS":"GEN_32,GEN_33,GEN_34", "CAPBIBLIA":"Genesis 32 a 34", "SIGLAES":"PP", "CAPES":"18", "NOMES":"A noite de luta"},' +
    '"JAN_20": {"REFS":"GEN_35,GEN_36,GEN_37,GEN_38", "CAPBIBLIA":"Genesis 35 a 38", "SIGLAES":"PP", "CAPES":"19", "NOMES":"A volta para Canaã"},' +
    '"JAN_21": {"REFS":"GEN_39,GEN_40,GEN_41,GEN_42,GEN_43,GEN_44,GEN_45,GEN_46", "CAPBIBLIA":"Genesis 39 a 46", "SIGLAES":"PP", "CAPES":"20", "NOMES":"José no Egito"},' +
    '"JAN_22": {"REFS":"GEN_47,GEN_48,GEN_49,GEN_50", "CAPBIBLIA":"Genesis 47 a 50", "SIGLAES":"PP", "CAPES":"21", "NOMES":"José e seus irmãos"},' +
    '"JAN_23": {"REFS":"EXO_1,EXO_2,EXO_3,EXO_4", "CAPBIBLIA":"Êxodo 1 a 4", "SIGLAES":"PP", "CAPES":"22", "NOMES":"Moisés"},' +
    '"JAN_24": {"REFS":"EXO_5,EXO_6,EXO_7,EXO_8", "CAPBIBLIA":"Êxodo 5 a 8", "SIGLAES":"PP", "CAPES":"23", "NOMES":"As Pragas do Egito"},' +
    '"JAN_25": {"REFS":"EXO_9,EXO_10,EXO_11,EXO_12", "CAPBIBLIA":"Êxodo 9 a 12", "SIGLAES":"PP", "CAPES":"24", "NOMES":"A Páscoa"},' +
    '"JAN_26": {"REFS":"EXO_13,EXO_14,EXO_15", "CAPBIBLIA":"Êxodo 13 a 15", "SIGLAES":"PP", "CAPES":"25", "NOMES":"O Êxodo"},' +
    '"JAN_27": {"REFS":"EXO_16,EXO_17,EXO_18", "CAPBIBLIA":"Êxodo 16 a 18", "SIGLAES":"PP", "CAPES":"26", "NOMES":"Do Mar Vermelho ao Sinai"},' +
    '"JAN_28": {"REFS":"EXO_19,EXO_20,EXO_21,EXO_22", "CAPBIBLIA":"Êxodo 19 a 22", "SIGLAES":"PP", "CAPES":"27", "NOMES":"Israel Recebe a Lei"},' +
    '"JAN_29": {"REFS":"EXO_23,EXO_24,EXO_25,EXO_26,EXO_27,EXO_28", "CAPBIBLIA":"Êxodo 23 a 28", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"JAN_30": {"REFS":"EXO_29,EXO_30,EXO_31,EXO_32", "CAPBIBLIA":"Êxodo 29 a 32", "SIGLAES":"PP", "CAPES":"28", "NOMES":"Idolatria no Sinai"},' +
    '"JAN_31": {"REFS":"EXO_33,EXO_34,EXO_35,EXO_36,EXO_37", "CAPBIBLIA":"Êxodo 33 a 37", "SIGLAES":"PP", "CAPES":"29", "NOMES":"Inimizade de Satanás contra a Lei de Deus"},' +
    '"FEV_1": {"REFS":"EXO_38,EXO_39,EXO_40", "CAPBIBLIA":"Êxodo 38 a 40", "SIGLAES":"PP", "CAPES":"30", "NOMES":"O Tabernáculo e Seus Serviços"},' +
    '"FEV_2": {"REFS":"LEV_1,LEV_2,LEV_3,LEV_4,LEV_5,LEV_6,LEV_7", "CAPBIBLIA":"Levítico 1 a 7", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"FEV_3": {"REFS":"LEV_8,LEV_9,LEV_10,LEV_11,", "CAPBIBLIA":"Levítico 8 a 11", "SIGLAES":"PP", "CAPES":"31", "NOMES":"O Pecado de Nadabe e Abiú"},' +
    '"FEV_4": {"REFS":"LEV_12,LEV_13,LEV_14,LEV_15,", "CAPBIBLIA":"Levítico 12 a 15", "SIGLAES":"PP", "CAPES":"32", "NOMES":"A Lei e os Concertos"},' +
    '"FEV_5": {"REFS":"NUM_1,NUM_2,NUM_3,NUM_4", "CAPBIBLIA":"Números 1 a 4", "SIGLAES":"PP", "CAPES":"33", "NOMES":"Do Sinal a Cades"},' +
    '"FEV_6": {"REFS":"NUM_5,NUM_6,NUM_7,NUM_8,NUM_9,NUM_10,NUM_11,NUM_12", "CAPBIBLIA":"Números 5 a 12", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"FEV_7": {"REFS":"NUM_13,NUM_14,NUM_15,DEU_1", "CAPBIBLIA":"Números 13 a 14 e Deuteronômio 1", "SIGLAES":"PP", "CAPES":"34", "NOMES":"Os Doze Espias"},' +
    '"FEV_8": {"REFS":"NUM_15,NUM_16,NUM_17", "CAPBIBLIA":"Números 15 a 17", "SIGLAES":"PP", "CAPES":"35", "NOMES":"A Rebelião de Coré"},' +
    '"FEV_9": {"REFS":"NUM_18,NUM_19,DEU_2", "CAPBIBLIA":"Números 18 e 19 e Deuteronômio 2", "SIGLAES":"PP", "CAPES":"36", "NOMES":"No Deserto"},' +
    '"FEV_10": {"REFS":"NUM_20,NUM_29,NUM_30", "CAPBIBLIA":"Números 20, 29 e 30", "SIGLAES":"PP", "CAPES":"37", "NOMES":"A Rocha Ferida"},' +
    '"FEV_11": {"REFS":"NUM_21:1-30, NUM_31, NUM_32, NUM_33", "CAPBIBLIA":"Números 21:01-30, 31 a 33", "SIGLAES":"PP", "CAPES":"38", "NOMES":"A Jornada em redor de Edom"},' +
    '"FEV_12": {"REFS":"NUM_21:31-35,NUM_34,NUM_35,NUM_36", "CAPBIBLIA":"Números 21:31-35, 34 a 36", "SIGLAES":"PP", "CAPES":"39", "NOMES":"A Conquista de Basã"},' +
    '"FEV_13": {"REFS":"NUM_22,NUM_23,NUM_24", "CAPBIBLIA":"Números 22 a 24", "SIGLAES":"PP", "CAPES":"40", "NOMES":"Balaão"},' +
    '"FEV_14": {"REFS":"NUM_25,NUM_26,NUM_27,NUM_28", "CAPBIBLIA":"Números 25 a 28", "SIGLAES":"PP", "CAPES":"41", "NOMES":"Apostasia no Jordão"},' +
    '"FEV_15": {"REFS":"DEU_3,DEU_4,DEU_5", "CAPBIBLIA":"Deuteronômio 3 a 5", "SIGLAES":"PP", "CAPES":"14", "NOMES":"A repetição da Lei"},' +
    '"FEV_16": {"REFS":"DEU_6,DEU_7,DEU_8,DEU_9,DEU_10,DEU_11,DEU_12,DEU_13,", "CAPBIBLIA":"Deuteronômio 6 a 13", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"FEV_17": {"REFS":"DEU_14,DEU_15,DEU_16,DEU_17", "CAPBIBLIA":"Deuteronômio 14 a 17", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"FEV_18": {"REFS":"DEU_18,DEU_19,DEU_20,DEU_21,DEU_22,DEU_23,DEU_24,DEU_25,DEU_26,DEU_27,DEU_28, DEU_29", "CAPBIBLIA":"Deuteronômio 18 a 29", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"FEV_19": {"REFS":"DEU_30,DEU_31,DEU_32,DEU_33,DEU_34", "CAPBIBLIA":"Deuteronômio 30 a 34", "SIGLAES":"PP", "CAPES":"43", "NOMES":"A Morte de Moisés"},' +
    '"FEV_20": {"REFS":"JOS_1,JOS_2,JOS_3,JOS_4", "CAPBIBLIA":"Josué 1 a 4", "SIGLAES":"PP", "CAPES":"44", "NOMES":"A Travessia do Jordão"},' +
    '"FEV_21": {"REFS":"JOS_5,JOS_6,JOS_7", "CAPBIBLIA":"Josué 5 a 7", "SIGLAES":"PP", "CAPES":"45", "NOMES":"A Queda de Jericó"},' +
    '"FEV_22": {"REFS":"JOS_8,JOS_9,JOS_10,JOS_11", "CAPBIBLIA":"Josué 8 a 11", "SIGLAES":"PP", "CAPES":"46", "NOMES":"As bênçãos e as maldições"},' +
    '"FEV_23": {"REFS":"JOS_12,JOS_13,JOS_14,JOS_15,JOS_16,JOS_17", "CAPBIBLIA":"Josué 12 a 17", "SIGLAES":"PP", "CAPES":"47", "NOMES":"Aliança com os Gebeonitas"},' +
    '"FEV_24": {"REFS":"JOS_18,JOS_19,JOS_20,JOS_21", "CAPBIBLIA":"Josué 18 a 21", "SIGLAES":"PP", "CAPES":"48", "NOMES":"A divisão de Canaã"},' +
    '"FEV_25": {"REFS":"JOS_22,JOS_23,JOS_24", "CAPBIBLIA":"Josué 22 a 24", "SIGLAES":"PP", "CAPES":"49", "NOMES":"Prefacio"},' +
    '"FEV_26": {"REFS":"DEU_14:22-29,NUM_18:21-32,LEV_17,LEV_18,LEV_19,LEV_20,LEV_27:30-34", "CAPBIBLIA":"Deut. 14:22-29; Núm. 18:21-32, Lev. 17 a 20; 27:30-34", "SIGLAES":"PP", "CAPES":"50", "NOMES":"O Dízimo"},' +
    '"FEV_27": {"REFS":"LEV_25,LEV_26", "CAPBIBLIA":"Levítico 25 e 26", "SIGLAES":"PP", "CAPES":"51", "NOMES":"O Cuidado de Deus para com os  pobres"},' +
    '"FEV_28": {"REFS":"LEV_21,LEV_22,LEV_23,LEV_24", "CAPBIBLIA":"Levítico 21 a 24", "SIGLAES":"PP", "CAPES":"52", "NOMES":"As Festas Anuais"},' +
    '"MAR_1": {"REFS":"JDG_1,JDG_2,JDG_3,JDG_4", "CAPBIBLIA":"Juízes 1 a 4", "SIGLAES":"PP", "CAPES":"53", "NOMES":"Os primeiros juízes"},' +
    '"MAR_2": {"REFS":"JDG_5,JDG_6,JDG_7,JDG_8,JDG_9,JDG_10,JDG_11,JDG_12", "CAPBIBLIA":"Juízes 5 a 12", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"MAR_3": {"REFS":"JDG_13,JDG_14,JDG_15,JDG_16", "CAPBIBLIA":"Juízes 13 a 16", "SIGLAES":"PP", "CAPES":"54", "NOMES":"Sansão"},' +
    '"MAR_4": {"REFS":"JDG_17,JDG_18,JDG_19,JDG_20,JDG_21", "CAPBIBLIA":"Juízes 17 a 21", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"MAR_5": {"REFS":"RUT_1,RUT_2,1SA_1", "CAPBIBLIA":"Rute 1 e 2 e I Samuel 1", "SIGLAES":"PP", "CAPES":"55", "NOMES":"O Menino Samuel"},' +
    '"MAR_6": {"REFS":"RUT_3,RUT_4,1SA_2", "CAPBIBLIA":"Rute 3 e 4 e I Samuel 2", "SIGLAES":"PP", "CAPES":"56", "NOMES":"Eli e seus filhos"},' +
    '"MAR_7": {"REFS":"1SA_3,1SA_4,1SA_5,1SA_6,1CH_13,1CH_14,1CH_15", "CAPBIBLIA":"I Samuel 3 a 6; I Crônicas 13 a 15", "SIGLAES":"PP", "CAPES":"57", "NOMES":"A Arca tomada pelos filisteus"},' +
    '"MAR_8": {"REFS":"1KI_4:38-41,2KI_2:15-18,1SA_7,1SA_8,1SA_9", "CAPBIBLIA":"I Reis 4:38-41; II Reis 2:15-18; I Samuel 7 a 9", "SIGLAES":"PP", "CAPES":"58", "NOMES":"A Escola dos Profetas"},' +
    '"MAR_9": {"REFS":"1SA_10,1SA_11,1SA_12", "CAPBIBLIA":"I Samuel 10 a 12", "SIGLAES":"PP", "CAPES":"59", "NOMES":"O Primeiro Rei de Israel"},' +
    '"MAR_10": {"REFS":"1SA_13,1SA_14", "CAPBIBLIA":"I Samuel 13 a 14", "SIGLAES":"PP", "CAPES":"60", "NOMES":"A Presunção de Saul"},' +
    '"MAR_11": {"REFS":"1SA_15", "CAPBIBLIA":"I Samuel 15", "SIGLAES":"PP", "CAPES":"61", "NOMES":"A Rejeição de Saul"},' +
    '"MAR_12": {"REFS":"1SA_16", "CAPBIBLIA":"I Samuel 16", "SIGLAES":"PP", "CAPES":"62", "NOMES":"A Unção de Davi"},' +
    '"MAR_13": {"REFS":"1SA_17,1SA_18,1SA_19", "CAPBIBLIA":"I Samuel 17 a 19", "SIGLAES":"PP", "CAPES":"63", "NOMES":"Davi e Golias"},' +
    '"MAR_14": {"REFS":"PSA_34,PSA_57,1SA_20,1SA_21,1SA_22", "CAPBIBLIA":"Salmos 34 e 57; I Samuel 20 a 22", "SIGLAES":"PP", "CAPES":"64", "NOMES":"A Fuga de Davi"},' +
    '"MAR_15": {"REFS":"PSA_121,1SA_23,1SA_24,1SA_25,1SA_26", "CAPBIBLIA":"Salmos 121 e I Samuel 23 a 26", "SIGLAES":"PP", "CAPES":"65", "NOMES":"A Magnanimidade de Davi"},' +
    '"MAR_16": {"REFS":"1SA_27,1SA_31,1CH_10", "CAPBIBLIA":"I Samuel 27 e 31 e I Crônicas 10", "SIGLAES":"PP", "CAPES":"66", "NOMES":"A Morte de Saul"},' +
    '"MAR_17": {"REFS":"1SA_28", "CAPBIBLIA":"I Samuel 28", "SIGLAES":"PP", "CAPES":"67", "NOMES":"Feitiçaria Antiga e Moderna"},' +
    '"MAR_18": {"REFS":"1SA_29,1SA_30,2SA_1", "CAPBIBLIA":"I Samuel 29 e 30 e II Samuel 1", "SIGLAES":"PP", "CAPES":"68", "NOMES":"Davi em Ziclague"},' +
    '"MAR_19": {"REFS":"2SA_2,2SA_3,2SA_4,2SA_5,1CH_11", "CAPBIBLIA":"II Samuel 2 a 5 e I Crônicas 11", "SIGLAES":"PP", "CAPES":"69", "NOMES":"Davi chamado ao trono"},' +
    '"MAR_20": {"REFS":"2SA_6,2SA_7,2SA_8,2SA_9,2SA_10,1CH_12,1CH_16,1CH_17", "CAPBIBLIA":"II Samuel 6 a 10 e I Crônicas 12, 16 e 17", "SIGLAES":"PP", "CAPES":"70", "NOMES":"O Reinado de Davi"},' +
    '"MAR_21": {"REFS":"PSA_32,PSA_51,2SA_11,2SA_12,2SA_13,2SA_14", "CAPBIBLIA":"Salmos 32 e 51, II Samuel 11 a 14", "SIGLAES":"PP", "CAPES":"71", "NOMES":"O Pecado e Arrependimento de Davi"},' +
    '"MAR_22": {"REFS":"PSA_3,2SA_15,2SA_16,2SA_17,2SA_18,2SA_19,2SA_20", "CAPBIBLIA":"Salmos 3, II Samuel 15 a 20", "SIGLAES":"PP", "CAPES":"72", "NOMES":"Rebelião de Absalão"},' +
    '"MAR_23": {"REFS":"PSA_18,2SA_21,2SA_22,2SA_23,2SA_24", "CAPBIBLIA":"Salmos 18, II Samuel 21 a 24", "SIGLAES":"PP", "CAPES":"73", "NOMES":"Os Últimos anos de Davi"},' +
    '"MAR_24": {"REFS":"1KI_1,1KI_2,1KI_3", "CAPBIBLIA":"I Reis 1 a 3", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"MAR_25": {"REFS":"2CH_1,1KI_4,1KI_5,1KI_6", "CAPBIBLIA":"II Crônicas 1, I Reis 4 a 6", "SIGLAES":"PR", "CAPES":"01", "NOMES":"Salomão"},' +
    '"MAR_26": {"REFS":"2CH_2,1KI_7,1KI_8", "CAPBIBLIA":"II Crônicas 2, I Reis 7 e 8", "SIGLAES":"PR", "CAPES":"02", "NOMES":"O Templo e sua Dedicação"},' +
    '"MAR_27": {"REFS":"2CH_3,1KI_9,1KI_10", "CAPBIBLIA":"II Crônicas 3, I Reis 9 e 10", "SIGLAES":"PR", "CAPES":"03", "NOMES":"Orgulho da Prosperidade"},' +
    '"MAR_28": {"REFS":"2CH_4,2CH_5,1KI_11", "CAPBIBLIA":"II Crônicas 4 e 5, I Reis 11", "SIGLAES":"PR", "CAPES":"04", "NOMES":"Resultado da Transgressão"},' +
    '"MAR_29": {"REFS":"2CH_6,2CH_7,2CH_8,2CH_9", "CAPBIBLIA":"II Crônicas 6 a 9", "SIGLAES":"PR", "CAPES":"05", "NOMES":"O Arrependimento"},' +
    '"MAR_30": {"REFS":"1KI_12,1KI_13", "CAPBIBLIA":"I Reis 12 e 13", "SIGLAES":"PR", "CAPES":"06", "NOMES":"O Reino Resgatado"},' +
    '"MAR_31": {"REFS":"2CH_10,2CH_11,1KI_14", "CAPBIBLIA":"II Crônicas 10 e 11, I Reis 14", "SIGLAES":"PR", "CAPES":"07", "NOMES":"Jeroboão"},' +
    '"ABR_1": {"REFS":"2CH_12,1KI_15,1KI_16", "CAPBIBLIA":"II Crônicas 12, I Reis 15 e 16", "SIGLAES":"PR", "CAPES":"08", "NOMES":"Apostasia Nacional"},' +
    '"ABR_2": {"REFS":"2CH_13,2CH_14,1KI_17", "CAPBIBLIA":"II Crônicas 13 e 14, I Reis 17", "SIGLAES":"PR", "CAPES":"09", "NOMES":"Elias o Tesbita"},' +
    '"ABR_3": {"REFS":"2CH_15,2CH_16,1KI_18:1-19", "CAPBIBLIA":"II Crônicas 15 e 16, I Reis 18:1-19", "SIGLAES":"PR", "CAPES":"10", "NOMES":"A Voz de Severa Repreensão"},' +
    '"ABR_4": {"REFS":"2CH_18,2CH_19,1KI_18:20-46", "CAPBIBLIA":"II Crônicas 18 e 19, I Reis 18:20-46", "SIGLAES":"PR", "CAPES":"11", "NOMES":"O Carmelo"},' +
    '"ABR_5": {"REFS":"2CH_20,2CH_21", "CAPBIBLIA":"II Crônicas 20 e 21", "SIGLAES":"PR", "CAPES":"12", "NOMES":"De Jezreel a Horebe"},' +
    '"ABR_6": {"REFS":"2CH_22,2CH_23,1KI_19", "CAPBIBLIA":"II Crônicas 22 e 23 e I Reis 19", "SIGLAES":"PR", "CAPES":"13", "NOMES":"Que Fazer aqui?"},' +
    '"ABR_7": {"REFS":"1KI_20,1KI_21,1KI_22", "CAPBIBLIA":"I Reis 20 a 22", "SIGLAES":"PR", "CAPES":"14", "NOMES":"No Espírito e Virtude de Elias"},' +
    '"ABR_8": {"REFS":"1CH_1,1CH_2,2CH_17", "CAPBIBLIA":"I Crônicas 1 e 2, II Crônicas 17", "SIGLAES":"PR", "CAPES":"15", "NOMES":"Josafá"},' +
    '"ABR_9": {"REFS":"1CH_3,1CH_4", "CAPBIBLIA":"I Crônicas 3 e 4", "SIGLAES":"PR", "CAPES":"16", "NOMES":"A queda da Casa de Acabe"},' +
    '"ABR_10": {"REFS":"1CH_5,2KI_1,2KI_2", "CAPBIBLIA":"I Crônicas 5, II Reis 1 e 2", "SIGLAES":"PR", "CAPES":"17", "NOMES":"O Chamado de Elizeu"},' +
    '"ABR_11": {"REFS":"2KI_3,2KI_12", "CAPBIBLIA":"II Reis 3 e 12", "SIGLAES":"PR", "CAPES":"18", "NOMES":"As Águas Purificadas"},' +
    '"ABR_12": {"REFS":"2KI_4,2KI_13,2KI_14", "CAPBIBLIA":"II Reis 4,13 e 14", "SIGLAES":"PR", "CAPES":"19", "NOMES":"Um Profeta de Paz"},' +
    '"ABR_13": {"REFS":"2KI_5,2KI_6,2KI_7,2KI_8", "CAPBIBLIA":"II Reis 5 a 8", "SIGLAES":"PR", "CAPES":"20", "NOMES":"Naamã"},' +
    '"ABR_14": {"REFS":"2KI_9,2KI_10,2KI_11", "CAPBIBLIA":"II Reis 9 a 11", "SIGLAES":"PR", "CAPES":"21", "NOMES":"O Fim do Ministério de Elizeu"},' +
    '"ABR_15": {"REFS":"JON_1,JON_2,JON_3,JON_4", "CAPBIBLIA":"Jonas 1 a 4", "SIGLAES":"PR", "CAPES":"22", "NOMES":"A Grande Cidade de Nínive"},' +
    '"ABR_16": {"REFS":"HOS_1,HOS_2,HOS_3", "CAPBIBLIA":"Oséias 1 a 3", "SIGLAES":"PR", "CAPES":"23", "NOMES":"O Cativeiro Assírio"},' +
    '"ABR_17": {"REFS":"HOS_4,HOS_5,HOS_6,HOS_7,HOS_8,HOS_9,HOS_10", "CAPBIBLIA":"Oséias 4 a 10", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"ABR_18": {"REFS":"HOS_11,HOS_12,HOS_13,HOS_14", "CAPBIBLIA":"Oséias 11 a 14", "SIGLAES":"PR", "CAPES":"24", "NOMES":"Destr: Porque lhe Falta Conhecimento"},' +
    '"ABR_19": {"REFS":"ISA_1,ISA_2,ISA_3,ISA_4,ISA_5,ISA_6", "CAPBIBLIA":"Isaías 1 a 6", "SIGLAES":"PR", "CAPES":"25", "NOMES":"O chamado de Isaías"},' +
    '"ABR_20": {"REFS":"ISA_40,ISA_41,ISA_42", "CAPBIBLIA":"Isaías 40 a 42", "SIGLAES":"PR", "CAPES":"26", "NOMES":"Eis aqui está o vosso Deus"},' +
    '"ABR_21": {"REFS":"2CH_28,2KI_15,2KI_16,2KI_17", "CAPBIBLIA":"II Crônicas 28, II Reis 15 a 17", "SIGLAES":"PR", "CAPES":"27", "NOMES":"Acaz"},' +
    '"ABR_22": {"REFS":"ISA_27,ISA_38,ISA_39,2KI_18,2KI_19,2KI_20", "CAPBIBLIA":"Isaías 37 a 39, II Reis 18 a 20", "SIGLAES":"PR", "CAPES":"28", "NOMES":"Ezequias"},' +
    '"ABR_23": {"REFS":"2CH_29,2CH_30,2CH_31,2CH_32", "CAPBIBLIA":"II Crônicas 29 a 32", "SIGLAES":"PR", "CAPES":"29", "NOMES":"Os Embaixadores de Babilônia"},' +
    '"ABR_24": {"REFS":"NAH_1,NAH_2,NAH_3", "CAPBIBLIA":"Naum 1 a 3", "SIGLAES":"PR", "CAPES":"30", "NOMES":"Liberto da Assíria"},' +
    '"ABR_25": {"REFS":"ISA_7,ISA_8,ISA_9,ISA_10,ISA_11", "CAPBIBLIA":"Isaías 7 a 11", "SIGLAES":"PR", "CAPES":"31", "NOMES":"Esperança para os Gentios"},' +
    '"ABR_26": {"REFS":"2KI_21,2KI_22,2KI_23", "CAPBIBLIA":"II Reis 21 a 23", "SIGLAES":"PR", "CAPES":"32", "NOMES":"Manassés e Josias"},' +
    '"ABR_27": {"REFS":"2CH_24,2CH_25,2CH_26,2CH_27", "CAPBIBLIA":"II Crônicas 24 a 27", "SIGLAES":"PR", "CAPES":"33", "NOMES":"O Livro da Lei"},' +
    '"ABR_28": {"REFS":"JER_1,JER_2,JER_3", "CAPBIBLIA":"Jeremias 1 a 3", "SIGLAES":"PR", "CAPES":"34", "NOMES":"Jeremias"},' +
    '"ABR_29": {"REFS":"2KI_24,2KI_25", "CAPBIBLIA":"II Reis 24 e 25", "SIGLAES":"PR", "CAPES":"35", "NOMES":"A Condenação Iminente"},' +
    '"ABR_30": {"REFS":"2CH_33,2CH_34,2CH_35,2CH_36", "CAPBIBLIA":"II Crônicas 33 a 36", "SIGLAES":"PR", "CAPES":"36", "NOMES":"O Último Rei de Judá"},' +
    '"MAI_1": {"REFS":"JER_36,JER_37,JER_38", "CAPBIBLIA":"Jeremias 36 a 38", "SIGLAES":"PR", "CAPES":"37", "NOMES":"Levados Cativos para a Babilônia"},' +
    '"MAI_2": {"REFS":"JER_29,JER_30,JER_31,JER_32", "CAPBIBLIA":"Jeremias 29 a 32", "SIGLAES":"PR", "CAPES":"38", "NOMES":"Luz em Meio as Trevas"},' +
    '"MAI_3": {"REFS":"1CH_6,1CH_7,1CH_8,DAN_1", "CAPBIBLIA":"I Crônicas 6 a 8, Daniel 1", "SIGLAES":"PR", "CAPES":"39", "NOMES":"Daniel na Corte Babilônica"},' +
    '"MAI_4": {"REFS":"DAN_2,DAN_7,DAN_8", "CAPBIBLIA":"Daniel 2, 7 e 8", "SIGLAES":"PR", "CAPES":"40", "NOMES":"O Sonho de Nabucodonosor"},' +
    '"MAI_5": {"REFS":"1CH_9,DAN_3", "CAPBIBLIA":"I Crônicas 9, Daniel 3", "SIGLAES":"PR", "CAPES":"41", "NOMES":"A Fornalha Ardente"},' +
    '"MAI_6": {"REFS":"DAN_4", "CAPBIBLIA":"Daniel 4", "SIGLAES":"PR", "CAPES":"42", "NOMES":"A Verdadeira Grandeza"},' +
    '"MAI_7": {"REFS":"DAN_5", "CAPBIBLIA":"Daniel 5", "SIGLAES":"PR", "CAPES":"43", "NOMES":"O Vigia Invisível"},' +
    '"MAI_8": {"REFS":"DAN_6", "CAPBIBLIA":"Daniel 6", "SIGLAES":"PR", "CAPES":"44", "NOMES":"Na Cova dos Leões"},' +
    '"MAI_9": {"REFS":"EZR_1,EZR_2,EZR_3", "CAPBIBLIA":"Esdras 1 a 3", "SIGLAES":"PR", "CAPES":"45", "NOMES":"A Volta do Exílio"},' +
    '"MAI_10": {"REFS":"HAG_1,HAG_2", "CAPBIBLIA":"Ageu 1 e 2", "SIGLAES":"PR", "CAPES":"46", "NOMES":"Os Profetas de Deus o ajudavam"},' +
    '"MAI_11": {"REFS":"ZEC_1,ZEC_2,ZEC_3,ZEC_4", "CAPBIBLIA":"Zacarias 1 a 4", "SIGLAES":"PR", "CAPES":"47", "NOMES":"Josué e o Anjo"},' +
    '"MAI_12": {"REFS":"ZEC_5,ZEC_6,ZEC_7,ZEC_8,ZEC_9", "CAPBIBLIA":"Zacarias 5 a 9", "SIGLAES":"PR", "CAPES":"48", "NOMES":"Nem por Força e Nem por Violência"},' +
    '"MAI_13": {"REFS":"EST_1,EST_2,EST_3", "CAPBIBLIA":"Ester 1 a 3", "SIGLAES":"PR", "CAPES":"49", "NOMES":"Nos dias da Rainha Ester"},' +
    '"MAI_14": {"REFS":"EZR_4,EZR_5,EZR_6", "CAPBIBLIA":"Esdras 4 a 6", "SIGLAES":"PR", "CAPES":"50", "NOMES":"Esdras, o Sacerdote e Escriba"},' +
    '"MAI_15": {"REFS":"EZR_7,EZR_8,EZR_9,EZR_10", "CAPBIBLIA":"Esdras 7 a 10", "SIGLAES":"PR", "CAPES":"51", "NOMES":"Um Reavivamento Espiritual"},' +
    '"MAI_16": {"REFS":"NEH_1,NEH_2", "CAPBIBLIA":"Neemias 1 e 2", "SIGLAES":"PR", "CAPES":"52", "NOMES":"Um Homem Oportuno"},' +
    '"MAI_17": {"REFS":"EST_4,NEH_3,NEH_4", "CAPBIBLIA":"Ester 4, Neemias 3 e 4", "SIGLAES":"PR", "CAPES":"53", "NOMES":"Os Reconstrutores do Muro"},' +
    '"MAI_18": {"REFS":"EST_5,EST_6,EST_7,NEH_5", "CAPBIBLIA":"Ester 5 a 7, Neemias 5", "SIGLAES":"PR", "CAPES":"54", "NOMES":"Condenadas a Extorção"},' +
    '"MAI_19": {"REFS":"EST_8,EST_9,EST_10,NEH_6", "CAPBIBLIA":"Ester 8 a 10, Neemias 6", "SIGLAES":"PR", "CAPES":"55", "NOMES":"Ciladas dos Pagãos"},' +
    '"MAI_20": {"REFS":"NEH_7,NEH_8,NEH_9,NEH_10", "CAPBIBLIA":"Neemias 7 a 10", "SIGLAES":"PR", "CAPES":"56", "NOMES":"Instruídos na Lei de Deus"},' +
    '"MAI_21": {"REFS":"NEH_11,NEH_12,NEH_13", "CAPBIBLIA":"Neemias 11 a 13", "SIGLAES":"PP", "CAPES":"57", "NOMES":"Reforma"},' +
    '"MAI_22": {"REFS":"ZEC_10,ZEC_11,ZEC_12,ZEC_13,ZEC_14", "CAPBIBLIA":"Zacarias 10 a 14", "SIGLAES":"PP", "CAPES":"58", "NOMES":"A Vinda de um Libertador"},' +
    '"MAI_23": {"REFS":"MAL_1,MAL_2,MAL_3,MAL_4", "CAPBIBLIA":"Malaquias 1 a 4", "SIGLAES":"PP", "CAPES":"59", "NOMES":"A Casa de Israel"},' +
    '"MAI_24": {"REFS":"ISA_63,ISA_64,ISA_65,ISA_66", "CAPBIBLIA":"Isaías 63 a 66", "SIGLAES":"PP", "CAPES":"60", "NOMES":"Visões da Glõria Futura"},' +
    '"MAI_25": {"REFS":"MAR_1,MAR_2,MAR_3", "CAPBIBLIA":"Marcos 1 a 3", "SIGLAES":"DTN", "CAPES":"****", "NOMES":"****"},' +
    '"MAI_26": {"REFS":"ISA_12,ISA_13,MAT_1", "CAPBIBLIA":"Isaías 12 e 13, Mateus 1", "SIGLAES":"DTN", "CAPES":"01", "NOMES":"Deus Conosco"},' +
    '"MAI_27": {"REFS":"ISA_14,ISA_15,ISA_16", "CAPBIBLIA":"Isaías 14 a 16", "SIGLAES":"DTN", "CAPES":"02", "NOMES":"O Povo Escolhido"},' +
    '"MAI_28": {"REFS":"ISA_17,ISA_18,ISA_19", "CAPBIBLIA":"Isaías 17 a 19", "SIGLAES":"DTN", "CAPES":"03", "NOMES":"A Plenitude dos tempos"},' +
    '"MAI_29": {"REFS":"ISA_20,ISA_21,ISA_22,LUK_2:1-20", "CAPBIBLIA":"Isaías 20 a 22, Lucas 2:1-20", "SIGLAES":"DTN", "CAPES":"04", "NOMES":"Vos Nasceu Hoje o Salvador"},' +
    '"MAI_30": {"REFS":"ISA_23,ISA_24,ISA_25,LUK_2:21-38", "CAPBIBLIA":"Isaías 23 a 25, Lucas 2:21-38", "SIGLAES":"DTN", "CAPES":"05", "NOMES":"A Dedicação"},' +
    '"MAI_31": {"REFS":"ISA_26,ISA_27,ISA_28,MAT_2", "CAPBIBLIA":"Isaías 26 a 28, Mateus 2", "SIGLAES":"DTN", "CAPES":"06", "NOMES":"Vimos a Sua Estrela"},' +
    '"JUN_1": {"REFS":"ISA_29,ISA_30,LUK_2:39-40", "CAPBIBLIA":"Isaías 29 e 30, Lucas 2:39-40", "SIGLAES":"DTN", "CAPES":"07", "NOMES":"Em Criança"},' +
    '"JUN_2": {"REFS":"ISA_31,ISA_32,ISA_33,LUK_2:41-52", "CAPBIBLIA":"Isaías 31 a 33, Lucas 2:41-52", "SIGLAES":"DTN", "CAPES":"08", "NOMES":"A Visita Pascoal"},' +
    '"JUN_3": {"REFS":"ISA_34,ISA_35,ISA_36", "CAPBIBLIA":"Isaías 34 a 36", "SIGLAES":"DTN", "CAPES":"09", "NOMES":"Dias de Luta"},' +
    '"JUN_4": {"REFS":"MAT_3:1-12,LUK_1", "CAPBIBLIA":"Mateus 3:1-12, Lucas 1", "SIGLAES":"DTN", "CAPES":"10", "NOMES":"A Voz do Deserto"},' +
    '"JUN_5": {"REFS":"ISA_43,ISA_44,ISA_45,MAT_3:13-17", "CAPBIBLIA":"Isaías 43 a 45, Mateus 3:13-17", "SIGLAES":"DTN", "CAPES":"11", "NOMES":"O Batismo"},' +
    '"JUN_6": {"REFS":"ISA_46,MAT_4", "CAPBIBLIA":"Isaías 46, Mateus 4", "SIGLAES":"DTN", "CAPES":"12", "NOMES":"A Tentação"},' +
    '"JUN_7": {"REFS":"ISA_47,ISA_48,ISA_49,LUK_4:1-13", "CAPBIBLIA":"Isaías 47 a 49, Lucas 4:1-13", "SIGLAES":"DTN", "CAPES":"13", "NOMES":"A Vitória"},' +
    '"JUN_8": {"REFS":"ISA_50,ISA_51,JOH_1", "CAPBIBLIA":"Isaías 50 a 51, João 1", "SIGLAES":"DTN", "CAPES":"14", "NOMES":"Achamos o Messias"},' +
    '"JUN_9": {"REFS":"ISA_52,ISA_53,JOH_2:1-11", "CAPBIBLIA":"Isaías 52 a 53, João 2:1-11", "SIGLAES":"DTN", "CAPES":"15", "NOMES":"Nas Bodas"},' +
    '"JUN_10": {"REFS":"ISA_54,ISA_55,JOH_2:12-25", "CAPBIBLIA":"Isaías 54 e 55, João 2:12-25", "SIGLAES":"DTN", "CAPES":"16", "NOMES":"Em Seu Templo"},' +
    '"JUN_11": {"REFS":"ISA_60,ISA_61,ISA_62,JOH_3:1-21", "CAPBIBLIA":"Isaías 60 a 62, João 3:1-21", "SIGLAES":"DTN", "CAPES":"17", "NOMES":"Nicodemos"},' +
    '"JUN_12": {"REFS":"JER_4,JER_5,JER_6,JOH_3:22-26", "CAPBIBLIA":"Jeremias 4 a 6, João 3:22-36", "SIGLAES":"DTN", "CAPES":"18", "NOMES":"É Necessário que Ele Cresça"},' +
    '"JUN_13": {"REFS":"JER_7,JER_8,JOH_4:1-42", "CAPBIBLIA":"Jeremias 7 a 8, João 4:1-42", "SIGLAES":"DTN", "CAPES":"19", "NOMES":"Junto ao poço de Jacó"},' +
    '"JUN_14": {"REFS":"JER_9,JER_10,JER_11,JOH_4:43-54", "CAPBIBLIA":"Jeremias 9 a 11, João 4:43-54", "SIGLAES":"DTN", "CAPES":"20", "NOMES":"Se não virdes Sinais e Milagres"},' +
    '"JUN_15": {"REFS":"JER_12,JER_13,JOH_5", "CAPBIBLIA":"Jeremias 12 e 13, João 5", "SIGLAES":"DTN", "CAPES":"21", "NOMES":"Betesda e o Sinédrio"},' +
    '"JUN_16": {"REFS":"JER_14,JER_15,MAR_5,MAR_6:1-29", "CAPBIBLIA":"Jeremias 14 e 15, Marcos 5 e 6:1-29", "SIGLAES":"DTN", "CAPES":"22", "NOMES":"Prisão e Morte de João Batista"},' +
    '"JUN_17": {"REFS":"MAT_15,MAT_16,MAT_17", "CAPBIBLIA":"Mateus 15 a 17", "SIGLAES":"DTN", "CAPES":"23", "NOMES":"O reino dos Céus está Próximo"},' +
    '"JUN_18": {"REFS":"LUK_3,LUK_4:14-44", "CAPBIBLIA":"Lucas 3 e 4:14-44", "SIGLAES":"DTN", "CAPES":"24", "NOMES":"Não é este o Filho do Carpinteiro?"},' +
    '"JUN_19": {"REFS":"JER_16,JER_17,JER_18,LUK_5:1-11", "CAPBIBLIA":"Jeremias 16 a 18, Lucas 5:1-11", "SIGLAES":"DTN", "CAPES":"25", "NOMES":"O Chamado a Beira do Mar"},' +
    '"JUN_20": {"REFS":"JER_19,JER_20,JER_21", "CAPBIBLIA":"Jeremias 19 a 21", "SIGLAES":"DTN", "CAPES":"26", "NOMES":"Em Cafarnaum"},' +
    '"JUN_21": {"REFS":"JER_22,JER_23,JER_24,LUK_5:12-26", "CAPBIBLIA":"Jeremias 22 a 24, Lucas 5:12-26", "SIGLAES":"DTN", "CAPES":"27", "NOMES":"Podes tornar-me limpo"},' +
    '"JUN_22": {"REFS":"JER_25,JER_26,LUK_5:27-39", "CAPBIBLIA":"Jeremias 25 a 26, Lucas 5:27-39", "SIGLAES":"DTN", "CAPES":"28", "NOMES":"Levi Mateus"},' +
    '"JUN_23": {"REFS":"ISA_57,ISA_58,ISA_59,MAT_12:1-14,LUK_6:1-11", "CAPBIBLIA":"Isaías 57 a 59, Mateus 12:1-14, Lucas 6:1-11", "SIGLAES":"DTN", "CAPES":"29", "NOMES":"O Sábado"},' +
    '"JUN_24": {"REFS":"JER_27,JER_28,LUK_6:12-49,", "CAPBIBLIA":"Jeremias 27 e 28, Lucas 6:12-49", "SIGLAES":"DTN", "CAPES":"30", "NOMES":"Nomeou Doze"},' +
    '"JUN_25": {"REFS":"MAT_5,MAT_6,MAT_7", "CAPBIBLIA":"Mateus 5 a 7", "SIGLAES":"DTN", "CAPES":"31", "NOMES":"O Sermão da Montanha"},' +
    '"JUN_26": {"REFS":"MAT_8,MAT_9,LUK_7", "CAPBIBLIA":"Mateus 8 e 9, Lucas 7", "SIGLAES":"DTN", "CAPES":"32", "NOMES":"O Centurião"},' +
    '"JUN_27": {"REFS":"MAT_10,MAT_12:15-50,MAT_14", "CAPBIBLIA":"Mateus 10 e 14, Mateus 12:15-50", "SIGLAES":"DTN", "CAPES":"33", "NOMES":"Quem são os Meus Irmãos?"},' +
    '"JUN_28": {"REFS":"JER_33,JER_34,MAT_11", "CAPBIBLIA":"Jeremias 33 e 34, Mateus 11", "SIGLAES":"DTN", "CAPES":"34", "NOMES":"O Convite"},' +
    '"JUN_29": {"REFS":"JER_35,LUK_8:1-39,", "CAPBIBLIA":"Jeremias 35, Lucas 8:1-39", "SIGLAES":"DTN", "CAPES":"35", "NOMES":"Cala-te, Aquieta-te"},' +
    '"JUN_30": {"REFS":"JER_39,JER_40,JER_41,LUK_8:40-56", "CAPBIBLIA":"Jeremias 39 a 41, Lucas 8:40-56", "SIGLAES":"DTN", "CAPES":"36", "NOMES":"O Toque da Fé"},' +
    '"JUL_1": {"REFS":"JER_42,JER_43,LUK_9:1-27", "CAPBIBLIA":"Jeremias 42 e 43, Lucas 9:1-27", "SIGLAES":"DTN", "CAPES":"37", "NOMES":"Os Primeiros Evangelistas"},' +
    '"JUL_2": {"REFS":"JER_44,JER_45,MAR_6:30-56", "CAPBIBLIA":"Jeremias 44 e 45, Marcos 6:30-56", "SIGLAES":"DTN", "CAPES":"38", "NOMES":"Vinde...Repousai um Pouco"},' +
    '"JUL_3": {"REFS":"JER_46,JER_47,JOH_6:1-15", "CAPBIBLIA":"Jeremias 46 a 47, João 6:1-15", "SIGLAES":"DTN", "CAPES":"39", "NOMES":"Dai-lhe Vós de Comer"},' +
    '"JUL_4": {"REFS":"JER_48,JER_49,JER_50,JOH_6:16-21", "CAPBIBLIA":"Jeremias 48 a 50, João 6:16-21", "SIGLAES":"DTN", "CAPES":"40", "NOMES":"Uma Noite no Lago"},' +
    '"JUL_5": {"REFS":"JER_51,JER_52,JOH_6:22-71", "CAPBIBLIA":"Jeremias 51 e 52, João 6:22-71", "SIGLAES":"DTN", "CAPES":"41", "NOMES":"A Crise na Galiléia"},' +
    '"JUL_6": {"REFS":"LAM_1,LAM_2,MAR_7:1-23", "CAPBIBLIA":"Lamentações 1 e 2, Marcos 7:1-23", "SIGLAES":"DTN", "CAPES":"42", "NOMES":"Tradição"},' +
    '"JUL_7": {"REFS":"LAM_3,LAM_4,LAM_5,MAR_7:24-37", "CAPBIBLIA":"Lamentações 3 a 5, Marcos 7:24-37", "SIGLAES":"DTN", "CAPES":"43", "NOMES":"Barreiras Derrubadas"},' +
    '"JUL_8": {"REFS":"EZE_1,EZE_2,EZE_3,MAR_8:1-21", "CAPBIBLIA":"Ezequiel 1 a 3, Marcos 8:1-21", "SIGLAES":"DTN", "CAPES":"44", "NOMES":"O Verdadeiro Sinal"},' +
    '"JUL_9": {"REFS":"EZE_4,EZE_5,EZE_6,MAR_8:22-38", "CAPBIBLIA":"Ezequiel 4 a 6, Marcos 8:22-38", "SIGLAES":"DTN", "CAPES":"45", "NOMES":"A Previsão da Cruz"},' +
    '"JUL_10": {"REFS":"EZE_7,EZE_8,EZE_9,LUK_9:28-36,MAR_9:1-13,MAT_17:1-8", "CAPBIBLIA":"Ezequiel 7 a 9, Lucas 9:28-36, Marcos 9:1-13, Mateus 17:1-8", "SIGLAES":"DTN", "CAPES":"46", "NOMES":"A Transfiguração"},' +
    '"JUL_11": {"REFS":"EZE_10,EZE_11,LUK_9:37-45,MAT_17:14-20,MAR_9:14-29", "CAPBIBLIA":"Ezequiel 10 e 11, Lucas 9:37-45, Mateus 17:14-20, Marcos 9:14-29", "SIGLAES":"DTN", "CAPES":"47", "NOMES":"Nada Vos Será Impossível"},' +
    '"JUL_12": {"REFS":"EZE_12,EZE_13,EZE_14,MAR_9:30-50,LUK_9:46-48", "CAPBIBLIA":"Ezequiel 12 a 14, Marcos 9:30-50, Lucas 9:46-48", "SIGLAES":"DTN", "CAPES":"48", "NOMES":"Quem é o Maior"},' +
    '"JUL_13": {"REFS":"EZE_15,EZE_16,JOH_7:1-15,JOH_7:37-39", "CAPBIBLIA":"Ezequiel 15 a 16, João 7:1-15 e 7:37 a 39", "SIGLAES":"DTN", "CAPES":"49", "NOMES":"A Festa dos Tabernáculos"},' +
    '"JUL_14": {"REFS":"EZE_17, JOH_7:16-53", "CAPBIBLIA":"Ezequiel 17, João 7:16-53", "SIGLAES":"DTN", "CAPES":"50", "NOMES":"Por Entre Laços"},' +
    '"JUL_15": {"REFS":"EZE_19,EZE_20,JOH_8,JOH_9:1-41", "CAPBIBLIA":"Ezequiel 19 e 20, João 8 e 9:1-41", "SIGLAES":"DTN", "CAPES":"51", "NOMES":"A Luz da Vida"},' +
    '"JUL_16": {"REFS":"EZE_21,EZE_22,JOH_10,PSA_23", "CAPBIBLIA":"Ezequiel 21 e 22, João 10, Salmos 23", "SIGLAES":"DTN", "CAPES":"52", "NOMES":"O divino Pastor"},' +
    '"JUL_17": {"REFS":"EZE_23,EZE_24,EZE_25,LUK_9:46-62", "CAPBIBLIA":"Ezequiel 23 a 25, Lucas 9:46-62", "SIGLAES":"DTN", "CAPES":"53", "NOMES":"A Última jornada da Galiléia"},' +
    '"JUL_18": {"REFS":"EZE_26,EZE_27,LUK_10", "CAPBIBLIA":"Ezequiel 26 e 27, Lucas 10", "SIGLAES":"DTN", "CAPES":"54", "NOMES":"O Bom Samaritano"},' +
    '"JUL_19": {"REFS":"EZE_28,EZE_29,LUK_17", "CAPBIBLIA":"Ezequiel 28 e 29, Lucas 17", "SIGLAES":"DTN", "CAPES":"55", "NOMES":"Não com Aparência Exterior"},' +
    '"JUL_20": {"REFS":"EZE_30,EZE_31,MAT_19:1-15", "CAPBIBLIA":"Ezequiel 30 e 31, Mateus 19:1-15", "SIGLAES":"DTN", "CAPES":"56", "NOMES":"Deixai vir a mim os pequeninos "},' +
    '"JUL_21": {"REFS":"EZE_32,EZE_33,EZE_34,MAT_19:16-30,LUK_18:18-23", "CAPBIBLIA":"Ezequiel 32 a 34, Mateus 19:16-30, Lucas 18:18-23", "SIGLAES":"DTN", "CAPES":"57", "NOMES":"Uma coisa te falta"},' +
    '"JUL_22": {"REFS":"EZE_35,EZE_36,JOH_11:1-46", "CAPBIBLIA":"Ezequiel 35 e 36, João 11:1-46", "SIGLAES":"DTN", "CAPES":"58", "NOMES":"Lázaro sai para fora"},' +
    '"JUL_23": {"REFS":"EZE_37,EZE_38,EZE_39,JOH_11:47-57", "CAPBIBLIA":"Ezequiel 37 a 39, João 11:47-57", "SIGLAES":"DTN", "CAPES":"59", "NOMES":"Os Sacerdotes tramam"},' +
    '"JUL_24": {"REFS":"EZE_40,EZE_41,EZE_42,LUK_18:24-34", "CAPBIBLIA":"Ezequiel 40 a 42, Lucas 18:24-34", "SIGLAES":"DTN", "CAPES":"60", "NOMES":"A Lei do Novo Reino"},' +
    '"JUL_25": {"REFS":"LUK_19:1-10,LUK_20,LUK_21", "CAPBIBLIA":"Lucas 19:1-10, Lucas 20, Lucas 21", "SIGLAES":"DTN", "CAPES":"61", "NOMES":"Zaqueu"},' +
    '"JUL_26": {"REFS":"EZE_43,EZE_44,EZE_45,JOH_12:1-11", "CAPBIBLIA":"Ezequiel 43 a 45, João 12:1-11", "SIGLAES":"DTN", "CAPES":"62", "NOMES":"Um Banquete na Casa de Simão"},' +
    '"JUL_27": {"REFS":"EZE_46,EZE_47,EZE_48,LUK_19:28-40, JOH_12:12-19", "CAPBIBLIA":"Ezequiel 46 a 48, Lucas 19:28-40, João 12:12-19", "SIGLAES":"DTN", "CAPES":"63", "NOMES":"Eis que Teu Rei Virá"},' +
    '"JUL_28": {"REFS":"JOE_1,JOE_2,JOE_3", "CAPBIBLIA":"Joel 1 a 3", "SIGLAES":"DTN", "CAPES":"64", "NOMES":"Um Povo Condenado"},' +
    '"JUL_29": {"REFS":"LUK_19:45-48,MAR_10,MAR_11,MAR_12:1-12", "CAPBIBLIA":"Lucas 19:45-48, Marcos 10, Marcos 11 e 12:1-12", "SIGLAES":"DTN", "CAPES":"65", "NOMES":"O Templo Novamente Purificado"},' +
    '"JUL_30": {"REFS":"AMO_1,AMO_2,MAR_12:13-44", "CAPBIBLIA":"Amós 1 e 2, Marcos 12:13-44", "SIGLAES":"DTN", "CAPES":"66", "NOMES":"Conflito"},' +
    '"JUL_31": {"REFS":"AMO_3,AMO_4,MAT_23,MAR_12,LUK_20:45-47", "CAPBIBLIA":"Amós 3 e 4, Mateus 23, Marcos 12, Lucas 20:45-47", "SIGLAES":"DTN", "CAPES":"67", "NOMES":"Ais Sobre os Fariseus"},' +
    '"AGO_1": {"REFS":"AMO_5,AMO_6,AMO_7,JOH_12:20-50", "CAPBIBLIA":"Amós 5 a 7, João 12:20-50", "SIGLAES":"DTN", "CAPES":"68", "NOMES":"No Pátio"},' +
    '"AGO_2": {"REFS":"AMO_8,AMO_9,MAT_24,MAR_13", "CAPBIBLIA":"Amós 8 e 9, Mateus 24, Marcos 13", "SIGLAES":"DTN", "CAPES":"69", "NOMES":"O Monte das Oliveiras"},' +
    '"AGO_3": {"REFS":"MIC_1,MIC_2,MIC_3,MAT_25:31-36", "CAPBIBLIA":"Miquéias 1 a 3, Mateus 25:31-36", "SIGLAES":"DTN", "CAPES":"70", "NOMES":"Um destes Meus Pequeninos Irmãos"},' +
    '"AGO_4": {"REFS":"MIC_4,MIC_5,JOH_13:1-20", "CAPBIBLIA":"Miquéias 4 e 5, João 13:1-20", "SIGLAES":"DTN", "CAPES":"71", "NOMES":"Servo dos Servos"},' +
    '"AGO_5": {"REFS":"MAR_14,MAR_15,MAR_16,MAR_14:22-26", "CAPBIBLIA":"Marcos 14 a 16, Marcos 14:22-26", "SIGLAES":"DTN", "CAPES":"72", "NOMES":"Em memória da mim"},' +
    '"AGO_6": {"REFS":"JOH_14,JOH_15,JOH_16,JOH_13:31-38", "CAPBIBLIA":"João 14 a 17, João 13:31-38", "SIGLAES":"DTN", "CAPES":"73", "NOMES":"Não se Turbe o Vosso Coração"},' +
    '"AGO_7": {"REFS":"MIC_6,MIC_7,JOH_18:1-12", "CAPBIBLIA":"Miquéias 6 e 7, João 18:1-12", "SIGLAES":"DTN", "CAPES":"74", "NOMES":"Getsêmani"},' +
    '"AGO_8": {"REFS":"HAB_1,HAB_2,HAB_3,JOH_18:13-27", "CAPBIBLIA":"Habacuque 1 a 3, João 18:13-27", "SIGLAES":"DTN", "CAPES":"75", "NOMES":"Caifás"},' +
    '"AGO_9": {"REFS":"OBA_1,JOH_13:21-30", "CAPBIBLIA":"Obadias 1, João 13:21-30", "SIGLAES":"DTN", "CAPES":"76", "NOMES":"Judas"},' +
    '"AGO_10": {"REFS":"JOB_1,JOB_2,JOB_3,JOH_18:28-40", "CAPBIBLIA":"Jó 1 a 3, João 18:28-40", "SIGLAES":"DTN", "CAPES":"77", "NOMES":"Na Sala de Julgamento de Pilatos"},' +
    '"AGO_11": {"REFS":"JOB_4,JOB_5,PSA_22,JOH_19:1-27", "CAPBIBLIA":"Jó 4 e 5, Salmos 22, João 19:1-27", "SIGLAES":"DTN", "CAPES":"78", "NOMES":"O Calvário"},' +
    '"AGO_12": {"REFS":"JOB_6,JOB_7,JOB_8,JOH_19:28-37", "CAPBIBLIA":"Jó 6 a 8, João 19:28-37", "SIGLAES":"DTN", "CAPES":"79", "NOMES":"Está Consumado"},' +
    '"AGO_13": {"REFS":"MAT_20,JOH_19:28-42", "CAPBIBLIA":"Mateus 20, João 19:28-42", "SIGLAES":"DTN", "CAPES":"80", "NOMES":"No Sepulcro de José"},' +
    '"AGO_14": {"REFS":"MAT_26,MAT_27,MAT_28:1-15", "CAPBIBLIA":"Mateus 26 e 27, e 28:1-15", "SIGLAES":"DTN", "CAPES":"81", "NOMES":"O Senhor Ressucitou"},' +
    '"AGO_15": {"REFS":"JOB_9,JOB_10,JOH_20:1-18", "CAPBIBLIA":"Jó 9 e 10, João 20:1-18", "SIGLAES":"DTN", "CAPES":"82", "NOMES":"Porque choras?"},' +
    '"AGO_16": {"REFS":"LUK_22,LUK_23,LUK_24", "CAPBIBLIA":"Lucas 22 a 24", "SIGLAES":"DTN", "CAPES":"83", "NOMES":"A Viagem para Emaús"},' +
    '"AGO_17": {"REFS":"JOB_11,JOB_12,JOB_13,JOH_20:19-31", "CAPBIBLIA":"Jó 11 a 13, João 20:19-31", "SIGLAES":"DTN", "CAPES":"84", "NOMES":"Paz seja Convosco"},' +
    '"AGO_18": {"REFS":"JOB_15,JOB_15,JOH_21", "CAPBIBLIA":"Jó 14 e 15, João 21", "SIGLAES":"DTN", "CAPES":"85", "NOMES":"Mais uma vez à Beira Mar"},' +
    '"AGO_19": {"REFS":"JOB_16,JOB_17,JOB_18,MAT_28:16-20", "CAPBIBLIA":"Jó 16 a 18, Mateus 28:16-20", "SIGLAES":"DTN", "CAPES":"86", "NOMES":"Ide Ensinai a Todas as Nações"},' +
    '"AGO_20": {"REFS":"JOB_19,JOB_20,JOB_21,JOB_22,JOB_23,JOB_24", "CAPBIBLIA":"Jó 19 a 24", "SIGLAES":"PJ", "CAPES":"****", "NOMES":"Prefacio"},' +
    '"AGO_21": {"REFS":"JOB_25,JOB_26,JOB_27,MAT_13:34-35", "CAPBIBLIA":"Jó 25 a 27, Mateus 13:34 e 35", "SIGLAES":"PJ", "CAPES":"01", "NOMES":"Ensinando por Parábolas"},' +
    '"AGO_22": {"REFS":"JOB_28,JOB_29,MAR_13:1-23", "CAPBIBLIA":"Jó 28 e 29, Mateus 13:1-23", "SIGLAES":"PJ", "CAPES":"02", "NOMES":"O Semeador saiu a Semear"},' +
    '"AGO_23": {"REFS":"JOB_30,JOB_31,MAR_4", "CAPBIBLIA":"Jó 30 e 31, Marcos 4", "SIGLAES":"PJ", "CAPES":"03", "NOMES":"Primeiro a Erva depois a Espiga"},' +
    '"AGO_24": {"REFS":"JOB_32,JOB_33,MAT_13:24-43", "CAPBIBLIA":"Jó 32 e 33, Mateus 13:24-43", "SIGLAES":"PJ", "CAPES":"04", "NOMES":"O Joio"},' +
    '"AGO_25": {"REFS":"JOB_34,JOB_35,JOB_36,MAT_13:31-32", "CAPBIBLIA":"Jó 34 e 36, Mateus 13:31-32", "SIGLAES":"PJ", "CAPES":"05", "NOMES":"Semelhante a um Grão de Mostarda"},' +
    '"AGO_26": {"REFS":"JOB_37,JOB_38,JOB_39", "CAPBIBLIA":"Jó 37 a 39", "SIGLAES":"PJ", "CAPES":"06", "NOMES":"Outras Lições tiradas da Semeadura"},' +
    '"AGO_27": {"REFS":"JOB_40,JOB_41,JOB_42,MAT_13:33", "CAPBIBLIA":"Jó 40 a 42, Mateus 13:33", "SIGLAES":"PJ", "CAPES":"07", "NOMES":"Semelhante ao Fermento"},' +
    '"AGO_28": {"REFS":"ZEP_1,ZEP_2,ZEP_3,MAT_13:44", "CAPBIBLIA":"Sofonias 1 a 3, Mateus 13:44", "SIGLAES":"PJ", "CAPES":"08", "NOMES":"O Tesouro Escondido"},' +
    '"AGO_29": {"REFS":"PSA_25,PSA_26,MAT_13:45-46", "CAPBIBLIA":"Salmos 25 e 26, Mateus 13:45-46", "SIGLAES":"PJ", "CAPES":"09", "NOMES":"A Pérola"},' +
    '"AGO_30": {"REFS":"PSA_27,PSA_28,MAT_13:47-58", "CAPBIBLIA":"Salmos 27 e 28, Mateus 13:47-58", "SIGLAES":"PJ", "CAPES":"10", "NOMES":"A Rede"},' +
    '"AGO_31": {"REFS":"PSA_29,PSA_30,MAT_13:51-52", "CAPBIBLIA":"Salmos 29 e 30, Mateus 13:51 e 52", "SIGLAES":"PJ", "CAPES":"11", "NOMES":"Coisas Novas e Velhas"},' +
    '"SET_1": {"REFS":"PSA_31,LUK_11", "CAPBIBLIA":"Salmos 31 e Lucas 11", "SIGLAES":"PJ", "CAPES":"12", "NOMES":"Pedindo para Dar"},' +
    '"SET_2": {"REFS":"PSA_33,PSA_34,PSA_35,LUK_18:9-14", "CAPBIBLIA":"Salmos 33 e 35, Lucas 18:9-14", "SIGLAES":"PJ", "CAPES":"13", "NOMES":"Dois Adoradores"},' +
    '"SET_3": {"REFS":"PSA_36,PSA_37,PSA_38,LUK_18:1-8", "CAPBIBLIA":"Salmos 36 a 38, Luvas 18:1-8", "SIGLAES":"PJ", "CAPES":"14", "NOMES":"Não fará Deus Justiça aos Seus Escolhidos?"},' +
    '"SET_4": {"REFS":"PSA_39,PSA_40,PSA_41,LUK_15:1-10", "CAPBIBLIA":"Salmos 39 a 41, Lucas 15:1-10", "SIGLAES":"PJ", "CAPES":"15", "NOMES":"Este recebe Pecadores"},' +
    '"SET_5": {"REFS":"PSA_42,PSA_43,PSA_44,LUK_15:11-32", "CAPBIBLIA":"Salmos 42 a 44, Lucas 15:11-32", "SIGLAES":"PJ", "CAPES":"16", "NOMES":"Tinha-se Perdido e Achou-se"},' +
    '"SET_6": {"REFS":"PSA_45,PSA_46,PSA_47,LUK_13", "CAPBIBLIA":"Salmos 45 a 47, Lucas 13", "SIGLAES":"PJ", "CAPES":"17", "NOMES":"Deixa-a Este Ano"},' +
    '"SET_7": {"REFS":"PSA_48,PSA_49,PSA_50,LUK_14", "CAPBIBLIA":"Salmos 48 a 50, Lucas 14", "SIGLAES":"PJ", "CAPES":"18", "NOMES":"Sai pelos Caminhos e Valados"},' +
    '"SET_8": {"REFS":"PSA_52,PSA_53,MAT_18", "CAPBIBLIA":"Salmos 52 e 53, Mateus 18", "SIGLAES":"PJ", "CAPES":"19", "NOMES":"A Medida do Perdão"},' +
    '"SET_9": {"REFS":"PSA_54,PSA_55,LUK_12", "CAPBIBLIA":"Salmos 54 a 55, Lucas 12", "SIGLAES":"PJ", "CAPES":"20", "NOMES":"O Lucro que é Perda"},' +
    '"SET_10": {"REFS":"PSA_56,LUK_16:19-31", "CAPBIBLIA":"Salmos 56, Lucas 16:19-31", "SIGLAES":"PJ", "CAPES":"21", "NOMES":"Está Posto um Grande Abismo"},' +
    '"SET_11": {"REFS":"PSA_58,PSA_59,MAT_21:1-32", "CAPBIBLIA":"Salmos 58 e 59, Mateus 21:1-32", "SIGLAES":"PJ", "CAPES":"22", "NOMES":"Dizendo e Executando"},' +
    '"SET_12": {"REFS":"PSA_60,PSA_61,PSA_62,MAT_21:33-46", "CAPBIBLIA":"Salmos 60 a 62, Mateus 21:33-46", "SIGLAES":"PJ", "CAPES":"23", "NOMES":"A Vinha do Senhor"},' +
    '"SET_13": {"REFS":"PSA_63,PSA_64,PSA_65,MAT_22", "CAPBIBLIA":"Salmos 63 a 65, Mateus 22", "SIGLAES":"PJ", "CAPES":"24", "NOMES":"Sem Veste Nupcial"},' +
    '"SET_14": {"REFS":"PSA_66,PSA_67,PSA_68,MAT_25:14-30,LUK_19:11-27", "CAPBIBLIA":"Salmos 66 a 68, Mateus 25:14-30, Lucas 19:11-27", "SIGLAES":"PJ", "CAPES":"25", "NOMES":"Talentos"},' +
    '"SET_15": {"REFS":"PSA_69,PSA_70,PSA_71,LUK_16:1-18", "CAPBIBLIA":"Salmos 69 a 71, Lucas 16:1-18", "SIGLAES":"PJ", "CAPES":"26", "NOMES":"Amigos e As Riquezas da Injustiça"},' +
    '"SET_16": {"REFS":"PSA_72,PSA_73,PSA_74,LUK_10:23-37", "CAPBIBLIA":"Salmos 72 a 74, Lucas 10:23-37", "SIGLAES":"PJ", "CAPES":"27", "NOMES":"Quem é o meu Próximo"},' +
    '"SET_17": {"REFS":"PSA_75,PSA_76,PSA_77,LUK_18:15-43", "CAPBIBLIA":"Salmos 75 a 77, Lucas 18:15-43", "SIGLAES":"PJ", "CAPES":"28", "NOMES":"O Galardão da Graça"},' +
    '"SET_18": {"REFS":"PSA_78,PSA_79,PSA_80,MAT_25:1-3", "CAPBIBLIA":"Salmos 78 a 80, Mateus 25:1-3", "SIGLAES":"PJ", "CAPES":"29", "NOMES":"O Encontro do Esposo"},' +
    '"SET_19": {"REFS":"PSA_81,PSA_82,PSA_83", "CAPBIBLIA":"Salmos 81 a 83", "SIGLAES":"AA", "CAPES":"****", "NOMES":"Prefacio"},' +
    '"SET_20": {"REFS":"PSA_84,PSA_85,PSA_86,MAT_28:18-20", "CAPBIBLIA":"Salmos 84 a 86, Mateus 28:18-20", "SIGLAES":"AA", "CAPES":"01", "NOMES":"O Propósito de Deus para Sua Igreja"},' +
    '"SET_21": {"REFS":"PSA_87,PSA_88,ACT_1", "CAPBIBLIA":"Salmos 87 e 88, Atos 1", "SIGLAES":"AA", "CAPES":"02", "NOMES":"O Preparo dos Doze"},' +
    '"SET_22": {"REFS":"PSA_89,PSA_90,ACT_1:8", "CAPBIBLIA":"Salmos 89 e 90, Atos 1:8", "SIGLAES":"AA", "CAPES":"03", "NOMES":"A Grande Missão"},' +
    '"SET_23": {"REFS":"PSA_92,PSA_93,ACT_2:1-13", "CAPBIBLIA":"Salmos 92 e 93, Atos 2:1-13", "SIGLAES":"AA", "CAPES":"04", "NOMES":"O Pentecostes"},' +
    '"SET_24": {"REFS":"PSA_94,PSA_95,PSA_96,MAT_3:11,ACT_2:14-47", "CAPBIBLIA":"Salmos 94 a 96, Mateus 3:11, Atos 2:14-47", "SIGLAES":"AA", "CAPES":"05", "NOMES":"O Dom do Espírito"},' +
    '"SET_25": {"REFS":"PSA_97,ACT_3,ACT_4", "CAPBIBLIA":"Salmos 97, Atos 3 e 4", "SIGLAES":"AA", "CAPES":"06", "NOMES":"A Porta do Tenplo"},' +
    '"SET_26": {"REFS":"PSA_98,PSA_99,PSA_100,ACT_5:1-11", "CAPBIBLIA":"Salmos 98 a 100, Atos 5:1-11", "SIGLAES":"AA", "CAPES":"07", "NOMES":"Uma Advertência a Hipocrisia"},' +
    '"SET_27": {"REFS":"PSA_101,PSA_102,ACT_5:12-42", "CAPBIBLIA":"Salmos 101 e 102, Atos 5:12-42", "SIGLAES":"AA", "CAPES":"08", "NOMES":"Perante o Sinédrio"},' +
    '"SET_28": {"REFS":"PSA_103,PSA_104,ACT_6", "CAPBIBLIA":"Salmos 103 e 104 e Atos 6", "SIGLAES":"AA", "CAPES":"09", "NOMES":"Os Sete Diáconos"},' +
    '"SET_29": {"REFS":"PSA_105,PSA_106,ACT_7", "CAPBIBLIA":"Salmos 105 e 106 e Atos 7, ", "SIGLAES":"AA", "CAPES":"10", "NOMES":"O Primeiro Mártir Cristão"},' +
    '"SET_30": {"REFS":"PSA_107,PSA_108,ACT_8", "CAPBIBLIA":"Salmos 107 e 108 e Atos 8", "SIGLAES":"AA", "CAPES":"11", "NOMES":"O Evangelho em Samaria"},' +
    '"OUT_1": {"REFS":"PSA_109,PSA_110,ACT_9:1-18", "CAPBIBLIA":"Salmos 109 e 110, Atos 9:1-18", "SIGLAES":"AA", "CAPES":"12", "NOMES":"De perseguidor a Discípulo"},' +
    '"OUT_2": {"REFS":"PSA_111,PSA_112,PSA_113,ACT_9:19-30", "CAPBIBLIA":"Salmos 111 a 113, Atos 9:19-30", "SIGLAES":"AA", "CAPES":"13", "NOMES":"Dias de Preparo"},' +
    '"OUT_3": {"REFS":"PSA_114,PSA_115,ACT_9,ACT_10,ACT_11", "CAPBIBLIA":"Salmos 114 e 115, Atos 9 a 11", "SIGLAES":"AA", "CAPES":"14", "NOMES":"Um Inquiridor da Verdade"},' +
    '"OUT_4": {"REFS":"PSA_116,PSA_117,PSA_118,ACT_12", "CAPBIBLIA":"Salmos 116 a 118, Atos 12", "SIGLAES":"AA", "CAPES":"15", "NOMES":"Libertado da Prisão"},' +
    '"OUT_5": {"REFS":"PSA_119,ACT_13:1-3", "CAPBIBLIA":"Salmos 119, Atos 13:1-3", "SIGLAES":"AA", "CAPES":"16", "NOMES":"A Mensagem do Evangelho em Antioquia"},' +
    '"OUT_6": {"REFS":"PSA_120,PSA_121,ACT_13:4-52", "CAPBIBLIA":"Salmos 120 e 121, Atos 13:4-52", "SIGLAES":"AA", "CAPES":"17", "NOMES":"Arautos do Evngelho"},' +
    '"OUT_7": {"REFS":"PSA_122,PSA_123,PSA_124,ACT_14", "CAPBIBLIA":"Salmos 122 a 124, Atos 14", "SIGLAES":"AA", "CAPES":"18", "NOMES":"Pregando entre Gentios"},' +
    '"OUT_8": {"REFS":"ACT_15,ROM_1,ROM_2", "CAPBIBLIA":"Atos 15, Romanos 1 e 2", "SIGLAES":"AA", "CAPES":"19", "NOMES":"Judeus e Gentios"},' +
    '"OUT_9": {"REFS":"ACT_16:1-5,ROM_3", "CAPBIBLIA":"Atos 16:1-5, Romanos 3", "SIGLAES":"AA", "CAPES":"20", "NOMES":"Exaltando a Cruz"},' +
    '"OUT_10": {"REFS":"ACT_16:6-40,ROM_4,ROM_5", "CAPBIBLIA":"Atos 16:6-40, Romanos 4 e 5", "SIGLAES":"AA", "CAPES":"21", "NOMES":"Nas Regiões Distantes"},' +
    '"OUT_11": {"REFS":"ACT_17:1-9,1TH_1,1TH_2", "CAPBIBLIA":"Atos 17:1-9, I Tessalonicenses 1 e 2", "SIGLAES":"AA", "CAPES":"22", "NOMES":"Tessalônica"},' +
    '"OUT_12": {"REFS":"ACT_17:10-34,1CO_1,1CO_2,1CO_3", "CAPBIBLIA":"Atos 17:10-34, I Coríntios 1 a 3", "SIGLAES":"AA", "CAPES":"23", "NOMES":"Beréia e Atenas"},' +
    '"OUT_13": {"REFS":"ACT_18:1-17,1CO_4,1CO_5,1CO_6", "CAPBIBLIA":"Atos 18:1-17, I Coríntios 4 a 6", "SIGLAES":"AA", "CAPES":"24", "NOMES":"Corinto"},' +
    '"OUT_14": {"REFS":"1TH_3,1TH_4,1TH_5", "CAPBIBLIA":"I Tessalonicenses 3 a 5", "SIGLAES":"AA", "CAPES":"25", "NOMES":"As Cartas aos Tessalonicenses"},' +
    '"OUT_15": {"REFS":"ACT_18:18-28,1CO_7,1CO_8,1CO_9", "CAPBIBLIA":"Atos 18:18-28, I Coríntios 7 a 9", "SIGLAES":"AA", "CAPES":"26", "NOMES":"Apoio em Corinto"},' +
    '"OUT_16": {"REFS":"ACT_19:1-20,EPH_1,EPH_2,EPH_3", "CAPBIBLIA":"Atos 19:1-20, Efésios 1 a 3", "SIGLAES":"AA", "CAPES":"27", "NOMES":"Éfeso"},' +
    '"OUT_17": {"REFS":"ACT_19:21-41,EPH_4,EPH_5,EPH_6", "CAPBIBLIA":"Atos 19:21-41, Efésios 4 a 6", "SIGLAES":"AA", "CAPES":"28", "NOMES":"Dias de Luta e de Prova"},' +
    '"OUT_18": {"REFS":"1CO_10,1CO_11,1CO_12", "CAPBIBLIA":"I Coríntios 10 a 12", "SIGLAES":"AA", "CAPES":"29", "NOMES":"Mensagem de AAdvertência"},' +
    '"OUT_19": {"REFS":"1CO_13,1CO_14,1CO_15,1CO_16", "CAPBIBLIA":"I Coríntios 13 a 16", "SIGLAES":"AA", "CAPES":"30", "NOMES":"Chamado a Mais Elevada Ordem"},' +
    '"OUT_20": {"REFS":"2CO_1,2CO_2,2CO_3", "CAPBIBLIA":"II Coríntios 1 a 3", "SIGLAES":"AA", "CAPES":"31", "NOMES":"A Mensagem Atendida"},' +
    '"OUT_21": {"REFS":"2CO_4,2CO_5,2CO_6", "CAPBIBLIA":"II Coríntios 4 a 6", "SIGLAES":"AA", "CAPES":"32", "NOMES":"Uma Igreja Liberal"},' +
    '"OUT_22": {"REFS":"2CO_7,2CO_8,2CO_9", "CAPBIBLIA":"II Coríntios 7 a 9", "SIGLAES":"AA", "CAPES":"33", "NOMES":"Trabalho sobre Dificuldades"},' +
    '"OUT_23": {"REFS":"2CO_10,2CO_11,2CO_12,2CO_13", "CAPBIBLIA":"II Coríntios 10 a 13", "SIGLAES":"AA", "CAPES":"34", "NOMES":"Ministério Consagrado"},' +
    '"OUT_24": {"REFS":"ROM_6,ROM_7,ROM_8", "CAPBIBLIA":"Romanos 6 a 8", "SIGLAES":"AA", "CAPES":"35", "NOMES":"Salvação para os Judeus"},' +
    '"OUT_25": {"REFS":"GAL_1,GAL_2,GAL_3", "CAPBIBLIA":"Gálatas 1 a 3", "SIGLAES":"AA", "CAPES":"36", "NOMES":"Apostasia na Galácia"},' +
    '"OUT_26": {"REFS":"GAL_4,GAL_5,GAL_6,ACT_20", "CAPBIBLIA":"Gálatas 4 a 6, Atos 20", "SIGLAES":"AA", "CAPES":"37", "NOMES":"A Última Viagem de Paulo"},' +
    '"OUT_27": {"REFS":"ACT_21,ACT_22,ACT_23", "CAPBIBLIA":"Atos 21 a 23", "SIGLAES":"AA", "CAPES":"38", "NOMES":"Paulo Prisioneiro"},' +
    '"OUT_28": {"REFS":"ACT_24,ROM_9,ROM_10", "CAPBIBLIA":"Atos 24, Romanos 9 e 10", "SIGLAES":"AA", "CAPES":"39", "NOMES":"Perante o Tribunal de Cesaréia"},' +
    '"OUT_29": {"REFS":"ACT_25,ROM_11,ROM_12", "CAPBIBLIA":"Atos 25, Romanos 11 e 12", "SIGLAES":"AA", "CAPES":"40", "NOMES":"Paulo Apela para César"},' +
    '"OUT_30": {"REFS":"ACT_26,ROM_13,ROM_14", "CAPBIBLIA":"Atos 26, Romanos 13 e 14", "SIGLAES":"AA", "CAPES":"41", "NOMES":"Quase Persuadido"},' +
    '"OUT_31": {"REFS":"ACT_27,ROM_15,ROM_16", "CAPBIBLIA":"Atos 27, Romanos 15 e 16", "SIGLAES":"AA", "CAPES":"42", "NOMES":"A Viagem e o Naufrágio"},' +
    '"NOV_1": {"REFS":"ACT_28,PHM_1", "CAPBIBLIA":"Filemon 1, Atos 28", "SIGLAES":"AA", "CAPES":"43", "NOMES":"Em Roma"},' +
    '"NOV_2": {"REFS":"TIT_1,TIT_2,TIT_3", "CAPBIBLIA":"Tito 1 a 3", "SIGLAES":"AA", "CAPES":"44", "NOMES":"Os da Casa de César"},' +
    '"NOV_3": {"REFS":"PHI_1,PHI_2,PHI_3,PHI_4", "CAPBIBLIA":"Filipenses 1 a 4", "SIGLAES":"AA", "CAPES":"45", "NOMES":"Carta de Roma"},' +
    '"NOV_4": {"REFS":"COL_1,COL_2,COL_3,COL_4", "CAPBIBLIA":"Colossenses 1 a 4", "SIGLAES":"AA", "CAPES":"46", "NOMES":"Em Liberdade"},' +
    '"NOV_5": {"REFS":"1TI_1,1TI_2,1TI_3", "CAPBIBLIA":"I Timóteo 1 a 3", "SIGLAES":"AA", "CAPES":"47", "NOMES":"A Última Prisão"},' +
    '"NOV_6": {"REFS":"1TI_4,1TI_5,1TI_6", "CAPBIBLIA":"I Timóteo 4 a 6", "SIGLAES":"AA", "CAPES":"48", "NOMES":"Paulo perante Nero"},' +
    '"NOV_7": {"REFS":"2TI_1,2TI_2,2TI_3,2TI_4", "CAPBIBLIA":"II Timóteo 1 a 4", "SIGLAES":"AA", "CAPES":"49", "NOMES":"Última Carta de Paulo"},' +
    '"NOV_8": {"REFS":"1PE_1,1PE_2,1PE_3", "CAPBIBLIA":"I Pedro 1 a 3", "SIGLAES":"AA", "CAPES":"50", "NOMES":"Condenado a Morte"},' +
    '"NOV_9": {"REFS":"1PE_4,1PE_5", "CAPBIBLIA":"I Pedro 4 a 5", "SIGLAES":"AA", "CAPES":"51", "NOMES":"Um Fiel Subpastor"},' +
    '"NOV_10": {"REFS":"2PE_1,2PE_2,2PE_3", "CAPBIBLIA":"II Pedro 1 a 3", "SIGLAES":"AA", "CAPES":"52", "NOMES":"Firme até o Fim"},' +
    '"NOV_11": {"REFS":"1JO_1,1JO_2,1JO_3,1JO_4,1JO_5", "CAPBIBLIA":"I João 1 a 5", "SIGLAES":"AA", "CAPES":"53", "NOMES":"João, o Discípulo Amado"},' +
    '"NOV_12": {"REFS":"2JO_1,3JO_1,JUD_1", "CAPBIBLIA":"II João, III João, Judas", "SIGLAES":"AA", "CAPES":"54", "NOMES":"Uma Fiel Testemunha"},' +
    '"NOV_13": {"REFS":"PSA_125,PSA_126,PSA_127,PSA_128,PSA_129,PSA_130", "CAPBIBLIA":"Salmos 125 a 130", "SIGLAES":"AA", "CAPES":"55", "NOMES":"Transformação pela Graça"},' +
    '"NOV_14": {"REFS":"PSA_131,PSA_132,PSA_133,PSA_134,PSA_135,PSA_136,REV_1", "CAPBIBLIA":"Salmos 131 a 136, Apocalipse 1", "SIGLAES":"AA", "CAPES":"56", "NOMES":"Patmos"},' +
    '"NOV_15": {"REFS":"PSA_137,PSA_138,PSA_139,PSA_140,REV_2", "CAPBIBLIA":"Salmos 137 a 140, Apocalipse 2", "SIGLAES":"AA", "CAPES":"57", "NOMES":"O Apocalipse"},' +
    '"NOV_16": {"REFS":"PSA_141,PSA_142,PSA_143,REV_3", "CAPBIBLIA":"Salmos 141 a 143, Apocalipse 3", "SIGLAES":"AA", "CAPES":"58", "NOMES":"A Igreja Triunfante"},' +
    '"NOV_17": {"REFS":"PSA_146,PSA_147,PSA_148,PSA_149,PSA_150", "CAPBIBLIA":"Salmos 146 a 150", "SIGLAES":"GC", "CAPES":"**", "NOMES":"Introdução"},' +
    '"NOV_18": {"REFS":"LUK_19:41-44,REV_4,REV_5", "CAPBIBLIA":"Lucas 19:41-44, Apocalipse 4 e 5", "SIGLAES":"GC", "CAPES":"01", "NOMES":"Predito o Destino do Mundo"},' +
    '"NOV_19": {"REFS":"PRO_1,PRO_2,PRO_3,MAT_24:9-22,REV_8", "CAPBIBLIA":"Provérbios 1 a 3, Mateus 24:9-22, Apocalipse 8", "SIGLAES":"GC", "CAPES":"02", "NOMES":"O Valor dos Mártires"},' +
    '"NOV_20": {"REFS":"DAN_7:25,2TH_1,2TH_2,2TH_3", "CAPBIBLIA":"Daniel 7:25, II Tessalonicenses 1 a 3", "SIGLAES":"GC", "CAPES":"03", "NOMES":"Como começaram as Trevas"},' +
    '"NOV_21": {"REFS":"REV_7,REV_8,REV_9", "CAPBIBLIA":"Apocalipse 7 a 9", "SIGLAES":"GC", "CAPES":"04", "NOMES":"Um Poder que Difunde Luz"},' +
    '"NOV_22": {"REFS":"PRO_4,PRO_5,PRO_6", "CAPBIBLIA":"Provérbios 4 a 6", "SIGLAES":"GC", "CAPES":"05", "NOMES":"Arautos de uma Era Melhor"},' +
    '"NOV_23": {"REFS":"PRO_7,PRO_8,PRO_9", "CAPBIBLIA":"Provérbios 7 a 9", "SIGLAES":"GC", "CAPES":"06", "NOMES":"Dois Heróis da Idade Média"},' +
    '"NOV_24": {"REFS":"PRO_10,PRO_11,PRO_12", "CAPBIBLIA":"Provérbios 10 a 12", "SIGLAES":"GC", "CAPES":"07", "NOMES":"A Influência de um Bom Lar"},' +
    '"NOV_25": {"REFS":"PRO_13,PRO_14,PRO_15", "CAPBIBLIA":"Provérbios 13 a 15", "SIGLAES":"GC", "CAPES":"08", "NOMES":"O Poder Triunfante da Verdade"},' +
    '"NOV_26": {"REFS":"PRO_16,PRO_17,PRO_18", "CAPBIBLIA":"Provérbios 16 a 18", "SIGLAES":"GC", "CAPES":"09", "NOMES":"Luz na Suíça"},' +
    '"NOV_27": {"REFS":"PRO_19,PRO_20,PRO_21", "CAPBIBLIA":"Provérbios 19 a 21", "SIGLAES":"GC", "CAPES":"10", "NOMES":"A Europa Desperta"},' +
    '"NOV_28": {"REFS":"PRO_22,PRO_23,PRO_24", "CAPBIBLIA":"Provérbios 22 a 24", "SIGLAES":"GC", "CAPES":"11", "NOMES":"Os Príncipes Amparam a Verdade"},' +
    '"NOV_29": {"REFS":"ECC_1,ECC_2,ECC_3", "CAPBIBLIA":"Eclesiastes 1 a 3", "SIGLAES":"GC", "CAPES":"12", "NOMES":"Os Nobres da França"},' +
    '"NOV_30": {"REFS":"ECC_4,ECC_5,ECC_6", "CAPBIBLIA":"Eclesiastes 4 a 6", "SIGLAES":"GC", "CAPES":"13", "NOMES":"Liberdade nos Países Baixos"},' +
    '"DEZ_1": {"REFS":"ECC_7,ECC_8,ECC_9", "CAPBIBLIA":"Eclesiastes 7 e 8", "SIGLAES":"GC", "CAPES":"14", "NOMES":"Progressos na Inglaterra"},' +
    '"DEZ_2": {"REFS":"ECC_10,ECC_11,REV_11", "CAPBIBLIA":"Eclesiastes 10 e 11, Apocalipse 11", "SIGLAES":"GC", "CAPES":"15", "NOMES":"A Escritura Sagrada e a Revolução Francesa"},' +
    '"DEZ_3": {"REFS":"SOL_1,SOL_2,SOL_3", "CAPBIBLIA":"Cantares 1 a 3", "SIGLAES":"GC", "CAPES":"16", "NOMES":"O Mais Sagrado Direito do Homem"},' +
    '"DEZ_4": {"REFS":"SOL_4,SOL_5,SOL_6", "CAPBIBLIA":"Cantares 4 a 6", "SIGLAES":"GC", "CAPES":"17", "NOMES":"A Esperança que Infunde a Alegria"},' +
    '"DEZ_5": {"REFS":"SOL_7,SOL_8", "CAPBIBLIA":"Cantares 7 a 8", "SIGLAES":"GC", "CAPES":"18", "NOMES":"Uma Profecia muito Significativa"},' +
    '"DEZ_6": {"REFS":"PSA_144,PSA_145", "CAPBIBLIA":"Salmos 144 e 145", "SIGLAES":"GC", "CAPES":"19", "NOMES":"Luz para os Nossos Dias"},' +
    '"DEZ_7": {"REFS":"REV_14:6-7", "CAPBIBLIA":"Apocalipse 14:6-7", "SIGLAES":"GC", "CAPES":"20", "NOMES":"Um Grande Movimento Mundial"},' +
    '"DEZ_8": {"REFS":"HEB_1,HEB_2,HEB_3,HEB_4,HEB_5,REV_14:8", "CAPBIBLIA":"Hebreus 1 a 5, Apocalipse 14:8", "SIGLAES":"GC", "CAPES":"21", "NOMES":"A Causa da Degradação Atual"},' +
    '"DEZ_9": {"REFS":"PRO_25,REV_10", "CAPBIBLIA":"Provérbios 25, Apocalipse 10", "SIGLAES":"GC", "CAPES":"22", "NOMES":"Profecias Alentadoras"},' +
    '"DEZ_10": {"REFS":"DAN_8,DAN_9:25-27,LEV_16:14,HEB_8,HEB_9", "CAPBIBLIA":"Daniel 8, Daniel 9:25-27, Levítico 16:14, Hebreus 8 e 9", "SIGLAES":"GC", "CAPES":"23", "NOMES":"O Santuário Celestial"},' +
    '"DEZ_11": {"REFS":"DAN_8:14,DAN_9,ECC_11:9-10,ECC_12", "CAPBIBLIA":"Daniel 8:14, Daniel 9, Eclesiastes 11:9-10, Eclesiastes 12", "SIGLAES":"GC", "CAPES":"24", "NOMES":"Quando começa o Julgamento Divino"},' +
    '"DEZ_12": {"REFS":"HEB_6,HEB_7,EXO_20", "CAPBIBLIA":"Hebreus 6 e 7, Êxodo 20", "SIGLAES":"GC", "CAPES":"25", "NOMES":"A Imutável Lei de Deus"},' +
    '"DEZ_13": {"REFS":"HEB_10,HEB_11,ISA_56", "CAPBIBLIA":"Hebreus 10 e 11, Isaías 56", "SIGLAES":"GC", "CAPES":"26", "NOMES":"Restauração da Verdade"},' +
    '"DEZ_14": {"REFS":"HEB_12,HEB_13", "CAPBIBLIA":"Hebreus 12 e 13", "SIGLAES":"GC", "CAPES":"27", "NOMES":"A Vida que Satisfaz"},' +
    '"DEZ_15": {"REFS":"JAM_1,JAM_2,JAM_3,DAN_7", "CAPBIBLIA":"Tiago 1 a 3, Daniel 7", "SIGLAES":"GC", "CAPES":"28", "NOMES":"O Grande Juízo"},' +
    '"DEZ_16": {"REFS":"JAM_4,JAM_5", "CAPBIBLIA":"Tiago 4 e 5", "SIGLAES":"GC", "CAPES":"29", "NOMES":"A Origem do Mal e da Dor"},' +
    '"DEZ_17": {"REFS":"1CH_18,1CH_19,1CH_20", "CAPBIBLIA":"1 Crônicas 18 a 20", "SIGLAES":"GC", "CAPES":"30", "NOMES":"O Pior Inimigo do Homem"},' +
    '"DEZ_18": {"REFS":"1CH_21,1CH_22,1CH_23", "CAPBIBLIA":"1 Crônicas 21 a 23", "SIGLAES":"GC", "CAPES":"31", "NOMES":"Os Invisíveis Defensores dos Homens"},' +
    '"DEZ_19": {"REFS":"1CH_24,1CH_25,REV_12", "CAPBIBLIA":"1 Crônicas 24 e 25, Apocalipse 12", "SIGLAES":"GC", "CAPES":"32", "NOMES":"Os Ardis de Satanás"},' +
    '"DEZ_20": {"REFS":"EZE_18:18,ECC_9:8", "CAPBIBLIA":"Ezequiel 18:18, Eclesiastes 9:8", "SIGLAES":"GC", "CAPES":"33", "NOMES":"É o Homem Importal?"},' +
    '"DEZ_21": {"REFS":"1CH_26,1CH_27,EXO_22,REV_21", "CAPBIBLIA":"1 Crônicas 26 e 27, Êxodo 22, Apocalipse 21", "SIGLAES":"GC", "CAPES":"34", "NOMES":"Oferece o Espiritismo alguma Esperança?"},' +
    '"DEZ_22": {"REFS":"REV_13,REV_14", "CAPBIBLIA":"Apocalipse 13 e 14", "SIGLAES":"GC", "CAPES":"35", "NOMES":"Ameaça a Consciência"},' +
    '"DEZ_23": {"REFS":"1CH_28,1CH_29", "CAPBIBLIA":"1 Crônicas 28 e 29", "SIGLAES":"GC", "CAPES":"36", "NOMES":"O Maior Perigo para o Lar"},' +
    '"DEZ_24": {"REFS":"PRO_26,PRO_27,PRO_28", "CAPBIBLIA":"Provérbios 26 a 28", "SIGLAES":"GC", "CAPES":"37", "NOMES":"Nossa Única Salvaguarda"},' +
    '"DEZ_25": {"REFS":"PRO_29,REV_17,REV_18", "CAPBIBLIA":"Provérbios 29, Apocalipse 17 e 18", "SIGLAES":"GC", "CAPES":"38", "NOMES":"O Último Convite Divino"},' +
    '"DEZ_26": {"REFS":"PSA_91,REV_15,REV_16,DAN_10,DAN_11,DAN_12", "CAPBIBLIA":"Salmos 91, Apocalipse 15 e 16, Daniel 10 a 12", "SIGLAES":"GC", "CAPES":"39", "NOMES":"Aproxima-se o Tempo de Angústia"},' +
    '"DEZ_27": {"REFS":"REV_6,REV_19", "CAPBIBLIA":"Apocalipse 6 e 19", "SIGLAES":"GC", "CAPES":"40", "NOMES":"O Livramento dos Justos"},' +
    '"DEZ_28": {"REFS":"PRO_30,PRO_31", "CAPBIBLIA":"Provérbios 30 e 31, Apocalipse 20", "SIGLAES":"GC", "CAPES":"41", "NOMES":"Será desolada a Terra"},' +
    '"DEZ_29": {"REFS":"PSA_46,REV_21,REV_22", "CAPBIBLIA":"Salmos 46, Apocalipse 21 e 22", "SIGLAES":"GC", "CAPES":"42", "NOMES":"O Final e Glorioso Triunfo"},' +
    '"DEZ_30": {"REFS":"", "CAPBIBLIA":"Revisão Geral do Velho Testamento", "SIGLAES":"**", "CAPES":"**", "NOMES":"****"},' +
    '"DEZ_31": {"REFS":"", "CAPBIBLIA":"Revisão Geral do Novo Testamento", "SIGLAES":"**", "CAPES":"**", "NOMES":"****"}' +
'}';

 function getCapitulosBibliaPlano(chave) {
    let planos = Object.assign({}, JSON.parse(planosstring));
    return planos[chave].CAPBIBLIA;
}

 function getREFSDia(chave) {
    let planos = Object.assign({}, JSON.parse(planosstring));
    return planos[chave].REFS;
}

 function getCapitulosESPlano(chave) {
    let planos = Object.assign({}, JSON.parse(planosstring));
    return planos[chave].CAPES;
}
 function getTituloCapituloESPlano(chave) {
    let planos = Object.assign({}, JSON.parse(planosstring));
    return planos[chave].NOMES;
}
 function getSiglaESPlano(chave) {
    let planos = Object.assign({}, JSON.parse(planosstring));
    return planos[chave].SIGLAES;
}
function getNomeLivro(chave) {
    if (chave=="**") return '**';
    let planos = Object.assign({}, JSON.parse(livrosstring));
    return planos[chave];
}

function getURLPDF(sigla){
    let urls = Object.assign({}, JSON.parse(urllivrospdf));
    return urls[sigla];
}
//fixme problema quando lvro is null
function getURLLivro(sigla, capitulo){
    const referencia = sigla + capitulo;
    if (sigla == "AA") {
        return null;
    }
    return leitura_ep[referencia];
}

function getVersosCapitulo(referencia) {
             let versos = [];
             let chave = referencia + '_1';
             let i = 1;
             while(blv[chave] != undefined) {
                versos.push(chave);
                i += 1;
                chave = referencia + '_' + i;
             }
             return versos;
}

function getVersosRangeCapitulo(referencia) {
    const partes = referencia.split(':');
    const ref = partes[0];
    const cauda = partes[1];
    const porcoes = cauda.split('-');
    let inicio = 0;
    let fim = 0;
    console.log(porcoes, porcoes.length)
    if (porcoes.length < 2) {
        inicio = fim = porcoes[0];
    } else {
        inicio = porcoes[0];
        fim = porcoes[1];
    }
    let versos=[];
    for (let i = inicio; i <= fim; i++) {
        versos.push(ref + '_' + i);
    }
    return versos;
}


function getVersos(referencia) {
          // tem range de versiculos ?
          let versos = [];
          if (referencia.indexOf(':') < 0) {
               // console.log('passou 2');
                versos = getVersosCapitulo(referencia);
          } else {
               // console.log('passou 3');
                versos = getVersosRangeCapitulo(referencia);
          }
          return versos;
}

/**
 * 
 * @param String referencia
 * 
 * Entradas: MAT_1
 *           MAT_1:5-8
 *           MAT_1:8               [TODO]
 *           [PSA_1, PSA_2, PSA_23:2-4] 
 */
function calcularEndereco(referencia) {
    let versos = [];
    // tem multiplas referencias
    if (referencia.indexOf(',') < 0) {
       //console.log('passou 1');
       versos = getVersos(referencia);
    } else {
       let items = referencia.split(',');
       items.forEach(element => {
           let temp = getVersos( element.trim() );
           //versos = versos.concat(temp);
           versos.push(temp);
       });
    }
    return versos;
}

function lerTexto(referencia) {
       return blv[referencia];
}

function reiniciar() {
    const storage = window.localStorage;
    storage.clear();
    atualizarMeses();
}
