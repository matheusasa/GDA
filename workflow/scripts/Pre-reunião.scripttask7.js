function scripttask7() {

    var nome = hAPI.getCardValue("nome");
    var email = hAPI.getCardValue("email");
    var unidade = hAPI.getCardValue("segmentos");
    var modalidade = hAPI.getCardValue("modalidade");
    var segmento = hAPI.getCardValue("segmentos");
    var emailcliente = hAPI.getCardValue("emailClient");
    var cnpj = hAPI.getCardValue("cnpj");
    var cargo = hAPI.getCardValue("cargo");
    var wpp = hAPI.getCardValue("wpp");
    var razao = hAPI.getCardValue("razao");
    var contato = hAPI.getCardValue("contato");
    var briefing = hAPI.getCardValue("briefing");
    var solicit = WCMAPI.userEmail;
    var diaehora = hAPI.getCardValue("diaehora");
	var c1 = DatasetFactory.createConstraint("nome", nome, nome, ConstraintType.MUST);
    var c2 = DatasetFactory.createConstraint("segmentos", unidade, unidade, ConstraintType.MUST);
    var c3 = DatasetFactory.createConstraint("modalidade", modalidade, modalidade, ConstraintType.MUST);
    var c4 = DatasetFactory.createConstraint("briefing", briefing, briefing, ConstraintType.MUST);
    var c5 = DatasetFactory.createConstraint("razao", razao, razao, ConstraintType.MUST);
    var c6 = DatasetFactory.createConstraint("contato", contato, contato, ConstraintType.MUST);


    var ctt = new Array(c1, c2, c3, c4, c5, c6)
    DatasetFactory.getDataset("dsEnvioEmailESN", null, ctt, null);

}