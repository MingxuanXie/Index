AFRAME.registerComponent('click-url-blank', {
  schema: {default: ''},

  init: function () {
    var url = this.data;
    this.el.addEventListener('click', function () {
    window.open(url, "_blank");
    });
  }
});  