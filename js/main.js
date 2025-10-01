const buttons = document.querySelectorAll('button');
var header = document.getElementById('Header');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )


window.addEventListener('scroll', ()=> {
    var scroll = window.scrollY

    if(scroll>10){
        header.style.backgroundColor = '#000c4bc9'
    }else{
        header.style.backgroundColor = 'transparent'
    }
})

/*============= SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 1000,
    delay: 400,
    easing: "ease-out",
    // reset: true,
});

sr.reveal(`.banner`);
sr.reveal(`#Header`, { delay: 400, origin: "top" });
sr.reveal(`.title-second`, { delay: 600, origin: "left" });
sr.reveal(`.redes-sociales`, { delay: 600, origin: "right" });
sr.reveal(`.title-first`, { delay: 900, distance: 0});
sr.reveal(`.title-third`, { delay: 1200, opacity: 0, origin: "bottom" });
sr.reveal(`.boton-contacto`, { delay: 1100, distance: 0, scale: 0.5 });
ScrollReveal().reveal('.boton-aventuras', {  delay: 1000, distance: '0px', scale: 0.5, opacity: 0, duration: 1000, easing: 'ease-in-out' });
ScrollReveal().reveal('.banner', {  delay: 600, distance: '0px', opacity: 0, duration: 1000, easing: 'ease-in-out' });
ScrollReveal().reveal('.title', {  delay: 400, distance: '0px', scale: 0.5, opacity: 0, duration: 1000, easing: 'ease-in-out' });
sr.reveal(`.block-service`, { delay: 700, origin: "bottom", distance: "100px"});
sr.reveal(`.first-file`, { delay: 400, origin: "bottom", distance: "100px" });
ScrollReveal().reveal('.second-file', {  delay: 600, distance: '0px', scale: 0.5, opacity: 0, duration: 1000, easing: 'ease-in-out' });
sr.reveal(`.wrapper`, { delay: 900, origin: "bottom" });
sr.reveal(`.wrappes-p`, { delay: 600, origin: "left" });
sr.reveal(`.title-inf`, { delay: 700, origin: "bottom", distance: "100px"});
ScrollReveal().reveal('.date', {  delay: 600, distance: '0px', scale: 0.5, opacity: 0, duration: 1000, easing: 'ease-in-out' });
ScrollReveal().reveal('.game', {  delay: 600, distance: '0px', scale: 0.5, opacity: 0, duration: 1000, easing: 'ease-in-out' });
ScrollReveal().reveal('.face', {  delay: 600, distance: '0px', scale: 0.5, opacity: 0, duration: 1000, easing: 'ease-in-out' });
sr.reveal(`.questions-container`, { delay: 600, origin: "left" });
sr.reveal(`.bxs-user`, { delay: 400, origin: "top" });
sr.reveal(`.contact-inf-p`, { delay: 600, distance: "20px", origin: "right"});
sr.reveal(`.contact-inf-h2`, { delay: 900, origin: "left"});
sr.reveal(`.button-contact`, { delay: 1300, distance: 0, opacity: 0, origin: "bottom" });
sr.reveal(`#footer`, { delay: 600, origin: "bottom", distance: "100px"});
ScrollReveal().reveal('.whatsapp-container', {  delay: 600, distance: '0px', scale: 0.5, opacity: 0, duration: 1000, easing: 'ease-in-out' });

// Nosotros

sr.reveal(`.nosotros-h4`, { delay: 400, origin: "bottom", distance: "100px" });
sr.reveal(`.pregunta`, { delay: 600, origin: "bottom", distance: "100px" });
sr.reveal(`.nosotros-p`, { delay: 800, origin: "bottom", distance: "100px" });
sr.reveal(`.img-nosotros`);

sr.reveal(`.title-vm-nosotros`, { delay: 600, origin: "left" });

sr.reveal(`.mision`, { delay: 800, origin: "bottom", distance: "100px" });
sr.reveal(`.vision`, { delay: 800, origin: "bottom", distance: "100px" });

// Contacto

sr.reveal(`.icon-contacto`, { delay: 600, origin: "top", distance: "100px" });
sr.reveal(`.formulario-contacto`, { delay: 600, origin: "bottom", distance: "100px" });

sr.reveal(`.map-width`, { delay: 400, origin: "bottom", distance: "100px" });

// servicios

sr.reveal(`.linea`, { delay: 400, origin: "bottom", distance: "100px" });
ScrollReveal().reveal('.title-service p:last-child', {  delay: 600, distance: '0px', scale: 0.5, opacity: 0, duration: 1000, easing: 'ease-in-out' });
sr.reveal(`.incluye-servicios`, { delay: 700, distance: 0});

sr.reveal(`.weight`, { delay: 1100, origin: "bottom", distance: "100px" });
sr.reveal(`.incluye-servicios h3`, { delay: 900, origin: "bottom", distance: "100px" });
sr.reveal(`.icon-user`, { delay: 1100, origin: "bottom", distance: "100px" });

sr.reveal(`.thing-1`, { delay: 1100, origin: "bottom", distance: "50px" });
sr.reveal(`.thing-2`, { delay: 1200, origin: "bottom", distance: "50px" });
sr.reveal(`.thing-3`, { delay: 1300, origin: "bottom", distance: "50px" });
sr.reveal(`.thing-4`, { delay: 1400, origin: "bottom", distance: "50px" });
sr.reveal(`.thing-5`, { delay: 1500, origin: "bottom", distance: "50px" });
sr.reveal(`.thing-6`, { delay: 1600, origin: "bottom", distance: "50px" });
sr.reveal(`.thing-7`, { delay: 1700, origin: "bottom", distance: "50px" });
sr.reveal(`.thing-8`, { delay: 1800, origin: "bottom", distance: "50px" });
sr.reveal(`.thing-9`, { delay: 1900, origin: "bottom", distance: "50px" });
sr.reveal(`.thing-10`, { delay: 2000, origin: "bottom", distance: "50px" });
sr.reveal(`.thing-11`, { delay: 2100, origin: "bottom", distance: "50px" });


sr.reveal(`.price-service`, { delay: 2100, origin: "left" });
sr.reveal(`.reserve-service`, { delay: 2100, origin: "right" });

sr.reveal(`.title-galery`, { delay: 400, origin: "bottom", distance: "100px" });
sr.reveal(`.cliente`, { delay: 600, origin: "bottom", distance: "100px" });

