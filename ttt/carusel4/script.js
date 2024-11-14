let currentIndex = 0;
const slides = document.querySelector('.carousel-images');
const totalImages = slides.children.length;

function changeSlide(direction) {
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}
