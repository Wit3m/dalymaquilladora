//side navbar open and close
let menuOpenBtn = document.querySelector(".bx-menu");
let menuCloseBtn = document.querySelector(".bx-x");
let navLinks = document.querySelector("nav");

menuOpenBtn.addEventListener("click", ()=>{
  navLinks.style.left = "0";
});

menuCloseBtn.addEventListener("click", ()=>{
  navLinks.style.left = "-100%";
});

// GALLERY FILTER
filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("gallery-column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("button-container");
var btns = btnContainer.getElementsByClassName("gallery-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("gallery-active");
    current[0].className = current[0].className.replace("gallery-active", "");
    this.className += " gallery-active";
  });
}



// GALLERY MODAL VIEW
const zoomBtn = document.querySelectorAll('.gallery-img');
const allImages = document.querySelectorAll('.gallery-container');
const imageView = document.querySelector('.image-view');
const nextBtn = document.querySelector('next-btn');
const prevBtn = document.querySelector('prev-btn');
const imageBox = document.querySelector('.image-box');
let slides = document.getElementsByClassName("gallery-img");
let slideIndex = 0;

let imgPath ='';
function getPath(img){
  imgPath = img.src;
}

function currentImageDisplay(path){
  imageBox.style.background = `url(${path}) center/contain no-repeat`;
}

imageView.addEventListener('click', function(){
  this.style.display = "none";
  imageBox.style.display = "none";
})

zoomBtn.forEach(function(btn, index){
  btn.addEventListener('click', function(){
      imageView.style.display = "block";
      imageBox.style.display = "block";
      slideIndex = index;
      currentImageDisplay(imgPath);
  })
})

function plusSlides(n) {
  if(slideIndex == 0 && n < 0){
  } else if(slideIndex+1 == slides.length && n >0){
  } else{
    slideIndex += n;
  }
  currentImageDisplay(slides[slideIndex].src);
}




