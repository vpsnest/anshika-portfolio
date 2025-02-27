/*--------------------------------------------------------------
# Document Ready Function
--------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Typing Animation
    initTypeEffect();
    
    // Active Nav Links on Scroll
    initNavHighlight();
    
    // Initialize Mobile Menu Toggle
    initMobileMenu();
    
    // Initialize Back to Top Button
    initBackToTop();
    
    // Initialize Contact Form
    initContactForm();
    
    // Update User Info and Date
    updateUserInfo();
});

/*--------------------------------------------------------------
# Typing Animation
--------------------------------------------------------------*/
function initTypeEffect() {
    const options = {
        strings: ['Developer', 'Cloud Specialist', 'Hosting Expert', 'Content Creator'],
        typeSpeed: 80,
        backSpeed: 40,
        backDelay: 1500,
        loop: true
    };
    
    if(document.getElementById('typed')) {
        new Typed('#typed', options);
    }
}

/*--------------------------------------------------------------
# Active Nav Links on Scroll
--------------------------------------------------------------*/
function initNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const handleScroll = () => {
        const scrollPosition = window.scrollY + 100;
        const header = document.getElementById('header');
        
        // Add/remove scrolled class to header
        if (scrollPosition > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Highlight active menu item
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
        
        // Show/hide back to top button
        const backToTop = document.getElementById('backToTop');
        if (scrollPosition > 500) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
}

/*--------------------------------------------------------------
# Mobile Menu Toggle
--------------------------------------------------------------*/
function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Animate hamburger to X
            const bars = menuToggle.querySelectorAll('.bar');
            if (menuToggle.classList.contains('active')) {
                bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
        
        // Close menu when link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                
                // Reset hamburger icon
                const bars = menuToggle.querySelectorAll('.bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            });
        });
    }
}

/*--------------------------------------------------------------
# Back to Top Button
--------------------------------------------------------------*/
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

/*--------------------------------------------------------------
# Contact Form
--------------------------------------------------------------*/
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                formStatus.innerHTML = '<p class="error">Please fill in all fields.</p>';
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formStatus.innerHTML = '<p class="error">Please enter a valid email address.</p>';
                return;
            }
            
            // Simulate form submission
            formStatus.innerHTML = '<p class="sending">Sending message...</p>';
            
            // Simulate API call with timeout
            setTimeout(() => {
                contactForm.reset();
                formStatus.innerHTML = '<p class="success">Your message has been sent successfully!</p>';
                
                // Clear success message after 5 seconds
                setTimeout(() => {
                    formStatus.innerHTML = '';
                }, 5000);
            }, 1500);
        });
    }
}

/*--------------------------------------------------------------
# Update User Info and Date
--------------------------------------------------------------*/
function updateUserInfo() {
    // Update with the current user's login
    const currentLogin = 'codewithperry';
    
    // Update any elements that need to show the username
    const usernameElements = document.querySelectorAll('.user-login');
    usernameElements.forEach(element => {
        element.textContent = currentLogin;
    });
    
    // Update the last updated date in the footer with the provided UTC date/time
    const currentDateStr = '2025-02-27 15:27:37'; // Updated to the new date/time
    const lastUpdatedElement = document.getElementById('lastUpdated');
    if (lastUpdatedElement) {
        lastUpdatedElement.textContent = currentDateStr + " UTC";
    }
}

// Add smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for header
                behavior: 'smooth'
            });
        }
    });
});