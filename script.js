const animatedLeftImage = document.querySelector('.animatedleft-image');
const animatedRightImage = document.querySelector('.animatedright-image');
const palmtree = document.querySelector('.palm-tree');
const imageOffsetTop1 = animatedLeftImage.offsetTop;
const imageOffsetTop2 = animatedRightImage.offsetTop;
const imageOffsetTop3 = palmtree.offsetTop;
window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;

  if (scrollPosition > imageOffsetTop1 && imageOffsetTop2 && imageOffsetTop3 - window.innerHeight) {
    animatedLeftImage.classList.add('animateleft');
    animatedRightImage.classList.add('animateright');
    palmtree.classList.add('zero-opacity');
  }
});
// slider
var myElement = document.querySelector('.flavor');
var myElementTwo = document.querySelector('.reviews');
var myElementThree = document.querySelectorAll('.card');

function checkScreenSize() {
  var maxWidth = 786;
  var viewportWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (viewportWidth <= maxWidth) {
    myElement.classList.add('image-slider');
    myElementTwo.classList.add('slider');
    myElementThree.forEach(myElementThree => {
      myElementThree.classList.add('slide');
    });
  } else {
    myElement.classList.remove('image-slider');
    myElementTwo.classList.remove('slider');
    myElementThree.forEach(myElementThree => {
      myElementThree.classList.remove('slide');
    });
  }
}

// Call the function initially to set the correct class
checkScreenSize();

// Call the function on window resize to update the class if necessary
window.addEventListener('resize', checkScreenSize);
var sliderImages = document.querySelectorAll('.image-slider img');
var currentImageIndex = 0;

function cycleImages() {
  for (var i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }

  currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
  sliderImages[currentImageIndex].style.display = 'block';
}

// Call the function initially to set the correct display style
cycleImages();

// Call the function every 5 seconds (5000 milliseconds)
setInterval(cycleImages, 1500);
const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slide');
const prev = slider.querySelector('.prev');
const next = slider.querySelector('.next');

let currentSlide = 0;

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.style.display = 'none';
    if (i === n) {
      slide.style.display = 'block';
    }
  });
}

showSlide(currentSlide);

prev.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
});

next.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
});

window.addEventListener('resize', () => {
  if (window.innerWidth <= 200) {
    slider.querySelector('.controls').style.display = 'block';
  } else {
    slider.querySelector('.controls').style.display = 'none';
  }
});