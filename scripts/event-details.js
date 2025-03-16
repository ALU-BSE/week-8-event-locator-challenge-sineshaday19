document.addEventListener('DOMContentLoaded', function() {
    // Ensure the active class is set correctly on navigation
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Animation for elements when they appear in viewport
    const animateElements = () => {
        const elements = document.querySelectorAll('.event-card, .feature, .btn-register');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect();
            const isInViewport =
                elementPosition.top >= 0 &&
                elementPosition.left >= 0 &&
                elementPosition.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                elementPosition.right <= (window.innerWidth || document.documentElement.clientWidth);

            if (isInViewport && !element.classList.contains('animated')) {
                element.classList.add('animated');
                element.style.animationName = 'fadeInUp';
                element.style.animationDuration = '0.8s';
                element.style.animationFillMode = 'both';
            }
        });
    };

    // Run animation check on scroll
    window.addEventListener('scroll', animateElements);
    
    // Run once on page load
    animateElements();
});
