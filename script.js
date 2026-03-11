/* ===================================================================
   Hello World — Matrix vs Inception
   Theme toggle logic — vanilla JS, zero dependencies
   =================================================================== */

(function () {
  'use strict';

  var toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  function switchTheme() {
    var body = document.body;
    var isMatrix = body.classList.contains('theme-matrix');

    if (isMatrix) {
      body.classList.replace('theme-matrix', 'theme-inception');
      toggle.setAttribute('aria-checked', 'false');
    } else {
      body.classList.replace('theme-inception', 'theme-matrix');
      toggle.setAttribute('aria-checked', 'true');
    }
  }

  toggle.addEventListener('click', switchTheme);

  toggle.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      switchTheme();
    }
  });
})();
