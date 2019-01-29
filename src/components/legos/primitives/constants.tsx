import { BackgroundProps, ColorProps, DisplayProps, HeightProps, SizeProps, WidthProps } from 'styled-system';
export type LayoutProps = BackgroundProps & ColorProps & DisplayProps & HeightProps & SizeProps & WidthProps;

import { background, color, compose, display, height, size, width } from 'styled-system';
export const LAYOUT = compose(display, size, width, height, color, background);
