const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
})

navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
})

window.addEventListener('scroll', ()=> {
    var scroll = window.scrollY

    if(scroll>10){
        header.style.backgroundColor = '#000c4bc9'
    }else{
        header.style.backgroundColor = 'transparent'
    }
})

// Menu list
const serviciosBtn = document.querySelector('.menu-horizontal > li:nth-child(3) > a');
const submenu = document.querySelector('.menu-horizontal > li:nth-child(3) .menu-vertical');

serviciosBtn.addEventListener('click', () => {
  if (window.innerWidth <= 919) {
    submenu.classList.toggle('show');
  }
});

// Quesion

const buttons = document.querySelectorAll('.question button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const question = button.parentElement;
        const answer = question.querySelector('p');
        const arrow = button.querySelector('.d-arrow');

        answer.classList.toggle('show');
        arrow.classList.toggle('rotate');
    });
});

/*============= SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: "top",
  distance: window.innerWidth < 768 ? "20px" : "30px",
  duration: 500,
  easing: "cubic-bezier(0.4, 0, 0.2, 1)",
  reset: false
});

sr.reveal(".banner", { delay: 100, opacity: 0 });
sr.reveal(".header", { delay: 300, origin: "top", distance: "20px" });
sr.reveal(".redes-sociales", { delay: 200, origin: "right" });

sr.reveal(".title-first, .title-second, .title-third", { distance: "0px", scale: 0.9, opacity: 0, interval: 150 });

sr.reveal(".boton-contacto", { delay: 400, distance: "0px", scale: 0.95 });
sr.reveal(".boton-aventuras", { delay: 450, distance: "0px", scale: 0.95, opacity: 0 });

/* SERVICIOS */
sr.reveal("#servicios .title", { delay: 200, distance: "0px", scale: 0.95, opacity: 0 });
sr.reveal("#servicios .block-service", { delay: 250, origin: "bottom", distance: "30px", interval: 120 });

sr.reveal(".first-file", { delay: 250, origin: "bottom", distance: "30px" });
sr.reveal(".second-file", { delay: 300, distance: "0px", scale: 0.95, opacity: 0 });
sr.reveal(".wrapper", { delay: 350, origin: "bottom", distance: "30px" });
sr.reveal(".wrappes-p", { delay: 200, distance: "0px", opacity: 0 });

sr.reveal(".title__pricing", {  delay: 200,  distance: "0px",  scale: 0.6,  opacity: 0});
sr.reveal(".pricing .pack", {   delay: 300,  interval: 200,  origin: "bottom",  distance: "60px",  opacity: 0});

/* ---------- INFO / CONTACTO / FOOTER ---------- */
sr.reveal(".title-inf", { delay: 200, origin: "bottom", distance: "80px" });
sr.reveal(".date, .game, .face", { delay: 150, scale: 0.6, opacity: 0, interval: 100 });
sr.reveal(".questions-container", { delay: 200, origin: "left", distance: "50px" });
sr.reveal(".bxs-user", { delay: 150, origin: "top", distance: "30px" });
sr.reveal(".contact-inf-p", { delay: 200, origin: "right", distance: "30px", interval: 100 });
sr.reveal(".contact-inf-h2", { delay: 300, origin: "left", distance: "30px" });
sr.reveal(".button-contact", { delay: 400, origin: "bottom", distance: "30px", opacity: 0 });
sr.reveal("#footer", { delay: 200, origin: "bottom", distance: "80px" });
sr.reveal(".whatsapp-container", { delay: 150, scale: 0.6, opacity: 0, interval: 100 });

/* ---------- NOSOTROS ---------- */
sr.reveal(".nosotros-h4", { delay: 150, origin: "bottom", distance: "80px" });
sr.reveal(".pregunta", { delay: 200, origin: "bottom", distance: "80px" });
sr.reveal(".nosotros-p", { delay: 250, origin: "bottom", distance: "80px" });
sr.reveal(".img-nosotros", { delay: 200, scale: 0.8 });
sr.reveal(".title-vm-nosotros", { delay: 200, origin: "left", distance: "50px" });
sr.reveal(".mision, .vision", { delay: 250, origin: "bottom", distance: "80px", interval: 100 });

/* ---------- CONTACTO ---------- */
sr.reveal(".icon-contacto", { delay: 600, origin: "top", distance: "60px", duration: 400 });
sr.reveal(".formulario-contacto", { delay: 600, origin: "bottom", distance: "80px" });
sr.reveal(".map-width", { delay: 150, origin: "bottom", distance: "80px" });

/* ---------- SERVICIOS ---------- */
sr.reveal(".linea", { delay: 150, origin: "bottom", distance: "80px" });
sr.reveal(".title-service p:last-child", { delay: 200, scale: 0.6, opacity: 0 });
sr.reveal(".incluye-servicios", { delay: 250, distance: 0 });
sr.reveal(".incluye-servicios h3, .weight, .icon-user", { delay: 300, origin: "bottom", distance: "80px", interval: 100 });

sr.reveal(".thing-1, .thing-2, .thing-3, .thing-4, .thing-5, .thing-6, .thing-7, .thing-8, .thing-9, .thing-90, .thing-10, .thing-11", { 
  delay: 300, 
  origin: "bottom", 
  distance: "40px", 
  interval: 80 
});

sr.reveal(".price-service", { delay: 400, origin: "left", distance: "50px" });
sr.reveal(".reserve-service", { delay: 400, origin: "right", distance: "50px" });

/* ---------- GALERÍA / CLIENTES ---------- */
sr.reveal(".title-galery", { delay: 150, origin: "bottom", distance: "80px" });
sr.reveal(".cliente", { delay: 200, origin: "bottom", distance: "80px", interval: 100 });