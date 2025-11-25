document.addEventListener('DOMContentLoaded', function () {
    // FAQ Toggle
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Testimonials carousel
    const track = document.querySelector('.carousel-track');
    const cards = track ? Array.from(track.children) : [];
    if (track && cards.length) {
        const prevBtn = document.querySelector('.carousel-control.prev');
        const nextBtn = document.querySelector('.carousel-control.next');
        let index = 0;
        let autoSlide;

        const updateActive = () => {
            cards.forEach((card, idx) => card.classList.toggle('active', idx === index));
            const cardWidth = cards[0].offsetWidth + 32;
            track.style.transform = `translateX(-${index * cardWidth}px)`;
        };

        const startAutoSlide = () => {
            autoSlide = setInterval(() => {
                index = (index + 1) % cards.length;
                updateActive();
            }, 5000);
        };

        const resetAutoSlide = () => {
            clearInterval(autoSlide);
            startAutoSlide();
        };

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                index = (index - 1 + cards.length) % cards.length;
                updateActive();
                resetAutoSlide();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                index = (index + 1) % cards.length;
                updateActive();
                resetAutoSlide();
            });
        }

        window.addEventListener('resize', updateActive);
        updateActive();
        startAutoSlide();
    }

    // Doctor video placeholder
    const playButton = document.querySelector('.play-button');
    if (playButton) {
        playButton.addEventListener('click', () => {
            alert('Doctor video will be available soon. Stay tuned!');
        });
    }

    // AJAX Form Submission
    const orderForm = document.querySelector('.order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(this);
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;

            // Disable button and show loading state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Processing...';

            // Clear previous errors
            const existingAlerts = this.querySelectorAll('.alert');
            existingAlerts.forEach(alert => alert.remove());

            fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        window.location.href = "/thank-you/";
                    } else {
                        // Show error message
                        const errorDiv = document.createElement('div');
                        errorDiv.className = 'alert alert-error';
                        errorDiv.textContent = data.error || 'Something went wrong. Please try again.';
                        errorDiv.style.marginBottom = '10px';
                        errorDiv.style.padding = '10px';
                        errorDiv.style.borderRadius = '5px';
                        errorDiv.style.backgroundColor = '#ffebee';
                        errorDiv.style.color = '#c62828';
                        errorDiv.style.border = '1px solid #ffcdd2';

                        orderForm.insertBefore(errorDiv, orderForm.firstChild);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    const errorDiv = document.createElement('div');
                    errorDiv.className = 'alert alert-error';
                    errorDiv.textContent = 'Network error. Please try again.';
                    orderForm.insertBefore(errorDiv, orderForm.firstChild);
                })
                .finally(() => {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalBtnText;
                });
        });
    }
});
