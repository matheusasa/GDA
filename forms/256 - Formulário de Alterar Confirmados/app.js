window.chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(50, 205, 50)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
};

var eventos = null;
var proximoEvento = null;

function carregarPagina() {

    tabelaComparecerao = $('#tabelaComparecerao').DataTable({
        dom: 'ft',
        buttons: [{ extend: 'pdf', title: 'Relatório de filiados que comparecerão' },
            { extend: 'csv', title: 'Relatório de filiados que comparecerão' },
            { extend: 'excel', title: 'Relatório de filiados que comparecerão' }
        ],
        columns: [
            { data: "iduser", defaultContent: "", title: "Código" },
            { data: "nome", defaultContent: "", title: "Nome" },
            { data: "empresa", defaultContent: "", title: "Empresa" },
            { data: "filiacao", defaultContent: "", title: "Filiação" },
            { data: "pagante", defaultContent: "", visible: false, title: "Pagar" },
            {
                data: "id",
                defaultContent: "",
                title: "",
                width: "10%",
                render: function (data, type, row, meta) {
                    var iduser = row.iduser;
                    return '<button type="button" class="btn btn-danger btn-xs" data-toggle="button" onclick=\'removerConfirmar(' + iduser + ',"' + data + '");\'>Remover</button>';
                }
            }
        ],
        paging: false,
        ordering: false,
        language: {
            info: "Mostrando _TOTAL_ registros",
            infoEmpty: "Nenhum registro para exibir",
            emptyTable: "Nenhum Filiado irá comparecer",
            infoFiltered: " de _MAX_ registros",
            search: "Filtrar: "
        }
    });

    calendarDATA = FLUIGC.calendar('#dataEvento', {
        pickDate: true,
        pickTime: false
    });
    calendarDATA.setDate("");
    $("#todos").attr("checked", true);

    $("#hoje").on("change", function() {
        if ($(this).is(":checked")) {
            $("#todos").removeAttr("checked");
            calendarDATA.setDate(new Date());
        } else {
            $("#todos").attr("checked", true);
            calendarDATA.setDate("");
        }
        atualizarGrafico();
    });
    $("#todos").on("change", function() {
        if ($(this).is(":checked")) {
            $("#hoje").removeAttr("checked");
            calendarDATA.setDate("");
        } else {
            $("#hoje").attr("checked", true);
            calendarDATA.setDate(new Date());
        }
        atualizarGrafico();
    });

    buscarEventos();

}

function buscarEventos() {

    FLUIGC.loading("#graficos").show();

    efetuarRequisicao("listaEventos.php", null, function(retorno) {
        eventos = retorno;
        autoCompleteEvento = FLUIGC.autocomplete('#pesquisaEvento', {
            source: substringMatcher(eventos, 'nome'),
            displayKey: 'nome',
            tagClass: 'tag-gray',
            type: 'tagAutocomplete',
            tagMaxWidth: 300,
            maxTags: 1,
            onMaxTags: function(item, tag) {
                FLUIGC.toast({
                    message: 'Apenas um evento pode ser selecionado, por favor remova o evento atual.',
                    type: 'warning'
                });
            }
        });

        buscarProximoEvento();

        FLUIGC.loading("#graficos").hide();
    });

}

function buscarProximoEvento() {

    FLUIGC.loading("#graficos").show();

    efetuarRequisicao("proximoevento.php", null, function(retorno) {
        proximoEvento = retorno;

        evento = _.where(eventos, { id: proximoEvento.id });
        if (evento.length == 1) {
            autoCompleteEvento.add(evento[0]);
        } else {
            autoCompleteEvento.add(eventos[eventos.length]);
        }

        autoCompleteEvento.on('fluig.autocomplete.itemAdded', function(ev) {
            atualizarGrafico();
        });

        desenharGrafico();

        FLUIGC.loading("#graficos").hide();
    });

}

function atualizarGrafico() {

    desenharGrafico();

}

function desenharGrafico() {

    tabelaComparecerao.rows().remove().draw();

    FLUIGC.loading("#graficos").show();

    buscarDados();

}

function buscarDados() {

    eventoSelecionado = autoCompleteEvento.items();

    if (eventoSelecionado.length == 0) {
        return;
    }

    var data = "";
    if (calendarDATA.getDate()) {
        data = calendarDATA.getDate().format("YYYY-MM-DD");
    }

    var obj = {
        idevento: eventoSelecionado[0].id,
        data: data
    }

    efetuarRequisicao("estatisticasevento.php", obj, function(retorno) {

        renderizarGrafico(retorno);

        FLUIGC.loading("#graficos").hide();
    });

}

