function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {

	try {
		var nome = "gabriel";
		var cat = "tsm";
		var briefing = "nada";
		var modalidade= "nada";
		var razao= "nada";
		var contato= "nada";
		var ds = DatasetBuilder.newDataset();
		//Adicionar coluna
		ds.addColumn("Retorno");
		log.info("Dataset Envio email ARQ");
		if (constraints != null && constraints.length > 0) {
			for (var i = 0; i < constraints.length; i++) {
				if (constraints[i].fieldName == 'nome') {
					nome = constraints[i].initialValue;
				}
				if (constraints[i].fieldName == 'CATEGORIA') {
					cat = constraints[i].initialValue;
				}
				if (constraints[i].fieldName == 'modalidade') {
					modalidade = constraints[i].initialValue;
				}
				if (constraints[i].fieldName == 'briefing') {
					briefing = constraints[i].initialValue;
				}
				if (constraints[i].fieldName == 'razao') {
					razao = constraints[i].initialValue;
				}
				if (constraints[i].fieldName == 'contato') {
					contato = constraints[i].initialValue;
				}
			}
		}


		//Monta mapa com parâmetros do template
		var parametros = new java.util.HashMap();
		parametros.put("RESP_ATIV_ATUAL_ESN", nome);
		parametros.put("UNID_ESC_ESN", cat);
		parametros.put("BRIEF", briefing);
		parametros.put("MOD_ESC_ESN", modalidade);
		parametros.put("PESS_CONT_ESN", contato);
		parametros.put("RAZ_SOC_ESN", razao);

		//Este parâmetro é obrigatório e representa o assunto do e-mail
		parametros.put("subject", "REUNIAO DE CONTRATOS");

		//Monta lista de destinatários
		var destinatarios = new java.util.ArrayList();
		destinatarios.add("matheusdaws66@gmail.com");

		//Envia e-mail
		notifier.notify("matheus", "EnvioEmailARQ", parametros, destinatarios, "text/html");

		ds.addRow(new Array("Retorno True"));
		return ds;
	} catch (e) {

		log.info(e);
		ds.addRow(new Array("Erro"));
		return ds;
	}

} function onMobileSync(user) {

}