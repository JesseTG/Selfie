"use strict";

$(document).ready(function() {
  const jesse = document.getElementById('jesse');

  // Everything in this demo is a function of likes
  var likes = 100;

  $('#like').click(function() {
    likes += 1;
  });


  function adjustImages(timestamp) {
    likes = Math.max(0, likes * 0.99);
    jesse.style.opacity = Math.min(1, 0.5 * Math.sqrt(likes));

    if (Modernizr.cssfilters) {
      const blur = "blur(" + (1 - jesse.style.opacity) + "em)";
      jesse.style["filter"] = blur;
      jesse.style["webkitFilter"] = blur;
    }
    window.requestAnimationFrame(adjustImages);
  }

  window.requestAnimationFrame(adjustImages);
});