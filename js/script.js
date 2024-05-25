Shery.mouseFollower();

Shery.makeMagnet("#nav h4, #nav img, #nav .hover-button", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1
  });

Shery.makeMagnet("#page-1 .trans", {
  ease: "cubic-bezier(0.23, 2, 0.320, 1)",
  scale: 2,
  duration: 1
})

Shery.makeMagnet("#head2, #head3, #head4, #head6, button, #footer-logo", {
  ease: "cubic-bezier(0.23, 2, 0.320, 1)",
  scale: 2,
  duration: 1
})



gsap.to("#nav",{
  backgroundColor: "black",
  height: "14vh",
  duration: 1,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -20%",
    scrub: 3
  }
})

gsap.to("#main",{
  backgroundColor: "white",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -20%",
    end: "top -80%",
    scrub: 2
  }
})