document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-text')
    const sections = document.querySelectorAll('div[id]')

    // 🔍 Busca
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase().trim()

            sections.forEach(section => {
                const content = (section.textContent + section.id).toLowerCase()

                section.style.display =
                    (!term || content.includes(term)) ? 'block' : 'none'
            })
        })
    }

    // 🔗 Navegação
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()

            sections.forEach(s => s.style.display = 'none')

            const alvo = document.querySelector(link.getAttribute('href'))
            if (alvo) alvo.style.display = 'block'
        })
    })
})