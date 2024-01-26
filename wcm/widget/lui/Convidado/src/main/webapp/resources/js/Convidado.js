var MyWidget = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,

    //método iniciado quando a widget é carregada
    init: function() {
    },
  
    //BIND de eventos
    bindings: {
        local: {
            'execute': ['click_executeAction']
        },
        global: {}
    },
 
    executeAction: function(htmlElement, event) {
    }

});

function editareg(){

    var notatd1= $('#nota1').val();
    var notatot1=$('#nota2').val();
    var coment1=$('#coment').val();
    var docid = $('#processo').val();
    var _xml;
    if(!notatd1){
        FLUIGC.toast({
            title: 'Campo evento como um todo nao preenchido!',
            message: 'Tente novamente, ou comunique o suporte!',
            type: 'danger'
        });
    } else if(!notatot1){
        FLUIGC.toast({
            title: 'Campo nota servico TOTOVS nao preenchido!',
            message: 'Tente novamente, ou comunique o suporte!',
            type: 'danger'
        });
    }
    else if(!docid){
        FLUIGC.toast({
            title: 'Campo escolha do processo nao preenchido!',
            message: 'Tente novamente, ou comunique o suporte!',
            type: 'danger'
        });
    }
        $.ajax({
            url: '/Convidado/resources/js/xml/ECMCardService_updateCardData.xml',
            async: false,
            type: "GET",
            dataType: "xml",
            success: function (xml) {
                _xml = $(xml)
            }
        });
        _xml.find("companyId").text("1");
        _xml.find("username").text("matheus.alves");
        _xml.find("password").text("abc123");
        _xml.find("cardId").text(docid);
        _xml.find("[name=nota1]").text(notatd1);
        _xml.find("[name=nota2]").text(notatot1);
        _xml.find("[name=coment]").text(coment1);
        WCMAPI.Create({
            url: "/webdesk/ECMCardService?wsdl",
            contentType: "text/xml",
            dataType: "xml",
            data: _xml[0],
            success: function (data) {
                FLUIGC.toast({
                    title: 'Feedback concluido!',
                    message: 'Muito obrigado pela a sua compreensao',
                    type: 'success'
                });
            }})



}

function filtroform() {
    var ema = $("#email").val();
    var html = "";
    var c1 = DatasetFactory.createConstraint("emailClient", ema, ema, ConstraintType.MUST);
    var ctt = new Array(c1);
        DatasetFactory.getDataset("dsFORMPRIN", null, ctt, null, {
            success: function (dsReturned) {
                var rcControleMits = dsReturned.values;
                for(var i = 0; i < rcControleMits.length; i++){
                    if(rcControleMits[i]["notaPerfilClient"] === null){
                        html += '<option value="' + rcControleMits[i]['documentid'] + '"required>' + rcControleMits[i]['documentid'] + ' Processo aberto referente a '+ rcControleMits[i]['segmentos']+" "+rcControleMits[i]['segmentosL2']+'</option>'
                        }
                } document.getElementById("processo").innerHTML = html;
            },error: function (e) {
                console.log(e)
            }})
}