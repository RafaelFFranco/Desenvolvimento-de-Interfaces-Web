function selectMoeda() {
    var select = $('#moedas');
    var value = select.val();
    console.log(value);
    return value; // Adicione esta linha
}

$('#botao').click(function () {
    var valorReal = $('#valorReais').val();
    let value = selectMoeda();
    if (value === "valor1") {
        let valorReal = parseFloat($('#valorReais').val());
        const valorDolar = 5.08;
        let resultado = valorReal / valorDolar;
        console.log(resultado);
        $('#valorConvertido').val(resultado.toFixed(2) + ' USD');
    } else if (value === "valor2") {
        let valorReal = parseFloat($('#valorReais').val());
        const valorEuro = 5.47;
        let resultado = valorReal / valorEuro;
        $('#valorConvertido').val(resultado.toFixed(2) + ' EUR');
    } else if (value === "valor3") {
        let valorReal = parseFloat($('#valorReais').val());
        const valorLibraEsterlina = 6.38;
        let resultado = valorReal / valorLibraEsterlina;
        $('#valorConvertido').val(resultado.toFixed(2) + ' GBP');
    } else if (value === "valor4") {
        let valorReal = parseFloat($('#valorReais').val());
        const valorIene = 0.033;
        let resultado = valorReal / valorIene;
        $('#valorConvertido').val(resultado.toFixed(2) + ' JPY');
    } else if (value === "valor5") {
        let valorReal = parseFloat($('#valorReais').val());
        const valorFrancoSuico = 5.60;
        let resultado = valorReal / valorFrancoSuico;
        $('#valorConvertido').val(resultado.toFixed(2) + ' CHF');
    } else if (isNaN(valorReal)) {
        console.log('Por favor, insira um número válido.');
        return;
    } else{
        console.log("pinto");
    }
});




