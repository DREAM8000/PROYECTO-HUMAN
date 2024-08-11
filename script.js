// primero, asegurate de incluir la libreria gsap en tu html
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js"></script>

document.addEventListener('DOMContentLoaded', () => {
    // registramos el plugin scrolltrigger
    gsap.registerPlugin(ScrollTrigger);

    // animacion del header
    gsap.from('header', {
        duration: 1.5,
        y: -100,
        opacity: 0,
        ease: 'power3.out'
    });

    // animacion del boton cta
    gsap.to('.cta-button', {
        scale: 1.1,
        duration: 1,
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut'
    });

    // animacion de las caracteristicas
    gsap.from('.feature', {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.features',
            start: 'top 80%'
        }
    });

    // efecto parallax en el fondo
    gsap.to('body', {
        backgroundPosition: '100% 100%',
        ease: 'none',
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: true
        }
    });

    // animacion de texto fluido
    const textElements = document.querySelectorAll('p, h2');
    textElements.forEach(el => {
        gsap.from(el, {
            duration: 1,
            opacity: 0,
            y: 20,
            scrollTrigger: {
                trigger: el,
                start: 'top 90%'
            }
        });
    });

    // efecto de brillo en hover para features
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        feature.addEventListener('mouseenter', () => {
            gsap.to(feature, {duration: 0.3, backgroundColor: 'rgba(255,255,255,1)', boxShadow: '0 0 20px rgba(0,102,204,0.5)'});
        });        feature.addEventListener('mouseleave', () => {
            gsap.to(feature, {duration: 0.3, backgroundColor: 'rgba(255,255,255,0.8)', boxShadow: 'none'});
        });
    });
});

// funcion para animacion de particulas en el fondo
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particlesContainer.appendChild(particle);

        gsap.set(particle, {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5
        });

        animateParticle(particle);
    }
}

function animateParticle(particle) {
    gsap.to(particle, {
        duration: Math.random() * 10 + 5,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: Math.random() * 0.5 + 0.5,
        opacity: Math.random(),
        ease: 'none',
        onComplete: () => animateParticle(particle)
    });
}

createParticles();