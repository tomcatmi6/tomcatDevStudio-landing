function updateMenu() {
    const menuLinks = document.querySelectorAll('#navigation-menu a');
    const sections = document.querySelectorAll('section');
    
    let currentSection = "";
    const offset = 100; 
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.pageYOffset;

        if (scrollPosition >= sectionTop - offset && scrollPosition < sectionTop + sectionHeight - offset) {
            currentSection = section.getAttribute('id'); 
        }
    });

    menuLinks.forEach(link => {
        link.classList.remove('active');
    });

    const activeLink = document.querySelector(`#navigation-menu a[href="#${currentSection}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

window.addEventListener('scroll', updateMenu);
window.addEventListener('load', updateMenu);