function updateMenu() {
    const currentHash = window.location.hash || "#about";

    const menuLinks = document.querySelectorAll('#navigation-menu a');

    menuLinks.forEach(link => {
        link.classList.remove('active');
    });

    const activeLink = document.querySelector(`#navigation-menu a[href="${currentHash}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    const activeSection = document.querySelector(currentHash);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
}

window.addEventListener('load', updateMenu);

window.addEventListener('hashchange', updateMenu);