// Função que calcula o somatório de números divisíveis por 3 ou 5 menores que um número passado
function somarDivisiveisPorTresOuCinco(numero) {
    let soma = 0
  
    // Percorre os números de 3 até o número passado
    for (let i = 3; i < numero; i++) {
      // Verifica se o número é divisível por 3 ou 5 e adiciona à soma
      if (i % 3 === 0 || i % 5 === 0) {
        soma += i
      }
    }
  
    // Retorna o valor da soma
    return soma
  }
  
   // Mensagem de apreentação para o usuário
  console.log("Bem vindo ao somatório de números divisíveis por 3 ou 5!")
  console.log("Este programa calculará o somatório de números divisíveis por 3 ou 5 menores que o número digitado.")
  
  // Captura o número digitado pelo usuário via terminal
  const readline = require('readline').createInterface({
    input: process.stdin,  // Define a entrada para o processo do terminal
    output: process.stdout  // Define a saída para o processo do terminal
  })
  
  readline.question('Digite um número: ', (numero) => {
    // Converte o número inserido para um número inteiro e calcula o somatório
    const resultado = somarDivisiveisPorTresOuCinco(parseInt(numero));
  
    // Exibe o resultado do somatório no terminal
    console.log(`O somatório dos números divisíveis por 3 ou 5 menores que ${numero} é: ${resultado}`);
  
    readline.close();  // Fecha a interface do readline após a execução do código dentro da função de callback
  })
  