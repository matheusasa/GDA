function createDataset(fields, constraints, sortFields) {
	try {
		return processResult(callService(fields, constraints, sortFields));
	} catch(e) {
		return processErrorResult(e, constraints);
	}
}

function callService(fields, constraints, sortFields) {
	var serviceData = data();
	var params = serviceData.inputValues;
	var assigns = serviceData.inputAssignments;
	var serviceHelper = ServiceManager.getService(serviceData.fluigService);
	var serviceLocator = serviceHelper.instantiate(serviceData.locatorClass);
	var service = serviceLocator.getCardServicePort();
	var response = service.updateCardData(getParamValue(params.companyId, assigns.companyId), getParamValue(params.username, assigns.username), 
		getParamValue(params.password, assigns.password), getParamValue(params.cardId, assigns.cardId), 
		fillCardFieldDtoArray(serviceHelper, params.cardData, assigns.cardData));

	return response;
}

function defineStructure() {
		addColumn("companyId");
	addColumn("documentDescription");
	addColumn("documentId");
	addColumn("foo");
	addColumn("version");
	addColumn("webServiceMessage");
}

function onSync(lastSyncDate) {
	var serviceData = data();
	var synchronizedDataset = DatasetBuilder.newDataset();

	try {
		var resultDataset = processResult(callService());
		if (resultDataset != null) {
			var values = resultDataset.getValues();
			for (var i = 0; i < values.length; i++) {
				synchronizedDataset.addRow(values[i]);
			}
		}

	} catch(e) {
		log.info('Dataset synchronization error : ' + e.message);

	}
	return synchronizedDataset;
}

function verifyConstraints(params, constraints) {
	
	
}

function processResult(result) {
	var dataset = DatasetBuilder.newDataset();

	result = result.getItem();

		dataset.addColumn("companyId");
	dataset.addColumn("documentDescription");
	dataset.addColumn("documentId");
	dataset.addColumn("foo");
	dataset.addColumn("version");
	dataset.addColumn("webServiceMessage");

	for (var i = 0; i < result.size(); i++) {
		dataset.addRow([result.get(i).getCompanyId(), result.get(i).getDocumentDescription(), result.get(i).getDocumentId(), JSONUtil.toJSON(result.get(i).getFoo()), result.get(i).getVersion(), result.get(i).getWebServiceMessage()]);
	}

	return dataset;
}

function processErrorResult(error, constraints) {
	var dataset = DatasetBuilder.newDataset();

	var params = data().inputValues;
verifyConstraints(params, constraints);

dataset.addColumn('error');
	dataset.addColumn('cardData');
	dataset.addColumn('companyId');
	dataset.addColumn('password');
	dataset.addColumn('cardId');
	dataset.addColumn('username');

	var cardData = isPrimitive(params.cardData) ? params.cardData : JSONUtil.toJSON(params.cardData);
	var companyId = isPrimitive(params.companyId) ? params.companyId : JSONUtil.toJSON(params.companyId);
	var password = isPrimitive(params.password) ? params.password : JSONUtil.toJSON(params.password);
	var cardId = isPrimitive(params.cardId) ? params.cardId : JSONUtil.toJSON(params.cardId);
	var username = isPrimitive(params.username) ? params.username : JSONUtil.toJSON(params.username);

	dataset.addRow([error.message, cardData, companyId, password, cardId, username]);

	return dataset;
}

function getParamValue(param, assignment) {
	if (assignment == 'VARIABLE') {
		return getValue(param);
	} else if (assignment == 'NULL') {
		return null;
	}
	return param;
}

function hasValue(value) {
	return value !== null && value !== undefined;
}

function isPrimitive(value) {
	return ((typeof value === 'string') || value.substring !== undefined) || typeof value === 'number' || typeof value === 'boolean' || typeof value === 'undefined';
}


