const triggerAnt = document.querySelector('.anterior')
const triggerProx = document.querySelector('.proximo')
const imagens = document.querySelector('.frames')
const aLink = document.querySelector('.frame-container > a')

let mark = 1

triggerProx.addEventListener('click', () => {
    if (mark < 9) {
        mark++
        imagens.src = `./public/imagens/${mark}.png`
        VerLink()
      
    } else {
        mark = 1
        imagens.src = `./public/imagens/${mark}.png`
        VerLink()
    }
})

triggerAnt.addEventListener('click', () => {
    if (mark > 1) {
        mark--
        imagens.src = `./public/imagens/${mark}.png`
        VerLink()

    } else {
        mark = 9
        imagens.src = `./public/imagens/${mark}.png`
        VerLink()

    }
})


function VerLink() {
    switch (mark) {
        case 1: 
            aLink.href = 'https://m.facebook.com/story.php?story_fbid=1469727796444102&id=1025632364186983'
            imagens.alt = 'Revitalização comunidade fundos do CAIC'
            break;
        case 2:
            aLink.href = 'https://www.facebook.com/1025632364186983/posts/1414319891984893/'
            imagens.alt = 'Vila planalto: pavimentação, reforma da escola'

            break;
        case 3:
            aLink.href = 'https://www.facebook.com/1025632364186983/posts/1414319891984893/'
            imagens.alt = 'Pavimentação bairro dos estados'

            break;
        case 4:
            aLink.href = 'https://www.facebook.com/1025632364186983/posts/1634952929921587/'
            imagens.alt = 'Novo Pedro Carli, reformas capitão vagner'

            break;
        case 5:
            aLink.href = 'https://www.facebook.com/1025632364186983/posts/1672558276161052/'
            imagens.alt = 'Pavimentação vila São João'

            break;
        case 6:
            aLink.href = 'https://www.facebook.com/1025632364186983/posts/1872991499451061/'
            imagens.alt = 'Calçadas Gabirel Hugo Rios'

            break;
        case 7:
            aLink.href = 'https://www.facebook.com/1025632364186983/posts/1872991499451061/'
            imagens.alt = 'Revitalização rua Olinda'

            break;
        case 8:
            aLink.href = 'https://www.facebook.com/1025632364186983/posts/1872991499451061/'
            imagens.alt = '250mil em equipamentos p/ postos de saúde'

            break;
        case 9:
            aLink.href = 'https://www.facebook.com/1025632364186983/posts/2161297347287140/'
            imagens.alt = 'Desassoreamento e limpeza de córregos'

            break;
        
    }
}