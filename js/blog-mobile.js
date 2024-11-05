var elements = document.querySelectorAll('.blog');
var gallery = document.querySelector('.BlogList')
elements.forEach(e=>{
    gsap.to(e,{
        opacity:1,
        scrollTrigger:{
            trigger:e,
            start:'top 70%',
            end:'bottom bottom'
        }
    })
})

const lenis = new Lenis()


function raf(time) {
lenis.raf(time)
requestAnimationFrame(raf)
}

requestAnimationFrame(raf)