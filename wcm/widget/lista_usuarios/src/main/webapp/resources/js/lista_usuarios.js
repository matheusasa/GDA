var MyWidget = SuperWidget.extend({
	//variáveis da widget

	//método iniciado quando a widget é carregada
	init: function () {
		var myTable = FLUIGC.datatable('#target', {
			dataRequest: DatasetFactory.getDataset('dsFORMPRIN', null, null, null).values,
			renderContent: ['nome', 'email', 'segmentos', 'segmentosL2', 'modalidade'],
			header: [
				{
					title: 'Nome',
					size: "col-xs-3",
				},
				{
					title: 'Email',
					size: "col-xs-3",
				},
				{
					title: 'Unidade',
					size: "col-xs-3",
				},
				{
					title: 'Segmento',
					size: "col-xs-3",
				},
				{
					title: 'Modalidade',
					size: "col-xs-3",
				},
			]
		}, function (err, data) {
			// DO SOMETHING (error or success)
		});
	},

	//BIND de eventos

});
