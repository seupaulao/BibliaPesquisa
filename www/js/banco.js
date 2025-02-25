/* ************************* proposta local storage ************************ */
          var db;
          var eMarcacao=[];
          var eComentario=[];
          var eSelecao=[];
          var ePlano = [];
/* TODO PJR 2022 05 18
 *
 * simplificar plano de estudo, agora deve guardar
 *
 * id_plano    ultima_posicao_lida_id_plano
 *
*/

          // zera a estrutura do plano    
          function zerarEPlano()
          {
                ePlano = [];
          }  

/* ************************ estrutura de dados ******************* */

          function inserirEstruturaSelecao(id, cor)
          {
            eSelecao.push({'id': parseInt(id), 'cor': cor});
          }

          function inserirEstruturaMarcacao(selecaoid, id, versaoid, livroid, capituloid, versiculoid)
          {
             eMarcacao.push({'selecaoid':parseInt(selecaoid), 'id': parseInt(id), 'versao': parseInt(versaoid), 'livro': parseInt(livroid), 'capitulo': parseInt(capituloid), 'verso': parseInt(versiculoid)});
          }

          function inserirEstruturaComentario(selecaoid, id, com)
          {
             eComentario.push({'selecaoid': parseInt(selecaoid) ,'id': parseInt(id), 'comentario': com});
          }



/* ************************ pesquisando estrutura ******************* */
        function testeVersoTemp(elemento, va, b, c, v)
        {
          if (elemento.versao==va && elemento.livro==b && elemento.capitulo==c && elemento.verso==v)
          {
            return true;
          }
          return false;
        }

        function getIdESelecao(va, l, c, v)
        {
             var selid=-1;
             for(var i = eMarcacao.length-1; i >= 0; i--)
              {
                 if (testeVersoTemp(eMarcacao[i], va, l, c, v) ){
                     if (eMarcacao[i].selecaoid != NaN && eMarcacao[i].selecaoid != undefined) {
                        selid = eMarcacao[i].selecaoid;
                        if ( getCorESelecao(selid) != null && getCorESelecao(selid) != undefined) { break;}
                     }
                 }
              }
              return selid;
        }

        function getCorESelecao(id)
          {
           // console.log("Estou procurando o id:" + id);

            var valor=null;

            if (id<0) {
               return null;
            }

            for(var j = 0; j < eSelecao.length; j++)
            {
               if (parseInt(id) == parseInt(eSelecao[j].id))
               {
                  valor = eSelecao[j].cor;
                  break;
               }
            }
            return valor;
            //return eSelecao[id-1].cor;
          }

/* ************************ operacoes basicas de gerenciamento de banco  ******************* */


          function openDatabase()
          {
             db = window.localStorage;
            // zerarBanco();
          }

          function zerarEstrutura()
          {
              eComentario=[];
              eMarcacao=[];
              eSelecao=[];
          } 

          function zerarBanco()
          {
              db.removeItem(getNomeTabela(0));
              db.removeItem(getNomeTabela(1));
              db.removeItem(getNomeTabela(2));
              db.removeItem('slotPlanos');
              zerarEstrutura(); 
              zerarEPlano();
              
              document.getElementById("msgConfig").innerHTML=getNacionalidade()=='en-US' ? "<h4>Success</h4><p>Vers purged with success</p>": "<h4>Sucesso</h4><p>Versos apagados com &ecirc;xito</p>";
              w3.show("#msgConfig");
          }

          function zerarComentariosBanco()
          {
              db.removeItem(getNomeTabela(2));
              zerarEstrutura(); 
              document.getElementById("msgConfig").innerHTML=getNacionalidade()=='en-US' ? "<h4>Success</h4><p>Comments purged with success</p>": "<h4>Sucesso</h4><p>Coment&aacute;rios apagados com &ecirc;xito</p>";
              w3.show("#msgConfig");
          }


          function getNumeroRegistrosTeste()
          {
             return 2000;
          }

          function getSobrenome(tipo)
          {
            var sobrenome="Selecao";
            switch(tipo){
              case 0: sobrenome="Selecao"; break;
              case 1: sobrenome="Marcacao"; break;
              case 2: sobrenome="Comentario"; break;
            }
            return sobrenome;
          }

          function ultimoSlot(tipo)
          {
            var sobrenome=getSobrenome(tipo);

            if (db.getItem("ultimoSlot"+sobrenome) == null || db.getItem("ultimoSlot"+sobrenome) == "NaN" || db.getItem("ultimoSlot"+sobrenome) == "null")
            {
               db.setItem("ultimoSlot"+sobrenome, 0);
               return 0;
            } else {
               return parseInt(db.getItem("ultimoSlot"+sobrenome));
            }
          }

          function getNomeTabela(tipo)
          {
            var ultimoDigitoSlot = ultimoSlot(0);
            var sobrenome=getSobrenome(tipo);
            return "slot" + sobrenome + ultimoDigitoSlot;
          }

          function contarRegistros(nome)
          {
             var registros = db.getItem(nome);
             if (registros == null || registros == "NaN" || registros == "null" || registros == "") {
              return 0;
             }
             var regArray = registros.split(";");
             return regArray.length-1;
          }

          //o controle de registros slot, o ultimo digito slot eh 
          // controlado somente pela Selecao
          function controleRegistrosSlot(nome)
          {
             var sobrenome = getSobrenome(0);
             var registros = contarRegistros(nome);
             if (registros >= getNumeroRegistrosTeste())
             {
                var ultimo = ultimoSlot(0);
                ultimo += 1;
                db.setItem("ultimoSlot"+sobrenome, ultimo);
                return getNomeTabela(0);
             }
             return nome;
          }

          //eh a funcao basica de salvar chave, valor => salva um valor na chave
          //eh insert
          //eh update
          function salvar(nome, str)
          {
             var reg = db.getItem(nome);
             if (reg==null||reg==undefined) reg=""; 
             reg = reg + str;
             db.setItem(nome, reg);
          }

          //deleta um registro
          function apagarRegistros(nome)
          {
            db.removeItem(nome);
          }



