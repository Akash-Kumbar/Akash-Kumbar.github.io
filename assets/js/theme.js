(function () {
    const button = document.getElementById('theme-toggle');

    if (!button) {
        return;
    }

    const applyTheme = (dark) => {
        document.body.classList.toggle('dark', dark);
        button.textContent = dark ? '☀️' : '🌙';
        button.setAttribute('aria-label', dark ? 'Enable light mode' : 'Enable dark mode');
    };

    applyTheme(localStorage.getItem('theme') === 'dark');

    button.addEventListener('click', () => {
        const dark = !document.body.classList.contains('dark');
        applyTheme(dark);
        localStorage.setItem('theme', dark ? 'dark' : 'light');
    });
})();
