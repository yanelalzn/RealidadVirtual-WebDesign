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
sr.reveal(`.title-second`, { delay: 600, origin: "bottom" });
sr.reveal(`.redes-sociales`, { delay: 600, origin: "right" });
sr.reveal(`.title-first`, { delay: 900, distance: 0});
sr.reveal(`.title-third`, { delay: 1300, distance: 0, opacity: 0, origin: "bottom" });
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
ScrollReveal().reveal('.icon-inf', {  delay: 600, distance: '0px', scale: 0.5, opacity: 0, duration: 1000, easing: 'ease-in-out' });

ScrollReveal().reveal('.questions-container', {  delay: 600, distance: '0px', scale: 0.5, opacity: 0, duration: 1000, easing: 'ease-in-out' });

ScrollReveal().reveal('.contact-inf-card', {  delay: 600, distance: '0px', scale: 0.5, opacity: 0, duration: 1000, easing: 'ease-in-out' });

sr.reveal(`#footer`, { delay: 600, origin: "bottom", distance: "100px"});

ScrollReveal().reveal('.whatsapp-container', {  delay: 600, distance: '0px', scale: 0.5, opacity: 0, duration: 1000, easing: 'ease-in-out' });