/* ************************ salvando, excluindo ******************* */

          function getRegistrosComentarioPorSelecaoId(selid)
          {
            var nome = getNomeTabela(2);
            var registros = db.getItem(nome);
            if (registros == null) return 0;
            var vetor = registros.split(";");
            var c = 0; 
            for(var i = 0 ; i < vetor.length; i++)
            {
              if (vetor[i].length > 0 )
              {
               var r = vetor[i].split(",");
               if(parseInt(selid) == parseInt(r[0].replace("null","")))
               {
                  c+=1;
               }
              }
            }
            return c;
          }

          function inserirComentarioBanco(selid, id, texto)
          {
             var nome = getNomeTabela(2);
             var seq = getRegistrosComentarioPorSelecaoId(selid);
             var idc = id == null ? seq+1 : id;
             var str = selid + "," + idc + "," + texto + ";";
             salvar(nome, str);
          }

          function inserirMarcacaoBanco(selid, id, versao, livro, capitulo, versiculo)
          {
             var nome = getNomeTabela(1);
             var str = selid + "," + id + "," + versao +"," + livro +"," + capitulo +"," + versiculo + ";";
             salvar(nome, str);
          }


          function inserirSelecaoBanco(selid, cor)
          {
             var nome = getNomeTabela(0);
             nome = controleRegistrosSlot(nome);
             selid = selid == null ? contarRegistros(nome) + 1 : selid;
             var str = selid + "," + cor + ";";
             salvar(nome, str);
             return selid;
          }

          function salvarMarcacaoComentarioBanco(tselecao, tmarcacao, tcomentario)
          {
             //salvando selecao
             var selid = inserirSelecaoBanco(null,tselecao[0].cor); 
             inserirEstruturaSelecao(selid,tselecao[0].cor);
             //salvando marcacao
             for(var i=0; i<tmarcacao.length; i++)
             {
                inserirMarcacaoBanco(selid, tmarcacao[i].id, tmarcacao[i].versao, tmarcacao[i].livro, tmarcacao[i].capitulo, tmarcacao[i].verso);
                inserirEstruturaMarcacao(selid, tmarcacao[i].id, tmarcacao[i].versao, tmarcacao[i].livro, tmarcacao[i].capitulo, tmarcacao[i].verso);
             }
             //salvando comentarios
             for(var i=0; i<tcomentario.length; i++)
             {
                inserirComentarioBanco(selid, tcomentario[i].id, tcomentario[i].comentario);
                inserirEstruturaComentario(selid, tcomentario[i].id, tcomentario[i].comentario);
             }
             setUltimoSelid(selid);
          }

          function removerMarcacaoComentarioBanco(tselecao, tmarcacao, tcomentario)
          {
             alert("EM DESENVOLVIMENTO");
          }


          //exclui um comentario do banco
          function excluirComentarioBanco(selid, idcom)
          {
             var nome = getNomeTabela(2);
             apagarRegistros(nome);
                for (var i=0; i<eComentario.length; i++)
                {
                                 if (parseInt(eComentario[i].selecaoid) != parseInt(selid))
                                 {
                                    inserirComentarioBanco(eComentario[i].selecaoid, eComentario[i].id, eComentario[i].comentario);                              
                                 }
                                 else {
                                     if (parseInt(eComentario[i].id) != parseInt(idcom)) {
                                         inserirComentarioBanco(eComentario[i].selecaoid, null, eComentario[i].comentario);                              
                                     }
                                 }
                                 
                }
             eComentario = [];
          }


          //exclui uma selecao do banco
          function excluirSelecaoBanco(selid)
          {
            eMarcacao = [];
            eSelecao = [];
            eComentario = [];
            excluirSelecaoPorTipo(2, selid);
            excluirSelecaoPorTipo(1, selid);
            excluirSelecaoPorTipo(0, selid);
          }

          function excluirSelecaoPorTipo(tipo, selid)
          {
            var nome = getNomeTabela(tipo);
            var registros = db.getItem(nome);
            apagarRegistros(nome);
            if (registros != null && registros != "null" && registros != "NaN" && registros != "")
            {
                var vetor = registros.split(";");
                for (var i=0; i<vetor.length; i++)
                {
                    if (tipo==1)
                    {
                            var r = vetor[i].split(",");
                            var id = r[0].replace("null","");
                            if (id!="" && id.length > 0 && r[1]!=undefined)
                            {
                              if ( parseInt(id) !== parseInt(selid) )
                              {
                                 inserirMarcacaoBanco(id, r[1], r[2], r[3], r[4], r[5]);
                              }
                            }

                    } else if (tipo==2) {
                            var r = vetor[i].split(",");
                            var id = r[0].replace("null","");
                            if (id!="" && id.length > 0 && r[1]!=undefined)
                            {
                              if ( parseInt(id) !== parseInt(selid) ) {
                                 inserirComentarioBanco(id, r[1], r[2]);
                              }
                            }
                    } else if (tipo==0) {
                            var r = vetor[i].split(",");
                            var id = r[0].replace("null","");
                            if (id!="" && id.length > 0 && r[1]!=undefined)
                            {
                              if ( parseInt(id) !== parseInt(selid) ) {
                                 inserirSelecaoBanco(id, r[1]);
                              }
                            }
                    }
               }
           }
         }

         //-------BANCO : PLANO DE ESTUDOS---------

         //pega os itens do slotPlanos
         function selectPlanos()
         {
              return db.getItem("slotPlanos");
         }
         
         //insere na estrutur
         function inserirPlanoEstrutura(sigla, dia)
         {
             ePlano.push({'sigla':sigla, 'dia':dia});
         }

         //salva um dia LIDO de um PLANO no BD slotPlanos
         function inserirPlanoBanco(sigla, dia)
         {
             var str = sigla + "," + dia + ";";
             if (sigla!=undefined && dia!=undefined) salvar("slotPlanos",str);   
         }

         //salva/atualiza todos os dias LIDOS de varios PLANOS no slotPlanos
         //os planos sao lidos do vetor estrutura
         function salvarPlanosBanco()
         {
             for(var i=0; i<ePlano.length; i++)
             {
               inserirPlanoBanco(ePlano[i].sigla, ePlano[i].dia);
             }
         } 
         
         // funcao que pega os dados do slotPlanos e coloca no ePlanos
         function carregarPlanosBD()
         {
             zerarEPlano();
             var bdplanos = selectPlanos();
             if (bdplanos != undefined)
             {
                 var planos = bdplanos.split(';');
                 for(var i=0; i<planos.length; i++)
                 {
                    if (planos[i].length > 0)
                    {
                      var itens = planos[i].split(',');
                      itens[0] = itens[0].replace('null','');
                      inserirPlanoEstrutura(itens[0], itens[1]); 
                    }
                 }
             } 
         }

         // function contarDiasPlano(siglaPlano)
         // {
         //    carregarPlanosBD();
         //    var c=0;  
         //    for (var i=0; i<ePlano.length; i++)
         //    {
         //       if (ePlano[i].sigla == siglaPlano)
         //       {
         //          c+=1;
         //       }
         //    }
         //    return c; 
         // } 

         // retorna a seleção de todos os dias LIDOS de um PLANO por SIGLA DO PLANO
         function selectDiasPlano(siglaPlano)
         {
             var dp=[];
             carregarPlanosBD();
             for (var i=0; i<ePlano.length; i++)
             {
                if (ePlano[i].sigla == siglaPlano)
                {
                   dp.push(ePlano[i].dia);
                }
             }
             return dp;
         }

         // buscar no vetor de planos o indice equivalente a
         // um dado vetor chamado planos a chave
         function buscarNoVetor(planos, chave) 
         {
            var retorno = -1;
            for (var i=0; i<planos.length; i++)
            {
                 if (planos[i].sigla == chave)
                 {
                    retorno = i; break;
                 }
            }
            return retorno; 
         }

         // retornar o indice de um vetor de string
         // onde cada registro eh uma string separada por virgula
         // se o primeiro item for a chave entao retornar o indice do registro
         function buscarIndiceNoVetor(vet, chave) 
         {
            var retorno = -1;
            for (var i=0; i<vet.length; i++)
            {
                 if (vet[i].split(',')[0] == chave)
                 {
                    retorno = i; break;
                 }
            }
            return retorno; 
         }



         // function removerUmPlano(siglaPlano)
         // {
         //    carregarPlanosBD();
         //    db.removeItem('slotPlanos');
         //    var indice = buscarNoVetor(ePlano, siglaPlano);
         //    while(indice >= 0)
         //    {
         //       console.log(indice);
         //       ePlano.splice(indice, 1);
         //       indice = buscarNoVetor(ePlano, siglaPlano);
         //    }
         //    console.log(ePlano);
         //    salvarPlanosBanco();
         // } 
 

         // function existeDataInicio(sigla)
         // {
         //   var ret=db.getItem('slotPlanosDataInicio');
         //   if(ret==undefined||ret==null) return false;
         //   var vet=ret.split(';');
         //   for(var i=0;i<vet.length;i++)
         //   {
         //      var duo=vet[i].split(',');
         //      if (duo[0].trim()==sigla) return true; 
         //   }
         //   return false;
         // }

         // function getDataInicioPlano(sigla)
         // {
            
         //    var retorno;
         //    if (existeDataInicio(sigla))
         //    {
         //       var vet = db.getItem('slotPlanosDataInicio').split(';');
         //       for(var i=0;i<vet.length;i++)
         //       {
         //           var duo=vet[i].split(',');
         //           if (duo[0].trim()==sigla){ 
         //               retorno = new Date(Number(duo[1]));
         //               break;
         //           }
         //       }
         //    } 
         //    else {
         //      var d = new Date()
         //      retorno = d.getTime();
         //    }
         //    return retorno; 
         // }

         // function gravarDataInicioEstudoBanco(sigla,data)
         // {
         //   var ret=db.getItem('slotPlanosDataInicio');
         //   if (!existeDataInicio(sigla)) {
         //       salvar('slotPlanosDataInicio',(sigla+","+data+";"));
         //   }           
         // }

         // function removerUmaDataInicio(sigla)
         // {
         //    //alert('cheguei removerDataInicio');
         //    var ret=db.getItem('slotPlanosDataInicio');
         //    var vet=ret.split(';');
         //    var indice=buscarIndiceNoVetor(vet,sigla);
         //    if (indice>=0) vet.splice(indice,1);
         //    var str=vet.join(';');
         //    db.setItem('slotPlanosDataInicio', str);
         // }

        function setLivroCapituloBD(l, c)
        {
          db.setItem("slotLivroCapitulo",l+"_"+c);
        }

        function getLivroCapituloBD()
        {
          var v = db.getItem("slotLivroCapitulo");
          if (v != null && v!=undefined) {
             var t = v.split("_");
             setLivroMain(parseInt(t[0]));
             setCapituloMain(parseInt(t[1]));
          } else {
           setLivroMain(43);
           setCapituloMain(1);
          }
        }





