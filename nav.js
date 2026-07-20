// Mobile nav dropdown toggle — shared across all pages
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('nav.primary');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('open');
    toggle.classList.toggle('active', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
});
