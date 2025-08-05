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
        
        ENTRADA_DE_DADOS.question('Digite o valor inicial do produto: ',function(capitalInicial){
            let valorCapitalInicial = Number(capitalInicial)

            ENTRADA_DE_DADOS.question('Digite a taxa de juros (ex: 2 -> representa 2%): ',function(jurosAnual){
                let taxaJurosAnual = Number(jurosAnual)

                ENTRADA_DE_DADOS.question('Digite o total de vezes que os juros são compostos por ano (ex: 12 -> representa 12x por ano): ',function(jurosCompostosAno){
                    let vezesJurosAno = Number(jurosCompostosAno)

                    ENTRADA_DE_DADOS.question('Digite por quantos anos: ',function(anos){
                        let tempoEmAnos = Number(anos)

                        //chamando a função para validar os valores digitados
                        let validarEntradas = MONTANTE_FINAL.validarEntradas(valorCapitalInicial, taxaJurosAnual, vezesJurosAno, tempoEmAnos)
                        if(validarEntradas == true) {

                            //transformando a porcentagem (representada por numero inteiro na entrada do usuario) em -> decimal
                            taxaJurosAnual = (taxaJurosAnual / 100)

                            //console.log('tudo ok')
                            //chamando a função para calcular e armazenando o retorno na variavel montanteFinal
                            let montanteFinal =  MONTANTE_FINAL.calcularMontante(valorCapitalInicial, taxaJurosAnual, vezesJurosAno, tempoEmAnos)

                            //chamando a função de exibir o resultado
                            MONTANTE_FINAL.exibirResultado(nomeCliente, nomeProduto, valorCapitalInicial, vezesJurosAno, tempoEmAnos, montanteFinal)

                            ENTRADA_DE_DADOS.close()
                        } else {
                            console.log('ERRO!')
                            ENTRADA_DE_DADOS.close()
                        }
                        
                    }) // fechamento do tempo em anos
                }) //fechamento do numero de vezes os juros sao compostos por ano
            }) //fechamento da taxa de juros anual
        }) //fechamento do valor do capital inicial
    }) //fechamento do nome do produto
}) //fechamento do nome do cliente