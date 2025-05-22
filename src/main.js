// This code handles the click event for a mobile menu toggle button.
// When the button is clicked, it toggles the visibility of the mobile menu by adding or removing the 'hidden' class.

    const toggleBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    toggleBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
