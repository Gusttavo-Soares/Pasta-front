// var nome = 'Luis'

// let nome2 = 'Luis' 

// const nome3 = 'Luis'

// console.log('Luis')
// console.log(nome)
// console.log(nome2)
// console.log(nome3)

//Tipo de dados
// //Texto = string
// const texto = 'Eu sou um texto'
// //numerico = number 
// const numero_inteiro = 30
// const numero_flutuante = 18.5
// //logica = boolean
// const ligado = false //true
// //indefinido = undefined   
// //nulo = null 
// const presidente = null
// //não é um número = NaN (not a number)

// //lista de dados = array  
// const frutas = ['maça' , 'banana' , 'uva' , 'goiaba']

// console.log(typeof (texto))
// console.log(typeof (numero_inteiro))
// console.log(typeof (numero_flutuante))
// console.log(typeof (ligado))
// console.log(typeof (presidente))
// console.log(typeof (frutas))

// let idade = parseInt(prompt('Informe a sua idade'))
// console.log(idade)
// console.log(typeof(idade))
// console.log(parseInt(idade))
// console.log(typeof(parseInt(idade)))

// let numero1 = parseInt(prompt('Primeiro número'))
// let numero2 = parseInt(prompt('Segundo número'))
// let soma = numero1 + numero2
// let subtracao = numero1 - numero2
// let multiplicacao = numero1 * numero2
// let divisao = numero1 / numero2

// console.log(soma)
// console.log(subtracao)
// console.log(multiplicacao)
// console.log(divisao)

// var idade = parseInt(prompt('digite a idade'))

// if (idade >= 150){
//     console.log('Idade inválida')
//     alert('Idade inválida')
// }
// else if(idade>=18){
//     console.log('Você é menor de idade' )
// }
// else{
//     console.log('Você é menor de idade')
// }

// var idade = parseInt(prompt('Qual a sua idade?'))
// if(idade >= 18){
//     console.log('Pode assistir  o filme')
// }
// else if( idade >= 16){
//     var acompanhado = prompt('está acompanhado? S / N')
//     if( acompanhado == 'S')
//     console.log('Você pode assistir')
//     else{
//        alert('Você não pode assistir desacompanhado')
//     }
// }
// else {
//     alert('Você não pode assistir o filme')
// }

// var atividade = true 
// var nota_atividade = 3

// if ((atividade == true) && (nota_atividade >= 5)){
//     console.log('pode ir embora')
// }
// else(
//     console.log('não pode ir embora')
// )

// const voto = parseInt(prompt('Informe seu candidato. 13 ou 22'))
// // if(voto == 13){
// //     console.log('Você fez o L')
// // }
// // else if (voto == 22){
// //     console.log( 'Você fez arminha')
// // }
// // else{
// //     console.log('Voto inválido')
// // }
// switch(voto){
//     case 13:
//         console.log('Fez o L')
//         break
//     case 22: 
//         console.log('Fez arminha') 
//     default: 
//         console.log ('Voto inválido')
// }


// let maior = 0

// let numero = parseInt(prompt('Informe o número 1'))

// if (numero > maior){
//     maior = numero
// }

// numero = prompt('Informe o número 2')

// if (numero > maior){
//     maior = numero
// }

// numero = prompt('Informe o número 3')

// if (numero > maior){
//     maior = numero
// }

// numero = prompt('Informe o número 4')

// if (numero > maior){
//     maior = numero
// }

// console.log('O maior número foi' + maior)

// let numero
// let maior = 0
// for (let i = 1; i <= 4; i++){
//     numero = parseInt(prompt('Informe o número 1'))

//     if (numero > maior){
//         maior = numero
//     }
// }
// console.log('O maior número foi '+ maior)

// let contador = 0;
// let limite = 4
// let numero
// let maior = 0

// while(contador < limite){
//     numero = parseInt(prompt('informe o número'))

//     if ( numero > maior){
//         maior = numero
//     }
//     contador = contador + 1
//     // contador++
// }

// console.log('O maior numero foi'+ maior)