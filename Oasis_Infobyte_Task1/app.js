var tl = gsap.timeline()
tl.from(".main", {
    scale: 1.5,
    duration: 2
})
tl.from("#logo", {
    opacity: 0,
    duration: 3,
    TransformOrigin: "50% 50%"
})

tl.from("li", {
    y: -80,
    stagger: 0.4,
    duration: 2,
    delay: 0.5
})
tl.from(".nav-btn", {
    x: 380,
    duration: 1
})
gsap.from(".title", {
    x: -750,
    duration: 1,
    delay: 10
})
gsap.from(".img", {
    x: 500,
    duration: 1,
    delay: 10
})
function myfunction() {
    var navbar = document.getElementById("bar")
    navbar.classList.toggle("show")
}