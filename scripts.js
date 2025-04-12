// Tailwind configuration
if (typeof tailwind !== 'undefined') {
    tailwind.config = {
        theme: {
            container: {
                center: true,
                padding: '1rem',
                screens: {
                    DEFAULT: '100%',
                    sm: '640px',
                    md: '768px',
                    lg: '1024px',
                    xl: '1200px',
                    '2xl': '1200px',
                },
            },
            extend: {
                colors: {
                    border: "hsl(240 5.9% 90%)",
                    input: "hsl(240 5.9% 90%)",
                    ring: "hsl(240 5% 64.9%)",
                    background: "hsl(0 0% 100%)",
                    foreground: "hsl(240 10% 3.9%)",
                    primary: {
                        DEFAULT: "hsl(240 5.9% 10%)",
                        foreground: "hsl(0 0% 98%)",
                    },
                    secondary: {
                        DEFAULT: "hsl(240 4.8% 95.9%)",
                        foreground: "hsl(240 5.9% 10%)",
                    },
                    destructive: {
                        DEFAULT: "hsl(0 84.2% 60.2%)",
                        foreground: "hsl(0 0% 98%)",
                    },
                    muted: {
                        DEFAULT: "hsl(240 4.8% 95.9%)",
                        foreground: "hsl(240 3.8% 46.1%)",
                    },
                    accent: {
                        DEFAULT: "hsl(240 4.8% 95.9%)",
                        foreground: "hsl(240 5.9% 10%)",
                    },
                    popover: {
                        DEFAULT: "hsl(0 0% 100%)",
                        foreground: "hsl(240 10% 3.9%)",
                    },
                    card: {
                        DEFAULT: "hsl(0 0% 100%)",
                        foreground: "hsl(240 10% 3.9%)",
                    },
                    brand: {
                        DEFAULT: "hsl(220 65% 55%)",
                        foreground: "hsl(0 0% 98%)",
                    },
                    success: {
                        DEFAULT: "hsl(142 76% 36%)",
                        foreground: "hsl(0 0% 98%)",
                    }
                },
                borderRadius: {
                    lg: "var(--radius)",
                    md: "calc(var(--radius) - 20px)",
                    sm: "calc(var(--radius) - 40px)",
                },
                fontFamily: {
                    sans: ["Inter", "sans-serif"],
                },
                boxShadow: {
                    'soft-md': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                    'soft-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
                    'soft-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.01)',
                },
            },
        },
    };
}

// Utility functions
const debounce = (fn, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
};

// DOM Elements cache
const elements = {
    menuButton: document.getElementById('mobile-menu-button'),
    mobileMenu: document.getElementById('mobile-menu'),
    carousel: document.getElementById('screenshot-carousel'),
    langElement: document.getElementById('current-language'),
    videoModal: document.getElementById('video-modal'),
    openVideoBtn: document.getElementById('open-video-modal'),
    closeVideoBtn: document.getElementById('close-video-modal'),
    modalVideo: document.getElementById('modal-video'),
};

// Event Handlers
const handleMobileMenu = () => {
    if (elements.mobileMenu) {
        elements.mobileMenu.classList.toggle('hidden');
        if (elements.mobileMenu.__x) {
            elements.mobileMenu.__x.updateElements(elements.mobileMenu);
        }
    }
};

const handleCarousel = (container) => {
    let isDown = false;
    let startX;
    let scrollLeft;

    const handleStart = (e) => {
        isDown = true;
        container.classList.add('active');
        startX = (e.pageX || e.touches[0].pageX) - container.offsetLeft;
        scrollLeft = container.scrollLeft;
        e.preventDefault();
    };

    const handleEnd = () => {
        isDown = false;
        container.classList.remove('active');
    };

    const handleMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = (e.pageX || e.touches[0].pageX) - container.offsetLeft;
        const walk = (x - startX) * 1.5;
        container.scrollLeft = scrollLeft - walk;
    };

    // Mouse events
    container.addEventListener('mousedown', handleStart);
    container.addEventListener('mouseleave', handleEnd);
    container.addEventListener('mouseup', handleEnd);
    container.addEventListener('mousemove', handleMove);

    // Touch events
    container.addEventListener('touchstart', handleStart, { passive: false });
    container.addEventListener('touchend', handleEnd);
    container.addEventListener('touchcancel', handleEnd);
    container.addEventListener('touchmove', handleMove, { passive: false });
};

