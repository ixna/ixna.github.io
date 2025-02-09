(function () {
  "use strict";

  var $Godo = $(".Godo");
  var $Scene = $(".Scene");
  var axis = { x: 0, y: 0, rx: 0, ry: 0, rz: 0, s: 1 };

  var GodoScene = new Hammer.Manager($Scene[0]);
  GodoScene.add(
    new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 })
  );
  GodoScene.add(new Hammer.Pinch({ threshold: 0 }));

  GodoScene.on("pan", function (e) {
    axis.rx = axis.x + e.deltaX;
    axis.ry = axis.y - e.deltaY;
    TweenMax.to($Godo, 0.5, {
      scale: axis.s,
      rotationY: axis.rx,
      rotationX: axis.ry,
      overwrite: 1,
      ease: Strong.easeOut
    });
  }).on("panend", function (e) {
    axis.x += e.deltaX;
    axis.y -= e.deltaY;
  });
})();