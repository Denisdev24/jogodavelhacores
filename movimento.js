//casa
let casas = document.querySelectorAll('#casa')

// booleano
let cor =  true

//Resultado
let resultado = document.getElementById('resultado')

for (let index = 0; index < casas.length; index++) {
    casas[index].addEventListener('click',()=>{
        if(cor === true){
            jogador1(index)
        }
        else{
            jogador2(index)
        }
    })
    
}
function jogador1(index){
    casas[index].style.backgroundColor='red'
    cor = false
    jogadorwinner()
}
function jogador2(index){
    casas[index].style.backgroundColor='blue'
    cor = true
    jogadorwinner()
   
}

//Verifica o ganhador 
function jogadorwinner(){
    for (let index = 0; index < casas.length; index++) {
        if(casas[0].style.backgroundColor ==='red' && casas[1].style.backgroundColor ==='red' && casas[2].style.backgroundColor === 'red') {
            resultado.innerText='Jogador vermelho venceu'
        }
        else if(casas[0].style.backgroundColor  ==='blue' && casas[1].style.backgroundColor ==='blue' && casas[2].style.backgroundColor === 'blue'){
            resultado.innerText='Jogador azul venceu'
        }
        else if(casas[0].style.backgroundColor  ==='red' && casas[3].style.backgroundColor ==='red' && casas[6].style.backgroundColor === 'red'){
            resultado.innerText='Jogador vermelho venceu'
        }
        else if(casas[0].style.backgroundColor  ==='blue' && casas[3].style.backgroundColor ==='blue' && casas[6].style.backgroundColor === 'blue'){
            resultado.innerText='Jogador azul venceu'
        }
        else if(casas[0].style.backgroundColor  ==='red' && casas[4].style.backgroundColor ==='red' && casas[8].style.backgroundColor === 'red'){
            resultado.innerText='Jogador vermelho venceu'
        }
        else if(casas[0].style.backgroundColor  ==='blue' && casas[4].style.backgroundColor ==='blue' && casas[8].style.backgroundColor === 'blue'){
            resultado.innerText='Jogador azul venceu'
        }
        else if(casas[1].style.backgroundColor  ==='red' && casas[4].style.backgroundColor ==='red' && casas[7].style.backgroundColor === 'red'){
            resultado.innerText='Jogador vermelho venceu'
        }
        else if(casas[1].style.backgroundColor  ==='blue' && casas[4].style.backgroundColor ==='blue' && casas[7].style.backgroundColor === 'blue'){
            resultado.innerText='Jogador azul venceu'
        }
        else if(casas[2].style.backgroundColor  ==='red' && casas[5].style.backgroundColor ==='red' && casas[8].style.backgroundColor === 'red'){
            resultado.innerText='Jogador vermelho venceu'
        }
        else if(casas[2].style.backgroundColor  ==='blue' && casas[5].style.backgroundColor ==='blue' && casas[8].style.backgroundColor === 'blue'){
            resultado.innerText='Jogador azul venceu'
        }
        else if(casas[2].style.backgroundColor  ==='red' && casas[4].style.backgroundColor ==='red' && casas[6].style.backgroundColor === 'red'){
            resultado.innerText='Jogador vermelho venceu'
        }
        else if(casas[2].style.backgroundColor  ==='blue' && casas[4].style.backgroundColor ==='blue' && casas[6].style.backgroundColor === 'blue'){
            resultado.innerText='Jogador azul venceu'
        }
        else if(casas[3].style.backgroundColor  ==='red' && casas[4].style.backgroundColor ==='red' && casas[5].style.backgroundColor === 'red'){
            resultado.innerText='Jogador vermelho venceu'
        }
        else if(casas[3].style.backgroundColor  ==='blue' && casas[4].style.backgroundColor ==='blue' && casas[5].style.backgroundColor === 'blue'){
            resultado.innerText='Jogador azul venceu'
        }
        else if(casas[3].style.backgroundColor  ==='blue' && casas[4].style.backgroundColor ==='blue' && casas[5].style.backgroundColor === 'blue'){
            resultado.innerText='Jogador azul venceu'
        }
        else if(casas[6].style.backgroundColor  ==='red' && casas[7].style.backgroundColor ==='red' && casas[8].style.backgroundColor === 'red'){
            resultado.innerText='Jogador vermelho venceu'
        }
        else if(casas[6].style.backgroundColor  ==='blue' && casas[7].style.backgroundColor ==='blue' && casas[8].style.backgroundColor === 'blue'){
            resultado.innerText='Jogador azul venceu'
        }
        else{
          return
        }
        
    }
}


function reset(){
   for (let index = 0; index < casas.length; index++) {
    casas[index].style.backgroundColor='white'
   }
   resultado.style.display='none'
}
