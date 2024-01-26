function createDataset(fields, constraints, sortFields) {
	var ds = DatasetBuilder.newDataset();
	log.info("==== DSFILTROESN.INICIO ===> ");
	//Adicionar coluna
	ds.addColumn("NOME");
	ds.addColumn("EMAIL");
	ds.addColumn("UNIDADE");
	ds.addColumn("SEG");

	var segmento;
	var unidade;

	if (constraints != null && constraints.length > 0) {
		for (var i = 0; i < constraints.length; i++) {
			if (constraints[i].fieldName == 'SEG') {
				var filtroForm1 = constraints[i].initialValue;
				segmento = DatasetFactory.createConstraint("SEG", filtroForm1, filtroForm1, ConstraintType.MUST);
			}
			if (constraints[i].fieldName == 'UNIDADE') {
				var filtroForm2 = constraints[i].initialValue;
				unidade = DatasetFactory.createConstraint("UNIDADE", filtroForm2, filtroForm2, ConstraintType.MUST);
		}
	}}

	//Filtrando dados ativos
	var c1 = DatasetFactory.createConstraint("metadata#active", true, true, ConstraintType.MUST);
	var filtro = new Array(c1);

	//Refazendo dataset apenas com dados ativos
	var datasetformulario = DatasetFactory.getDataset("dsFormAux", null, filtro, null);

	//Criando filtros para a tabela
	for (var i = 0; i < datasetformulario.rowsCount; i++) {
		var docID = datasetformulario.getValue(i, "metadata#id");
		var docVersion = datasetformulario.getValue(i, "metadata#version");

		//Armazenando nome da variavel tablename
		var table = "agoravaimano";
		var co1 = DatasetFactory.createConstraint("tablename", table, table, ConstraintType.MUST);
		var co2 = DatasetFactory.createConstraint("metadata#id", docID, docID, ConstraintType.MUST);
		var co3 = DatasetFactory.createConstraint("metadata#version", docVersion, docVersion, ConstraintType.MUST);
		var filtrosTab;

		if (constraints != null && constraints.length > 0  || segmento != null) {
			filtrosTab = new Array(co1, co2, co3, segmento, unidade);
		} else {
			filtrosTab = new Array(co1,co2,co3);
		}
		
		//Refazendo dataset com os valores da table e com os filtros de table
		var datasetable = DatasetFactory.getDataset("dsFormAux", null, filtrosTab, null);
		
		//Adicionando as linhas de dados no novo dataset
		for (var j = 0; j < datasetable.rowsCount; j++) {
			ds.addRow(
				new Array(datasetable.getValue(j, "nome"),
					datasetable.getValue(j, "email"),
					datasetable.getValue(j, "unidade"),
					datasetable.getValue(j, "seg")
				)
			)
		}
	}
	//Devolvendo dados para tabela original
	return ds;
}