import "./style.css";

// Color conversion functions
function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function rgbToHsl(r: number, g: number, b: number) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h: number = 0,
    s: number = 0,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

// Tooltip functionality
const tooltip = document.getElementById("tooltip") as HTMLElement;
const tooltipName = document.getElementById("tooltip-name") as HTMLElement;
const tooltipHex = document.getElementById("tooltip-hex") as HTMLElement;
const tooltipRgb = document.getElementById("tooltip-rgb") as HTMLElement;
const tooltipHsl = document.getElementById("tooltip-hsl") as HTMLElement;

document.querySelectorAll("[data-color]").forEach((swatch) => {
  swatch.addEventListener("mouseenter", (e) => {
    const target = e.target as HTMLElement;
    const hex = target.dataset.color!;
    const name = target.dataset.name!;
    const rgb = hexToRgb(hex);
    const hsl = rgbToHsl(rgb!.r, rgb!.g, rgb!.b);

    tooltipName.textContent = name;
    tooltipHex.textContent = hex.toUpperCase();
    tooltipRgb.textContent = `${rgb!.r}, ${rgb!.g}, ${rgb!.b}`;
    tooltipHsl.textContent = `${hsl.h}°, ${hsl.s}%, ${hsl.l}%`;

    tooltip.style.opacity = "1";
  });

  swatch.addEventListener("mousemove", (e) => {
    const mouseEvent = e as MouseEvent;
    tooltip.style.left = mouseEvent.pageX + 10 + "px";
    tooltip.style.top = mouseEvent.pageY - 10 + "px";
  });

  swatch.addEventListener("mouseleave", () => {
    tooltip.style.opacity = "0";
  });
});
