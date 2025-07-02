const videos = document.querySelectorAll('.video-slide');
const contents = document.querySelectorAll('.content');
const navBtns = document.querySelectorAll('.nav-btn');
let current = 0;
let interval;

function showSlide(index) {
    contents.forEach((c, i) => c.classList.toggle('active', i === index));
    videos.forEach((v, i) => {
        v.classList.toggle('active', i === index);
        if (i === index) {
            v.currentTime = 0;
            v.play();
        } else {
            v.pause();
        }
    });
    navBtns.forEach((btn, i) => btn.classList.toggle('active', i === index));
    current = index;
}

function nextSlide() {
    let next = (current + 1) % contents.length;
    showSlide(next);
}

function startAutoSlide() {
    interval = setInterval(nextSlide, 4000);
}

function stopAutoSlide() {
    clearInterval(interval);
}

// Navigation button click
navBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        showSlide(i);
        stopAutoSlide();
        startAutoSlide();
    });
});


showSlide(0);
startAutoSlide();