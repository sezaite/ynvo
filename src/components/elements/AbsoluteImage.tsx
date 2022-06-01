import React from "react";
import styled from "styled-components/macro";
import {Image} from 'components';
import { tablet } from "styles/breakpoints";



export const AbsoluteImageLines = styled(Image)`
  position: absolute;
  top: ${({top})=> top? top : '50%'};
  width: ${({width})=> width? width : '50%'};
  left: ${({left})=> left? left : '50%'};
  transform: ${({transform})=> transform? transform : 'translate(0%, -50%)'};
  @media ${tablet} {
    width:160%;
    left: -50%;
  }

`
export const AbsoluteImageCircle = styled(Image)`
  position: absolute;
  top: ${({top})=> top? top : '0'};
  left: ${({left})=> left? left : '0'};
  width: ${({width})=> width? width : '60%'};
  transform: ${({transform})=> transform? transform : 'translate(-50%, -50%)'};
 

`