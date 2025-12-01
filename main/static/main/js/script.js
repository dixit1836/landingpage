document.addEventListener('DOMContentLoaded', () => {

  // --- 1. MOBILE MENU TOGGLE ---
  const menuBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelectorAll('.nav-link, .btn-nav');
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    navMenu.classList.toggle('active');

    // Hamburger Animation
    if (isMenuOpen) {
      hamburger.children[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
      hamburger.children[1].style.transform = 'rotate(-45deg) translate(5px, -6px)';
      document.body.style.overflow = 'hidden'; // Lock scroll
    } else {
      hamburger.children[0].style.transform = 'none';
      hamburger.children[1].style.transform = 'none';
      document.body.style.overflow = ''; // Unlock scroll
    }
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', toggleMenu);
    // Close menu on link click
    navLinks.forEach(link => link.addEventListener('click', () => {
      if (isMenuOpen) toggleMenu();
    }));
  }

  // --- 2. SCROLL ANIMATIONS (Intersection Observer) ---
  // Reduced threshold for mobile so elements appear faster
  const observerOptions = {
    threshold: window.innerWidth < 768 ? 0.05 : 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('[data-animate]').forEach(el => {
    // Mobile optimization: Reduce delay to prevent "waiting" for content
    if (window.innerWidth < 768) {
      el.style.transitionDelay = '0s';
    } else if (el.dataset.delay) {
      el.style.transitionDelay = `${el.dataset.delay}ms`;
    }
    observer.observe(el);
  });

  // --- 3. ACCORDION ---
  const accItems = document.querySelectorAll('.acc-item');
  accItems.forEach(item => {
    item.querySelector('.acc-head').addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all
      accItems.forEach(i => i.classList.remove('active'));

      // Toggle clicked
      if (!isActive) item.classList.add('active');
    });
  });

  // --- 4. NAVBAR BLUR ON SCROLL ---
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.style.background = 'rgba(5, 5, 7, 0.95)';
      navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)';
    } else {
      navbar.style.background = 'rgba(5, 5, 7, 0.8)';
      navbar.style.boxShadow = 'none';
    }
  });

  // --- 5. SMOOTH SCROLL OFFSET ---
  // Because navbar is fixed, we need offset for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });
});