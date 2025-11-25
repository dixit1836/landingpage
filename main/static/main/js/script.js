document.addEventListener('DOMContentLoaded', function() {
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
});
