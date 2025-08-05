/********************************************************************
 * Objetivo: Sistema para calcular os juros compostos de uma venda parcelada
 * Autor: Marcelo Vieira
 * Data: 05/08/2025
 * Versão: 1.0
********************************************************************/

//import do arquivo/biblioteca do calculo do montante final
const MONTANTE_FINAL = require('./modulo/montanteFinal.js')

//import da biblioteca do readline
const READLINE = require('readline')
//cria um objeto para criar uma interface de entrada de dados via terminal
const ENTRADA_DE_DADOS = READLINE.createInterface({
    input: process.stdin,
    output: process.stdout
})

//entrada de dados do nome do cliente
ENTRADA_DE_DADOS.question('Digite seu nome: ', function(cliente){
    let nomeCliente = String(cliente).toUpperCase()

    ENTRADA_DE_DADOS.question('Digite o nome do produto: ',function(produto){
        let nomeProduto = String(produto).toUpperCase()

        ENTRADA_DE_DADOS.question('Digite o valor do capital inicial: ',function(capitalInicial){
            let valorCapitalInicial = Number(capitalInicial)

            ENTRADA_DE_DADOS.question('Digite a taxa de juros anual (em percentual): ',function(jurosAnual){
                let taxaJurosAnual = Number(jurosAnual)

                ENTRADA_DE_DADOS.question('Digite o total de vezes que os juros são compostos por ano: ',function(jurosCompostosAno){
                    let totalVezesJurosCompostosAno = Number(jurosCompostosAno)

                    ENTRADA_DE_DADOS.question('Digite o tempo em meses: ',function(meses){
                        let tempoEmMeses = Number(meses)
                        
                    }) // fechamento do tempo em meses
                }) //fechamento do numero de vezes os juros sao compostos por ano
            }) //fechamento da taxa de juros anual
        }) //fechamento do valor do capital inicial
    }) //fechamento do nome do produto
}) //fechamento do nome do cliente