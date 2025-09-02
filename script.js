// =============================================
// 🎯 PROJECT CONFIGURATION SECTION
// =============================================
// Project data is now managed in projects-config.js
// This makes it easier to maintain and update projects
// without touching the main application logic

// =============================================
// 📝 INSTRUCTIONS FOR FUTURE UPDATES:
// =============================================
// 1. Edit projects-config.js to add/modify/remove projects
// 2. All project data including links, descriptions, and tech stacks are managed there
// 3. This file handles the application logic and animations
// =============================================

// Modern Portfolio JavaScript with Framer Motion-like Animations
class ModernPortfolio {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupScrollAnimations();
        this.setupNavigation();
        this.setupParticles();
        this.setupContactForm();
        this.setupTypewriter();
        this.setupViewMoreProjects();
    }

    // Event Listeners
    setupEventListeners() {
        // Navigation toggle for mobile
        const navToggle = document.querySelector('.nav-toggle');
        const navLinks = document.querySelector('.nav-links');

        if (navToggle) {
            navToggle.addEventListener('click', () => {
                navLinks.classList.toggle('nav-open');
                navToggle.classList.toggle('nav-toggle-open');
            });
        }

        // Close nav when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('nav-open');
                navToggle.classList.remove('nav-toggle-open');
            });
        });

        // Smooth scrolling with offset for fixed nav
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Navbar background on scroll
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.glass-nav');
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(15, 15, 35, 0.95)';
            } else {
                navbar.style.background = 'rgba(15, 15, 35, 0.8)';
            }
        });
    }

    // Scroll Animations
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Add staggered animation for children
                    const children = entry.target.querySelectorAll('.stagger-child');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('animate-in');
                        }, index * 100);
                    });
                }
            });
        }, observerOptions);

        // Observe all sections and cards
        document.querySelectorAll('.section, .glass-card, .skill-item, .project-card').forEach(el => {
            el.classList.add('scroll-reveal');
            observer.observe(el);
        });

        // Add CSS for animations
        const style = document.createElement('style');
        style.textContent = `
            .scroll-reveal {
                opacity: 0;
                transform: translateY(30px);
                transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .scroll-reveal.animate-in {
                opacity: 1;
                transform: translateY(0);
            }
            
            .stagger-child {
                opacity: 0;
                transform: translateY(20px);
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .stagger-child.animate-in {
                opacity: 1;
                transform: translateY(0);
            }
        `;
        document.head.appendChild(style);
    }

    // Navigation Active State
    setupNavigation() {
        const sections = document.querySelectorAll('.section, .hero-section');
        const navLinks = document.querySelectorAll('.nav-links a');

        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.clientHeight;
                
                if (window.scrollY >= sectionTop && 
                    window.scrollY < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }

    // Enhanced Particles
    setupParticles() {
        const particlesContainer = document.querySelector('.particles');
        if (!particlesContainer) return;

        // Create more particles dynamically
        for (let i = 5; i < 15; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
            
            // Random colors
            const colors = ['#6366f1', '#ec4899', '#10b981', '#f59e0b'];
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            
            particlesContainer.appendChild(particle);
        }
    }

    // Contact Form
    setupContactForm() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            // Simple validation
            if (!name || !email || !message) {
                this.showNotification('Please fill in all fields', 'error');
                return;
            }
            // Build mailto link so the visitor's email client opens with prefilled content
            const toAddress = 'vishalnarayan2809@gmail.com';
            const subject = `Portfolio Contact: ${name}`;
            const bodyLines = [
                `Hi Vishal,`,
                '',
                message,
                '',
                '---',
                `From: ${name}`,
                `Email: ${email}`,
                `Sent via portfolio contact form`
            ];
            const body = bodyLines.join('\r\n');

            // Encode components
            const mailtoUrl = `mailto:${encodeURIComponent(toAddress)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            // Mailto length guard (common practical limit ~2000 chars)
            if (mailtoUrl.length > 1900) {
                this.showNotification('Message too long. Please copy & email manually.', 'error');
                // Fallback: show a modal-like textarea with full content (simple alert for now)
                alert('Your message is quite long. Please copy it and email manually to: ' + toAddress + '\n\n' + body);
                return;
            }

            // Try to open the mail client
            window.location.href = mailtoUrl;
            // Also open in new tab as a fallback (some mobile browsers)
            setTimeout(() => {
                window.open(mailtoUrl, '_blank');
            }, 300);

            this.showNotification('Email draft opened in your mail client.', 'success');
            form.reset();
        });
    }

    // Notification System
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        const style = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 2rem;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            ${type === 'success' ? 'background: #10b981;' : ''}
            ${type === 'error' ? 'background: #ef4444;' : ''}
            ${type === 'info' ? 'background: #6366f1;' : ''}
        `;
        
        notification.style.cssText = style;
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Typewriter Effect
    setupTypewriter() {
        const subtitle = document.querySelector('.hero-subtitle');
        if (!subtitle) return;

        const texts = [
            'FullStack Developer',
            'React Specialist',
            'UI/UX Enthusiast',
            'Problem Solver'
        ];
        
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function typeWriter() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                subtitle.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                subtitle.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typeSpeed = 500;
            }

            setTimeout(typeWriter, typeSpeed);
        }

        // Start typewriter after a delay
        setTimeout(typeWriter, 1000);
    }

    // View More Projects
    setupViewMoreProjects() {
        const viewMoreBtn = document.getElementById('view-more-btn');
        if (!viewMoreBtn) return;

        // Get project data from external configuration
        const hiddenProjects = window.PORTFOLIO_CONFIG?.HIDDEN_PROJECTS || [];
        
        // Fallback message if no projects are configured
        if (hiddenProjects.length === 0) {
            console.warn('No hidden projects configured in projects-config.js');
            return;
        }

        viewMoreBtn.addEventListener('click', () => {
            const projectsGrid = document.querySelector('.projects-grid');
            
            hiddenProjects.forEach((project, index) => {
                const projectCard = this.createProjectCard(project);
                projectCard.style.opacity = '0';
                projectCard.style.transform = 'translateY(30px)';
                projectsGrid.appendChild(projectCard);
                
                // Animate in with delay
                setTimeout(() => {
                    projectCard.style.transition = 'all 0.6s ease';
                    projectCard.style.opacity = '1';
                    projectCard.style.transform = 'translateY(0)';
                }, index * 100);
            });

            // Hide the button
            viewMoreBtn.style.opacity = '0';
            viewMoreBtn.style.transform = 'translateY(20px)';
            setTimeout(() => {
                viewMoreBtn.style.display = 'none';
            }, 300);
        });
    }

    // Create Project Card
    createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card glass-card';
        
        // Generate links HTML based on available links
        const generateLinks = () => {
            let linksHTML = '';
            
            // Add live demo link if available
            if (project.liveLink) {
                linksHTML += `
                    <a href="${project.liveLink}" target="_blank" class="project-link" title="View Live Demo">
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                `;
            }
            
            // Add GitHub link if available
            if (project.githubLink) {
                linksHTML += `
                    <a href="${project.githubLink}" target="_blank" class="project-link" title="View Source Code">
                        <i class="fab fa-github"></i>
                    </a>
                `;
            }
            
            // If no links available, show a placeholder or message
            if (!project.liveLink && !project.githubLink) {
                linksHTML = `
                    <div class="project-link disabled" title="Links not available">
                        <i class="fas fa-eye-slash"></i>
                    </div>
                `;
            }
            
            return linksHTML;
        };
        
        card.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-overlay">
                    <div class="project-links">
                        ${generateLinks()}
                    </div>
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        `;
        
        return card;
    }

    // 3D Background Effect
    setup3DBackground() {
        // This would be implemented with Three.js for a more advanced 3D background
        // For now, we'll use CSS animations
        const bg = document.getElementById('bg-animation');
        if (!bg) return;

        // Add mouse movement parallax
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            bg.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px) scale(1.1)`;
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ModernPortfolio();
});

// Add CSS for mobile navigation
const mobileNavCSS = `
    @media (max-width: 768px) {
        .nav-links {
            position: fixed;
            top: 100%;
            left: 0;
            width: 100%;
            background: rgba(15, 15, 35, 0.98);
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 2rem;
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
        }
        
        .nav-links.nav-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
        
        .nav-toggle {
            display: flex !important;
        }
        
        .nav-toggle.nav-toggle-open span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .nav-toggle.nav-toggle-open span:nth-child(2) {
            opacity: 0;
        }
        
        .nav-toggle.nav-toggle-open span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
        
        .nav-links a.active {
            color: var(--primary-color);
        }
    }
`;

// Add the CSS to the document
const style = document.createElement('style');
style.textContent = mobileNavCSS;
document.head.appendChild(style);