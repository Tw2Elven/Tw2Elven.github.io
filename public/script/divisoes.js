const gatilhosPrimarios = document.querySelectorAll('.gatilho-primario')
const gatilhosSecundarios = document.querySelectorAll('.gatilho-secundario')
//gatilho.length = 4 

const divs = document.querySelectorAll('.divisao')

gatilhosPrimarios.forEach(eachValue => {
    eachValue.addEventListener('click', () => {
        divs[1].style.display = 'flex'
        divs[1].style.zIndex = '1'

        divs[0].style.display = 'none'
        divs[2].style.display = 'none'
    })
})

gatilhosSecundarios.forEach(eachValue => {
    eachValue.addEventListener('click', () => {
       
        divs[0].style.display = 'flex'
        divs[2].style.display = 'flex'
        divs[1].style.display = 'none'
        divs[1].style.zIndex = '-1'
    })
})