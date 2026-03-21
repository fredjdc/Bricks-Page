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
let elements = {};

// Function to initialize DOM elements
const initializeElements = () => {
    elements = {
        menuButton: document.getElementById('mobile-menu-button'),
        mobileMenu: document.getElementById('mobile-menu'),
        carousel: document.getElementById('screenshot-carousel'),
        langElement: document.getElementById('current-language'),
        videoModal: document.getElementById('video-modal'),
        openVideoBtn: document.getElementById('open-video-modal'),
        closeVideoBtn: document.getElementById('close-video-modal'),
        modalVideo: document.getElementById('modal-video'),
        // Support page elements
        issueForm: document.getElementById('issue-report-form'),
        fileInput: document.getElementById('file-upload'),
        fileList: document.getElementById('file-list'),
        successAlert: document.getElementById('success-alert'),
        closeSuccess: document.getElementById('close-success'),
        referenceNumber: document.getElementById('reference-number')
    };
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

    // Common handler functions
    const handleStart = (e) => {
        isDown = true;
        container.classList.add('active');
        // Works for both mouse and touch events
        const pageX = e.pageX || (e.touches && e.touches[0].pageX);
        startX = pageX - container.offsetLeft;
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
        // Works for both mouse and touch events
        const pageX = e.pageX || (e.touches && e.touches[0].pageX);
        const x = pageX - container.offsetLeft;
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
    // Hero image special handling - make it visible immediately
    document.querySelectorAll('.hero-image').forEach(element => {
        if (element) {
            // Make hero image visible immediately
            requestAnimationFrame(() => {
                element.style.opacity = '1';
            });
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Get animation delay from data attribute if present
                const delay = parseInt(entry.target.getAttribute('data-animation-delay')) || 0;

                // Apply animation with delay for smoother, more subtle appearance
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, delay);

                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.05, // Trigger earlier for smoother appearance
        rootMargin: '0px 0px -80px 0px' // Start animation earlier for more subtle entrance
    });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
};

// Hero word swap animation settings keep timing centralized
const HERO_WORD_FADE_DURATION = 300;
const HERO_WORD_HOLD_DURATION = 1700;
const heroWordControllers = [];

/**
 * Creates a controller that handles the hero word swap lifecycle.
 * @param {HTMLElement} container - Wrapper with data attributes that describe the animation.
 * @returns {{ lang: string, start: Function, stop: Function, refresh: Function } | null}
 */
const createHeroWordController = (container) => {
    if (!container) {
        return null;
    }

    const lang = container.dataset.lang || 'en';
    const words = (container.dataset.words || '')
        .split('|')
        .map((word) => word.trim())
        .filter(Boolean);
    const wordElement = container.querySelector('.hero-word');

    if (!wordElement || words.length === 0) {
        return null;
    }

    const fadeDuration = Number(container.dataset.fadeMs) || HERO_WORD_FADE_DURATION;
    const holdDuration = Number(container.dataset.holdMs) || HERO_WORD_HOLD_DURATION;
    const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timers = [];
    let currentIndex = 0;

    const clearTimers = () => {
        timers.forEach(clearTimeout);
        timers = [];
    };

    const setWordInstant = (word) => {
        wordElement.textContent = word;
    };

    // Keeps layout width stable to avoid the heading from jumping.
    const computeMinWidth = () => {
        if (!words.length) {
            return;
        }

        const measureElement = wordElement.cloneNode(true);
        measureElement.style.position = 'absolute';
        measureElement.style.visibility = 'hidden';
        measureElement.style.whiteSpace = 'nowrap';
        measureElement.style.pointerEvents = 'none';
        measureElement.style.opacity = '0';

        document.body.appendChild(measureElement);

        let maxWidth = 0;
        words.forEach((word) => {
            measureElement.textContent = word;
            const width = measureElement.getBoundingClientRect().width;
            if (width > maxWidth) {
                maxWidth = width;
            }
        });

        document.body.removeChild(measureElement);

        if (maxWidth > 0) {
            container.style.setProperty('--hero-word-min-width', `${Math.ceil(maxWidth)}px`);
        }
    };

    const animateTo = (word, onComplete) => {
        container.classList.add('is-fading-out');

        const fadeOutTimer = setTimeout(() => {
            container.classList.remove('is-fading-out');
            setWordInstant(word);
            container.classList.add('is-fading-in');

            const fadeInTimer = setTimeout(() => {
                container.classList.remove('is-fading-in');
                if (typeof onComplete === 'function') {
                    onComplete();
                }
            }, fadeDuration);

            timers.push(fadeInTimer);
        }, fadeDuration);

        timers.push(fadeOutTimer);
    };

    const scheduleNext = () => {
        if (currentIndex >= words.length - 1) {
            return;
        }

        const holdTimer = setTimeout(() => {
            currentIndex += 1;
            animateTo(words[currentIndex], scheduleNext);
        }, holdDuration);

        timers.push(holdTimer);
    };

    const start = () => {
        clearTimers();
        currentIndex = 0;
        setWordInstant(words[currentIndex]);
        computeMinWidth();
        container.classList.remove('is-fading-in', 'is-fading-out');

        if (words.length <= 1 || reduceMotionQuery.matches) {
            return;
        }

        scheduleNext();
    };

    const stop = () => {
        clearTimers();
        container.classList.remove('is-fading-in', 'is-fading-out');
    };

    const handleMotionPreferenceChange = () => {
        stop();
        setWordInstant(words[0]);
    };

    if (typeof reduceMotionQuery.addEventListener === 'function') {
        reduceMotionQuery.addEventListener('change', handleMotionPreferenceChange);
    } else if (typeof reduceMotionQuery.addListener === 'function') {
        // Safari fallback
        reduceMotionQuery.addListener(handleMotionPreferenceChange);
    }

    // Ensure the initial word is visible immediately.
    setWordInstant(words[0]);
    computeMinWidth();

    return {
        lang,
        start,
        stop,
        refresh: computeMinWidth
    };
};

/**
 * Scans the DOM for word-swap containers and registers controllers.
 */
const initializeHeroWordSwap = () => {
    heroWordControllers.length = 0;
    document.querySelectorAll('[data-word-swap]').forEach((container) => {
        const controller = createHeroWordController(container);
        if (controller) {
            heroWordControllers.push(controller);
        }
    });
};

/**
 * Syncs word swap animation with the active language.
 * @param {string} lang - The language that should animate.
 */
const updateHeroWordSwapForLanguage = (lang) => {
    heroWordControllers.forEach((controller) => {
        controller.stop();
        if (controller.lang === lang) {
            controller.start();
        }
    });
};

// Language handling
const detectUserLanguage = () => {
    const browserLang = (navigator.language || navigator.userLanguage).split('-')[0];
    return ['en', 'es', 'fr', 'pt'].includes(browserLang) ? browserLang : 'en';
};

/**
 * Changes the language of the entire application
 * @param {string} lang - The language code ('en' or 'es')
 */
const changeLanguage = (lang) => {
    try {
        // Store user preference
        localStorage.setItem('bricksLanguage', lang);

        // Update language display in UI
        if (elements.langElement) {
            const langNames = {
                'en': 'English',
                'es': 'Español',
                'fr': 'Français',
                'pt': 'Português'
            };
            elements.langElement.textContent = langNames[lang] || 'English';
        }

        // Update document language attribute
        document.documentElement.setAttribute('lang', lang);

        // Hide all language elements first
        document.querySelectorAll('[lang]').forEach(el => {
            el.classList.add('hidden');
        });

        // Show only the elements with the selected language
        document.querySelectorAll(`[lang="${lang}"]`).forEach(el => {
            el.classList.remove('hidden');
        });

        // Handle mobile language display
        const mobileLangBtn = document.getElementById('mobile-language-switcher');
        if (mobileLangBtn) {
            const mobileLabel = mobileLangBtn.querySelector('span:not(.material-symbols-outlined)');
            if (mobileLabel) {
                const langNames = {
                    'en': 'English',
                    'es': 'Español',
                    'fr': 'Français',
                    'pt': 'Português'
                };
                mobileLabel.textContent = langNames[lang] || 'English';
            }
        }

        // Update placeholders based on language
        updatePlaceholders(lang);

        // Update app screenshot images based on language
        updateAppScreenshots(lang);

        // Update active state in language menu
        document.querySelectorAll('.lang-option').forEach(option => {
            if (option.getAttribute('data-lang') === lang) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });

        // Restart hero headline animation for the freshly selected language
        updateHeroWordSwapForLanguage(lang);
    } catch (error) {
        console.error('Error changing language:', error);
    }
};

// Update form placeholders based on language
const updatePlaceholders = (lang) => {
    try {
        // Support form placeholders
        const placeholders = {
            name: {
                en: 'Enter your full name',
                es: 'Ingresa tu nombre completo',
                fr: 'Entrez votre nom complet',
                pt: 'Digite seu nome completo'
            },
            email: {
                en: 'Enter your email address',
                es: 'Ingresa tu correo electrónico',
                fr: 'Entrez votre adresse e-mail',
                pt: 'Digite seu endereço de e-mail'
            },
            description: {
                en: 'Please describe the issue in detail...',
                es: 'Por favor describe el problema en detalle...',
                fr: 'Veuillez décrire le problème en détail...',
                pt: 'Por favor, descreva o problema em detalhes...'
            }
        };

        // Update form input placeholders
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const descInput = document.getElementById('issue-description');

        if (nameInput) nameInput.placeholder = placeholders.name[lang];
        if (emailInput) emailInput.placeholder = placeholders.email[lang];
        if (descInput) descInput.placeholder = placeholders.description[lang];
    } catch (error) {
        console.error('Error updating placeholders:', error);
    }
};

// Update app screenshot images based on language
const updateAppScreenshots = (lang) => {
    try {
        // Define image paths for each app and language
        const imagePaths = {
            'bricks-calc': {
                es: 'images/bricks-calc-img-es.png',
                en: 'images/bricks-calc-img-en.png',
                fr: 'images/bricks-calc-img-en.png', // Fallback
                pt: 'images/bricks-calc-img-en.png'  // Fallback
            },
            'bricks-calc-hero': {
                es: 'images/bricks-calc-hero-es.png',
                en: 'images/bricks-calc-hero-en.png'
            },
            'bricks-calc-hero-layer-back': {
                es: 'images/back-layer-es-03.png',
                en: 'images/back-layer-en-03.png'
            },
            'bricks-calc-hero-layer-middle': {
                es: 'images/mid-layer-es-02.png',
                en: 'images/mid-layer-en-02.png'
            },
            'bricks-calc-hero-layer-front': {
                es: 'images/top-layer-es-01.png',
                en: 'images/top-layer-en-01.png'
            },
            'bricks-calc-fusion-back': {
                es: 'images/fusion-es-01.png',
                en: 'images/fusion-en-01.png'
            },
            'bricks-calc-fusion-middle': {
                es: 'images/fusion-es-02.png',
                en: 'images/fusion-en-02.png'
            },
            // Key features gallery artwork toggles with locale-specific imagery
            'bricks-calc-feature-01': {
                es: 'images/feature-es-01.jpg',
                en: 'images/feature-en-01.jpg'
            },
            'bricks-calc-feature-02': {
                es: 'images/feature-es-02.jpg',
                en: 'images/feature-en-02.jpg'
            },
            'bricks-calc-feature-03': {
                es: 'images/feature-es-03.jpg',
                en: 'images/feature-en-03.jpg'
            },
            'bricks-calc-feature-04': {
                es: 'images/feature-es-04.jpg',
                en: 'images/feature-en-04.jpg'
            },
            'bricks-calc-feature-05': {
                es: 'images/feature-es-05.jpg',
                en: 'images/feature-en-05.jpg'
            },
            'bricks-leads': {
                es: 'images/bricks-leads-img-es.png',
                en: 'images/bricks-leads-img-en.png',
                fr: 'images/bricks-leads-img-en.png', // Fallback
                pt: 'images/bricks-leads-img-en.png'  // Fallback
            },
            'bricks-leads-layer-back': {
                es: 'images/leads-back-layer-es-03.png',
                en: 'images/leads-back-layer-en-03.png'
            },
            'bricks-leads-layer-middle': {
                es: 'images/leads-mid-layer-es-02.png',
                en: 'images/leads-mid-layer-en-02.png'
            },
            'bricks-leads-layer-front': {
                es: 'images/leads-top-layer-es-01.png',
                en: 'images/leads-top-layer-en-01.png'
            },
            // Bricks Scan
            'bricks-scan-hero-layer-back': {
                es: 'images-bricks-scan/back-layer-es-03.png',
                en: 'images-bricks-scan/back-layer-en-03.png'
            },
            'bricks-scan-hero-layer-middle': {
                es: 'images-bricks-scan/mid-layer-es-02.png',
                en: 'images-bricks-scan/mid-layer-en-02.png'
            },
            'bricks-scan-hero-layer-front': {
                es: 'images-bricks-scan/top-layer-es-01.png',
                en: 'images-bricks-scan/top-layer-en-01.png'
            },
            'bricks-scan-fusion-back': {
                es: 'images-bricks-scan/fusion-es-01.png',
                en: 'images-bricks-scan/fusion-en-01.png'
            },
            'bricks-scan-fusion-middle': {
                es: 'images-bricks-scan/fusion-es-02.png',
                en: 'images-bricks-scan/fusion-en-02.png'
            },
            'bricks-scan-feature-01': {
                es: 'images-bricks-scan/scan-feature-es-01.png',
                en: 'images-bricks-scan/scan-feature-en-01.png'
            },
            'bricks-scan-feature-02': {
                es: 'images-bricks-scan/scan-feature-es-02.png',
                en: 'images-bricks-scan/scan-feature-en-02.png'
            },
            'bricks-scan-feature-03': {
                es: 'images-bricks-scan/scan-feature-es-03.png',
                en: 'images-bricks-scan/scan-feature-en-03.png'
            },
            'bricks-scan-feature-04': {
                es: 'images-bricks-scan/scan-feature-es-04.png',
                en: 'images-bricks-scan/scan-feature-en-04.png'
            },
            'bricks-scan-feature-05': {
                es: 'images-bricks-scan/scan-feature-es-05.png',
                en: 'images-bricks-scan/scan-feature-en-05.png'
            },
            'bricks-scan-feature-06': {
                es: 'images-bricks-scan/scan-feature-es-06.png',
                en: 'images-bricks-scan/scan-feature-en-06.png'
            },
            'bricks-scan-feature-07': {
                es: 'images-bricks-scan/scan-feature-es-07.png',
                en: 'images-bricks-scan/scan-feature-en-07.png'
            }
        };

        // Find all images with data-app-image attribute and update their sources
        document.querySelectorAll('[data-app-image]').forEach(img => {
            const appName = img.getAttribute('data-app-image');
            let imagePath = imagePaths[appName]?.[lang];

            // For English, try to use English version, but fallback to Spanish as placeholder
            if (lang === 'en' && imagePath && imagePath.includes('-en.png')) {
                // Test if English image exists, otherwise use Spanish placeholder
                const testImg = new Image();
                testImg.onerror = () => {
                    // English image doesn't exist, use Spanish version as placeholder
                    img.src = imagePaths[appName].es;
                };
                testImg.onload = () => {
                    // English image exists, use it
                    img.src = imagePath;
                };
                testImg.src = imagePath;
            } else if (lang === 'es' && imagePath && imagePath.includes('-es.png')) {
                // For Spanish, test if Spanish image exists, otherwise fallback to English
                const testImg = new Image();
                testImg.onerror = () => {
                    // Spanish image doesn't exist, use English version as fallback
                    img.src = imagePaths[appName].en || imagePath;
                };
                testImg.onload = () => {
                    // Spanish image exists, use it
                    img.src = imagePath;
                };
                testImg.src = imagePath;
            } else if (imagePath) {
                // Direct path assignment if no language-specific testing needed
                img.src = imagePath;
            }
        });
    } catch (error) {
        console.error('Error updating app screenshots:', error);
    }
};

// Gentle parallax for the Apps Overview stacks
const initAppsParallax = () => {
    // Respect user preference for reduced motion and bail if animation should be skipped
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        return;
    }

    const parallaxCards = document.querySelectorAll('[data-app-parallax]');
    if (!parallaxCards.length) {
        return;
    }

    let pointerX = 0;
    let pointerY = 0;
    let rafId = null;

    const updateParallax = () => {
        rafId = null;

        const writes = [];

        // READ PHASE: Calculate all positions first
        parallaxCards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const distanceFromCenter = rect.top + rect.height / 2 - window.innerHeight / 2;

            card.querySelectorAll('[data-parallax-depth]').forEach((layer) => {
                const depth = Number(layer.dataset.parallaxDepth || 0);
                writes.push({ layer, depth, distanceFromCenter });
            });
        });

        // WRITE PHASE: Apply all transforms in a batch
        writes.forEach(({ layer, depth, distanceFromCenter }) => {
            const scrollOffset = -distanceFromCenter * depth * 0.18;
            const pointerOffsetX = pointerX * depth * 24;
            const pointerOffsetY = pointerY * depth * 16;

            layer.style.transform = `translate3d(${pointerOffsetX}px, ${scrollOffset + pointerOffsetY}px, 0)`;
        });
    };

    const scheduleUpdate = () => {
        if (rafId !== null) {
            return;
        }
        rafId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    window.addEventListener('pointermove', (event) => {
        pointerX = event.clientX / window.innerWidth - 0.5;
        pointerY = event.clientY / window.innerHeight - 0.5;
        scheduleUpdate();
    });

    // Run once so the layers start in the right spot without needing user input
    scheduleUpdate();
};

