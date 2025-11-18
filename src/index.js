// Require images so webpack knows to include them
const pic1 = require('../public/pic1.jpg');
const pic2 = require('../public/pic2.jpg');
const pic3 = require('../public/pic3.jpg');


// ===== IMAGE CAROUSEL JS =====
const imageUrls = [
  pic1,
  pic2,
  pic3
  // Add more image filenames here if needed
];

let currentImageIndex = 0;
const Img = document.getElementById('hero-img');
const carouselNav = document.getElementById('carousel-nav');

// Fallback image if none load
const fallbackImage = 'https://placehold.co/300x400/ff9a9e/white?text=Sean%20Chao';

if (imageUrls.length === 0) {
  Img.src = fallbackImage;
} else if (imageUrls.length === 1) {
  Img.src = imageUrls[0];
} else {
  // Create navigation dots
  imageUrls.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.setAttribute('aria-label', `Go to image ${index + 1}`);
    dot.addEventListener('click', () => showImage(index));
    carouselNav.appendChild(dot);
  });

  // Show first image
  showImage(0);
}

function showImage(index) {
  currentImageIndex = index;
  const img = new Image();
  img.onload = () => {
    Img.src = img.src;
  };
  img.onerror = () => {
    Img.src = fallbackImage;
  };
  img.src = imageUrls[index];

  // Update active dot
  const dots = carouselNav.querySelectorAll('button');
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

// ===== CONTACT MODAL =====
document.getElementById('contact-btn').addEventListener('click', () => {
  document.getElementById('contact-modal').style.display = 'flex';
});

document.getElementById('close-modal').addEventListener('click', () => {
  document.getElementById('contact-modal').style.display = 'none';
});

window.addEventListener('click', (e) => {
  const modal = document.getElementById('contact-modal');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});