const calcular = document.getElementById('calcular');
function calculo () {
    const nome = document.getElementById('nome').value;
    const valor = document.getElementById('valor').value;
    const meses = document.getElementById('meses').value;
    const juros = document.getElementById('juros').value;
    const resultado = document.getElementById('resultado');
    if (nome !== '' && valor !== '' && meses !== '') {
        const valorjuros = juros / 100;
        let valorfinal = (valor * ( ( 1 + valorjuros ) ** meses - 1 ) / valorjuros).toFixed(2);
        resultado.textContent = `“${nome}, se você aplicar R$${valor},00, à taxa de juros de ${juros}% ao mês, durante ${meses} meses, acumulará uma poupança de R$${valorfinal}".`;
    }else {
        resultado.textContent = 'Preencha os campos para calcular.';
    }
}
calcular.addEventListener('click', calculo);