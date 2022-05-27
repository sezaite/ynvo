import React from 'react';
import { Box, Container, Typography, FlexWrapper, SectionWrapper, ContentWrapper } from 'components';

export const Reviews: React.FC = () => {
    return <SectionWrapper backgroundColor='primary'>
        <Container>
            <Typography type="h3" color="text" textAlign="center">What our community says about us</Typography>
            <ContentWrapper>
                REVIEWS SLIDER
            </ContentWrapper>
        </Container>
    </SectionWrapper>;
}