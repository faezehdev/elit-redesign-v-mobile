


const slider1 = new Swiper('.slider1', {
    disableOnInteraction:false,
    loop: true,
    pauseOnMouseEnter:false,
    effect: 'fade',
  fadeEffect: {
    crossFade: false
  },
  speed : 1000,
  autoplay: {
    delay: 3000,
  },
  });


  gsap.registerPlugin(ScrollTrigger);

let parallaxLeft = gsap.timeline();
parallaxLeft.to('.topS' , {
    x : "20vw"
})
ScrollTrigger.create({
    animation:parallaxLeft , 
    trigger : ".scrollContainer",
    start:"top 80%",
    end:"bottom -200vw",
    scrub : 1,
    // markers:true
    
    
  })
  let parallaxRight = gsap.timeline();
  parallaxRight.to('.btmS' , {
    x : "-20vw"
  })
  ScrollTrigger.create({
    animation:parallaxRight , 
    trigger : ".scrollContainer",
    start:"top 80%",
    end:"bottom -200vw",
    scrub : 1,
    // markers:true,

})


gsap.to(".gallery .section1",{
  scrollTrigger:{
     trigger:".gallery",
     start:"top 10%",
     end:"bottom bottom",
    //  onEnter: () => document.querySelector("header").classList.add("color"),
     
    //  onLeaveBack: () => document.querySelector("header").classList.remove("color")

  }
 })