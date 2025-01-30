const heart = document.querySelectorAll('.restaurant-card > div > i');
heart.forEach(active => {
    active.addEventListener('click', (e) => {
        e.preventDefault();
        active.classList.toggle('fas');
        active.classList.toggle('filled');
    });
});
