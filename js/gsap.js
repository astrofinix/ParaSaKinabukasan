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
  scale: "300",
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
  