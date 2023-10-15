const show = document.getElementById('show')
const container = document.getElementById('menu') 
const info = document.getElementById('info')
const con = document.getElementById('con')
const ben = document.getElementById('ben')
const hello_arr = ['Welcome to,', 'Earth Saver'];

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

window.onload = function () {
    const spanHelloContainer = document.querySelector(".span-hello-container");
    const spanHello = document.querySelector(".span-hello");

    let currentIndex = 0;

    function displayNextHello() {
        if (currentIndex < hello_arr.length) {
            spanHello.textContent = hello_arr[currentIndex];
            currentIndex++;
            setTimeout(displayNextHello, 1000);
        } else {
            spanHelloContainer.classList.add("translate-animation");
        }
    }

    displayNextHello();
};