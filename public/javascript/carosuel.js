const nextBtn = document.getElementById("btn-next");
const tagsSliderTrack = document.querySelector(".tags-track");
const tags = Array.from(tagsSliderTrack.querySelectorAll(".tag"));
const prevBtn = document.getElementById("btn-prev");
const sliderLeftOverlay = document.querySelector(".left-overlay");
const sliderRightOverlay = document.querySelector(".right-overlay");
// Here i just take a random step [2] which will be the slider moved to left or right
const step = Math.floor(
  (tagsSliderTrack.clientWidth - tagsSliderTrack.parentElement.clientWidth) / 4
);

nextBtn.addEventListener("click", (e) => moveTagsSlider(-1));
prevBtn.addEventListener("click", () => moveTagsSlider(1));

function moveTagsSlider(direc) {
  // Update the custom property (--sliderTransX)
  let transValue = parseInt(
    getComputedStyle(document.body).getPropertyValue("--sliderTransX")
  );
  transValue = transValue + step * direc;
  updateActionBtns(transValue);
  document.body.style.setProperty("--sliderTransX", `${transValue}px`);
}

function updateActionBtns(moveValue) {
  // Controlling the previous button
  if (moveValue < 0) {
    prevBtn.classList.remove("hide");
    sliderLeftOverlay.classList.remove("hide");
  } else {
    prevBtn.classList.add("hide");
    sliderLeftOverlay.classList.add("hide");
  }
  // Controlling the next button
  // Check if the slide has lost it's overflow to the right
  if (
    tagsSliderTrack.scrollWidth - Math.abs(moveValue) <=
    tagsSliderTrack.parentElement.clientWidth
  ) {
    nextBtn.classList.add("hide");
    sliderRightOverlay.classList.add("hide");
  } else {
    nextBtn.classList.remove("hide");
    sliderRightOverlay.classList.remove("hide");
  }
}

// Updating the active tag
tags.forEach((tag) => {
  tag.addEventListener("click", (e) => updateActiveTag(e));
});

function updateActiveTag(e) {
  console.log("Updating tag");
  const tag = e.target;
  tags.forEach((tag) => tag.classList.remove("active"));
  tag.classList.add("active");
}
