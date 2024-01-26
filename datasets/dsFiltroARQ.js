function createDataset(fields, constraints, sortFields) {
    var ds = DatasetBuilder.newDataset();
    // Adicionar coluna
    ds.addColumn("ARQ");
    ds.addColumn("Email");
    ds.addColumn("Categoria do Sistema");
    ds.addColumn("Sub Categoria");

    // Filtrando dados ativos
    var c1 = DatasetFactory.createConstraint("metadata#active", true, true, ConstraintType.MUST);
    var datasetInterno = DatasetFactory.getDataset("DSARQ", null, [c1], null);
    
    // Criando filtros para a tabela
    for (var i = 0; i < datasetInterno.rowsCount; i++) {
        var docID = datasetInterno.getValue(i, "metadata#id");
        var docVersion = datasetInterno.getValue(i, "metadata#version");
        var table = "tablearq";
        
        // Criando constraints para a tabela
        var const1 = DatasetFactory.createConstraint("tablename", table, table, ConstraintType.MUST);
        var const2 = DatasetFactory.createConstraint("metadata#id", docID, docID, ConstraintType.MUST);
        var const3 = DatasetFactory.createConstraint("metadata#version", docVersion, docVersion, ConstraintType.MUST);

        // Adicionando as constraints adicionais de categoria e subcategoria (ajuste necessário aqui)
        var constraintsTable = [const1, const2, const3];

        // Supondo que você já tenha os valores de categoria e subcategoria definidos em suas constraints
        if (constraints != null && constraints.length > 0) {
            for (var k = 0; k < constraints.length; k++) {
                if (constraints[k].fieldName == 'CATEGORIA') {
                    var categoriaFilter = constraints[k].initialValue;
                    constraintsTable.push(DatasetFactory.createConstraint("ctgs", categoriaFilter, categoriaFilter, ConstraintType.MUST));
                }
                if (constraints[k].fieldName == 'SUBCATEGORIA') {
                    var subcategoriaFilter = constraints[k].initialValue;
                    constraintsTable.push(DatasetFactory.createConstraint("sctgs", subcategoriaFilter, subcategoriaFilter, ConstraintType.MUST));
                }
            }
        }

        // Refazendo dataset com os valores da tabela e com os filtros de tabela
        var datasetTable = DatasetFactory.getDataset("DSARQ", null, constraintsTable, null);
        var countTable = datasetTable.rowsCount;

        // Adicionando as linhas de dados no novo dataset
        for (var j = 0; j < countTable; j++) {
            ds.addRow(
                new Array(
                    datasetTable.getValue(j, "arq"),
                    datasetTable.getValue(j, "email"),
                    datasetTable.getValue(j, "ctgs"),
                    datasetTable.getValue(j, "sctgs")
                )
            );
        }
    }

    // Devolvendo dados para a tabela original
    return ds;
}