// Video Modal Handler
const handleVideoModal = () => {
    if (!elements.videoModal || !elements.openVideoBtn || !elements.closeVideoBtn) {
        console.error('Video modal elements not found');
        return;
    }

    const openModal = (e) => {
        e.preventDefault();

        // Load the correct video source based on current language
        if (elements.modalVideo) {
            const currentLang = localStorage.getItem('bricksLanguage') || detectUserLanguage();

            // More direct approach to set the correct source
            const videoEl = elements.modalVideo;

            // Define video paths based on language
            const videoSources = {
                'en': 'images/app-preview-en.mp4',
                'es': 'images/app-preview-es.mp4',
                'fr': 'images/app-preview-en.mp4', // Fallback
                'pt': 'images/app-preview-en.mp4'  // Fallback
            };

            // Get the appropriate source for the current language
            const sourcePath = videoSources[currentLang] || videoSources['en']; // Fallback to English

            // Directly set the src attribute on the video element
            videoEl.src = sourcePath;
            videoEl.load();
        }

        elements.videoModal.classList.add('opacity-100');
        elements.videoModal.classList.remove('opacity-0', 'pointer-events-none');
        document.body.style.overflow = 'hidden';

        // Only try to play the video after the modal transition completes
        if (elements.modalVideo) {
            setTimeout(() => {
                elements.modalVideo.play()
                    .catch(err => console.error('Error playing video:', err));
            }, 300); // Match the transition duration
        }
    };

    const closeModal = () => {
        elements.videoModal.classList.remove('opacity-100');
        elements.videoModal.classList.add('opacity-0', 'pointer-events-none');
        document.body.style.overflow = '';
        if (elements.modalVideo) {
            elements.modalVideo.pause();
        }
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



// Format file size to human-readable format
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    let i = 0;
    let tempBytes = bytes;

    while (tempBytes >= k && i < sizes.length - 1) {
        tempBytes /= k;
        i++;
    }

    if (parseFloat(tempBytes.toFixed(2)) >= k && i < sizes.length - 1) {
        tempBytes /= k;
        i++;
    }

    return parseFloat(tempBytes.toFixed(2)) + ' ' + sizes[i];
}

// Language switcher setup
const setupLanguageSwitcher = () => {
    const languageSwitcher = document.getElementById('language-switcher');
    const languageMenu = document.getElementById('language-menu');
    const mobileLanguageSwitcher = document.getElementById('mobile-language-switcher');

    // Initial language
    const savedLang = localStorage.getItem('bricksLanguage');
    const initialLang = savedLang || detectUserLanguage();
    changeLanguage(initialLang);

    // Toggle menu
    if (languageSwitcher && languageMenu) {
        languageSwitcher.addEventListener('click', (e) => {
            e.stopPropagation();
            languageMenu.classList.toggle('is-visible');
        });

        // Close menu on outside click
        document.addEventListener('click', () => {
            languageMenu.classList.remove('is-visible');
        });

        // Prevent menu from closing when clicking inside it
        languageMenu.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        // Handle language selection from menu
        languageMenu.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', () => {
                const lang = option.getAttribute('data-lang');
                changeLanguage(lang);
                languageMenu.classList.remove('is-visible');
            });
        });
    }

    // Toggle language onClick for mobile (legacy toggle behavior)
    if (mobileLanguageSwitcher) {
        mobileLanguageSwitcher.addEventListener('click', () => {
            const currentLang = document.documentElement.getAttribute('lang') || 'en';
            const languages = ['en', 'es'];
            const currentIndex = languages.indexOf(currentLang);
            const nextLang = languages[(currentIndex + 1) % languages.length];
            changeLanguage(nextLang);
        });
    }
};

