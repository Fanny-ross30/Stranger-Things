// JavaScript para efectos interactivos de Stranger Things

document.addEventListener('DOMContentLoaded', function() {
    
    // Efecto de navegación suave
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Ajuste para la navegación fija
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efecto de scroll para la navegación
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(0, 0, 0, 0.98)';
            nav.style.borderBottom = '2px solid #dc2626';
        } else {
            nav.style.background = 'rgba(0, 0, 0, 0.95)';
            nav.style.borderBottom = '2px solid #dc2626';
        }
    });

    // Efecto de typing para el título principal
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }

    // Efecto de hover para las tarjetas de actores
    const actorCards = document.querySelectorAll('.actor-card');
    actorCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            this.style.boxShadow = '0 25px 50px rgba(220, 38, 38, 0.4)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 20px 40px rgba(220, 38, 38, 0.3)';
        });
    });

    // Parallax desactivado para mantener fondo e imágenes estáticos

    // Efecto de glow para elementos con hover
    const glowElements = document.querySelectorAll('.actor-card, .season-card, .curiosity-card');
    glowElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 30px rgba(220, 38, 38, 0.6), 0 0 60px rgba(59, 130, 246, 0.3)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });

    // Efecto de aparición progresiva de elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos para animación
    const animatedElements = document.querySelectorAll('.actor-card, .season-card, .curiosity-card, .gallery-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // Partículas del cursor desactivadas

    // Efecto de texto brillante para el subtítulo
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
        setInterval(() => {
            subtitle.style.textShadow = '0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #00ffff';
            setTimeout(() => {
                subtitle.style.textShadow = '0 0 10px #00ffff';
            }, 500);
        }, 3000);
    }

    // Efecto de onda/sonido desactivado

    // Glitch del título desactivado

    console.log('🎬 Stranger Things - El Mundo Invertido está listo!');
    console.log('👾 Efectos especiales activados');
    console.log('🔮 Bienvenido a Hawkins, Indiana');
});

