function scrollToNextSection() {
    document.getElementById('next-section').scrollIntoView({
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

document.querySelectorAll('.accordion-item').forEach(item => {
    const toggle = item.querySelector('.accordion-toggle');
    
    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isActive = item.classList.toggle('active');
        
        document.querySelectorAll('.accordion-item').forEach(acc => {
            if (acc !== item) acc.classList.remove('active');
        });
    });
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.accordion-item')) {
        document.querySelectorAll('.accordion-item').forEach(acc => {
            acc.classList.remove('active');
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const isDark = savedTheme === 'dark';
    
    document.body.classList.toggle('light-theme', !isDark);
    themeIcon.textContent = isDark ? '🌙' : '🌞';

    themeToggle.addEventListener('click', () => {
        const isLight = document.body.classList.toggle('light-theme');
        themeIcon.textContent = isLight ? '🌞' : '🌙';
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
});
