const $burger = $(".burger");
if ($burger.length) {
	const tl1 = gsap.timeline({paused: true });
	tl1.to(".top_stack", { y: 7, duration: 0.3, ease: "power2.out" })
	   .to(".top_stack", { rotation: 45, duration: 0.3, ease: "power2.out" });
	   
	const tl2 = gsap.timeline({paused: true });
	tl2.to(".mid_stack", { y: 0, duration: 0.3, ease: "power2.out" })
		.to(".mid_stack", { rotation: 45, duration: 0.3, ease: "power2.out" });
	
	const tl3 = gsap.timeline({paused: true });
	tl3.to(".bot_stack", { y: -7, duration: 0.3, ease: "power2.out" }, "<")
	   .to(".bot_stack", { rotation: -45, duration: 0.3, ease: "power2.out" });

	let isExit = false;
	$burger.on("click", function () {
		if (!isExit) {
			tl1.play();
			tl2.play();
			tl3.play();
		} else {
			tl1.reverse();
			tl2.reverse();
			tl3.reverse();
		}
		isExit = !isExit;
	});
}
