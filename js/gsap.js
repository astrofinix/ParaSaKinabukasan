var dot = document.getElementById("dot");
gsap.registerPlugin(ScrollTrigger);

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".dot",
          start: "center center",
          end: "+=100%",
          scrub: true,
          pin: true,
        },
      });
      tl.to(dot, {
        scale: "10",
        backgroundColor: "rgb(255,194,0)",
      });
      tl.to(dot, {
        scale: "30",
        backgroundColor: "#f4f4f4",
      });
      tl.to(dot, {
        scale: "50",
        backgroundColor: "#f4f4f4",
      });
      tl.to(dot, {
        scale: "50",
        backgroundColor: "#f4f4f4",
      });
      tl.to(dot, {
        scale: "90",
        backgroundColor: "rgb(33, 132, 35)",
      });
      
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
  