let titleBox = document.querySelector('.title-box')
let rhombus = document.querySelector('.rhombus')
let square = document.querySelector('.square')

titleBox.addEventListener('mouseover', () => {
  rhombus.classList.add('rotate')
  square.classList.add('back')
  titleBox.addEventListener('mouseleave', () => {
    rhombus.classList.remove('rotate')
    square.classList.remove('back')
  })
})

let backGround = document.querySelector('.background')
let wrap = document.getElementById('wrap')
titleBox.addEventListener('click', () => {
  backGround.classList.add('black')
  wrap.classList.add('on')
  rhombus.style.display = "none"
  square.style.display = "none"
  document.querySelector('.inner').classList.add('left')
  document.querySelector('.background').style.backgroundImage = "url(img/lotte_background.jpg)"
})

$(function () {
  setImageSlide(".slide-container", 1);

  function setImageSlide(selector, n) {
    $(selector).find(".slide").each(function (i) {
      $(this).css("left", i * 100 + "%");
    });
    showSlide(n);

    $(".slide-nav-link").find("a").on({
      "click": function () {
        let index = $(this).index();
        //console.log(index)
        showSlide(index + 1);
        const backgroundImages = {
          "CULTURE-LOTTE": "url(img/lotte_background.jpg)",
          "MUSEUM": "url(img/museum_background.png)",
          "NETFLIX": "url(img/netflix_background.png)",
        };
        const target = this.textContent;
        const backgroundImage = backgroundImages[target];
        const background = document.querySelector(".background");
        background.style.backgroundImage = backgroundImage;
      }
    });

    function showSlide(n) {
      $(selector).stop().animate({ "left": -((n - 1) * 100) + "%" }, 1000, "easeInOutQuart");
      $(".slide-nav-link a").removeClass("on");
      $(".slide-nav-link a").eq(n - 1).addClass("on");
    }
  }
});