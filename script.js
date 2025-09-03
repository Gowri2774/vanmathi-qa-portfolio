// Portfolio JavaScript Functionality

document.addEventListener('DOMContentLoaded', function() {
    // State management
    let activeSection = 'home';
    let showScrollTop = false;

    // DOM elements
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const contactForm = document.getElementById('contactForm');
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];

    // Initialize
    init();

    function init() {
        setupEventListeners();
        handleScroll(); // Check initial scroll position
        addScrollAnimations();
    }

    function setupEventListeners() {
        // Navigation click handlers
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                const sectionId = this.dataset.section;
                scrollToSection(sectionId);
            });
        });

        // Scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Scroll to top button
        scrollTopBtn.addEventListener('click', scrollToTop);

        // Contact form submission
        contactForm.addEventListener('submit', handleFormSubmit);

        // Hero buttons
        const viewWorkBtn = document.querySelector('[data-section="projects"]');
        if (viewWorkBtn) {
            viewWorkBtn.addEventListener('click', function() {
                scrollToSection('projects');
            });
        }

        // Add intersection observer for animations
        setupIntersectionObserver();
    }

    function handleScroll() {
        const scrollY = window.scrollY;
        
        // Show/hide scroll to top button
        const shouldShowScrollTop = scrollY > 300;
        if (shouldShowScrollTop !== showScrollTop) {
            showScrollTop = shouldShowScrollTop;
            toggleScrollTopButton(showScrollTop);
        }

        // Update active section based on scroll position
        updateActiveSection();
    }

    function updateActiveSection() {
        const current = sections.find(section => {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                return rect.top <= 100 && rect.bottom >= 100;
            }
            return false;
        });

        if (current && current !== activeSection) {
            activeSection = current;
            updateActiveNavLink(current);
        }
    }

    function updateActiveNavLink(sectionId) {
        navLinks.forEach(link => {
            if (link.dataset.section === sectionId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    function toggleScrollTopButton(show) {
        if (show) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    }

    function scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    function scrollToTop() {
        window.scrollTo({ 
            top: 0, 
            behavior: 'smooth' 
        });
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Simple validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields.', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }

        // Simulate form submission
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        contactForm.reset();
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
        `;

        // Add notification styles if not already added
        addNotificationStyles();

        // Add to DOM
        document.body.appendChild(notification);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);

        // Animate in
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
    }

    function addNotificationStyles() {
        if (document.getElementById('notification-styles')) return;

        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                max-width: 400px;
                padding: 1rem;
                border-radius: 0.5rem;
                color: white;
                z-index: 1000;
                transform: translateX(100%);
                transition: transform 0.3s ease;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
            }
            
            .notification.show {
                transform: translateX(0);
            }
            
            .notification-success {
                background: linear-gradient(135deg, #22c55e, #16a34a);
            }
            
            .notification-error {
                background: linear-gradient(135deg, #ef4444, #dc2626);
            }
            
            .notification-info {
                background: linear-gradient(135deg, #3b82f6, #2563eb);
            }
            
            .notification-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 1rem;
            }
            
            .notification-message {
                flex: 1;
            }
            
            .notification-close {
                background: none;
                border: none;
                color: white;
                font-size: 1.25rem;
                cursor: pointer;
                padding: 0;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: background-color 0.2s ease;
            }
            
            .notification-close:hover {
                background-color: rgba(255, 255, 255, 0.2);
            }
        `;
        document.head.appendChild(style);
    }

    function setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        // Observe elements with animation classes
        const animatedElements = document.querySelectorAll('.animate-fade-in');
        animatedElements.forEach(el => {
            el.style.animationPlayState = 'paused';
            observer.observe(el);
        });
    }

    function addScrollAnimations() {
        // Add scroll-triggered animations for skill cards and project cards
        const skillCards = document.querySelectorAll('.skill-card');
        const projectCards = document.querySelectorAll('.project-card');
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                }
            });
        }, observerOptions);

        // Initially hide cards and prepare for animation
        [...skillCards, ...projectCards].forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.6s ease';
            cardObserver.observe(card);
        });
    }

    // Smooth hover effects for interactive elements
    function addHoverEffects() {
        const interactiveElements = document.querySelectorAll('.skill-card, .project-card, .btn');
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05) translateY(-2px)';
            });
            
            element.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1) translateY(0)';
            });
        });
    }

    // Initialize hover effects
    addHoverEffects();

    // Parallax effect for background circles
    function addParallaxEffect() {
        const circles = document.querySelectorAll('.bg-circle');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            circles.forEach((circle, index) => {
                const speed = (index + 1) * 0.3;
                circle.style.transform = `translateY(${rate * speed}px)`;
            });
        });
    }

    // Initialize parallax effect
    addParallaxEffect();

    // Add typing effect to hero subtitle
    function addTypingEffect() {
        const subtitle = document.querySelector('.hero-subtitle');
        if (!subtitle) return;

        const text = subtitle.textContent;
        subtitle.textContent = '';
        subtitle.style.borderRight = '2px solid #a855f7';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                subtitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            } else {
                setTimeout(() => {
                    subtitle.style.borderRight = 'none';
                }, 1000);
            }
        };

        // Start typing effect after a delay
        setTimeout(typeWriter, 1000);
    }

    // Initialize typing effect
    addTypingEffect();
});