function renderizarGrafico(dados) {

    var comparecera = parseInt(dados.estatistica.comparecera, 10);
    var total = parseInt(dados.estatistica.total, 10);

    $("#labelTotal").html("Total Convidados (" + total + ")")

    _.each(dados.lista, function(value, key, list) {
        var filiacao = "Convidado";
        if ((value.lide == "1") && (value.lidefuturo == "1")) {
            filiacao = "LIDE e LIDE Futuro";
        } else if (value.lide == "1") {
            filiacao = "LIDE";
        } else if (value.lidefuturo == "1") {
            filiacao = "LIDE Futuro";
        }
        list[key]["filiacao"] = filiacao;
        var pagante = "";
        if (value.pagante == "1") {
            pagante = "Sim";
        }
        list[key]["pagante"] = pagante;
    });

    dados.lista = _.sortBy(dados.lista, 'nome');

    var lista = _.where(dados.lista, { confirmar: "1", checkin: "0", checkout: "0" })
    tabelaComparecerao.rows.add(lista).draw();

}

var url = "https://url.php.lide.com.br/";

function removerConfirmar(idUser,id){

    var endpoint = "";
    endpoint = url + 'lidephp/removerConfirmar.php';

    var myLoading1 = FLUIGC.loading(window);
    myLoading1.show();

    var obj = {
        "iduser": idUser,
        "id": id,
    };

    $.post(endpoint,
        JSON.stringify(obj),
        function(retorno) {
            if (retorno.success) {
                FLUIGC.toast({
                    message: retorno.message,
                    type: 'success'
                });
            } else {
                FLUIGC.toast({
                    message: 'ERRO: ' + retorno.message,
                    type: 'warning'
                });
            }
        },
        "json"
    ).fail(function(retorno) {
        FLUIGC.toast({
            message: 'Erro ao comunicar com o servidor!',
            type: 'danger'
        });
    }).always(function(retorno) {
        var myLoading1 = FLUIGC.loading(window);
        myLoading1.hide();
    });

    atualizarGrafico();

}

function getAcronimo(nome) {
    var iniciais = "";
    var lista = nome.toString().split(" ");
    for (i in lista) {
        iniciais = iniciais + lista[i].toString().substr(0, 1)
    }
    iniciais = iniciais.toLowerCase();
    return iniciais
}

function qtdDiasUteis(dataInicial, dataFinal) {

    var dataInicialM = moment(dataInicial, "YYYY-MM-DD");
    var dataFinalM = moment(dataFinal, "YYYY-MM-DD");
    var diasUteis = 0;

    var diaAtual = dataInicialM;
    while (!diaAtual.isAfter(dataFinalM)) {
        var diaSemana = diaAtual.day();
        if ((diaSemana != 0) && (diaSemana != 6)) {
            if (_.findWhere(dsFeriados.values, { dayFormatted: diaAtual.format("DD-MM-YYYY") }) == undefined) {
                diasUteis++;
            }
        }
        diaAtual.add(1, "days")
    }

    return diasUteis;
}

function isDiaUtil(data) {

    if (!moment.isMoment(data)) {
        data = moment(data, "YYYY-MM-DD");
    }

    var diaSemana = data.day();
    if ((diaSemana != 0) && (diaSemana != 6)) {
        if (_.findWhere(dsFeriados.values, { dayFormatted: data.format("DD-MM-YYYY") }) == undefined) {
            return true;
        }
    }

    return false;
}

function substringMatcher(listaObjetos, campo) {
    return function findMatches(q, cb) {
        var matches, substrRegex;

        matches = [];

        substrRegex = new RegExp(q, 'i');

        $.each(listaObjetos, function(i, objeto) {
            if (substrRegex.test(objeto[campo])) {
                matches.push(objeto);
            }
        });
        cb(matches);
    };
}

function efetuarRequisicao(endpoint, obj, callback) {

    var fields = new Array();
    fields.push(endpoint);
    fields.push(JSON.stringify(obj));

    DatasetFactory.getDataset('dsEnviarRequisicao', fields, null, null, {
        success: function(retorno) {
            if (retorno.values.length == 1) {
                var resposta = retorno.values[0];
                if (resposta.STATUS == "SUCCESS") {

                    var objResposta = null;

                    try {
                        objResposta = JSON.parse(resposta.RETORNO);
                    } catch (e) {
                        objResposta = resposta.RETORNO;
                    }

                    callback.apply(null, [objResposta])

                } else if (resposta.STATUS == "ERROR") {
                    FLUIGC.toast({
                        message: "ERRO DO WS (E): " + resposta.MENSAGEM,
                        type: 'danger'
                    });
                }
            } else {
                FLUIGC.toast({
                    message: "Erro no retorno dos dados",
                    type: 'danger'
                });
            }
        },
        error: function(erro) {
            FLUIGC.toast({
                message: "Erro ao chamar WS: " + erro,
                type: 'danger'
            });
        }
    });
}