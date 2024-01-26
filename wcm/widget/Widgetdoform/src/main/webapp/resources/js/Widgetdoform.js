var MyWidget = SuperWidget.extend({
  //variáveis da widget

  codigodoformulario: "128",

  //método iniciado quando a widget é carregada
  init: function () { },

  //BIND de eventos
  bindings: {
    local: {
      execute: ["click_executeAction"],
    },
    global: {
      gravar: ["click_executeGravar"],
    },
  },

  executeAction: function (htmlElement, event) { },

  executeGravar: function () {
    var dados = {
      values: [
        {
          fieldId: "teste",
          value: $("#teste").val(),
        },
      ],
    };
    WCMAPI.Read({
      type: "POST",
      async: true,
      url: "/ecm-forms/api/v2/cardindex/" + this.codigodoformulario + "/cards",
      contentType: "application/json",
      dataType: "json",
      data: JSON.stringify(dados),
      success: function (data) {
        // código a ser executado em caso de sucesso
        alert("dados criados com sucesso");
      },
    });
  },
});
