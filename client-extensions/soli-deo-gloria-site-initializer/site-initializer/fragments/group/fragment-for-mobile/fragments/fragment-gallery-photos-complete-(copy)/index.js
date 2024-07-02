let currentSlide = 0;
let touchStartX = 0;
let touchEndX = 0;
let slidesArray = [];

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = slidesArray.length;

    // Calcula o índice do slide considerando o loop infinito
    currentSlide = (index + totalSlides) % totalSlides;

    // Move os slides para a posição correta
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dotnav-item');
    dots.forEach((dot, index) => {
        // Adiciona a classe 'active' ao dot correspondente ao slide atual
        dot.classList.toggle('active', index === currentSlide);
    });
}

document.querySelectorAll('.dotnav-item').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

document.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].clientX;
    handleGesture();
});

function handleGesture() {
    if (touchEndX < touchStartX) {
        // Swipe para a esquerda
        showSlide(currentSlide + 1);
    } else if (touchEndX > touchStartX) {
        // Swipe para a direita
        showSlide(currentSlide - 1);
    } else {
        // Se não houver deslocamento horizontal significativo, não faça nada
        return;
    }
}

// Inicialização dos slides
document.querySelectorAll('.slide').forEach(slide => {
    slidesArray.push(slide.querySelector('img').src);
});

// Clona os slides iniciais para criar um efeito de loop infinito
const slidesContainer = document.querySelector('.slides');
slidesArray.forEach(src => {
    const slide = document.createElement('div');
    slide.classList.add('slide');
    const img = document.createElement('img');
    img.src = src;
    slide.appendChild(img);
    slidesContainer.appendChild(slide);
});

// Inicializa o slide
showSlide(currentSlide);
