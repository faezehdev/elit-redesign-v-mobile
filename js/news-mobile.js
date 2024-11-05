
const lenis = new Lenis()


function raf(time) {
lenis.raf(time)
requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
let swiperNews = new Swiper(".swiper-news", {
    slidesPerView:1,
    spaceBetween: 40
    ,  navigation: {
        nextEl: ".Related-news .swiper-button-next",
        prevEl: ".Related-news .swiper-button-prev",
      },
  }); 
  
  let swiperProject= new Swiper(".swiper-project", {
    slidesPerView:1,
    spaceBetween: 40
    ,  navigation: {
        nextEl: ".Related-projects .swiper-button-next",
        prevEl: ".Related-projects .swiper-button-prev",
      },
      autoplay:true
  });  

let sections = document.querySelectorAll(".Section")
sections.forEach(element => {
  gsap.to(element.querySelectorAll('p'),{
    scrollTrigger:{
       trigger: element,
        start:"top 70%",
        end:"bottom bottom",
    },
    duration:1,
    y:0
})
gsap.to(element.querySelectorAll('h1'),{
  scrollTrigger:{
     trigger: element,
      start:"top 50%",
      end:"bottom bottom",
  },
  duration:1,
  y:0
})
gsap.to(element.querySelectorAll('h2'),{
  scrollTrigger:{
     trigger: element,
      start:"top 50%",
      end:"bottom bottom",
  },
  duration:1,
  y:0
})
gsap.to(element.querySelectorAll('h3'),{
  scrollTrigger:{
     trigger: element,
      start:"top 50%",
      end:"bottom bottom",
  },
  duration:1,
  y:0
})
gsap.to(element.querySelectorAll('h4'),{
  scrollTrigger:{
     trigger: element,
      start:"top 50%",
      end:"bottom bottom",
  },
  duration:1,
  y:0
})
gsap.to(element.querySelectorAll('h5'),{
  scrollTrigger:{
     trigger: element,
      start:"top 50%",
      end:"bottom bottom",
  },
  duration:1,
  y:0
})
gsap.to(element.querySelectorAll('h6'),{
  scrollTrigger:{
     trigger: element,
      start:"top 50%",
      end:"bottom bottom",
  },
  duration:1,
  y:0
})
})
 