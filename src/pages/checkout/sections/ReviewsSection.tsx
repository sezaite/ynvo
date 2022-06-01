import React from 'react';
import styled from 'styled-components/macro';
import { Container, Typography, SectionWrapper } from 'components';
import { ReviewCard } from '../elements';
import { ReviewCardProps } from 'typings/generalTypes';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';



export const Reviews: React.FC = () => {

    const reviews:ReviewCardProps[] = [
        {id: "review1", image: 'profilePic', stars: 5, name: "Steve French", signatureSmell: "X by X", review:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."},
        {id: "review1", image: 'profilePic2', stars: 5, name: "Gina Naus", signatureSmell: "Y by X", review: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."},
        {id: "review1", image: 'profilePic3', stars: 4, name: "Sam", signatureSmell: "Y by M", review:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. "}
    ];

    return <SectionWrapper backgroundColor='light'>
        <Container>
            <Typography type="h3" mb="s40" color="darkaccent" textAlign="center">What our community says about us</Typography>
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
    padding: 0 0 2rem 0;
`

