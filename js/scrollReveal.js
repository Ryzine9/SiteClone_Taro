window.onload = function () {
  var scroll = document.querySelectorAll('.hide');

  var Animation = function () {
    for (var i = 0; i < scroll.length; i++) {
      var triggerMargin = 200;
      if (window.innerHeight > scroll[i].getBoundingClientRect().top + triggerMargin) {
        scroll[i].classList.add('show');
      }
    }
  }
  window.addEventListener('scroll', Animation);
}