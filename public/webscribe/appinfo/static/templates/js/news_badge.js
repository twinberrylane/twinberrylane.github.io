! function() {
  function attr() {
    var tag, attr = document.getElementById("news-badge"),
      elem = attr.getAttribute("data-color"),

      tag = '<p><a>Powered</a></p>',
      attr.innerHTML = tag;
  }
  window.onload = function() {
    attr();
  }
}();
