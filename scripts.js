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
    }
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            // Make sure Alpine.js doesn't interfere with our toggle
            if (mobileMenu.__x) {
                mobileMenu.__x.updateElements(mobileMenu);
            }
        });
    }

    // Animation for elements when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Make sure animations applied when elements come into view
                if (entry.target.classList.contains('hero-image')) {
                    // Ensure the hero image is visible and animated
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                    }, 100);
                }
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });

    // Initialize with Spanish language by default
    changeLanguage('es');
});

// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('screenshot-carousel');
    if (!carousel) return;
    
    const container = carousel.parentElement;
    
    let isDown = false;
    let startX;
    let scrollLeft;
    
    // Mouse events
    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.classList.add('active');
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
        e.preventDefault(); // Prevent text selection
    });
    
    container.addEventListener('mouseleave', () => {
        isDown = false;
        container.classList.remove('active');
    });
    
    container.addEventListener('mouseup', () => {
        isDown = false;
        container.classList.remove('active');
    });
    
    container.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 1.5; // Adjust scroll speed
        container.scrollLeft = scrollLeft - walk;
    });
    
    // Touch events
    container.addEventListener('touchstart', (e) => {
        isDown = true;
        container.classList.add('active');
        startX = e.touches[0].pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    }, { passive: false });
    
    container.addEventListener('touchend', () => {
        isDown = false;
        container.classList.remove('active');
    });
    
    container.addEventListener('touchcancel', () => {
        isDown = false;
        container.classList.remove('active');
    });
    
    container.addEventListener('touchmove', (e) => {
        if(!isDown) return;
        const x = e.touches[0].pageX - container.offsetLeft;
        const walk = (x - startX) * 1.5;
        container.scrollLeft = scrollLeft - walk;
        e.preventDefault(); // Prevent page scrolling when dragging
    }, { passive: false });
    
    // Scroll to center initially
    window.addEventListener('load', () => {
        const containerWidth = container.offsetWidth;
        const carouselWidth = carousel.scrollWidth;
        const initialScroll = (carouselWidth - containerWidth) / 4;
        container.scrollLeft = initialScroll;
    });
});

// Function to detect user's browser language
function detectUserLanguage() {
    // Get browser language (returns language code like 'en-US', 'es-ES', etc.)
    let browserLang = navigator.language || navigator.userLanguage;
    
    // Extract the primary language code (e.g., 'en' from 'en-US')
    let primaryLang = browserLang.split('-')[0];
    
    // Check if the language is supported (currently only 'en' and 'es')
    if (primaryLang === 'en' || primaryLang === 'es') {
        return primaryLang;
    }
    
    // Default to English if language is not supported
    return 'en';
}

// Function to change the language
function changeLanguage(lang) {
    try {
        // Update current language and store in localStorage for persistence across pages
        localStorage.setItem('bricksLanguage', lang);
        
        // Update the displayed language in the selector
        const langElement = document.getElementById('current-language');
        if (langElement) {
            langElement.textContent = lang === 'en' ? 'English' : 'Español';
        }
        
        // Show only elements for the selected language
        const allLangElements = document.querySelectorAll('span[lang], img[lang]');
        allLangElements.forEach(el => {
            if (el.getAttribute('lang') === lang) {
                el.classList.remove('hidden');
            } else {
                el.classList.add('hidden');
            }
        });
        
        // Update language buttons styling
        const langButtons = document.querySelectorAll('.language-btn');
        langButtons.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('bg-accent');
                btn.classList.remove('bg-background');
            } else {
                btn.classList.remove('bg-accent');
                btn.classList.add('bg-background');
            }
        });

        // Update html lang attribute
        document.documentElement.setAttribute('lang', lang);
        
        // Update meta tags and title based on language
        if (lang === 'en') {
            // Get English meta description and title if they exist
            const enDescription = document.querySelector('meta[name="description-en"]');
            const enTitle = document.querySelector('meta[name="title-en"]');
            
            if (enDescription) {
                // Update the primary description meta tag with English content
                const descriptionTag = document.querySelector('meta[name="description"]');
                if (descriptionTag) {
                    descriptionTag.setAttribute('content', enDescription.getAttribute('content'));
                }
            }
            
            if (enTitle) {
                // Update the document title with English content
                document.title = enTitle.getAttribute('content');
            }
        } else {
            // Restore Spanish meta description and title
            const esDescription = "Bricks: la calculadora hipotecaria intuitiva para compradores primerizos. Compare tasas, visualice pagos y tome decisiones financieras con confianza. Herramienta profesional para bancos.";
            const esTitle = "Bricks - Decisiones Hipotecarias Simplificadas";
            
            // Update the primary description meta tag with Spanish content
            const descriptionTag = document.querySelector('meta[name="description"]');
            if (descriptionTag) {
                descriptionTag.setAttribute('content', esDescription);
            }
            
            // Update the document title with Spanish content
            document.title = esTitle;
        }
    } catch (error) {
        console.error('Error changing language:', error);
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    // Check if user has a previously set language preference
    let savedLanguage = localStorage.getItem('bricksLanguage');
    
    // If no saved preference, detect from browser
    if (!savedLanguage) {
        savedLanguage = detectUserLanguage();
    }
    
    // Apply the language
    changeLanguage(savedLanguage);
}); 