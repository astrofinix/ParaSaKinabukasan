if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  document.getElementById("desktop-view").style.display = "block";
  // document.getElementById("navbar_logo").style.display = "none";
  // document.getElementById("sideNav").style.display = "none";
  document.body.style.overflow = "hidden";
  console.log("laptop/desktop browser");
} else {
  console.log("REDIRECT");
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

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 700);
        return false;
      }
    }
  });
});

if ($('#back-to-top').length) {
  var scrollTrigger = 100, // px
    backToTop = function() {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        $('#back-to-top').addClass('show');
      } else {
        $('#back-to-top').removeClass('show');
      }
    };
  backToTop();
  $(window).on('scroll', function() {
    backToTop();
  });
  $('#back-to-top').on('click', function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 700);
  });
}

