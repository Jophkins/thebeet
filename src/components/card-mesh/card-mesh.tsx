import React from "react";

function CardMesh() {
  const cols = 8;
  const rows = 6;
  const w = 400;
  const h = 300;
  const cellW = w / cols;
  const cellH = h / rows;
  // Cyberpunk palette: purple, cyan, magenta, deep violet
  const colors = ["#ff2a6d", "#d1f7ff", "#05d9e8", "#005678", "#01012b", "#9333ea"];

  const triangles: React.ReactElement[] = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = col * cellW;
      const y = row * cellH;
      const c1 = colors[(row + col) % colors.length];
      const c2 = colors[(row + col + 2) % colors.length];
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
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.35] dark:opacity-[0.30]"
      preserveAspectRatio="xMidYMid slice"
      viewBox={`0 0 ${w} ${h}`}
    >
      {triangles}
    </svg>
  );
}

export default CardMesh;