// Intersection Observer for animations
const setupIntersectionObserver = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                if (entry.target.classList.contains('hero-image')) {
                    requestAnimationFrame(() => {
                        entry.target.style.opacity = '1';
                    });
                }
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
};

// Language handling
const detectUserLanguage = () => {
    const browserLang = (navigator.language || navigator.userLanguage).split('-')[0];
    return ['en', 'es'].includes(browserLang) ? browserLang : 'en';
};

const changeLanguage = (lang) => {
    try {
        localStorage.setItem('bricksLanguage', lang);
        
        if (elements.langElement) {
            elements.langElement.textContent = lang === 'en' ? 'English' : 'Español';
        }
        
        document.querySelectorAll('span[lang], img[lang]').forEach(el => {
            el.classList.toggle('hidden', el.getAttribute('lang') !== lang);
        });
        
        document.querySelectorAll('.language-btn').forEach(btn => {
            const isActive = btn.getAttribute('data-lang') === lang;
            btn.classList.toggle('bg-accent', isActive);
            btn.classList.toggle('bg-background', !isActive);
        });

        document.documentElement.setAttribute('lang', lang);
        
        // Update meta tags and title based on language
        const metaDescription = document.querySelector(`meta[name="description"][lang="${lang}"]`);
        const titleElement = document.querySelector(`title[lang="${lang}"]`);
        
        if (metaDescription) {
            document.querySelector('meta[name="description"]').setAttribute('content', metaDescription.getAttribute('content'));
        }
        
        if (titleElement) {
            document.title = titleElement.textContent;
        }
    } catch (error) {
        console.error('Error changing language:', error);
    }
};

// Video Modal Handler
const handleVideoModal = () => {
    if (!elements.videoModal || !elements.openVideoBtn || !elements.closeVideoBtn) return;
    
    const openModal = (e) => {
        e.preventDefault();
        elements.videoModal.classList.add('opacity-100');
        elements.videoModal.classList.remove('opacity-0', 'pointer-events-none');
        document.body.style.overflow = 'hidden';
        elements.modalVideo.play();
    };

    const closeModal = () => {
        elements.videoModal.classList.remove('opacity-100');
        elements.videoModal.classList.add('opacity-0', 'pointer-events-none');
        document.body.style.overflow = '';
        elements.modalVideo.pause();
    };

    elements.openVideoBtn.addEventListener('click', openModal);
    elements.closeVideoBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside the content
    elements.videoModal.addEventListener('click', (e) => {
        if (e.target === elements.videoModal) {
            closeModal();
        }
    });

    // Close modal with escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !elements.videoModal.classList.contains('pointer-events-none')) {
            closeModal();
        }
    });
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu
    if (elements.menuButton) {
        elements.menuButton.addEventListener('click', handleMobileMenu);
    }

    // Carousel
    if (elements.carousel) {
        const container = elements.carousel.parentElement;
        handleCarousel(container);
        
        // Center carousel on load
        window.addEventListener('load', () => {
            const containerWidth = container.offsetWidth;
            const carouselWidth = elements.carousel.scrollWidth;
            container.scrollLeft = (carouselWidth - containerWidth) / 4;
        });
    }

    // Animations
    setupIntersectionObserver();

    // Video Modal
    handleVideoModal();

    // Initialize language
    const savedLang = localStorage.getItem('bricksLanguage') || detectUserLanguage();
    changeLanguage(savedLang);
});

// Export functions for global use
window.changeLanguage = changeLanguage; 