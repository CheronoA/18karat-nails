// =============================================
// THEME TOGGLE - Dark / Light Mode
// Saves user preference in localStorage
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'dark';

    // Apply saved theme
    if (currentTheme === 'light') {
        document.body.classList.add('light-mode');
        if (toggle) toggle.checked = true;
    }

    // Toggle theme on switch change
    if (toggle) {
        toggle.addEventListener('change', function() {
            if (this.checked) {
                document.body.classList.add('light-mode');
                localStorage.setItem('theme', 'light');
            } else {
                document.body.classList.remove('light-mode');
                localStorage.setItem('theme', 'dark');
            }
        });
    }
});