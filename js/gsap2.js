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
      end: "+=50%",
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

  let scroller1 = document.querySelector(".scroller1");
  let circle_scroll_left1 = document.querySelector(".circle_scroll_left1");
  let arrow1 = document.querySelector(".arrow1");
  let arrow2 = document.querySelector(".arrow2");
  let arrow3 = document.querySelector(".arrow3");
  let scroll_img1 = document.querySelector(".scroll_img1");
  let scroll_img2 = document.querySelector(".scroll_img2");
  let scroll_img3 = document.querySelector(".scroll_img3");

  let tl22 = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroller1",
      start: "center center",
      end: "+=100%",
      scrub: true,
      pin: true,
      opacity: 1,
      zIndex: 1000,
      pinSpacing: false,
    },
  });
  tl22.to(arrow1, {
    display: "block",
    opacity:  1,
  });


  tl22.add('stage2')
  
  .to(scroll_img1, {
    y: "-100vh",
  }, 'stage2')
  .to(scroll_img2, {
    y: "-75vh",
  }, 'stage2')
  .to(circle_scroll_left1, {
    backgroundColor: "rgb(253,190,15)",
  }, 'stage2')
  .to(scroller1, {
    backgroundColor: "#2a47a7",
  }, 'stage2')
  .to(arrow2, {
    display: "block",
    opacity:  1,
  }, 'stage2');

  tl22.add('stage3')
  
  .to(scroll_img2, {
    y: "-200vh",
  }, 'stage3')
  .to(scroll_img3, {
    y: "-75vh",
  }, 'stage3')
  .to(circle_scroll_left1, {
    backgroundColor: "#218323",
  }, 'stage3')
  .to(scroller1, {
    backgroundColor: "#d27f9a",
  }, 'stage3')
  .to(arrow3, {
    display: "block",
    opacity:  1,
  }, 'stage3');
  let scroller2 = document.querySelector(".scroller2");
  let arrow4 = document.querySelector(".arrow4");
  let arrow5 = document.querySelector(".arrow5");
  let arrow6 = document.querySelector(".arrow6");
  let scroll_img4 = document.querySelector(".scroll_img4");
  let scroll_img5 = document.querySelector(".scroll_img5");
  let scroll_img6 = document.querySelector(".scroll_img6");

  let tl23 = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroller2",
      start: "center center",
      end: "+=100%",
      scrub: true,
      pin: true,
      opacity: 1,
      zIndex: 1000,
      pinSpacing: false,
    },
  });
  tl23.to(arrow4, {
    display: "block",
    opacity:  1,
  });


  tl23.add('stage2')
  
  .to(scroll_img4, {
    y: "-100vh",
  }, 'stage2')
  .to(scroll_img5, {
    y: "-75vh",
  }, 'stage2')
  .to(scroller2, {
    backgroundColor: "#2a47a7",
  }, 'stage2')
  .to(arrow5, {
    display: "block",
    opacity:  1,
  }, 'stage2');

  tl23.add('stage3')
  
  .to(scroll_img5, {
    y: "-200vh",
  }, 'stage3')
  .to(scroll_img6, {
    y: "-75vh",
  }, 'stage3')
  .to(scroller2, {
    backgroundColor: "#f27028",
  }, 'stage3')
  .to(arrow6, {
    display: "block",
    opacity:  1,
  }, 'stage3');
  let scroller3 = document.querySelector(".scroller3");
  let circle_scroll_left2 = document.querySelector(".circle_scroll_left2");
  let arrow7 = document.querySelector(".arrow7");
  let arrow8 = document.querySelector(".arrow8");
  let arrow9 = document.querySelector(".arrow9");
  let scroll_img7 = document.querySelector(".scroll_img7");
  let scroll_img8 = document.querySelector(".scroll_img8");
  let scroll_img9 = document.querySelector(".scroll_img9");

  let tl24 = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroller3",
      start: "center center",
      end: "+=100%",
      scrub: true,
      pin: true,
      opacity: 1,
      zIndex: 1000,
      pinSpacing: false,
    },
  });
  tl24.to(arrow7, {
    display: "block",
    opacity:  1,
  });


  tl24.add('stage2')
  
  .to(scroll_img7, {
    y: "-100vh",
  }, 'stage2')
  .to(scroll_img8, {
    y: "-75vh",
  }, 'stage2')
  .to(scroller3, {
    backgroundColor: "#2a47a7",
  }, 'stage2')
  .to(circle_scroll_left2, {
    backgroundColor: "rgb(255, 194, 0)",
  }, 'stage3')
  .to(arrow8, {
    display: "block",
    opacity:  1,
  }, 'stage2');

  tl24.add('stage3')
  
  .to(scroll_img8, {
    y: "-200vh",
  }, 'stage3')
  .to(scroll_img9, {
    y: "-75vh",
  }, 'stage3')
  .to(circle_scroll_left2, {
    backgroundColor: "#d27f9a",
  }, 'stage3')
  .to(scroller3, {
    backgroundColor: "#218323",
  }, 'stage3')
  .to(arrow9, {
    display: "block",
    opacity:  1,
  }, 'stage3');
  let scroller4 = document.querySelector(".scroller4");
  let arrow10 = document.querySelector(".arrow10");
  let arrow11 = document.querySelector(".arrow11");
  let arrow12 = document.querySelector(".arrow12");
  let scroll_img10 = document.querySelector(".scroll_img10");
  let scroll_img11 = document.querySelector(".scroll_img11");
  let scroll_img12 = document.querySelector(".scroll_img12");

  let tl25 = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroller4",
      start: "center center",
      end: "+=100%",
      scrub: true,
      pin: true,
      opacity: 1,
      zIndex: 1000,
      pinSpacing: false,
    },
  });
  tl25.to(arrow10, {
    display: "block",
    opacity:  1,
  });


  tl25.add('stage2')
  
  .to(scroll_img10, {
    y: "-100vh",
  }, 'stage2')
  .to(scroll_img11, {
    y: "-75vh",
  }, 'stage2')
  .to(scroller4, {
    backgroundColor: "#2a47a7",
  }, 'stage2')
  .to(arrow11, {
    display: "block",
    opacity:  1,
  }, 'stage2');

  tl25.add('stage3')
  
  .to(scroll_img11, {
    y: "-200vh",
  }, 'stage3')
  .to(scroll_img12, {
    y: "-75vh",
  }, 'stage3')
  .to(scroller4, {
    backgroundColor: "rgb(235, 6, 13)",
  }, 'stage3')
  .to(arrow12, {
    display: "block",
    opacity:  1,
  }, 'stage3');
};
