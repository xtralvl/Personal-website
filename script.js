// Dark-Light Mode Switch //

const lightIcon = document.getElementById('light');
const darkIcon = document.getElementById('dark');
const icons = document.getElementById('modebuttons');

// Light Mode Styles //
const lightMode = lightIcon.addEventListener('click', () => {
    document.body.classList.remove('dark-mode');
    darkIcon.style.opacity = '0.5';
    lightIcon.style.opacity = '1';
    lightIcon.style.transform = 'scale(1.1)';
    darkIcon.style.transform = 'scale(0.8)';
    icons.style.border = '2px solid black';
});

// Dark Mode Styles //
const darkMode = darkIcon.addEventListener('click', () => {
    document.body.classList.add('dark-mode');
    darkIcon.style.opacity = '1';
    lightIcon.style.opacity = '0.5';
    darkIcon.style.color = 'black';
    lightIcon.style.color = 'black';
    lightIcon.style.transform = 'scale(0.8)';
    darkIcon.style.transform = 'scale(1.1)';
    icons.style.border = '2px solid #87cefa';
});

// Scroll to the top arrow 
const arrow = document.getElementById('arrow');

arrow.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

window.addEventListener('scroll', () => {
    const scrolledFromTop = window.scrollY;
    const viewportHeight = window.innerHeight;
    const totalHeight = document.documentElement.scrollHeight;
    const distanceFromBottom = totalHeight - (scrolledFromTop + viewportHeight);

    if (window.scrollY > 100) {
        arrow.style.display = 'block';
    } else {
        arrow.style.display = 'none';
    }

    if (distanceFromBottom < 70) {
        arrow.style.display = 'block';
        arrow.style.color = 'white';
    } else {
        arrow.style.color = 'black';
    }
});

// Small screen nav list //
const navIcon = document.getElementById('smallscreen-nav-icon');
const smallScreenNavList = document.getElementById('smallscreen-nav-list');

navIcon.addEventListener('click', () => {
    smallScreenNavList.classList.toggle('show');

    if (smallScreenNavList.classList.contains('show')) {
        navIcon.setAttribute('data-lucide', 'x');
        navIcon.style.fontSize = '1.5rem'
        navIcon.style.position = 'absolute';
        navIcon.style.top = '1rem';
        navIcon.style.right = '1rem';
        navIcon.style.color = 'white';
        
    } else {
        // Visszaállítás eredeti állapotra
        navIcon.setAttribute('data-lucide', 'align-justify');
        navIcon.style.display = 'block';
        navIcon.style.position = ''; // vagy 'static', ha az volt eredetileg
        navIcon.style.top = '';
        navIcon.style.right = '';
        navIcon.style.color = '';
    }
});


