const lenis=new Lenis;function raf(t){lenis.raf(t),requestAnimationFrame(raf)}requestAnimationFrame(raf);let swiperblogs=new Swiper(".swiper-blogs",{slidesPerView:1,spaceBetween:40,navigation:{nextEl:".Related-blogs .swiper-button-next",prevEl:".Related-blogs .swiper-button-prev"}}),swiperProject=new Swiper(".swiper-project",{slidesPerView:1,spaceBetween:40,navigation:{nextEl:".Related-projects .swiper-button-next",prevEl:".Related-projects .swiper-button-prev"},autoplay:!0}),sections=document.querySelectorAll(".Section");sections.forEach((t=>{gsap.to(t.querySelectorAll("p"),{scrollTrigger:{trigger:t,start:"top 70%",end:"bottom bottom"},y:0}),gsap.to(t.querySelectorAll("h1"),{scrollTrigger:{trigger:t,start:"top 70%",end:"bottom bottom"},y:0}),gsap.to(t.querySelectorAll("h2"),{scrollTrigger:{trigger:t,start:"top 70%",end:"bottom bottom"},y:0}),gsap.to(t.querySelectorAll("h3"),{scrollTrigger:{trigger:t,start:"top 70%",end:"bottom bottom"},y:0}),gsap.to(t.querySelectorAll("h4"),{scrollTrigger:{trigger:t,start:"top 70%",end:"bottom bottom"},y:0}),gsap.to(t.querySelectorAll("h5"),{scrollTrigger:{trigger:t,start:"top 70%",end:"bottom bottom"},y:0}),gsap.to(t.querySelectorAll("h6"),{scrollTrigger:{trigger:t,start:"top 70%",end:"bottom bottom"},y:0})}));