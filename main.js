window.onscroll = function() {scrollProgressBar()};

function scrollProgressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 98.5;
  document.getElementById("progbar").style.width = scrolled + "vw";
}
