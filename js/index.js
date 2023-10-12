const show = document.getElementById('show')
const container = document.getElementById('menu') 
const info = document.getElementById('info')
const con = document.getElementById('con')
const ben = document.getElementById('ben')

show.addEventListener('click', () => {
    show.classList.toggle('active')
    container.classList.toggle('active')
    info.classList.toggle('active')
    con.classList.toggle('active')
    ben.classList.toggle('active')
})

info.addEventListener('click', () => {
    window.location.href = 'info.html'
})

con.addEventListener('click', () => {
    window.location.href = 'con.html'
})

ben.addEventListener('click', () => {
    window.location.href = 'ben.html'
})