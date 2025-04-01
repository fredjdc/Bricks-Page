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

// Language Switching Function
function changeLanguage(lang) {
    try {
        // Update current language
        window.currentLanguage = lang;
        
        // Update the displayed language in the selector
        const langElement = document.getElementById('current-language');
        if (langElement) {
            langElement.textContent = lang === 'en' ? 'English' : 'Español';
        }
        
        // Show only elements for the selected language
        const allLangElements = document.querySelectorAll('span[lang]');
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
                btn.classList.add('bg-brand', 'text-brand-foreground');
                btn.classList.remove('bg-background');
            } else {
                btn.classList.remove('bg-brand', 'text-brand-foreground');
                btn.classList.add('bg-background');
            }
        });
    } catch (error) {
        console.error('Error changing language:', error);
    }
} 