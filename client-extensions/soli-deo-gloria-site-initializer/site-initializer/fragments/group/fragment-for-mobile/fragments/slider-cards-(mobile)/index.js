const slider = document.querySelector('.slider2518');
const cards = slider.querySelectorAll('.card2518');
const indicators = document.querySelectorAll('.indicator2518');

let currentSlide = 0;
let startX = 0;
let isDragging = false;
let touchOffset = 50; // Adjust the touch sensitivity

// Function to update the active indicator
function updateIndicators() {
  indicators.forEach((indicator, index) => {
    indicator.classList.remove('active');
    if (index === currentSlide) {
      indicator.classList.add('active');
    }
  });
}

// Function to move the slider to a specific slide
function moveToSlide(slideIndex) {
  const numVisibleCards = 1; // Adjust based on number of visible cards
  const maxSlide = cards.length - numVisibleCards; // Adjust based on number of visible cards

  // Ensure slideIndex stays within bounds
  if (slideIndex < 0) {
    currentSlide = 0;
  } else if (slideIndex > maxSlide) {
    currentSlide = maxSlide;
  } else {
    currentSlide = slideIndex;
  }

  const cardWidth = cards[0].offsetWidth;
  const gapPercentage = 2; // Adjust gap percentage
  const sliderWidth = slider.offsetWidth;
  const gap = (sliderWidth * gapPercentage) / 100;

  slider.style.transform = `translateX(-${currentSlide * (cardWidth + gap)}px)`;
  updateIndicators();
}

// Touch events for swipe functionality
slider.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].clientX;
});

slider.addEventListener('touchmove', (e) => {
  if (!isDragging) return;

  const currentX = e.touches[0].clientX;
  const diffX = startX - currentX;
  
  // Calculate how many slides to move based on touch movement
  if (Math.abs(diffX) > touchOffset) {
    if (diffX > 0) {
      // Swiped left
      moveToSlide(currentSlide + 1);
    } else {
      // Swiped right
      moveToSlide(currentSlide - 1);
    }
    isDragging = false; // Reset dragging state
  }
});

slider.addEventListener('touchend', () => {
  isDragging = false;
});

// Optional: Add touch cancel event listener to reset dragging state
slider.addEventListener('touchcancel', () => {
  isDragging = false;
});
