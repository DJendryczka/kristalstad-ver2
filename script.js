const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    function forceReflow(element) {
        void element.offsetWidth;
    }
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    
        navLinks.forEach((link, index) => {
            link.classList.remove('fade-in'); 
            forceReflow(link); 
            link.style.setProperty('--index', index);
            link.classList.add('fade-in'); 
        });
        
        burger.classList.toggle('toggle');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.stopPropagation();
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
            link.classList.remove('fade-in'); 
        });
    });

    nav.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
}

navSlide();



