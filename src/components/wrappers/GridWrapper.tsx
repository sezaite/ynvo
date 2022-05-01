import React from "react";
import styled from "styled-components/macro";
import { Box } from "./Box";
import { Theme } from "styles/theme";
import { compose, gridGap, GridGapProps, gridRowGap, GridRowGapProps, gridColumnGap, GridColumnGapProps, gridColumn, GridColumnProps, gridRow, GridRowProps, gridArea, GridAreaProps, gridAutoFlow, GridAutoFlowProps, gridAutoRows, GridAutoRowsProps, gridAutoColumns, GridAutoColumnsProps, gridTemplateRows, GridTemplateRowsProps, gridTemplateColumns, GridTemplateColumnsProps, gridTemplateAreas, GridTemplateAreasProps } from 'styled-system';

const gridWrapperProps = compose(
    gridGap,
    gridRowGap,
    gridColumnGap,
    gridColumn, 
    gridRow,
    gridArea, 
    gridAutoFlow,
    gridAutoRows,
    gridAutoColumns,
    gridTemplateRows,
    gridTemplateColumns,
    gridTemplateAreas
);

interface GridWrapperPropsType<T> extends 
GridGapProps<T>,
GridRowGapProps<T>,
GridColumnGapProps<T>,
GridColumnProps<T>, 
GridRowProps<T>,
GridAreaProps<T>, 
GridAutoFlowProps<T>,
GridAutoRowsProps<T>,
GridAutoColumnsProps<T>,
GridTemplateRowsProps<T>,
GridTemplateColumnsProps<T>,
GridTemplateAreasProps<T> {}

export const GridWrapper = styled(Box)<GridWrapperPropsType<Theme>>`
    display: grid;
    && {
        ${gridWrapperProps}
    }
`