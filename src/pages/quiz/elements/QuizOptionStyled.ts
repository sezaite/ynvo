import React from 'react'
import styled from 'styled-components/macro'
import { Box } from 'components'
import { theme } from 'styles/theme'


export const QuizOptionStyled = styled(Box)`
    border-radius: ${theme.radii.radius4};
    background-color: ${theme.colors.white};
`

export default QuizOptionStyled