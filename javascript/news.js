// display Modal
function displayModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  console.log("n: ", n);
  const caretDown = document.getElementsByClassName("fa-caret-down");
  for (let i = 0; i < caretDown.length; i++) {
    caretDown[i].style.display = "none";
  }
  console.log("n-1: ", n - 1);
  if (n - 1 === -1) {
    caretDown[5].style.display = "block";
  } else if (n - 1 === 6) {
    caretDown[0].style.display = "block";
  } else {
    caretDown[n - 1].style.display = "block";
  }

  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  // captionText.innerHTML = dots[slideIndex - 1].alt;
}
