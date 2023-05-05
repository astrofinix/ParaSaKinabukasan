var menuBtn = document.getElementById('menuBtn')
      var sideNav = document.getElementById('sideNav')

      sideNav.style.right = '-40vw'

      menuBtn.onclick = function () {
        if (sideNav.style.right == '-40vw') {
          sideNav.style.right = '0'
        } else {
          sideNav.style.right = '-40vw'
        }
      }