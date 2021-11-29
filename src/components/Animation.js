import React, { useRef, useEffect } from "react";

let time = 0;
let points = [],
  numPoints = 1000,
  gravity = 0.1,
  emitter;
let timer;

function Animation({ open }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = window.innerWidth;
    let h = window.innerHeight;

    canvas.width = w;
    canvas.height = h;

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      w = window.innerWidth;
      h = window.innerHeight;
    });

    if (open) {
      generatePoints();
      time = setInterval(animate, 1000 / 60);
    } else {
      points = [];
      clearInterval(time);
      ctx.clearRect(0, 0, w, h);
    }

    function animate() {
      draw();
      update();
    }

    function generatePoints() {
      emitter = { x: w / 2, y: h };
      timer = setInterval(function() {
        addPoint();
      }, 1);

      setTimeout(() => {
        clearInterval(timer);
      }, 20000);
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      var i,
        point,
        len = points.length;
      ctx.save();

      for (i = 0; i < len; i += 1) {
        point = points[i];
        // ctx.beginPath();
        if (point.fillStyle) {
          ctx.fillStyle = point.fillStyle;
          ctx.setTransform(1, 0, 0, 1, point.x, point.y);
          ctx.rotate((point.rotation * Math.PI) / 180);
          ctx.fillRect(
            point.offsetX,
            point.offsetY,
            Math.sin(point.sx) * point.width,
            Math.sin(point.sy) * point.height
          );
        }
      }
      ctx.restore();
    }

    function addPoint() {
      var point;
      if (points.length < numPoints) {
        for (var i = 0; i < 11; i++) {
          point = {};
          initPoint(point);
          points.push(point);
        }
      }
    }

    function randomColor() {
      const colors = ["#9815FF", "#5BCB80", "#FFCA28", "#FF7F66", "#0478D6"];

      return colors[Math.floor(Math.random() * colors.length)];
    }

    function initPoint(p) {
      p.fillStyle = randomColor();
      p.x = emitter.x;
      p.y = emitter.y;

      p.offsetX = Math.random() * 14 + 5;
      p.offsetY = Math.random() * 14 + 5;

      p.vx = Math.random() * 5 - 2;
      p.vy = Math.random() * -6 - 13;
      p.rotation = Math.random() * 360;
      p.vr = (Math.random() - 0.5) * 15;
      p.width = Math.random() * 7 + 1;
      p.height = Math.random() * 7 + 1;

      p.sx = 1;
      p.sy = 1;
      p.rx = (Math.floor(Math.random() * 2) * Math.random()) / 2;
      p.ry = (Math.floor(Math.random() * 2) * Math.random()) / 2;
    }

    function update() {
      var i,
        point,
        len = points.length;
      for (i = 0; i < len; i += 1) {
        point = points[i];
        point.vy += gravity;
        point.vy *= 0.97;
        point.x += point.vx;
        point.y += point.vy;

        point.vx -= 0.025;

        point.sx += point.rx;
        point.sy += point.ry;

        point.rotation += point.vr;
        if (point.x > w || point.x < 0 || point.y > h || point.y < 0) {
          initPoint(point);
        }
      }
    }
    return () => {};
  }, [canvasRef, open]);

  return <canvas ref={canvasRef} />;
}

export default Animation;
