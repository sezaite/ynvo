import React from 'react';
import styled from 'styled-components/macro';
import LazyLoad from 'react-lazyload';
import { position, PositionProps } from 'styled-system';
import { mobile, tablet } from 'styles/breakpoints';
import { Visuals, visuals } from 'utils/visuals';

interface Styles {
	maxWidth?: string;
	width?: string;
	height?: string;
	margin?: string;
	maxHeight?: string;
	radius?: string;
	objectFit?: string;
	hoverColor?: string;
	maxWidthMobile?: string;
	transform?: string;
}

interface ImageProps extends Styles, PositionProps  {
	src: Visuals;
	mobile_src?: Visuals;
	onClick?: () => void;
	alt: string;
}

const Img = styled.img<Styles>`
	margin: ${({ margin }) => margin || ''};
	max-width: ${({ maxWidth }) => maxWidth || ''};
	width: ${({ width }) => width || ''};
	height: ${({ height }) => height || ''};
	max-height: ${({ maxHeight }) => maxHeight || ''};
	border-radius: ${({ radius }) => radius || ''};
	object-fit: ${({ objectFit }) => objectFit || ''};
	transform: ${({ transform }) => transform || ''};

	&& {
        ${position}
    }
	//TODO: svg elements and hovers

	@media ${tablet}{
		max-width: ${({ maxWidthMobile }) => maxWidthMobile || ''};
		
	}
`;

export const Image: React.FC<ImageProps> = ({
	alt,
	src,
	mobile_src,
	onClick,
	...rest
}) => {
	return (
		// <LazyLoad height={200}>
			<picture onClick={onClick}>
				{mobile_src && <source media={mobile} srcSet={visuals[mobile_src]} />}
				<Img src={visuals[src]} alt={alt} {...rest} />
			</picture>
		// </LazyLoad>
	);
};