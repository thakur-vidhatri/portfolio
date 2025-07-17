import { useRef, useEffect } from "react";

class Grad {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  dot2(x, y) {
    return this.x * x + this.y * y;
  }
}

class Noise {
  constructor(seed = 0) {
    this.grad3 = [
      new Grad(1, 1, 0), new Grad(-1, 1, 0), new Grad(1, -1, 0), new Grad(-1, -1, 0),
      new Grad(1, 0, 1), new Grad(-1, 0, 1), new Grad(1, 0, -1), new Grad(-1, 0, -1),
      new Grad(0, 1, 1), new Grad(0, -1, 1), new Grad(0, 1, -1), new Grad(0, -1, -1)
    ];
    this.p = [...Array(256).keys()].map((_, i) => i);
    this.perm = new Array(512);
    this.gradP = new Array(512);
    this.seed(seed);
  }

  seed(seed) {
    if (seed > 0 && seed < 1) seed *= 65536;
    seed = Math.floor(seed);
    if (seed < 256) seed |= seed << 8;
    for (let i = 0; i < 256; i++) {
      let v = (i & 1) ? (this.p[i] ^ (seed & 255)) : (this.p[i] ^ ((seed >> 8) & 255));
      this.perm[i] = this.perm[i + 256] = v;
      this.gradP[i] = this.gradP[i + 256] = this.grad3[v % 12];
    }
  }

  fade(t) {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  lerp(a, b, t) {
    return (1 - t) * a + t * b;
  }

  perlin2(x, y) {
    let X = Math.floor(x), Y = Math.floor(y);
    x -= X; y -= Y; X &= 255; Y &= 255;
    const n00 = this.gradP[X + this.perm[Y]].dot2(x, y);
    const n01 = this.gradP[X + this.perm[Y + 1]].dot2(x, y - 1);
    const n10 = this.gradP[X + 1 + this.perm[Y]].dot2(x - 1, y);
    const n11 = this.gradP[X + 1 + this.perm[Y + 1]].dot2(x - 1, y - 1);
    const u = this.fade(x);
    return this.lerp(
      this.lerp(n00, n10, u),
      this.lerp(n01, n11, u),
      this.fade(y)
    );
  }
}

const Waves = ({
  lineColor = "white",
  backgroundColor = "transparent",
  waveSpeedX = 0.02,
  waveSpeedY = 0.01,
  waveAmpX = 40,
  waveAmpY = 20,
  xGap = 12,
  yGap = 36,
  friction = 0.9,
  tension = 0.01,
  maxCursorMove = 120,
  style = {},
  className = ""
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const noise = useRef(new Noise()).current;
  const linesRef = useRef([]);
  const frameId = useRef(null);
  const mouseRef = useRef({
    x: -100,
    y: -100,
    vx: 0,
    vy: 0,
    a: 0,
    sx: 0,
    sy: 0,
    vs: 0,
    lx: 0,
    ly: 0,
    set: false
  });

  const movePoints = (time) => {
    linesRef.current.forEach((line) => {
      line.forEach((p) => {
        const move = noise.perlin2(
          (p.x + time * waveSpeedX) * 0.002,
          (p.y + time * waveSpeedY) * 0.0015
        ) * 12;

        p.waveX = Math.cos(move) * waveAmpX;
        p.waveY = Math.sin(move) * waveAmpY;

        const dx = p.x - mouseRef.current.sx;
        const dy = p.y - mouseRef.current.sy;
        const dist = Math.hypot(dx, dy);
        const l = Math.max(175, mouseRef.current.vs);
        if (dist < l) {
          const s = 1 - dist / l;
          const f = Math.cos(dist * 0.001) * s;
          p.vx += Math.cos(mouseRef.current.a) * f * l * mouseRef.current.vs * 0.00065;
          p.vy += Math.sin(mouseRef.current.a) * f * l * mouseRef.current.vs * 0.00065;
        }

        p.vx += (0 - p.offsetX) * tension;
        p.vy += (0 - p.offsetY) * tension;
        p.vx *= friction;
        p.vy *= friction;
        p.offsetX += p.vx * 2;
        p.offsetY += p.vy * 2;
        p.offsetX = Math.min(maxCursorMove, Math.max(-maxCursorMove, p.offsetX));
        p.offsetY = Math.min(maxCursorMove, Math.max(-maxCursorMove, p.offsetY));
      });
    });
  };

  const drawLines = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.beginPath();
    ctx.strokeStyle = lineColor;
    linesRef.current.forEach((points) => {
      let moved = (p) => ({
        x: p.x + p.waveX + p.offsetX,
        y: p.y + p.waveY + p.offsetY
      });

      points.forEach((p, i) => {
        const m = moved(p);
        if (i === 0) ctx.moveTo(m.x, m.y);
        else ctx.lineTo(m.x, m.y);
      });
    });
    ctx.stroke();
  };

  const tick = (t) => {
    const mouse = mouseRef.current;
    mouse.sx += (mouse.x - mouse.sx) * 0.1;
    mouse.sy += (mouse.y - mouse.sy) * 0.1;
    const dx = mouse.x - mouse.lx, dy = mouse.y - mouse.ly;
    const d = Math.hypot(dx, dy);
    mouse.v = d;
    mouse.vs += (d - mouse.vs) * 0.1;
    mouse.vs = Math.min(100, mouse.vs);
    mouse.lx = mouse.x;
    mouse.ly = mouse.y;
    mouse.a = Math.atan2(dy, dx);
    containerRef.current.style.setProperty("--x", `${mouse.sx}px`);
    containerRef.current.style.setProperty("--y", `${mouse.sy}px`);

    movePoints(t);
    drawLines(canvasRef.current.getContext("2d"));
    frameId.current = requestAnimationFrame(tick);
  };

  const setupLines = (width, height) => {
    linesRef.current = [];
    const totalX = Math.ceil(width / xGap);
    const totalY = Math.ceil(height / yGap);
    for (let i = 0; i <= totalX; i++) {
      const line = [];
      for (let j = 0; j <= totalY; j++) {
        line.push({
          x: i * xGap,
          y: j * yGap,
          waveX: 0,
          waveY: 0,
          offsetX: 0,
          offsetY: 0,
          vx: 0,
          vy: 0
        });
      }
      linesRef.current.push(line);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      setupLines(canvas.width, canvas.height);
    };

    const updateMouse = (e) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      if (!mouseRef.current.set) {
        mouseRef.current.sx = mouseRef.current.x;
        mouseRef.current.sy = mouseRef.current.y;
        mouseRef.current.set = true;
      }
    };

    resize();
    frameId.current = requestAnimationFrame(tick);
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", updateMouse);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", updateMouse);
      cancelAnimationFrame(frameId.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ backgroundColor, ...style }}
      className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

export default Waves;
