export const defaultTheme = {
  breakpoints: ['544px', '768px', '1012px', '1280px'],
  buttons: {
  },
  colors: {
    accent: 'yellow',
    disabled: 'grey',
    error: 'red',
    text: {
      dark: {
        disabled: '#BBBBBB',
        primary: '#333333',
        selected: '#000000',
        secondary: '#888888',
      },
      light: {
        disabled: '#858F9E',
        primary: '#D1E3FF',
        selected: '#DEEBFF',
        secondary: '#A0B0C8',
      },
    },
    success: 'green',
    selected: '#003482',
    ui: {
      primary: '#0C203E',
      sidebar: 'var(--bg-sidebar)',
    },
  },
  fonts: {
    normal: fontStack([
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Helvetica',
      'Arial',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol'
    ]),
    mono: fontStack(['SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', 'Courier', 'monospace'])
  },
  fontSizes: [10, 12, 14, 16, 18, 20, 24],
  radii: [0, 2, 4],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
};

function fontStack(fonts) {
  return fonts.map(font => (font.includes(' ') ? `"${font}"` : font)).join(', ')
}
