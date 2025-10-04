// ===== ПРОСТОЙ СЛАЙДШОУ =====
let currentSlideIndex = 1;

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) { currentSlideIndex = 1 }
    if (n < 1) { currentSlideIndex = slides.length }

    // Скрываем все слайды
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Убираем активный класс со всех точек
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Показываем текущий слайд
    if (slides[currentSlideIndex-1]) {
        slides[currentSlideIndex-1].style.display = "block";
    }

    // Активируем точку
    if (dots[currentSlideIndex-1]) {
        dots[currentSlideIndex-1].className += " active";
    }
}

function plusSlides(n) {
    showSlides(currentSlideIndex += n);
}

function currentSlide(n) {
    showSlides(currentSlideIndex = n);
}

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    // Показываем первый слайд
    showSlides(currentSlideIndex);

    // Автопрокрутка
    setInterval(() => {
        plusSlides(1);
    }, 5000);
});// Ждем полной загрузки DOM перед выполнением скриптов


document.addEventListener('DOMContentLoaded', function() {

    // ===== АНИМАЦИЯ ПОЯВЛЕНИЯ ЭЛЕМЕНТОВ =====
    const elements = document.querySelectorAll('.main-image, .info-section, .quote-section, .facts, .nav-card, .hero-card, .photo-container, .series-photo, .project-image, .project-info');
    elements.forEach((element, index) => {
        if (element) {
            setTimeout(() => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'all 0.6s ease';

                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, 150);
            }, index * 200);
        }
    });

    // ===== СМЕНА ЦИТАТ ПРИ КЛИКЕ =====
    const quoteSection = document.querySelector('.quote-section');
    if (quoteSection) {
        const quotes = [
            {
                text: "«I don't wear black because I'm sad. I wear black because if I could, I would wear darkness.»",
                author: "— Wednesday Addams"
            },
            {
                text: "«Don't let your pain break you, dear. Let it strengthen you.»",
                author: "— Morticia Addams"
            },
            {
                text: "«Love is like kissing a poisonous frog: first there's excitement, then paralysis.»",
                author: "— Goody Addams"
            },
            {
                text: "«Being friends with you is like being bitten by a venomous snake.»",
                author: "— Enid Sinclair"
            },
            {
                text: "«I'm not antisocial. I just don't like people.»",
                author: "— Wednesday Addams"
            }
        ];

        let currentQuote = 0; // Индекс текущей цитаты
        const quoteElement = document.querySelector('.quote');
        const authorElement = document.querySelector('.author');

        if (quoteElement && authorElement) {
            quoteSection.addEventListener('click', function() {
                currentQuote = (currentQuote + 1) % quotes.length;

                quoteElement.style.opacity = '0';
                authorElement.style.opacity = '0';

                setTimeout(() => {
                    quoteElement.textContent = quotes[currentQuote].text;
                    authorElement.textContent = quotes[currentQuote].author;

                    quoteElement.style.opacity = '1';
                    authorElement.style.opacity = '1';
                }, 300);
            });
        } else {
            console.log('Элементы цитат не найдены');
        }
    }

    // ===== ПОДСВЕТКА АКТИВНОЙ СТРАНИЦЫ В НАВИГАЦИИ =====
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');

        if (linkPath === currentPage.split('/').pop() ||
            (currentPage.endsWith('/') && linkPath === 'index.html') ||
            (currentPage === '/' && linkPath === 'index.html')) {
            link.classList.add('active');
        }
    });
});