// Simple scroll animations
            document.addEventListener('DOMContentLoaded', function() {
                // Add scroll observer for animation
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('animated');
                        }
                    });
                }, { threshold: 0.1 });
                
                // Observe all project containers and sections
                document.querySelectorAll('.project-container, #about, #skills, #socials').forEach(el => {
                    observer.observe(el);
                });
                
                // Add click animation to navigation links
                document.querySelectorAll('nav a').forEach(link => {
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        const targetId = this.getAttribute('href');
                        const targetElement = document.querySelector(targetId);
                        
                        if (targetElement) {
                            window.scrollTo({
                                top: targetElement.offsetTop - 80,
                                behavior: 'smooth'
                            });
                            // Add focus for keyboard navigation
                            targetElement.setAttribute('tabindex', '-1');
                            targetElement.focus({ preventScroll: true });
                        }
                    });
                });
                
                // Add keyboard support for skill tags
                document.querySelectorAll('#skill-set p').forEach(skill => {
                    skill.setAttribute('tabindex', '0');
                    skill.addEventListener('keydown', function(e) {
                        if (e.code === 'Space' || e.code === 'Enter') {
                            e.preventDefault();
                            this.click();
                        }
                    });
                });
                
                // Check for reduced motion preference
                const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
                if (prefersReducedMotion.matches) {
                    document.documentElement.style.scrollBehavior = 'auto';
                }
            });