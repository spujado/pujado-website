/* PUJADO — minimal progressive enhancement. The site works without JavaScript. */
document.documentElement.classList.add('js');
document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.menu-toggle');
  if (header && toggle) {
    var setOpen = function (open) {
      header.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? toggle.dataset.close : toggle.dataset.open;
    };
    toggle.addEventListener('click', function () { setOpen(!header.classList.contains('open')); });
    header.querySelectorAll('.nav-panel a').forEach(function (a) {
      a.addEventListener('click', function () { setOpen(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && header.classList.contains('open')) { setOpen(false); toggle.focus(); }
    });
  }

  var copy = document.querySelector('[data-copy]');
  if (copy) {
    var label = copy.textContent;
    copy.addEventListener('click', function () {
      var done = function () {
        copy.textContent = copy.dataset.done;
        setTimeout(function () { copy.textContent = label; }, 2200);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(copy.dataset.copy).then(done, function () {});
      }
    });
  }
});
