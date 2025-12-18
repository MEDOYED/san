/**
 * Main JavaScript file for Maksym Mokriakov Portfolio Website
 * Focuses on accessibility and mobile navigation
 */

(function() {
    'use strict';

    // ==========================================
    // Mobile Menu Toggle
    // ==========================================

    /**
     * Initializes the mobile menu functionality
     */
    function initMobileMenu() {
        const menuToggle = document.getElementById('menu-toggle');
        const navMenu = document.getElementById('main-nav');

        if (!menuToggle || !navMenu) {
            return;
        }

        // Toggle menu on button click
        menuToggle.addEventListener('click', function() {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

            // Toggle aria-expanded attribute
            menuToggle.setAttribute('aria-expanded', !isExpanded);

            // Toggle active class on menu
            navMenu.classList.toggle('active');

            // Animate hamburger icon
            const hamburgers = menuToggle.querySelectorAll('.hamburger');
            hamburgers.forEach(function(bar, index) {
                if (!isExpanded) {
                    // Transform to X
                    if (index === 0) {
                        bar.style.transform = 'rotate(45deg) translateY(10px)';
                    } else if (index === 1) {
                        bar.style.opacity = '0';
                    } else if (index === 2) {
                        bar.style.transform = 'rotate(-45deg) translateY(-10px)';
                    }
                } else {
                    // Reset to hamburger
                    bar.style.transform = '';
                    bar.style.opacity = '';
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = navMenu.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

            if (!isClickInsideMenu && !isClickOnToggle && isExpanded) {
                menuToggle.click();
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
                if (isExpanded) {
                    menuToggle.click();
                    menuToggle.focus();
                }
            }
        });

        // Close menu when window is resized to desktop view
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                if (window.innerWidth > 768) {
                    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
                    if (isExpanded) {
                        navMenu.classList.remove('active');
                        menuToggle.setAttribute('aria-expanded', 'false');

                        // Reset hamburger icon
                        const hamburgers = menuToggle.querySelectorAll('.hamburger');
                        hamburgers.forEach(function(bar) {
                            bar.style.transform = '';
                            bar.style.opacity = '';
                        });
                    }
                }
            }, 250);
        });
    }

    // ==========================================
    // Smooth Scrolling for Skip Link
    // ==========================================

    /**
     * Enhances the skip-to-content link with smooth scrolling
     */
    function initSkipLink() {
        const skipLink = document.querySelector('.skip-link');

        if (!skipLink) {
            return;
        }

        skipLink.addEventListener('click', function(event) {
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                event.preventDefault();
                target.setAttribute('tabindex', '-1');
                target.focus();

                // Smooth scroll to target
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // ==========================================
    // Keyboard Navigation Enhancement
    // ==========================================

    /**
     * Improves keyboard navigation for interactive elements
     */
    function enhanceKeyboardNavigation() {
        // Add keyboard navigation to cards
        const cards = document.querySelectorAll('.card');

        cards.forEach(function(card) {
            card.addEventListener('keydown', function(event) {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    card.click();
                }
            });
        });
    }

    // ==========================================
    // Focus Management
    // ==========================================

    /**
     * Manages focus indicators and ensures visibility
     */
    function manageFocus() {
        let mouseUsed = false;

        // Detect mouse usage
        document.addEventListener('mousedown', function() {
            mouseUsed = true;
        });

        // Detect keyboard usage
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Tab') {
                mouseUsed = false;
            }
        });

        // Add/remove focus-visible class
        document.addEventListener('focusin', function(event) {
            if (!mouseUsed) {
                event.target.classList.add('focus-visible');
            }
        });

        document.addEventListener('focusout', function(event) {
            event.target.classList.remove('focus-visible');
        });
    }

    // ==========================================
    // Announce Page Changes (for screen readers)
    // ==========================================

    /**
     * Creates a live region for announcing dynamic content changes
     */
    function createLiveRegion() {
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('role', 'status');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        liveRegion.id = 'live-region';
        document.body.appendChild(liveRegion);
    }

    /**
     * Announces a message to screen readers
     * @param {string} message - Message to announce
     */
    function announce(message) {
        const liveRegion = document.getElementById('live-region');
        if (liveRegion) {
            liveRegion.textContent = message;

            // Clear after 1 second
            setTimeout(function() {
                liveRegion.textContent = '';
            }, 1000);
        }
    }

    // ==========================================
    // Image Loading and Alt Text Validation
    // ==========================================

    /**
     * Ensures all images have proper alt text
     */
    function validateImages() {
        const images = document.querySelectorAll('img');

        images.forEach(function(img) {
            // Check if image has alt attribute
            if (!img.hasAttribute('alt')) {
                console.warn('Image missing alt text:', img.src);
                img.setAttribute('alt', '');
            }

            // Add loading error handler
            img.addEventListener('error', function() {
                console.error('Failed to load image:', img.src);
                this.alt = 'Nie udało się załadować obrazu';
                this.style.border = '2px dashed #ccc';
                this.style.padding = '20px';
            });
        });
    }

    // ==========================================
    // Performance: Lazy Loading Enhancement
    // ==========================================

    /**
     * Adds lazy loading to images if not already present
     */
    function enhanceLazyLoading() {
        if ('loading' in HTMLImageElement.prototype) {
            const images = document.querySelectorAll('img:not([loading])');
            images.forEach(function(img) {
                img.loading = 'lazy';
            });
        }
    }

    // ==========================================
    // Detect User Preferences
    // ==========================================

    /**
     * Detects and respects user's motion preferences
     */
    function respectMotionPreferences() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

        if (prefersReducedMotion.matches) {
            document.documentElement.style.setProperty('--transition-fast', '0.01ms');
            document.documentElement.style.setProperty('--transition-normal', '0.01ms');
            announce('Animacje zostały wyłączone');
        }
    }

    // ==========================================
    // Page Load Performance
    // ==========================================

    /**
     * Logs page load performance metrics
     */
    function logPerformance() {
        window.addEventListener('load', function() {
            if (window.performance) {
                const perfData = window.performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                console.log('Page load time:', pageLoadTime + 'ms');
            }
        });
    }

    // ==========================================
    // Initialize All Features
    // ==========================================

    /**
     * Main initialization function
     */
    function init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }

        // Initialize all features
        createLiveRegion();
        initMobileMenu();
        initSkipLink();
        enhanceKeyboardNavigation();
        manageFocus();
        validateImages();
        enhanceLazyLoading();
        respectMotionPreferences();
        logPerformance();

        // Announce page is ready
        announce('Strona załadowana');
    }

    // Start initialization
    init();

    // Export functions for potential external use
    window.portfolioApp = {
        announce: announce
    };

})();
