import React from 'react';
import { Box, Container, Typography, FlexWrapper, SectionWrapper, ContentWrapper } from 'components';
import { ReviewCard } from '../elements/ReviewCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components/macro';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { ReviewCardProps } from 'typings/generalTypes';


export const Reviews: React.FC = () => {

    const reviews:ReviewCardProps[] = [
        {id: "review1", image: 'profilePic', stars: 5, name: "Steve French", signatureSmell: "X by X", review:"I have been using this program for 3 months now and It helped me to lose 16lbs, taught me how to breathe properly and now I look forward to my workout. Great challenges for different problem zones. Definitely recommend to anyone that wants to lose weight and feel better without long hour at the gym or exhausting workouts."},
        {id: "review1", image: 'profilePic2', stars: 5, name: "Gina Naus", signatureSmell: "Y by X", review: "I will be very straightforward - I hate sports and working out. Positive Yoga put my physical activity to the next level. I started to enjoy my morning yoga routines where I get my dose of cardio, resistance, and stretching in one place. I could barely hold a plank at the beginning. Now I’m doing various yoga poses that looked impossible at first. My body shape improved a lot and I am very motivated by both: results and the feeling of progress."},
        {id: "review1", image: 'profilePic3', stars: 4, name: "Sam", signatureSmell: "Y by M", review:"I have many friends who practice yoga and I decided to try it myself. It is the best decision I have made in a long time. With Positive Yoga program I started to lose weight, which was demotivating me for a long time. Also, I’ve learned about yoga philosophy and poses that encourage me to practice mindfulness and pay attention to stress reduction. I am very proud of myself. Feeling better is my biggest motivation."}
    ];


    return <SectionWrapper background='secondaryGradient'>
        <Container>
            <Typography type="h3" mb="s40" color="white" textAlign="center">What our community says about us</Typography>
                <StyledSwiper
                    spaceBetween={100}
                    slidesPerView={1}
                    modules={[ Pagination ]}
                    pagination={{ 
                        clickable: true}}>
                    {
                    reviews.map(({id, image, stars, name, signatureSmell, review}) => (
                        <SwiperSlide key={id}><ReviewCard image={image} stars={stars} name={name} signatureSmell={signatureSmell} review={review}></ReviewCard></SwiperSlide>
                        ))
                    }
                </StyledSwiper>
        </Container>
    </SectionWrapper>;
}

const StyledSwiper = styled(Swiper)`
    padding: 0rem;
`

const StyledBullet = styled.div`

`
