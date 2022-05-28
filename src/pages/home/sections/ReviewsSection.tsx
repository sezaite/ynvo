import React from 'react';
import { Box, Container, Typography, FlexWrapper, SectionWrapper, ContentWrapper } from 'components';
import { ReviewCard } from '../elements/ReviewCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components/macro';
import 'swiper/css';

export const Reviews: React.FC = () => {
    return <SectionWrapper background='secondaryGradient' pt='s0'>
        <Container>
            <Typography type="h3" mb="s40" color="primary" textAlign="center">What our community says about us</Typography>
            <ContentWrapper>
                <StyledSwiper
                    spaceBetween={100}
                    slidesPerView={1}
                    //   onSlideChange={() => console.log('slide change')}
                    //   onSwiper={(swiper) => console.log(swiper)}
                    >
                    <SwiperSlide> <ReviewCard></ReviewCard></SwiperSlide>
                    <SwiperSlide> <ReviewCard></ReviewCard></SwiperSlide>
                    <SwiperSlide> <ReviewCard></ReviewCard></SwiperSlide>
                    <SwiperSlide> <ReviewCard></ReviewCard></SwiperSlide>
                </StyledSwiper>
            </ContentWrapper>
        </Container>
    </SectionWrapper>;
}

const StyledSwiper = styled(Swiper)`
    padding: 0 4rem;
`