

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  document.getElementById("desktop-view").style.display = "flex";
  document.getElementById("navbar_logo").style.display = "none";
  document.getElementById("sideNav").style.display = "none";
  document.body.style.overflow = "hidden";
  document.addEventListener(
    "touchmove",
    function (event) {
      event.preventDefault();
    },
    { passive: false }
  );
  console.log("mobile --> redirect");
} else {
  console.log("proceed");
  document.getElementById("desktop-view").style.display = "none";
  document.getElementById("navbar_logo").style.display = "block";
  document.getElementById("sideNav").style.display = "block";
  // For non-mobile devices, do nothing
}

var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");

sideNav.style.right = "-40vw";

menuBtn.onclick = function () {
  if (sideNav.style.right == "-40vw") {
    sideNav.style.right = "0";
  } else {
    sideNav.style.right = "-40vw";
  }
};
document.querySelectorAll(".confetti").forEach((el) => {
  el.addEventListener("mouseover", () => {
    el.style.opacity = 0;
  });
});

$(function () {
  $("a[href*=#]:not([href=#])").click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html,body").animate(
          {
            scrollTop: target.offset().top,
          },
          700
        );
        return false;
      }
    }
  });
});

if ($("#back-to-top").length) {
  var scrollTrigger = 100, // px
    backToTop = function () {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        $("#back-to-top").addClass("show");
      } else {
        $("#back-to-top").removeClass("show");
      }
    };
  backToTop();
  $(window).on("scroll", function () {
    backToTop();
  });
  $("#back-to-top").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      700
    );
  });
}
var vwWidth = window.innerWidth;

var controller = new ScrollMagic.Controller();

//scene 1
//for parallax scroll
var parallaxScrolling = new TimelineMax()
  .to(".div1", 1, {y: 100, ease: Power1.easeOut})

new ScrollMagic.Scene({
  triggerElement: ".div1",
  duration: "100%",
  offset: 0,
  triggerHook: 0
})
.setTween(parallaxScrolling)
.addTo(controller)

//scene 2 with horizontal scroll
//for horizontal scrolling
var horizontalSlide = new TimelineMax()
  .to(".div2", 0.2,   {x: 0, ease: Power1.easeOut}, )
  .to(".div2", 1,   {x: -vwWidth, ease: Power1.easeOut}, )	
  .to(".div2", 0.2,   {x: -vwWidth, ease: Power1.easeOut}, )
  .to(".div2", 1,   {x: -2*vwWidth, ease: Power1.easeOut}, )
  .to(".div2", 0.2,   {x: -2*vwWidth, ease: Power1.easeOut}, )

new ScrollMagic.Scene({
  triggerElement: ".div2",
  duration: "160%",
  offset: 0,
  triggerHook: -0.02
})
.setPin('.div2')
.setTween(horizontalSlide)
.addTo(controller)