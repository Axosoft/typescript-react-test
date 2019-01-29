export const defaultTheme = {
  breakpoints: ['544px', '768px', '1012px', '1280px'],
  buttons: {
  },
  colors: {
    accent: 'yellow',
    disabled: 'grey',
    error: 'red',
    selected: '#003482',
    success: 'green',
    text: {
      dark: {
        disabled: '#BBBBBB',
        primary: '#333333',
        secondary: '#888888',
        selected: '#000000',
      },
      light: {
        disabled: '#858F9E',
        primary: '#D1E3FF',
        secondary: '#A0B0C8',
        selected: '#DEEBFF',
      },
    },
    ui: {
      primary: '#0C203E',
      sidebar: '#000F27',
    },
  },
  fontFamily: 'Arial',
  fontSizes: [10, 12, 14, 16, 18, 20, 24],
  fonts: {
    mono: fontStack(['SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', 'Courier', 'monospace']),
    normal: fontStack([
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Helvetica',
      'Arial',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
    ]),
  },
  radii: [0, 2, 4],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
};

function fontStack(fonts: string[]) {
  return fonts.map((font) => (font.includes(' ') ? `"${font}"` : font)).join(', ');
}
