var delPre = setTimeout(function deletePreloader() {
  var pre = document.getElementById('body');
  var del = document.getElementById('preloader');
  pre.removeChild(del);
}, 3000);

export { delPre };
