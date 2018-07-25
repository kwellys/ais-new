if (process.browser) {
  (function (w, d, s, u) {
    w.RocketChat = function (c) { w.RocketChat._.push(c); }; w.RocketChat._ = []; w.RocketChat.url = u;
    let h = d.getElementsByTagName(s)[0],
      j = d.createElement(s);
    j.async = true; j.src = 'https://chat.aisnovations.com/packages/rocketchat_livechat/assets/rocketchat-livechat.min.js?_=201702160944';
    h.parentNode.insertBefore(j, h);
  }(window, document, 'script', 'https://chat.aisnovations.com/livechat'));
}
