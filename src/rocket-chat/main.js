window.onload = function () {
  console.log('Widget was loaded!');
  var script = this.document.createElement('script');
  script.src = "https://code.jquery.com/jquery-3.3.1.min.js";
  script.onload = function () {console.log('Jquery was loaded')}
  document.head.appendChild(script);
};
