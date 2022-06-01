
import React from 'react';
import styled from 'styled-components/macro';
import { Image, FlexWrapper, Typography } from 'components';
import { Colors, theme } from 'styles/theme';
import { Link } from 'gatsby';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    text: string;
    img: string;
    backgroundColor: Colors;
    color: Colors;
    link: string;
}


export const LinkWithIcon:React.FC<LinkProps> = ({text, link, img, backgroundColor, color, ...rest}) =>
    <Link to={link}>
        <LinkWithIconStyled justifyContent='center' alignItems='center' backgroundColor={backgroundColor} color={color} py='s8' px='s14'>
                    <Image src={img} alt={img}></Image>
                    <Typography ml='s10' color={color}>{text}</Typography>
            </LinkWithIconStyled> 
    </Link>
   
    

export const LinkWithIconStyled = styled(FlexWrapper)`
    transition: all 0.2s ease-in;
    width: ${({width})=> width ? width : 'fit-content'};
    picture {
        margin-top: 0.2rem;
        transition: all 0.2s ease-in;
    }
    &:hover {
        background-color: ${theme.colors.dark};
        picture {
            transform: translateX(0.3rem);
        }
    }
`