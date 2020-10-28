const gatilhoFechar = document.querySelector('.fechar')
const bioPainel = document.querySelector('.biografia')
const gatilhoBiografia = document.querySelector('.circular')

gatilhoFechar.addEventListener('click', () => {
    bioPainel.style.display = 'none'
    /*
    bioPainel.style.opacity = '0'
    bioPainel.style.zIndex = '-1'
    */
   document.body.style.overflow = 'unset'

})

gatilhoBiografia.addEventListener('click', () => {
    bioPainel.style.display = 'block'
    /*
    bioPainel.style.opacity = '0.9'
    bioPainel.style.zIndex = '1'
    */
    document.body.style.overflow = 'hidden'
})

