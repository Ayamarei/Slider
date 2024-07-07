//TODO-------------GLOBAL DATA------------

var imgs = Array.from( document.querySelectorAll('.item img'))
var layer = document.getElementById("layer")
var close = document.getElementById("close")
var boxData = document.getElementById("box-data")
var nextSlider= document.getElementById("next")
var prevSlider= document.getElementById("prev")
var currentIndex = 0;

//TODO------------------FUNCTION---------------------------


function closeLayer (){
  layer.classList.add("d-none")
}

function next() {
  currentIndex++;
  if (currentIndex==imgs.length) {
    currentIndex=0
  }
  var currentElementSrc = imgs[currentIndex].getAttribute("src")
  boxData.style.backgroundImage=`url(${currentElementSrc})`
}


function prev() {
  currentIndex--;
  if (currentIndex<0) {
    currentIndex=imgs.length-1
  }
  var currentElementSrc = imgs[currentIndex].getAttribute("src")
  boxData.style.backgroundImage=`url(${currentElementSrc})`
}


//TODO-------------------EVENTS--------------------------
for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener('click', function (e) {
    var currentImg = e.target
    currentIndex= imgs.indexOf(currentImg);
    
      layer.classList.remove("d-none")
      var currentUrl = e.target.getAttribute('src');
      boxData.style.backgroundImage=`url(${currentUrl})`
    })
    
}

close.addEventListener('click', function () {
    closeLayer()
})



nextSlider.addEventListener("click", function () {
  next();
  
})

prevSlider.addEventListener('click', function () {
  prev();
})

document.addEventListener('click', function(e) {
  if ( e.target==layer) {
    closeLayer()
  }
})

document.addEventListener("keydown", function(e) {
  switch (e.key) {
    case "ArrowRight":
      next()
      break;
      case "ArrowLeft":
        prev()
      break;
      case "Escape":
        closeLayer()
  }
})