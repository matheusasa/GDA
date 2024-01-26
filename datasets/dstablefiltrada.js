function createDataset(fields, constraints, sortFields) {
  var ds = DatasetBuilder.newDataset();
  //Adicionar coluna
  ds.addColumn("NOME");
  ds.addColumn("EMAIL");
  ds.addColumn("UNIDADE");
  ds.addColumn("MODALIDADE");
  ds.addColumn("SEG");
  //Filtrando dados ativos
  var c1 = DatasetFactory.createConstraint(
    "metadata#active",
    true,
    true,
    ConstraintType.MUST
  );
  var filtros = new Array(c1);
  //Armazendando dataset
  var dsInterno = "dsFormAux";
  //Refazendo dataset apenas com dados ativos
  var datasetformulario = DatasetFactory.getDataset(
    dsInterno,
    null,
    filtros,
    null
  );
  var count = datasetformulario.rowsCount;
  //Criando filtros para a tabela
  for (var i = 0; i < count; i++) {
    var docID = datasetformulario.getValue(i, "metadata#id");
    var docVersion = datasetformulario.getValue(i, "metadata#version");
    //Armazenando nome da variavel tablename
    var table = "controleusuarios";
    var const1 = DatasetFactory.createConstraint(
      "tablename",
      table,
      table,
      ConstraintType.MUST
    );
    var const2 = DatasetFactory.createConstraint(
      "metadata#id",
      docID,
      docID,
      ConstraintType.MUST
    );
    var const3 = DatasetFactory.createConstraint(
      "metadata#version",
      docVersion,
      docVersion,
      ConstraintType.MUST
    );
    var constraintstable = new Array(const1, const2, const3);
    //Refazendo dataset com os valores da table e com os filtros de table
    var datasetable = DatasetFactory.getDataset(
      dsInterno,
      null,
      constraintstable,
      null
    );
    var counttable = datasetable.rowsCount;
    //Adicionando as linhas de dados no novo dataset
    for (var j = 0; j < counttable; j++) {
      ds.addRow(
        new Array(
          datasetable.getValue(j, "nome"),
          datasetable.getValue(j, "email"),
          datasetable.getValue(j, "unidade"),
          datasetable.getValue(j, "mod1"),
          datasetable.getValue(j, "seg")
        )
      );
    }
  }
  //Devolvendo dados para tabela original
  return ds;
}