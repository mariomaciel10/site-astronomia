document.addEventListener('DOMContentLoaded', () => {
    const secoes = document.querySelectorAll('.conteudo')
    const links = document.querySelectorAll('a[href^="#"]')

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            const idAlvo = link.getAttribute('href')
            const alvo = document.querySelector(idAlvo)

            if (alvo) {
                // 1. Esconde todas as seções antes de mostrar a nova
                secoes.forEach(s => {
                    s.classList.remove('visivel')
                    s.style.display = 'none'
                });

                // 2. Mostra a seção clicada com um pequeno delay para a animação funcionar
                alvo.style.display = 'block'
                setTimeout(() => {
                    alvo.classList.add('visivel')
                }, 10)
            }
        })
    })
})