/* ************************ carregando estruturas do banco ******************* */
      
       //carrega a estrutura de dados
       function carregarEstrutura()
       {
            eMarcacao = [];
            eSelecao = [];
            eComentario = [];
            carregarPorTipo(0);
            carregarPorTipo(1);
            carregarPorTipo(2);
       }


       function carregarPorTipo(tipo)
          {
            var nome = getNomeTabela(tipo);
            //alert(nome);
            var registros = db.getItem(nome);
           // alert(registros);
            if (registros != null && registros != "null" && registros != "NaN" && registros != "")
            {
                var vetor = registros.split(";");
                cargaVetorTipo(vetor, tipo);
            }
          }


         //carrega a estrutura de um tipo de tabela do vetor de registros como argumento 
          function cargaVetorTipo(vetor, tipo)
          {
                for (var i=0; i<vetor.length; i++)
                {
                    if (tipo==1)
                    {
                            var r = vetor[i].split(",");
                            var selid = r[0].replace("null","");
                            if (selid!="" && selid.length > 0 && r[1]!=undefined)
                            {
                              inserirEstruturaMarcacao(selid, r[1], r[2], r[3], r[4], r[5]);
                            }

                    } else if (tipo==2) {
                            var r = vetor[i].split(",");
                            var selid = r[0].replace("null","");
                            if (selid!="" && selid.length > 0 && r[1]!=undefined)
                            {
                              inserirEstruturaComentario(selid, r[1], r[2]);
                            }
                    } else {
                           var r = vetor[i].split(",");
                           var id = r[0].replace("null","");
                            if (id!="" && id.length > 0 && r[1]!=undefined)
                            {
                              inserirEstruturaSelecao(id, r[1]);
                            }
                    }
                }
          }

       

         

