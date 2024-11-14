const titulo = document.getElementsByTagName('h1')
const paragrafo = document.getElementById('paragrafo')
const botao = document.querySelector('button')

titulo[1].innerText = 'Manipulado no js'


function trocaCor(){
    botao.classList.toggle('botao')
}
function trocaBackground(){
    const body = document.querySelector('body')
    const cor = prompt('informe a cor:')
    body.style.backgroundColor = cor
}


