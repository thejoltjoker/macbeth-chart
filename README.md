# Macbeth Chart

A web-based interactive Macbeth Chart chart for color calibration and reference. This project provides a digital version of the classic Macbeth ColorChecker Color Rendition Chart, allowing users to view and interact with the 24 standard color patches used in photography and color management.

## About the Macbeth Chart

The **ColorChecker** Color Rendition Chart (often referred to by its original name, the **Macbeth ColorChecker** or simply **Macbeth chart**) is a color calibration target consisting of a cardboard-framed arrangement of 24 squares of painted samples. The ColorChecker was introduced in a 1976 paper by McCamy, Marcus, and Davidson in the _Journal of Applied Photographic Engineering_.

The chart's color patches have spectral reflectances intended to mimic those of natural objects such as human skin, foliage, and flowers, to have consistent color appearance under a variety of lighting conditions, especially as detected by typical color photographic film, and to be stable over time.

## Features

- **Interactive Color Patches**: Click on any color patch to see detailed color information
- **Multiple Color Formats**: View colors in HEX, RGB, and HSL formats
- **Accurate Color Values**: Based on official ColorChecker specifications
- **Responsive Design**: Works on desktop and mobile devices
- **Tooltip Information**: Hover over colors to see their names and values

## Color Layout

The chart is organized in a 4×6 grid with the following arrangement:

### Row 1: Natural Colors

1. Dark Skin (#735244)
2. Light Skin (#c29682)
3. Blue Sky (#627a9d)
4. Foliage (#576c43)
5. Blue Flower (#8580b1)
6. Bluish Green (#67bdaa)

### Row 2: Miscellaneous Colors

7. Orange (#d67e2c)
8. Purplish Blue (#505ba6)
9. Moderate Red (#c15a63)
10. Purple (#5e3c6c)
11. Yellow Green (#9dbc40)
12. Orange Yellow (#e0a32e)

### Row 3: Primary and Secondary Colors

13. Blue (#383d96)
14. Green (#469449)
15. Red (#af363c)
16. Yellow (#e7c71f)
17. Magenta (#bb5695)
18. Cyan (#0885a1)

### Row 4: Grayscale Colors

19. White (#f3f3f3)
20. Neutral 8 (#c8c8c8)
21. Neutral 6.5 (#a0a0a0)
22. Neutral 5 (#7a7a7a)
23. Neutral 3.5 (#555555)
24. Black (#343434)

## Usage

### For Color Calibration

Color targets such as the ColorChecker can be captured by cameras and other color input devices, and the resulting images' output can be compared to the original chart, or to reference measurements, to test the degree to which image acquisition reproduction systems and processes approximate the human visual systems.

### For Color Correction

It can also be used to color correct one photo with the chart in it (that may have a different color cast, for example due to a lighting coloration difference) to another "reference" photo with the chart in it.

## Development

This project is built with:

- **Vite** - Build tool and development server
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework

### Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd colorchecker
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
pnpm build
```

The built files will be in the `dist` directory.

## History

The ColorChecker was originally produced by Macbeth (then a subsidiary of Kollmorgen), which through a series of mergers and acquisitions now belongs to X-Rite. In 2006, Gretag-Macbeth was acquired by X-Rite. In 2021, X-Rite spun off its consumer-level calibration products to a separate company Calibrite, which is currently producing the ColorChecker under the Calibrite brand name.

## Technical Specifications

The ColorChecker Classic chart is a rectangular card measuring about 11 by 8.25 inches (27.9 by 21.0 cm), or in its original incarnation about 13 by 9 inches (33 by 23 cm), an aspect ratio approximately the same as that of 35 mm film. It includes 24 patches in a 4 × 6 grid, each slightly under 2 inches (5.1 cm) square, made of matte paint applied to smooth paper, and surrounded by a black border.

## References

- [ColorChecker Wikipedia Article](https://en.wikipedia.org/wiki/ColorChecker)
- McCamy, C. S., Marcus, H., and Davidson, J. G. (1976). "A Color-Rendition Chart". _Journal of Applied Photographic Engineering_ 2(3): 95–99.
- [X-Rite ColorChecker Official Page](https://www.xrite.com/categories/calibration-profiling/colorchecker-classic)

## License

This project is open source and available under the [MIT License](LICENSE).
