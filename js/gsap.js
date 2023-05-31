gsap.registerPlugin(ScrollTrigger);
// QUOTE INTRO
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

// INTRO EXCERPT

dot.style.position = "relative";
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

  // CH1 ANIMATION
  let tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".dot_animation1",
      start: "center center",
      end: "+=100%",
      scrub: true,
      pin: true,
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

  // last place animation
  let tl15 = gsap.timeline({
    scrollTrigger: {
      trigger: ".rank_animation",
      start: "bottom bottom",
      end: "+=20%",
      scrub: true,
      pin: false,
      opacity: 1,
      zIndex:100,
      pinSpacing: false,
    },
  });
  
  // let author = document.querySelector(".author");
  let rank1 = document.querySelector(".ranking1");
  let rank2 = document.querySelector(".ranking2");

  tl15.add('start')
  .to(rank1, {
    x: "80vh",
    delay: 0,
  }, 'start')
  .to(rank2, {
    x: "-90vh",
    delay: 0,
  }, 'start');
  // briones animation
  let tl16 = gsap.timeline({
    scrollTrigger: {
      trigger: ".briones",
      start: "top bottom",
      end: "+=40%",
      scrub: true,
      pin: false,
      opacity: 1,
      zIndex: 100,
      pinSpacing: false,
    },
  });
  
  let briones = document.querySelector(".briones");
  tl16.to(".briones", {
    y: "-150vh",
    ease: "power2.out", // Add the easing effect (in this case, power2.out)
  });

  tl15.add('start')
  .to(rank1, {
    x: "80vh",
    delay: 0,
  }, 'start')
  .to(rank2, {
    x: "-90vh",
    delay: 0,
  }, 'start');
  //pandemic animation

// CARDS
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
  const tl12 = gsap.timeline({
    scrollTrigger: {
      trigger: ".cards2",
      pin: true,
      start: "top 10%",
      end: "bottom+=1000 bottom",
      scrub: true
    }
  });
  
  tl12.to(".fifth2", {
    y: "100vh",
    delay: -0.2
  }).to(".fourth2", {
    y: "95vh",
    delay: -0.2
  }).to(".third2", {
    y: "90vh",
    delay: -0.2
  }).to(".second2", {
    y: "85vh",
    delay: -0.2
  }).to(".cards2 .second2, .cards2 .third2, .cards2 .fourth2, .cards2 .fifth2", {
    opacity: 0,
    duration: 1,
    delay: -0.2,
    onComplete: () => {
      document.querySelector('.cards').style.display = 'none';
    }
  });
  const tl13 = gsap.timeline({
    scrollTrigger: {
      trigger: ".cards3",
      pin: true,
      start: "top 10%",
      end: "bottom+=1000 bottom",
      scrub: true
    }
  });
  
  tl13.to(".fifth3", {
    y: "100vh",
    delay: -0.2
  }).to(".fourth3", {
    y: "95vh",
    delay: -0.2
  }).to(".third3", {
    y: "90vh",
    delay: -0.2
  }).to(".second3", {
    y: "85vh",
    delay: -0.2
  }).to(".cards3 .second3, .cards3 .third3, .cards3 .fourth3, .cards3 .fifth3", {
    opacity: 0,
    duration: 1,
    delay: -0.2,
    onComplete: () => {
      document.querySelector('.cards').style.display = 'none';
    }
  });
  const tl14 = gsap.timeline({
    scrollTrigger: {
      trigger: ".cards4",
      pin: true,
      start: "top 10%",
      end: "bottom+=1000 bottom",
      scrub: true
    }
  });
  
  tl14.to(".fifth4", {
    y: "100vh",
    delay: -0.2
  }).to(".fourth4", {
    y: "95vh",
    delay: -0.2
  }).to(".third4", {
    y: "90vh",
    delay: -0.2
  }).to(".second4", {
    y: "85vh",
    delay: -0.2
  }).to(".cards4 .second4, .cards4 .third4, .cards4 .fourth4, .cards4 .fifth4", {
    opacity: 0,
    duration: 1,
    delay: -0.2,
    onComplete: () => {
      document.querySelector('.cards').style.display = 'none';
    }
  });

  // BLOCK QUESTION
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


  // CH2 ANIMATION

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



  let bg_scroll = document.querySelector(".scroll_pane");
  let circ_scroll = document.querySelector(".circle_scroll");
  let arrow1 = document.querySelector(".arrow1");
  let arrow2 = document.querySelector(".arrow2");
  let arrow3 = document.querySelector(".arrow3");

  // let tl11 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".scroller1",
  //     start: "center center",
  //     end: "+=100%",
  //     pin: true,
  //     zIndex:100,
  //   },
  // });
  // tl11.to(arrow1, {
  //   display: "block",
  // });

  //.to(circ_scroll, {
  //   backgroundColor: "rgb(253,190,15)",
  // }).to(arrow1, {
  //   display: "none",
  // }).to(arrow2, {
  //   display: "block",
  // }); 
  // tl11.to(arrow1, {
  //   display: "block",
  //   duration: 0,
  // });
  
  // tl11.to(arrow1, {
  //   display: "block",
  // }).to([bg_scroll, circ_scroll, arrow2], {
  //   display: "block",
  //   backgroundColor: ["rgb(43, 73, 172)", "rgb(253, 190, 15)", "rgb(210, 127, 154)"],
  //   duration: 1,
  //   delay: -1, // Delay the start of the animation by -1 second to sync with the arrow1 animation
  // });
  
  // tl11.to(arrow1, {
  //   display: "none",
  // }).to(arrow3, {
  //   display: "block",
  //   duration: 2,
  // });
  
  // tl11.to(bg_scroll, {
  //   backgroundColor: "rgb(210, 127, 154)",
  //   duration: 2,
  // }).to(circ_scroll, {
  //   backgroundColor: "rgb(33,132,35)",
  //   duration: 2,
  // }).to(arrow2, {
  //   display: "none",
  //   duration: 2,
  // }).to(arrow3, {
  //   display: "block",
  //   duration: 2,
  // });
  console.log("TEST");


 // CH3 ANIMATION
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
  
  
  
  // let tl18 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".dot_1",
  //     start: "center center",
  //     end: "+=100%",
  //     scrub: true,
  //     pin: false,
  //     opacity: 1,
  //     zIndex:100,
  //     pinSpacing: false,
  //   },
  // });
  // let dot_1 = document.querySelector(".dot_1");
  
  // tl18.to(dot_1, {
  //   scale: "0.2",
  // });