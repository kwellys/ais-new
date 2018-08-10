(function() {
  var script = document.createElement("script");
  script.src = "https://code.jquery.com/jquery-3.3.1.min.js";
  script.onload = function() {};

  document.head.appendChild(script);

  function widgetLoaded(func = f => f) {
    function check() {
      return $(".title").length !== 0;
    }

    var timer = setInterval(() => {
      var trigger = check();
      if (trigger) {
        clearInterval(timer);
        func();
      }
    });
  }

  widgetLoaded(widget);
  function widget() {
    $(".title").append(
      '<div class="rocket-logo"><img src="https://new.aisnovations.com/rocket-chat/images/icon.svg" /></div>'
    );
    var isOpen = false;
    $(".livechat-room").addClass("widget-close");

    function handleWidget() {
      isOpen = !isOpen;
      if (isOpen) {
        $(".livechat-room").removeClass("widget-close");
        $(".livechat-room").addClass("widget-open");
      } else {
        $(".livechat-room").removeClass("widget-open");
        $(".livechat-room").addClass("widget-close");
      }
    }
    var title = $(".title");
    var online = title.attr("style").indexOf("#C1272D") !== -1;
    title.on("click", function() {
      handleWidget();
    });

    if (online) {
      title.css({
        background: "linear-gradient(38.83deg, #66A6FF 30.26%, #6DFFD6 115.74%)"
      });
    } else {
      title.css({
        background:
          "linear-gradient(38.83deg, #97ABD4 27.05%, rgba(217, 230, 255, 0.69) 115.74%)"
      });
    }
  }
})();
