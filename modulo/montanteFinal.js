/********************************************************************
 * Objetivo: Funções para validar entradas de dados, calcular o montante final e exibir o resultado
 * Autor: Marcelo Vieira
 * Data: 05/08/2025
 * Versão: 1.0
********************************************************************/

//função para validar as entradas
function validarEntradas(entrada){

    //validando se o digitado nos campos foram de fato numeros e maior que zero
    if (isNaN(entrada) || entrada <= 0) {
        return true
    } else{
        return false
    } 
}

//função de calcular o montante
function calcularMontante(capitalInicial,jurosAnual,jurosCompostosAno,tempoEmAnos){

    //formula do juros composto, ** significa -> potenciação/exponenciação
    let montante = capitalInicial * (1 + jurosAnual / jurosCompostosAno) ** (jurosCompostosAno * tempoEmAnos)

    return montante
}

function exibirResultado(nome, produto, capitalInicial, jurosCompostosAno, tempoEmAnos, montante){

    let parcela = jurosCompostosAno * tempoEmAnos

    console.log('**************************** Viva Moda ******************************')
    console.log(`Muito obrigado por realizar a sua compra conosco Sr(a) ${nome}.`)
    console.log(`A compra do produto ${produto}, tem um valor de: R$ ${capitalInicial.toFixed(2)}`)
    console.log(`A sua compra será parcelada em ${parcela} vezes e o Sr(a) pagará: R$ ${montante.toFixed(2)}`)
    console.log('Muito obrigado por escolher a Viva Moda.')
    console.log('*********************************************************************')

    return true
}

module.exports = {
    validarEntradas,
    calcularMontante,
    exibirResultado
}

