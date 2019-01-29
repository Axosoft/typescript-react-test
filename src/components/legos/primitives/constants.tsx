import {
  alignContent,
  AlignContentProps,
  alignItems,
  AlignItemsProps,
  alignSelf,
  AlignSelfProps,
  ColorProps,
  DisplayProps,
  flex,
  flexBasis,
  FlexBasisProps,
  flexDirection,
  FlexDirectionProps,
  FlexProps,
  flexWrap,
  FlexWrapProps,
  fontFamily,
  FontFamilyProps,
  fontSize,
  FontSizeProps,
  fontStyle,
  FontStyleProps,
  fontWeight,
  FontWeightProps,
  HeightProps,
  justifyContent,
  JustifyContentProps,
  justifySelf,
  JustifySelfProps,
  lineHeight,
  LineHeightProps,
  maxHeight,
  MaxHeightProps,
  maxWidth,
  MaxWidthProps,
  minHeight,
  MinHeightProps,
  minWidth,
  MinWidthProps,
  order,
  OrderProps,
  overflow,
  OverflowProps,
  SizeProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
  verticalAlign,
  VerticalAlignProps,
  WidthProps,
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
  PositionProps as StyledSystemPositionProps,
  ZIndexProps,
  TopProps,
  RightProps,
  BottomProps,
  LeftProps,
  borders,
  borderColor,
  boxShadow,
  borderRadius,
  BorderProps as StyledSystemBorderProps,
  BorderColorProps,
  BoxShadowProps,
  BorderRadiusProps,
} from 'styled-system';

import { color, compose, display, height, size, width } from 'styled-system';

export type LayoutProps =
  DisplayProps &
  HeightProps &
  SizeProps &
  WidthProps &
  MinWidthProps &
  MinHeightProps &
  MaxWidthProps &
  MaxHeightProps &
  OverflowProps &
  VerticalAlignProps;

export const LAYOUT = compose(
  display,
  size,
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  overflow,
  verticalAlign,
);

export type CommonProps =
  ColorProps &
  SpaceProps;

export const COMMON = compose(color, space);

export type TypographyProps =
  FontFamilyProps &
  FontSizeProps &
  FontStyleProps &
  FontWeightProps &
  LineHeightProps &
  TextAlignProps;

export const TYPOGRAPHY = compose(
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  lineHeight,
  textAlign,
);

export type FlexContainerProps =
  FlexBasisProps &
  FlexDirectionProps &
  FlexWrapProps &
  AlignContentProps &
  AlignItemsProps &
  JustifyContentProps &
  OrderProps;

export const FLEX_CONTAINER = compose(
  flexBasis,
  flexDirection,
  flexWrap,
  alignContent,
  alignItems,
  justifyContent,
  // justifyItems,
  order,
);

export type FlexItemProps =
  FlexProps &
  JustifySelfProps &
  AlignSelfProps;

export const FLEX_ITEM = compose(
  flex,
  justifySelf,
  alignSelf,
);

export type PositionProps =
  StyledSystemPositionProps &
  ZIndexProps &
  TopProps &
  RightProps &
  BottomProps &
  LeftProps;

export const POSITION = compose(
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
);

export type BorderProps =
  StyledSystemBorderProps &
  BorderColorProps &
  BoxShadowProps &
  BorderRadiusProps;

export const BORDER = compose(
  borders,
  borderColor,
  boxShadow,
  borderRadius,
);
