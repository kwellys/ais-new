window.onload = function () {
  // console.log('Widget was loaded!');
  var script = this.document.createElement('script');
  script.src = "https://code.jquery.com/jquery-3.3.1.min.js";
  script.onload = function () {
    console.log('Jquery was loaded')

    var title = $('.title');
    var online = title.attr('style').indexOf('#C1272D') !== -1;
    console.log(online)
    // var max = $('.maximize')
    // max.attr('viewBox', '0 0 28 28')
    // max.attr('width', '28')
    // max.attr('height', '28')

    // max.children('path').attr('d', 'M18.6457 0H2.33071C1.03717 0 0 1.05 0 2.33333V16.3333C0 17.6167 1.03717 18.6667 2.33071 18.6667H18.6457C19.9276 18.6667 20.9764 17.6167 20.9764 16.3333V2.33333C20.9764 1.05 19.9392 0 18.6457 0ZM18.6457 16.3333H2.33071V4.66667H18.6457V16.3333Z')
    // max.children('path').attr('fill', 'white')
    // max.children('path').attr('transform', 'translate(3.49605 4.6665)')

}
  document.head.appendChild(script);
};
