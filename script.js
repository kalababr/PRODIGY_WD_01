document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.nav-links a');
    
   
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        
        const fromTop = window.scrollY + 100;
        
        navLinks.forEach(link => {
            const section = document.querySelector(link.hash);
            
            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });
    
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    
    window.dispatchEvent(new Event('scroll'));
});