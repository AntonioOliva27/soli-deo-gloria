const slider = document.querySelector('.slider2301');
const cards = slider.querySelectorAll('.card2301');
const indicators = document.querySelectorAll('.indicator2301');
const leftArrow = document.querySelector('.left-arrow2301');
const rightArrow = document.querySelector('.right-arrow2301');

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
  const numVisibleCards = 3; // Adjust based on number of visible cards
  const maxSlide = cards.length - numVisibleCards; // Adjust based on number of visible cards

  // Handle looping at the end
  if (slideIndex > maxSlide) {
    currentSlide = 0;
  } else if (slideIndex < 0) {
    currentSlide = maxSlide;
  } else {
    currentSlide = slideIndex;
  }

  slider.style.transform = `translateX(-${currentSlide * (cards[0].offsetWidth + 30)}px)`; // Adjust based on card width and gap
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
