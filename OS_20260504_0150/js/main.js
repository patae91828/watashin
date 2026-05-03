// =======================
// hamburger
// =======================
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.header-nav');
    const navLinks = document.querySelectorAll('.header-nav a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });
});


// =======================
// slick
// =======================
$(function () {
    $('.menu').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        cssEase: 'linear',
        arrows: false,
        dots: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
        infinite: true,
        swipe: false,
        touchMove: false,
        draggable: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});


// =======================
// フェードイン
// =======================
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-blur');

    function checkFade() {
        const windowBottom = window.scrollY + window.innerHeight;

        fadeElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top + window.scrollY;

            if (windowBottom > elementTop + 100) {
                el.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', checkFade);
    checkFade();
});


// =======================
// オープニング
// =======================
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('is-opening');

    setTimeout(() => {
        document.body.classList.remove('is-opening');
        const opening = document.getElementById('opening');
        if (opening) opening.style.pointerEvents = 'none';
    }, 6400);
});


// =======================
// 下部ボタン
// =======================
document.addEventListener('DOMContentLoaded', () => {
    const topBtn = document.querySelector('.fixed-top-btn');
    const instaBtn = document.querySelector('.fixed-insta-btn');

    function toggleFixedButtons() {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        if (scrollTop < 100) {
            topBtn.classList.add('is-hidden');
        } else {
            topBtn.classList.remove('is-hidden');
        }

        if (scrollTop + windowHeight >= documentHeight - 100) {
            instaBtn.classList.add('is-hidden');
        } else {
            instaBtn.classList.remove('is-hidden');
        }
    }

    toggleFixedButtons();

    window.addEventListener('scroll', toggleFixedButtons);
    window.addEventListener('resize', toggleFixedButtons);
});