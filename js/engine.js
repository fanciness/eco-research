(function() {
  var opened;

  var _elem = function (id) {
    return {
      find: function (editedId) {
        return document.getElementById(editedId || id);
      },
      open: function () {
        this.find(id.replace(/\D/g, 'p')).style.height = '100%';
      },
      close: function () {
        this.find(id.replace(/\D/g, 'p')).style.height = '0';
      },
      closeDet: function () {
        this.find(id.replace(/\D/g, 'd')).removeAttribute('open');
      }
    }
  };

  document.onclick = function(e) {
    if (!e) e = window.event;
    var el = (e.srcElement || e.target);

    if (el.className === 'nav-h') {
      location.href = el.children[0].getAttribute('href');
    } else if (el.tagName.toUpperCase() === 'SUMMARY') {
      var clicked = el.id;
      if (opened === clicked) {
        _elem(clicked).close();
        opened = false;
      } else {
        if (opened) {
          _elem(opened).close();
          _elem(opened).closeDet();
        }
        _elem(clicked).open();
        opened = clicked;
      }
    }
  };

  _elem('y').find().innerHTML = new Date().getFullYear();

})();
