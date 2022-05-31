import React from "react";
import styled from "styled-components/macro";
import {Image} from 'components';
import { tablet } from "styles/breakpoints";



export const AbsoluteImageLines = styled(Image)`
  position: absolute;
  top: 50%;
  width: 120%;
  left: 0;
  transform: translate(0%, -50%);
  @media ${tablet} {
    width:160%;
    left: -50%;
  }

`
export const AbsoluteImageCircle = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 60%;
  transform: translate(-50%, -50%);
 

`