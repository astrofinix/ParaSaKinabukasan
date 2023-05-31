gsap.registerPlugin(ScrollTrigger);

window.onload = function () {
  let tl17 = gsap.timeline({
    scrollTrigger: {
      trigger: ".pandemic_img",
      start: "top bottom",
      end: "+=30%",
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
    rotation: 360, // Rotate by 180 degrees
    ease: "power2.inOut", // Easing function
    // rotation: 90,
    // transformOrigin: "center",
  });
  let excerpt1_1 = document.querySelector(".excerpt1_1");
  let tl19 = gsap.timeline({
    scrollTrigger: {
      trigger: ".excerpt1_1",
      start: "bottom bottom",
      end: "+=20%",
      scrub: true,
      pin: false,
      opacity: 1,
      zIndex: 100,
      pinSpacing: false,
    },
  });

  tl19.to(excerpt1_1, {
    opacity: 1,
    ease: "power2.out",
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
    let pop1 = document.querySelector(".pop1");
    let pop2 = document.querySelector(".pop2");
    let pop3 = document.querySelector(".pop3");
    let pop_animation = document.querySelector(".pop_animation");
    let tl20 = gsap.timeline({
      scrollTrigger: {
        trigger: ".pop_animation",
        start: "center center",
        end: "+=100%",
        scrub: true,
        pin: true,
        zIndex: 200, // Set your desired zIndex value here
        pinSpacing: false,
      },
    });
  
    tl20.to(pop3, {
        y: "80vh",
        display: "none",
      });
      tl20.to(pop2, {
        y: "80vh",
        display: "none",
      });
      tl20.to(pop_animation, {
        backgroundColor: "#f4f4f4",
      });
      tl20.to(pop1, {
        y: "80vh",
        display: "none",
      });
    



      let tl21 = gsap.timeline({
        scrollTrigger: {
          trigger: ".happy",
          start: "top bottom",
          end: "+=30%",
          scrub: true,
          pin: false,
          opacity: 1,
          zIndex: 100,
          pinSpacing: false,
        },
      });
    
      let happy = document.querySelector(".happy");
      let happy_container = document.querySelector(".happy_container");
      tl21.to(happy, {
        display: "block",
        scale: 10,
        rotation: 360, // Rotate by 180 degrees
        ease: "power2.inOut", // Easing function
      });
      tl21.to(happy_container, {
        backgroundColor: "#218323",
      });
};
