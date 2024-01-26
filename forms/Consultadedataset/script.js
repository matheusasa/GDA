function preencherTabDataSet() {
    var dataset = DatasetFactory.getDataset("dsFormMoedasMts", null, null, null);
    var count = dataset.values.length;
    if (count == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Dados não encontrado',
            text: 'Verifique sua consulta'
        })
    }
    else {
        var row = dataset.values;
        for (var i = 0; i < count; i++) {
            var seq = addChild();
            var rep = row[i];
            var mod = rep["moeda"];
            var sim = rep["simbolo"];
            $("#TBMOEDA___" + seq).val(mod);
            $("#TBSIMBOLO___" + seq).val(sim);
        }
    }
}
function addChild() {
    var row = wdkAddChild("CONSULT");
    return row;
}

