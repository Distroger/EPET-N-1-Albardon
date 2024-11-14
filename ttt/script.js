// Efecto de desplazamiento suave al hacer clic en los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animaciones en las tarjetas de características al hacer scroll
const features = document.querySelectorAll('.feature-card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});

features.forEach(card => {
    observer.observe(card);
});

// Efecto de desplazamiento suave al hacer clic en los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function



