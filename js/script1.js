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
