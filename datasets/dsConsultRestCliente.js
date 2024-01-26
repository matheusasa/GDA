function createDataset(fields, constraints, sortFields) {
	log.info("> ENTRASERVICOURL <");
	//CRIACAO SERVICO
	var servicoURL = "http://192.168.2.5:8082/html-protheus/rest/OCAW020/consulta_dados?emp=01&fil=01&consulta=clientes";

	//NAO TEM NECESSIDADE DE AUTENTICACAO
	var myApiConsumer = oauthUtil.getGenericConsumer("", "", "", "");
	var data = myApiConsumer.get(servicoURL);

	var dataset = DatasetBuilder.newDataset();
	
	//TRANSFORMA O RETORNO DOS DADOS EM JSON
	var objdata = JSON.parse(data);
	
	//RETORNO DE TODOS OS REGISTROS NO JSON
	log.info("EntraIfConstraints");
	if (constraints != null && constraints.length > 0) {
		for (var i = 0; i < constraints.length; i++) {
			if (constraints[i].fieldName == 'codigo') {
				codigo = constraints[i].initialValue;
			}
		}
	}
	// CRIACAO DE COLUNAS
	log.info("CriacaoColunas");
	dataset.addColumn('codigo');
	dataset.addColumn('loja');
	dataset.addColumn('nome');
	dataset.addColumn('nome_reduz');

	//PREENCHIMENTO DAS COLUNAS COM AS INFORACOES RELACIONADAS AO SERVICO REQUISITADO
	for (var i = 0; i < objdata.clientes.length; i++) {
		log.info("RetornodoDataset ================> ");
		dataset.addRow(new Array(
				objdata.clientes[i].codigo, 
				objdata.clientes[i].loja, 
				objdata.clientes[i].nome, 
				objdata.clientes[i].nome_reduz
				));
		}
		return dataset;
	}