const clientSays = document.querySelector(".client_says");
const items = document.querySelectorAll(".client_details");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const itemWidth = items[0].clientWidth + 60;
let currentIndex = 0; // Start with the second item as centered

function updateCarousel() {
  clientSays.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

  items.forEach((item) => {
    item.classList.remove("center");
  });

  const nextIndex = (currentIndex + 1) % items.length;
  items[nextIndex].classList.add("center");
  // Enable or disable previous button based on currentIndex
  // prevButton.disabled = currentIndex === 0;
  if (currentIndex === 0) {
    prevButton.style.backgroundColor = "";
    prevButton.style.color = "#003B60";
  } else {
    prevButton.style.backgroundColor = "";
    prevButton.style.color = "#003B60";
  }

  // Disable next button when last index is reached
  // nextButton.disabled = currentIndex === items.length - 1;
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();

  if (currentIndex !== 0) {
    prevButton.style.backgroundColor = "#003B60";
    prevButton.style.color = "#FFF";
    nextButton.style.backgroundColor = "#003B60";
    nextButton.style.color = "#fff";
  } else {
    prevButton.style.backgroundColor = "transparent";
    prevButton.style.color = "#003B60";
  }
  if (currentIndex !== items.length - 1) {
    nextButton.style.backgroundColor = "#003B60";
    nextButton.style.color = "#fff";
  }
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();

  if (currentIndex !== items.length - 1) {
    prevButton.style.backgroundColor = "transparent";
    prevButton.style.color = "#003B60";
    console.log(items.length);
    nextButton.style.backgroundColor = "#003B60";
    nextButton.style.color = "#fff";
  } else {
    prevButton.style.backgroundColor = "transparent";
    prevButton.style.color = "#003B60";
    nextButton.style.backgroundColor = "transparent";
    nextButton.style.color = "#003B60";
  }
  prevButton.style.backgroundColor = "#003B60";
  prevButton.style.color = "#fff";
  if (currentIndex == 0) {
    prevButton.style.backgroundColor = "transparent";
    prevButton.style.color = "#003B60";
  }
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

// Initial update
updateCarousel();

let chk = document.getElementById("termsChkbx");
console.log(chk.checked);
if (chk.checked==true) {
  console.log("jh");
  // chk.parentElement.style.color = "black";
} else {
  // chk.parentElement.style.color = "red";
}
