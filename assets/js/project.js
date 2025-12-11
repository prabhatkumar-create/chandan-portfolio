// Initialize AOS animations (optional)
if (window.AOS) AOS.init({ duration: 700, once: true });

// Filter logic (simple, accessible)
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // toggle active state for accessibility
        filterBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
        btn.classList.add('active'); btn.setAttribute('aria-pressed', 'true');

        const filter = btn.getAttribute('data-filter');
        projectCards.forEach(card => {
            if (filter === 'all') {
                card.style.display = '';
            } else {
                const cats = card.getAttribute('data-category') || '';
                if (cats.split(' ').indexOf(filter) !== -1) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    });
});

// Improve keyboard accessibility for filters
filterBtns.forEach(b => {
    b.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault(); b.click();
        }
    });
});

// my client javascript code 
document.addEventListener("DOMContentLoaded", () => {
    let index = 0;
    const slides = document.querySelectorAll(".slide");

    setInterval(() => {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }, 3000);
});