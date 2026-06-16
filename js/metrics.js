// Animated impact counters + navigation scroll spy
(function () {
    const counters = document.querySelectorAll('.impact-value[data-target]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    const sections = ['home', 'about', 'impact', 'experience', 'certifications']
        .map(id => document.getElementById(id))
        .filter(Boolean);

    function formatNumber(value) {
        if (value >= 1000) {
            return new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 0 }).format(value);
        }
        return value.toString();
    }

    function animateCounter(el) {
        const target = parseInt(el.dataset.target, 10);
        const suffix = el.dataset.suffix || '';
        const duration = 1500;
        const start = performance.now();

        function tick(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(target * eased);
            el.textContent = formatNumber(current) + suffix;

            if (progress < 1) {
                requestAnimationFrame(tick);
            }
        }

        requestAnimationFrame(tick);
    }

    if (counters.length) {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounter(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );

        counters.forEach(counter => observer.observe(counter));
    }

    function updateActiveNav() {
        const scrollPos = window.scrollY + 120;
        let current = sections[0]?.id || 'home';

        sections.forEach(section => {
            if (section.offsetTop <= scrollPos) {
                current = section.id;
            }
        });

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            link.classList.toggle('active', href === '#' + current);
        });
    }

    window.addEventListener('scroll', updateActiveNav, { passive: true });
    updateActiveNav();
})();
