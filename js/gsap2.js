gsap.registerPlugin(ScrollTrigger);

window.onload = function () {
  let tl17 = gsap.timeline({
    scrollTrigger: {
      trigger: ".pandemic_img",
      start: "center center",
      end: "+=10%",
      scrub: true,
      pin: false,
      opacity: 1,
      zIndex: 100,
      pinSpacing: false,
    },
  });

  let pandemic_img = document.querySelector(".pandemic_img");
  tl17.to(pandemic_img, {
    display: "block",
    scale: 10,
    // rotation: 90,
    // transformOrigin: "center",
  });

  let tl19 = gsap.timeline({
    scrollTrigger: {
      trigger: ".excerpt1_1",
      start: "bottom bottom",
      end: "+=10%",
      scrub: true,
      pin: true,
      opacity: 1,
      zIndex: 100,
      pinSpacing: false,
    },
  });

  let crisis = document.querySelector(".crisis");
  tl19.to(crisis, {
    display: "block",
    scale: 1.1,
  });


  let dot_1 = document.querySelector(".dot_1");
  let tl18 = gsap.timeline({
    scrollTrigger: {
      trigger: ".dot_1",
      start: "top top",
      end: "+=100%",
      scrub: true,
      pin: false,
      zIndex: 200, // Set your desired zIndex value here
      pinSpacing: false,
    },
  });

  tl18
    .to(dot_1, {
      scale: "0.01",
      display: "none",
    })
    .set(dot_1, { zIndex: 2 });
};
