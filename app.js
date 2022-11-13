const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

slides.forEach((slide, i) => {
    //sets up css left position for slide, 5th image = 500%
    slide.style.left = `${i * 100}%`
});

let counter = 0;

nextBtn.addEventListener('click', () => {
    counter++
    carousel();
});

prevBtn.addEventListener('click', () => {
    counter--
    carousel();
});

function carousel() {
    // slide position for carousel effect
    if(counter === slides.length) counter = 0;
    if(counter < 0) counter = slides.length - 1;

    slides.forEach(slide => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}