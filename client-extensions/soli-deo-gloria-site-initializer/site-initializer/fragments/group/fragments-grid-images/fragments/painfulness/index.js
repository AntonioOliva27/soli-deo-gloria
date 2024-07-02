document.addEventListener('DOMContentLoaded', () => {
 const slider = document.querySelector('.slider1604');
 const leftArrow = document.querySelector('.left-arrow1604');
 const rightArrow = document.querySelector('.right-arrow1604');
 const indicators = document.querySelectorAll('.indicator1604');

 let currentIndex = 0; // Tracks the current position of the slider
 const totalCards = 6;
 let visibleCards = window.innerWidth <= 720 ? 1 : window.innerWidth <= 980 ? 2 : 3; // Number of fully visible cards
 let cardWidth = document.querySelector('.card1604').offsetWidth; // Width of each card
 let cardMargin = parseFloat(window.getComputedStyle(document.querySelector('.card1604')).marginRight); // Margin between cards
 const gapBetweenCards = 30; // Additional gap between cards
 let maxClicks = window.innerWidth <= 720 ? 5 : window.innerWidth <= 980 ? 4 : 3; // Number of clicks before cycling
 let startX, endX;

 function updateSliderPosition() {
  // Calculate the new transform value based on currentIndex
  const newTransform = -(currentIndex * (cardWidth + cardMargin + gapBetweenCards));
  slider.style.transform = 'translateX(' + newTransform + 'px)';

  // Calculate the active indicator index
  const totalSlides = totalCards - (visibleCards - 1); // Total number of possible slides
  const activeIndex = Math.min(Math.floor(currentIndex / (totalSlides / indicators.length)), indicators.length - 1);

  // Update the indicators
  indicators.forEach((indicator, index) => {
   indicator.classList.toggle('active', index === activeIndex);
  });
 }

 function updateDimensions() {
  visibleCards = window.innerWidth <= 720 ? 1 : window.innerWidth <= 980 ? 2 : 3;
  cardWidth = document.querySelector('.card1604').offsetWidth;
  cardMargin = parseFloat(window.getComputedStyle(document.querySelector('.card1604')).marginRight);
  maxClicks = window.innerWidth <= 720 ? 5 : window.innerWidth <= 980 ? 4 : 3;
  updateSliderPosition();
 }

 leftArrow.addEventListener('click', () => {
  if (currentIndex > 0) {
   currentIndex--;
   updateSliderPosition();
  }
 });

 rightArrow.addEventListener('click', () => {
  const maxIndex = totalCards - visibleCards; // Maximum index based on total and visible cards
  if (currentIndex < maxIndex) {
   currentIndex++;
  } else {
   currentIndex = 0; // Reset to the beginning if the end is reached
  }
  updateSliderPosition();
 });

 window.addEventListener('resize', updateDimensions);

 // Swipe functionality
 slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
 });

 slider.addEventListener('touchmove', (e) => {
  endX = e.touches[0].clientX;
 });

 slider.addEventListener('touchend', () => {
  if (startX > endX + 50) {
   // Swiped left
   const maxIndex = totalCards - visibleCards;
   if (currentIndex < maxIndex) {
    currentIndex++;
   } else {
    currentIndex = 0; // Reset to the beginning if the end is reached
   }
  } else if (startX < endX - 50) {
   // Swiped right
   if (currentIndex > 0) {
    currentIndex--;
   }
  }
  updateSliderPosition();
 });

 // Initialize the slider position and indicators
 updateSliderPosition();
});