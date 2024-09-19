function tooglemenu(){
    var menuToggle = document.querySelector ('.toggle');
    var menu = document.querySelector ('.menu');
    menuToggle.classList.toggle('active')
    menu.classList.toggle('active')
}
//scroll animation
const sr= ScrollReveal({
    origin:'top',
    distance:'85px',
    duration:2000,
    reset: true

})
sr.reveal('.home-text',{})
sr.reveal('.home-img',{delay:200})

sr.reveal('.project-content',{})

sr.reveal('.heading',{})

sr.reveal('.contact-content',{})

sr.reveal('form input',{})
sr.reveal('form textarea',{})
sr.reveal('.contact-content',{})
