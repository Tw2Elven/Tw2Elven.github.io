const triggerAnt = document.querySelector('.anterior')
const triggerProx = document.querySelector('.avancar')
const imagens = document.querySelector('.frames')
const aLink = document.querySelector('.frame-container > a')
const desc = document.querySelector('.frame-container > a > p')
let mark = 1

triggerProx.addEventListener('click', () => {
    if (mark < 9) {
        mark++
        imagens.src = `./imagens/${mark}-desktop.png`
        VerLink()
      
    } else {
        mark = 1
        imagens.src = `./imagens/${mark}-desktop.png`
        VerLink()
    }
})

triggerAnt.addEventListener('click', () => {
    if (mark > 1) {
        mark--
        imagens.src = `./imagens/${mark}-desktop.png`
        VerLink()

    } else {
        mark = 9
        imagens.src = `./imagens/${mark}-desktop.png`
        VerLink()

    }
})


function VerLink() {
    switch (mark) {
        case 1: 
            aLink.href = 'https://m.facebook.com/story.php?story_fbid=1469727796444102&id=1025632364186983'
            imagens.alt = 'Revitalização comunidade fundos do CAIC'
            desc.innerHTML = imagens.alt
            break;
        case 2:
            aLink.href = 'https://www.facebook.com/1025632364186983/posts/1414319891984893/'
            imagens.alt = 'Planalto: pavimentação, reforma da escola'
            desc.innerHTML = imagens.alt
            break;
        case 3:
            aLink.href = 'https://www.facebook.com/1025632364186983/posts/1414319891984893/'
            imagens.alt = 'Pavimentação bairro dos estados'
            desc.innerHTML = imagens.alt
            break;
        case 4:
            aLink.href = 'https://www.facebook.com/1025632364186983/posts/1634952929921587/'
            imagens.alt = 'Novo Pedro Carli, reformas capitão vagner'
            desc.innerHTML = imagens.alt
            break;
        case 5:
            aLink.href = 'https://www.facebook.com/1025632364186983/posts/1672558276161052/'
            imagens.alt = 'Pavimentação vila São João'
            desc.innerHTML = imagens.alt
            break;
        case 6:
            aLink.href = 'https://www.facebook.com/1025632364186983/posts/1872991499451061/'
            imagens.alt = 'Calçadas Gabirel Hugo Rios'
            desc.innerHTML = imagens.alt
            break;
            /* Design e código fonte feito por Ricardo Didimo.*/
        case 7:
            aLink.href = 'https://www.facebook.com/1025632364186983/posts/1872991499451061/'
            imagens.alt = 'Revitalização rua Olinda'
            desc.innerHTML = imagens.alt
            break;
        case 8:
            aLink.href = 'https://www.facebook.com/1025632364186983/posts/1872991499451061/'
            imagens.alt = '250mil em equipamentos p/ postos de saúde'
            desc.innerHTML = imagens.alt
            break;
        case 9:
            aLink.href = 'https://www.facebook.com/1025632364186983/posts/2161297347287140/'
            imagens.alt = 'Desassoreamento e limpeza de córregos'
            desc.innerHTML = imagens.alt
            break;
        
    }
}