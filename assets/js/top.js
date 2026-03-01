gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// SMOOTH LIKE BUTTER
let smoother = ScrollSmoother.create({
	wrapper: ".smooth_wrapper",
	content: ".smooth_content",
	smooth: 1.5,
	effects: true
});
// SMOOTH LIKE BUTTER

// DISPLAY SECTION START
gsap.utils.toArray(".enter_from_right").forEach((elem) => {
  gsap.from(elem, {
    x: "50%",
    ease: "power2.out",
    scrollTrigger: {
      trigger: elem,     // trigger each element individually
      start: "top 100%",
	  end: "top 40%",
      scrub: false,
	  scrub: 1,
	  toggleActions: "play none play none"
    }
  });
});

gsap.utils.toArray(".enter_from_left").forEach((elem) => {
  gsap.from(elem, {
    x: "-50%",
    ease: "power2.out",
    scrollTrigger: {
      trigger: elem,     // trigger each element individually
      start: "top 100%",
	  end: "top 40%",
      scrub: false,
	  scrub: 1,
	  toggleActions: "play none play none"
    }
  });
});
// DISPLAY SECTION END