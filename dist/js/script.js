const trailerButton=document.getElementById("trailerButton"),imagesList=(trailerButton.addEventListener("click",function(){var e=document.createElement("iframe");e.src="https://www.youtube.com/embed/XOnHtStmbCI",e.width="800",e.height="500",e.allowFullscreen=!0;const t=document.createElement("div");t.classList.add("modal"),t.appendChild(e),document.body.appendChild(t),t.addEventListener("click",function(e){e.target===t&&t.remove()})}),document.querySelector(".images__lista")),imagesItems=document.querySelectorAll(".images__item"),imagesCount=imagesItems.length,initialImageCount=3,slideInterval=8e3;let currentIndex=0;function showImages(t){var e=Array.from(imagesItems).slice(t,t+initialImageCount),i=(imagesList.innerHTML="",e.forEach(e=>imagesList.appendChild(e)),document.querySelector(".slider__indicators"));i.innerHTML="";for(let e=0;e<Math.ceil(imagesCount/initialImageCount);e++){var a=document.createElement("div");a.classList.add("slider__indicator"),e===Math.floor(t/initialImageCount)&&a.classList.add("active"),a.addEventListener("click",()=>{showImages(currentIndex=e*initialImageCount),updateSliderIndicators()}),i.appendChild(a)}}function slideImages(){showImages(currentIndex=(currentIndex+initialImageCount)%imagesCount),updateSliderIndicators()}function updateSliderIndicators(){document.querySelectorAll(".slider__indicator").forEach((e,t)=>{t===Math.floor(currentIndex/initialImageCount)?e.classList.add("active"):e.classList.remove("active")})}showImages(0);let slideIntervalId=setInterval(slideImages,slideInterval);imagesList.addEventListener("mouseenter",()=>{clearInterval(slideIntervalId)}),imagesList.addEventListener("mouseleave",()=>{slideIntervalId=setInterval(slideImages,slideInterval)});