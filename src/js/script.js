document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-text')
    const sections = document.querySelectorAll('div[id]')

 
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase().trim()

            sections.forEach(section => {
                const content = (
                    section.textContent + section.id
                ).toLowerCase()

                section.style.display =
                    (!term || content.includes(term)) ? 'block' : 'none'
            })
        })
    }

    document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.onclick = e => {
    e.preventDefault()

    document.querySelectorAll('div[id]').forEach(s => s.style.display = 'none')

    const alvo = document.querySelector(link.getAttribute('href'))
    if (alvo) alvo.style.display = 'block'
  }
})
                })