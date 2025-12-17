/**
 * Shared Theme Manager for TRACKS @ PWC
 * Handles persistence across index, organization, and research pages.
 */

(function() {
    // 1. Immediate Application (prevents flash of wrong theme)
    const savedTheme = localStorage.getItem('pwc_theme') || 'light';
    document.body.className = `theme-${savedTheme}`;

    // 2. Expose Toggle Function globally
    window.setGlobalTheme = function(themeId) {
        document.body.className = `theme-${themeId}`;
        localStorage.setItem('pwc_theme', themeId);
        
        // Update active state of buttons if they exist
        updateActiveButton(themeId);
    };

    // 3. UI Helper to update button visual state
    function updateActiveButton(activeId) {
        const buttons = document.querySelectorAll('.theme-btn');
        buttons.forEach(btn => {
            if (btn.dataset.theme === activeId) {
                btn.classList.add('bg-pwc-accent', 'text-pwc-surface');
                btn.classList.remove('text-pwc-subtext');
            } else {
                btn.classList.remove('bg-pwc-accent', 'text-pwc-surface');
                btn.classList.add('text-pwc-subtext');
            }
        });
    }

    // 4. Init UI on DOMContentLoaded
    document.addEventListener('DOMContentLoaded', () => {
        updateActiveButton(savedTheme);
        
        // Attach click listeners to any .theme-btn elements
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                window.setGlobalTheme(btn.dataset.theme);
            });
        });
    });
})();