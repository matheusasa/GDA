function calcularDiferencaDeDiasHorasMinutos(data1, data2) {
  const umDiaEmMilissegundos = 1000 * 60 * 60 * 24;
  const diffEmMilissegundos = Math.abs(data2 - data1);
  const diffEmDias = Math.floor(diffEmMilissegundos / umDiaEmMilissegundos);
  const diffEmHoras = Math.floor((diffEmMilissegundos % umDiaEmMilissegundos) / (1000 * 60 * 60));
  const diffEmMinutos = Math.floor((diffEmMilissegundos % (1000 * 60 * 60)) / (1000 * 60));
  const horasJaPassadas = Math.floor((data1.getHours() + data1.getMinutes() / 60) - (data2.getHours() + data2.getMinutes() / 60));

  return { dias: diffEmDias, horas: diffEmHoras, minutos: diffEmMinutos, horasPassadas: horasJaPassadas };
}

function scripttask9() {
  const datatual = new Date();
  const datareuniao = new Date(hAPI.getCardValue("diaehora"));

  const diferenca = calcularDiferencaDeDiasHorasMinutos(datatual, datareuniao);
  if (diferenca.minutos === 5) {
    return true;
  }
}