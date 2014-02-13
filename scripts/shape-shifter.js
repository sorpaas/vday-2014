/*
 * Shape Shifter
 * http://www.kennethcachia.com/shape-shifter
 * A canvas experiment
 */

'use strict';

var S = {
  init: function () {
    S.Drawing.init('.canvas');
    S.ShapeBuilder.init();
    S.UI.init();
    document.body.classList.add('body--ready');

    S.Drawing.loop(function () {
      S.Shape.render();
    });
    
    S.VDAY.init();
  }
};


window.addEventListener('load', function () {
  S.init();
});
