// ===================================
//  INTERACTIVE FEATURES - HERBAL DIAB CARE
// ===================================

// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
  
  // FAQ Toggle
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const faqItem = this.parentElement;
      const isActive = faqItem.classList.contains('active');
      
      // Close all other FAQ items
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
      });
      
      // Toggle current FAQ item
      if (!isActive) {
        faqItem.classList.add('active');
      }
    });
  });
  
  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Add animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe elements for scroll animation
  document.querySelectorAll('.benefit-card, .ingredient-card, .testimonial-card, .stat-card, .info-panel').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
  });
  
  // Form Validation
  const orderForm = document.querySelector('.order-form');
  
  if (orderForm) {
    orderForm.addEventListener('submit', function(e) {
      const mobileInput = this.querySelector('input[name="mobile"]');
      const pincodeInput = this.querySelector('input[name="pincode"]');
      
      // Validate mobile number (10 digits)
      if (mobileInput && !/^\d{10}$/.test(mobileInput.value)) {
        e.preventDefault();
        alert('કૃપા કરીને માન્ય 10 અંકના મોબાઇલ નંબર દાખલ કરો');
        mobileInput.focus();
        return;
      }
      
      // Validate pincode (6 digits)
      if (pincodeInput && !/^\d{6}$/.test(pincodeInput.value)) {
        e.preventDefault();
        alert('કૃપા કરીને માન્ય 6 અંકનો પિનકોડ દાખલ કરો');
        pincodeInput.focus();
        return;
      }
    });
  }
  
  // Parallax effect for hero section
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-product img');
    
    if (hero && scrolled < 800) {
      hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
  });
  
});
