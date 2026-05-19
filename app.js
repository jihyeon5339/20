document.addEventListener('DOMContentLoaded', () => {
    // Navigation Logic
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.content-section');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('data-target');
            
            // Update active state on nav
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Show target section
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                    // Scroll to top when switching sections
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        });
    });

    // Theme Toggle Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlEl.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            htmlEl.setAttribute('data-theme', 'light');
            themeToggleBtn.textContent = '🌙 Dark Mode';
        } else {
            htmlEl.setAttribute('data-theme', 'dark');
            themeToggleBtn.textContent = '☀️ Light Mode';
        }
    });
});
