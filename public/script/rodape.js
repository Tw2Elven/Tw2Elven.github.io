const trigger = document.querySelectorAll('.rodape-links > p')
const resultado = document.querySelector('.rodape-result')

trigger[0].addEventListener('click', () => {
        resultado.innerHTML = `<p>Este site tem o compromisso de proteger e respeitar sua privacidade. 
        Esta política, juntamente com os nossos termos de uso e quaisquer outros documentos aqui referidos, 
        estabelecem o princípio básico pelo qual quaisquer dados pessoais que coletamos de você ou que você 
        nos fornece serão processados ​​por nós.</p>`
    })

trigger[1].addEventListener('click', () => {
    resultado.innerHTML = `<p>Telefone: (042)3630-3800  Ramal 247
    Email: contato@danilodominico.com.br
    R. Pedro Alves, 431 - Centro, Guarapuava
    CEP: 85010-080 - Câmara Municipal 
    Gabinete 1º Vice-Presidente</p>`
})