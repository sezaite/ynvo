import styled from 'styled-components/macro';
import {
	alignSelf,
	AlignSelfProps,
	border,
	BorderProps,
	borderRadius,
	BorderRadiusProps,
	BoxShadowProps,
	color,
	ColorProps,
	compose,
	display,
	DisplayProps,
	layout,
	LayoutProps,
	position,
	PositionProps,
	shadow,
	ShadowProps,
	space,
	SpaceProps,
	textAlign,
	TextAlignProps,
	zIndex,
	ZIndexProps,
} from 'styled-system';

import { Theme } from 'styles/theme';

const boxProps = compose(
	space,
	borderRadius,
	color,
	display,
	position,
	zIndex,
	layout,
	border,
	shadow,
	textAlign
);

export interface BoxStyles<T>
	extends BorderProps<T>,
	BorderRadiusProps<T>,
		ColorProps<T>,
		PositionProps<T>,
		ZIndexProps<T>,
		DisplayProps<T>,
		BoxShadowProps<T>,
		LayoutProps<T>,
		ShadowProps<T>,
		TextAlignProps<T>,
		SpaceProps<T> {}

export const Box = styled.div<BoxStyles<Theme>>`
	&& {
		${boxProps};
	}
`;