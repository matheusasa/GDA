var HelloWorld = SuperWidget.extend({
	//método iniciado quando a widget é carregada
	init: function () {
	},

	//BIND de eventos
	bindings: {
		local: {
			'create': ['click_create']
		},
		global: {}
	},

	create: function (htmlElement, event) {



		var nome = $('#Desc_pasta_' + this.instanceId).val();

		var _xml = null;
		$.ajax({
			url: '/NovoSoap/resources/js/xml/ECMFolderService_createSimpleFolder.xml',
			async: false,
			type: "GET",
			datatype: "xml",
			success: function (xml) {
				_xml = $(xml)
			}

		});

		//Alterar os valores recuperados na variavel _xml
		_xml.find("companyId").text(WCMAPI.tenantCode);
		_xml.find("username").text("matheus");
		_xml.find("password").text("matheus");
		_xml.find("parentDocumentId").text("1");
		_xml.find("publisherId").text('matheus');
		_xml.find("documentDescription").text(nome);



		//Usar o metodo WCMAPI.Create para chamar o webservice
		WCMAPI.Create({
			url: "/webdesk/ECMFolderService?wsdl",
			contentType: "text/xml",
			dataType: "xml",
			data: _xml[0],
			success: function (data) {
				console.log(data);
				FLUIGC.toast({
					title: 'Aviso',
					message: 'Pasta Criada',
					type: 'success'

				});

			}
		})

	}

});