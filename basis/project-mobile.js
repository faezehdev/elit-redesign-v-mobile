const lenis=new Lenis;function raf(e){lenis.raf(e),requestAnimationFrame(raf)}requestAnimationFrame(raf);let SwiperGalley=new Swiper(".swiper-gallery",{centeredSlides:!0,slidesPerView:1.8,loop:!0,loopedSlides:3,spaceBetween:30,grabCursor:!0,speed:1e3,effect:"slide",navigation:{nextEl:".Gallery-Container .swiper-button-next",prevEl:".Gallery-Container .swiper-button-prev"}}),swiperProject=new Swiper(".swiper-project",{slidesPerView:1,spaceBetween:40,navigation:{nextEl:".Related-projects .swiper-button-next",prevEl:".Related-projects .swiper-button-prev"},autoplay:!0}),closePop=document.querySelector(".closePop"),popUpGalleryContainer=document.querySelector(".popUpGalleryContainer"),openGallery=document.querySelectorAll(".openGallery"),zoomIn=document.querySelector(".zoomIn"),rotateRight=document.querySelector(".rotateRight"),rotateLeft=document.querySelector(".rotateLeft"),zoomOut=document.querySelector(".zoomOut"),sGallery=document.querySelector(".sGallery"),closeSlider=document.querySelector(".closeSlider"),galleryFlag=!0,zoomMin=.5,zoomMax=1.7,currZoom=1,curRotate=0,sGalleryFlag=!0,thumbBox=document.querySelectorAll(".Gallery-Container .swiper-gallery .swiper-slide"),thumbBox1=document.querySelectorAll(".thumbBox");closePop.addEventListener("click",(function(e){popUpGalleryContainer.classList.remove("popOpen"),galleryFlag=!galleryFlag})),zoomIn.addEventListener("click",(function(e){let t=document.querySelector(".innerIMG");console.log("zoomin"),currZoom<zoomMax&&(currZoom+=.1,t.style.scale=currZoom)})),zoomOut.addEventListener("click",(function(e){let t=document.querySelector(".innerIMG");console.log("zoomout"),currZoom>zoomMin&&(currZoom-=.1,t.style.scale=currZoom)})),rotateLeft.addEventListener("click",(function(e){let t=document.querySelector(".innerIMG");curRotate+=90,t.style.rotate=-curRotate+"deg"})),rotateRight.addEventListener("click",(function(e){let t=document.querySelector(".innerIMG");curRotate+=90,t.style.rotate=`${curRotate}deg`}));for(let e=0;e<thumbBox.length;e++){const t=thumbBox[e];t.setAttribute("data-index",e),t.querySelector(".openGallery").addEventListener("click",(function(e){if(sGalleryFlag){let t=document.querySelector(".innerIMG"),r=e.currentTarget.parentElement.parentElement.querySelector("img").getAttribute("src"),o=e.currentTarget.parentElement.parentElement.getAttribute("data-index");console.log(o,r),t.setAttribute("src",r),popUpGalleryContainer.classList.add("popOpen"),sGallery.classList.add("popOpen"),sGalleryFlag=!sGalleryFlag,galleryFlag=!sGalleryFlag,popUpGalleryContainer.style.overflow="hidden"}}))}for(let e=0;e<thumbBox1.length;e++){const t=thumbBox1[e];t.setAttribute("data-index",e),t.addEventListener("click",(function(t){if(sGalleryFlag){popUpGalleryContainer.scrollTo(0,0);let r=document.querySelector(".innerIMG"),o=t.currentTarget.querySelector("img").getAttribute("src");t.currentTarget.getAttribute("data-index");console.log(t.currentTarget),r.setAttribute("src",o),sGallery.classList.add("popOpen"),sGalleryFlag=!sGalleryFlag,console.log("j",e),popUpGalleryContainer.style.overflow="hidden"}}))}closeSlider.addEventListener("click",(function(e){sGallery.classList.remove("popOpen"),sGalleryFlag=!sGalleryFlag,popUpGalleryContainer.style.overflow="auto"})),gsap.to(".ProjectShow-mobile .Container .Gallery-Container > .Title > h2",{scrollTrigger:{trigger:" .Gallery-Container",start:"top 70%",end:"bottom bottom"},y:0}),gsap.to(".Project-Detail .Row",{scrollTrigger:{trigger:".Project-Detail",start:"top 70%",end:"bottom bottom"},stagger:.2,y:0});