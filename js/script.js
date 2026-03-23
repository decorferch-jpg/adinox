const carrosseis = document.querySelectorAll('.carrossel');

carrosseis.forEach(carrossel => {

    const track = carrossel.querySelector('.track');
    const btnNext = carrossel.querySelector('.next');
    const btnPrev = carrossel.querySelector('.prev');

    const img = track.querySelector('img');
    const gap = 10; 
    const imgWidth = img.offsetWidth + gap;

    let position = 0;

    btnNext.onclick = () => {

        const maxScroll = track.scrollWidth - carrossel.offsetWidth;

        if (Math.abs(position) + imgWidth <= maxScroll) {
            position -= imgWidth;
        } else {
            position = -maxScroll;
        }

        track.style.transform = `translateX(${position}px)`;

    };

    btnPrev.onclick = () => {

        if (position + imgWidth <= 0) {
            position += imgWidth;
        } else {
            position = 0;
        }

        track.style.transform = `translateX(${position}px)`;

    };

});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if(scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});