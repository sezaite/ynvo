import React from "react";
import styled from "styled-components/macro";
import { Box } from "./Box";
import { Theme } from "styles/theme";
import { alignItems, AlignItemsProps, alignContent, AlignContentProps, compose, justifyContent, JustifyContentProps, justifyItems, JustifyItemsProps, flexWrap, FlexWrapProps, flexDirection, FlexDirectionProps, flex, FlexProps, flexGrow, FlexGrowProps, flexShrink, FlexShrinkProps, flexBasis, FlexBasisProps, justifySelf, JustifySelfProps, alignSelf, AlignSelfProps, order, OrderProps } from "styled-system";

const flexProps = compose(
    alignItems,
    alignContent,
    justifyContent,
    justifyItems,
    flexWrap,
    flexDirection, 
    flex, 
    flexGrow,
    flexShrink,
    flexBasis, 
    justifySelf,
    alignSelf,
    order
);

interface FlexWrapperProps<T> extends AlignItemsProps<T>, AlignContentProps<T>, JustifyItemsProps<T>, JustifyContentProps<T>, FlexWrapProps<T>, FlexDirectionProps<T>, FlexProps<T>, FlexGrowProps<T>, FlexShrinkProps<T>, FlexBasisProps<T>, JustifySelfProps<T>, AlignSelfProps<T>, OrderProps<T> {

} 

export const FlexWrapper = styled(Box)<FlexWrapperProps<Theme>>`
    display: flex;

    && {
        ${flexProps}
    }
`

