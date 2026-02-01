import React from "react";

function HeroMesh() {
  const cols = 12;
  const rows = 8;
  const w = 800;
  const h = 400;
  const cellW = w / cols;
  const cellH = h / rows;
  const colors = ["#71717a", "#a1a1aa", "#d4d4d8", "#52525b"];

  const triangles: React.ReactElement[] = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = col * cellW;
      const y = row * cellH;
      const c1 = colors[(row + col) % colors.length];
      const c2 = colors[(row + col + 1) % colors.length];
      // Upper triangle
      triangles.push(
        <polygon
          key={`u-${row}-${col}`}
          fill={c1}
          points={`${x},${y} ${x + cellW},${y} ${x + cellW},${y + cellH}`}
        />,
      );
      // Lower triangle
      triangles.push(
        <polygon
          key={`l-${row}-${col}`}
          fill={c2}
          points={`${x},${y} ${x + cellW},${y + cellH} ${x},${y + cellH}`}
        />,
      );
    }
  }

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12] dark:opacity-[0.06]"
      preserveAspectRatio="xMidYMid slice"
      viewBox={`0 0 ${w} ${h}`}
    >
      {triangles}
    </svg>
  );
}

export default HeroMesh;