function fillCardFieldDto(serviceHelper, params, assigns) {
	if (params == null) {
		return null;
	}

	var result = serviceHelper.instantiate("com.totvs.technology.ecm.dm.ws.CardFieldDto");

	var field = getParamValue(params.field, assigns.field);
	if (hasValue(field)) { result.setField(field); }
	var value = getParamValue(params.value, assigns.value);
	if (hasValue(value)) { result.setValue(value); }
	
	return result;
}

function fillCardFieldDtoArray(serviceHelper, params, assigns) {
	if (params == null) {
		return null;
	}

	var result = serviceHelper.instantiate("com.totvs.technology.ecm.dm.ws.CardFieldDtoArray");

	for (var i = 0; i < params.length; i++) {
		result.getItem().add(fillCardFieldDto(serviceHelper, params[i], assigns[i]));
	}

	return result;
}

function getObjectFactory(serviceHelper) {
	var objectFactory = serviceHelper.instantiate("com.totvs.technology.ecm.dm.ws.ObjectFactory");

	return objectFactory;
}



function data(constraints) {
	if (constraints != null && constraints.length > 0) {
		for (var i = 0; i < constraints.length; i++) {
			if (constraints[i].fieldName == 'StatusEvento') {
				var status = constraints[i].initialValue;
				var campo1 = constraints[i].fieldName;
			}
			if (constraints[i].fieldName == 'porQualMotivo') {
				var motivo = constraints[i].initialValue;
				var campo2 = constraints[i].fieldName;
			}
			if (constraints[i].fieldName == 'deseja') {
				var mod = constraints[i].initialValue;
			}	var campo3 = constraints[i].fieldName;
			if (constraints[i].fieldName == 'interesseClient') {
				var notatd = constraints[i].initialValue;
				var campo4 = constraints[i].fieldName;
			}
			if (constraints[i].fieldName == 'notaPerfilClient') {
				var notatot = constraints[i].initialValue;
				var campo5 = constraints[i].fieldName;
			}
			if (constraints[i].fieldName == 'comentario') {
				var coment = constraints[i].initialValue;
				var campo6 = constraints[i].fieldName
			}if (constraints[i].fieldName == 'docid') {
				var docid = constraints[i].fieldName;
			}
		}
	}
	return {
  "fluigService" : "ECMCardService",
  "operation" : "updateCardData",
  "soapService" : "ECMCardServiceService",
  "portType" : "CardService",
  "locatorClass" : "com.totvs.technology.ecm.dm.ws.ECMCardServiceService",
  "portTypeMethod" : "getCardServicePort",
  "parameters" : [ ],
  "inputValues" : {
    "cardData" : [ {
    	"field" : campo1,
    	"value" : status
    }, {
    	"field" : campo2,
    	"value" : motivo
    }, {
    	"field" : campo3,
    	"value" : mod
    }, {
    	"field" : campo4,
		"value" : notatd
    }, {
		"field" : campo5,
		"value" : notatot
	},{
		"field" : campo6,
		"value" : coment
		} ],
    "companyId" : 1,
    "password" : "abc123",
    "cardId" : docid,
    "username" : "matheus.alves"
  },
  "inputAssignments" : {
    "cardData" : [
        {
      "field" : "VALUE",
      "value" : "VALUE"
    }, {
      "field" : "VALUE",
      "value" : "VALUE"
    }, {
      "field" : "VALUE",
      "value" : "VALUE"
    }, {
      "field" : "VALUE",
      "value" : "VALUE"
    }, {
		"field" : "VALUE",
		"value" : "VALUE"
	  }, {
		"field" : "VALUE",
		"value" : "VALUE"
	  }	],
    "companyId" : "VALUE",
    "password" : "VALUE",
    "cardId" : "VALUE",
    "username" : "VALUE"
  },
  "outputValues" : { },
  "outputAssignments" : { },
  "extraParams" : {
    "enabled" : false
  }
}
}

 function stringToBoolean(param) { if(typeof(param) === 'boolean') {  return param;  }  if (param == null || param === 'null') {  return false;  }  switch(param.toLowerCase().trim()) {  case 'true': case 'yes': case '1': return true;  case 'false': case 'no': case '0': case null: return false;  default: return Boolean(param);  }  } 