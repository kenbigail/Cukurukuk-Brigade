const hello_arr = ['CONTRIBUTE'];
const slider = document.getElementById('slider')
const next = document.getElementById('next')


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

function scrollToPercentage(percentage) {
    const windowHeight = window.innerHeight;
    const scrollTo = (percentage / 100) * windowHeight;

    window.scroll({
        top: scrollTo,
        behavior: "smooth",
    });
}

slider.addEventListener("click", () => {
    scrollToPercentage(100);
});