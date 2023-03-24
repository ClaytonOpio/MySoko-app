const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const testmContainer = document.querySelector(".testm-container");
const testmItems = document.querySelectorAll(".testm-items");
const slideCount = testmItems.length;
let currentSlide = 0;

// Function to move the carousel to the specified slide
function moveToSlide(slide) {
    const slideWidth = testmItems[0].clientWidth;
    testmContainer.style.transform = `translateX(${-slide * slideWidth}px)`;
}

// Event listeners for the arrow buttons
leftArrow.addEventListener("click", () => {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slideCount - 3; // Jump to the last set of items
    }
    moveToSlide(currentSlide);
});

rightArrow.addEventListener("click", () => {
    currentSlide++;
    if (currentSlide > slideCount - 3) {
        currentSlide = 0; // Jump back to the first set of items
    }
    moveToSlide(currentSlide);
});