// Cookie Consent Management
const initializeCookieConsent = () => {
    // Check for previously stored consent on page load
    const storedConsent = localStorage.getItem('analytics_consent');
    const banner = document.getElementById('cookie-consent-banner');

    if (banner) {
        if (storedConsent === 'granted') {
            updateConsent('granted');
        } else if (storedConsent === 'denied') {
            // User explicitly denied before
            banner.style.display = 'none';
        } else {
            // Show the banner if no stored preference
            banner.style.display = 'flex';
        }
    }
};

window.updateConsent = function (consent) {
    if (typeof gtag === 'function') {
        if (consent === 'granted') {
            gtag('consent', 'update', {
                'analytics_storage': 'granted'
            });
            localStorage.setItem('analytics_consent', 'granted');
        } else {
            gtag('consent', 'update', {
                'analytics_storage': 'denied'
            });
            localStorage.setItem('analytics_consent', 'denied');
        }
    } else {
        // Fallback if gtag is not defined
        localStorage.setItem('analytics_consent', consent);
    }

    const banner = document.getElementById('cookie-consent-banner');
    if (banner) {
        banner.style.display = 'none';
    }
};

// Bricks Scan specific animations
const initBricksScanAnimations = () => {
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".reveal-on-scroll");
    animatedElements.forEach((el) => {
        observer.observe(el);
    });

    const problemSection = document.getElementById("problem-section");
    const expandingBg = problemSection ? problemSection.querySelector(".expanding-bg") : null;

    if (problemSection && expandingBg) {
        let bgTicking = false;
        const handleScroll = () => {
            if (bgTicking) return;
            bgTicking = true;
            requestAnimationFrame(() => {
                const rect = problemSection.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                const triggerPoint = windowHeight * 0.2;
                const totalDistance = windowHeight - triggerPoint;

                let progress = (windowHeight - rect.top) / totalDistance;
                progress = Math.min(Math.max(progress, 0), 1);

                const startWidth = 50;
                const endWidth = 100;
                const startRadius = 24;
                const endRadius = 0;

                const currentWidth = startWidth + (endWidth - startWidth) * progress;
                const currentRadius = startRadius - (startRadius - endRadius) * progress;

                expandingBg.style.width = `${currentWidth}%`;
                expandingBg.style.borderRadius = `${currentRadius}px`;
                bgTicking = false;
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
    }

    const stackContainer = document.querySelector(".screenshot-stack");
    const leftScreenshots = stackContainer ? stackContainer.querySelectorAll(".screenshot-side.left") : [];
    const rightScreenshots = stackContainer
        ? stackContainer.querySelectorAll(".screenshot-side.right")
        : [];

    if (stackContainer && leftScreenshots.length > 0 && rightScreenshots.length > 0) {
        let fanoutTicking = false;
        const handleSolutionScroll = () => {
            if (fanoutTicking) return;
            fanoutTicking = true;
            requestAnimationFrame(() => {
                const rect = stackContainer.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                const startPoint = windowHeight * 0.9;
                const endPoint = windowHeight * 0.3;
                const totalDistance = startPoint - endPoint;

                let progress = (startPoint - rect.top) / totalDistance;
                progress = Math.min(Math.max(progress, 0), 1);

                const isMobile = window.innerWidth <= 768;
                const maxRotation = isMobile ? 3 : 4;
                const maxTranslateX = isMobile ? 40 : 80;
                const maxTranslateY = isMobile ? -10 : -20;

                const currentRotation = maxRotation * progress;
                const currentTranslateX = maxTranslateX * progress;
                const currentTranslateY = maxTranslateY * progress;

                leftScreenshots.forEach((el) => {
                    el.style.transform = `translateX(-${currentTranslateX}px) translateY(${currentTranslateY}px) rotate(-${currentRotation}deg)`;
                });
                rightScreenshots.forEach((el) => {
                    el.style.transform = `translateX(${currentTranslateX}px) translateY(${currentTranslateY}px) rotate(${currentRotation}deg)`;
                });
                fanoutTicking = false;
            });
        };

        window.addEventListener("scroll", handleSolutionScroll, { passive: true });
        handleSolutionScroll();
    }

    const heroSection = document.querySelector('.section-hero');
    const cursorGlow = document.querySelector('.hero-cursor-glow');
    const dotGrid = document.querySelector('.hero-dot-grid');

    if (dotGrid || cursorGlow) {
        let dotX = 50, dotY = 42;
        let cursorActive = false;
        let targetX = 50, targetY = 42;

        function autoPos(t) {
            return {
                x: 50 + 32 * Math.sin(t * 0.22),
                y: 42 + 20 * Math.sin(t * 0.37 + 1.0)
            };
        }

        function tick() {
            const t = Date.now() / 1000;
            const target = cursorActive ? { x: targetX, y: targetY } : autoPos(t);

            const speed = cursorActive ? 0.12 : 0.04;
            dotX += (target.x - dotX) * speed;
            dotY += (target.y - dotY) * speed;

            const xPct = dotX.toFixed(2) + '%';
            const yPct = dotY.toFixed(2) + '%';

            if (dotGrid) {
                dotGrid.style.setProperty('--dot-x', xPct);
                dotGrid.style.setProperty('--dot-y', yPct);
            }

            if (cursorGlow && !cursorActive) {
                cursorGlow.style.left = xPct;
                cursorGlow.style.top = yPct;
            }

            requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);

        if (heroSection) {
            heroSection.addEventListener('mousemove', (e) => {
                const rect = heroSection.getBoundingClientRect();
                targetX = ((e.clientX - rect.left) / rect.width) * 100;
                targetY = ((e.clientY - rect.top) / rect.height) * 100;
                cursorActive = true;

                if (cursorGlow) {
                    cursorGlow.style.left = targetX.toFixed(2) + '%';
                    cursorGlow.style.top = targetY.toFixed(2) + '%';
                }
            }, { passive: true });

            heroSection.addEventListener('mouseleave', () => {
                cursorActive = false;
            }, { passive: true });
        }
    }
};

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize element references
    initializeElements();

    // Prepare hero word swap controllers before language toggles run
    initializeHeroWordSwap();

    // Add event listeners
    if (elements.menuButton) {
        elements.menuButton.addEventListener('click', handleMobileMenu);
    }

    if (elements.carousel) {
        handleCarousel(elements.carousel);
    }

    // Video modal handling
    if (elements.openVideoBtn && elements.videoModal) {
        handleVideoModal();
    }


    // Setup language switcher if available
    setupLanguageSwitcher();

    // Setup intersection observer for animations
    setupIntersectionObserver();

    // Activate the apps overview parallax effect when the cards are present
    initAppsParallax();

    // Initialize Bricks Scan specific animations
    initBricksScanAnimations();

    // Initialize cookie consent
    initializeCookieConsent();

    // Set language based on stored preference or browser language
    const storedLang = localStorage.getItem('bricksLanguage');
    const userLang = storedLang || detectUserLanguage();
    changeLanguage(userLang);

    // Add resize event listener for layout adjustments
    window.addEventListener('resize', debounce(() => {
        // Recalculate or adjust UI elements on resize if needed
        if (window.innerWidth >= 640) {
            // Reset mobile menu visibility on desktop
            if (elements.mobileMenu) {
                elements.mobileMenu.classList.add('hidden');
            }
        }

        // Keep hero word width in sync when viewport changes
        heroWordControllers.forEach((controller) => controller.refresh());
    }, 250));
});
