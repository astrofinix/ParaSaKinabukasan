gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".dot",
    start: "center center",
    end: "+=100%",
    scrub: true,
    pin: false,
    opacity: 1,
    zIndex:100,
    pinSpacing: false,
  },
});

let author = document.querySelector(".author");
let dot = document.querySelector(".dot");
let page_intro = document.querySelector(".intro_quote");

tl.to(dot, {
  display: "block",
  scale: "50",
  opacity: 1,
  backgroundColor: "rgb(255, 194, 0)",
}).to(author, {
  color: "#040404",
});

tl.to(dot, {
  scale: "100",
  backgroundColor: "#f4f4f4",
})
tl.to(dot, {
  scale: "250",
  backgroundColor: "#f4f4f4",
});

tl.to(dot, {
  backgroundColor: "#f4f4f4",
});

tl.to(dot, {
  backgroundColor: "rgb(33, 132, 35)",
}).to(page_intro, {
  backgroundColor: "rgb(33, 132, 35)",
});


dot.style.position = "relative";

      
const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".cards",
      pin: true,
      start: "top 10%",
      end: "bottom+=1000 bottom",
      scrub: true
    }
  });
  
  tl1.to(".fifth", {
    y: "100vh",
    delay: -0.2
  }).to(".fourth", {
    y: "95vh",
    delay: -0.2
  }).to(".third", {
    y: "90vh",
    delay: -0.2
  }).to(".second", {
    y: "85vh",
    delay: -0.2
  }).to(".cards .second, .cards .third, .cards .fourth, .cards .fifth", {
    opacity: 0,
    duration: 1,
    delay: -0.2,
    onComplete: () => {
      document.querySelector('.cards').style.display = 'none';
    }
  });


  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".block_question",
      start: "center center",
      end: "+=100%",
      scrub: true,
      pin: true,
      opacity: 1,
      zIndex:100,
      pinSpacing: false,
    },
  });
  let question_bg = document.querySelector(".block_question");
  let text_1 = document.querySelector(".text_1");
  let text_2 = document.querySelector(".text_2");
  let text_3 = document.querySelector(".text_3");

  
  tl2.to(text_1, {
    display: "block",
  });
  
  tl2.to(question_bg, {
    backgroundColor: "rgb(255, 194, 0)",
  }).to(text_1, {
    opacity: 0,
  }).to(text_2, {
    opacity: 1,
    scale: 1.1,
    display: "block",
  });
  tl2.to(question_bg, {
    backgroundColor: "#040404",
  }).to(text_2, {
    scale: 1,
    display: "none",
    opacity:0,
  }).to(text_3, {
    opacity: 1,
    scale: 1.1,
    display: "block",
  });

  let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".dot_animation2",
      start: "bottom bottom",
      end: "+=100%",
      scrub: true,
      pin: false,
      opacity: 1,
      zIndex:100,
      pinSpacing: false,
    },
  });
  
  // let author = document.querySelector(".author");
  let dot1 = document.querySelector(".dot_animation2");
  let head1 = document.querySelector(".head1");
  let head2 = document.querySelector(".head2");
  let head3 = document.querySelector(".head3");
  let head4 = document.querySelector(".head4");

  tl4.to(head1, {
    x: 400,
  }).to(dot1, {
    display: "block",
    scale: "20",
    opacity: 1,
    ease: "power2.out"
  }).to(head2, {
    x: 200,
    ease: "power2.out"
  }).to(head4, {
    y: 200,
    ease: "power2.out"
  });
  let tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".dot_animation1",
      start: "center center",
      end: "+=100%",
      scrub: true,
      pin: false,
      opacity: 1,
      zIndex:100,
      pinSpacing: false,
    },
  });
  
  // let author = document.querySelector(".author");
  let dot2 = document.querySelector(".dot_animation1");

  tl5.to(dot2, {
    scale: 2,
  });
  let tl6 = gsap.timeline({
    scrollTrigger: {
      trigger: ".excerpt1",
      start: "bottom bottom",
      end: "center center", 
      scrub: true,
      scrub: true,
      pin: false,
      opacity: 1,
      zIndex: 100,
      pinSpacing: false,
      onComplete: function () {
        tl7.play(); // Start the next timeline when tl6 is complete
      },
    },
  });
  
  let tl7 = gsap.timeline({
    paused: true, // Set the timeline to initially paused
    scrollTrigger: {
      trigger: ".excerpt2",
      start: "bottom bottom",
      end: "center center", 
      scrub: true,
      pin: false,
      opacity: 1,
      zIndex: 100,
      pinSpacing: false,
      onComplete: function () {
        tl8.play(); // Start the next timeline when tl7 is complete
      },
    },
  });
  
  let tl8 = gsap.timeline({
    paused: true, // Set the timeline to initially paused
    scrollTrigger: {
      trigger: ".excerpt3",
      start: "bottom bottom",
      end: "center center", 
      scrub: true,
      pin: false,
      opacity: 1,
      zIndex: 100,
      pinSpacing: false,
      onComplete: function () {
        tl9.play(); // Start the next timeline when tl8 is complete
      },
    },
  });
  
  let tl9 = gsap.timeline({
    paused: true, // Set the timeline to initially paused
    scrollTrigger: {
      trigger: ".excerpt4",
      start: "bottom bottom",
      end: "center center", 
      scrub: true,
      pin: false,
      opacity: 1,
      zIndex: 100,
      pinSpacing: false,
    },
  });
  
  let excerpt1 = document.querySelector(".excerpt1");
  let excerpt2 = document.querySelector(".excerpt2");
  let excerpt3 = document.querySelector(".excerpt3");
  let excerpt4 = document.querySelector(".excerpt4");
  
  tl6.to(excerpt1, {
    opacity: 1,
  });
  
  tl7.to(excerpt2, {
    opacity: 1,
  });
  
  tl8.to(excerpt3, {
    opacity: 1,
  });
  
  tl9.to(excerpt4, {
    opacity: 1,
  });
  let tl10 = gsap.timeline({
    scrollTrigger: {
      trigger: ".comp1",
      start: "bottom bottom",
      end: "+=100%",
      scrub: true,
      pin: false,
      opacity: 1,
      zIndex:3,
      pinSpacing: false,
    },
  });
  
  // let author = document.querySelector(".author");
  let dot_animation3 = document.querySelector(".dot_animation3");
  let dot_animation4 = document.querySelector(".dot_animation4");
  let comp1 = document.querySelector(".comp1");


  tl10.to(comp1, { y: 200 })
  .set(dot_animation4, { zIndex: 1 }) // Adjust z-index of dot_animation4
  .to(dot_animation4, {
    display: "block",
    scale: "25",
    ease: "power2.out",
  })
  .set(dot_animation4, { zIndex: 0 }) // Reset z-index of dot_animation4
  .set(dot_animation3, { zIndex: 1 }) // Adjust z-index of dot_animation3
  .to(dot_animation3, {
    display: "block",
    scale: "10",
    ease: "power2.out",
  })
  .set(dot_animation3, { zIndex: 0 }); // Reset z-index of dot_animation3