const slider = document.querySelector('.slider2455');
const cards = slider.querySelectorAll('.card2455');
const indicators = document.querySelectorAll('.indicator2455');
const leftArrow = document.querySelector('.left-arrow2455');
const rightArrow = document.querySelector('.right-arrow2455');

let currentSlide = 0;

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
  const numVisibleCards = 2; // Adjust based on number of visible cards
  const maxSlide = cards.length - numVisibleCards; // Adjust based on number of visible cards

  // Handle looping at the end
  if (slideIndex > maxSlide) {
    currentSlide = 0;
  } else if (slideIndex < 0) {
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

// Left arrow click event listener
leftArrow.addEventListener('click', () => {
  moveToSlide(currentSlide - 1);
});

// Right arrow click event listener
rightArrow.addEventListener('click', () => {
  moveToSlide(currentSlide + 1);
});

// Enable/Disable arrows based on current position (optional)
updateIndicators(); // Set initial active indicator
