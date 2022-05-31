import React from 'react';
import styled from 'styled-components/macro';
import { FlexWrapper, SectionWrapper, Image, Container, Typography, Box, AbsoluteImageCircle, AbsoluteImageLines} from 'components'
import { PerfumeReviewCard } from '../elements/PerfumeReviewCard';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { ReviewCardProps } from 'typings/generalTypes';
import { DefaultButton } from 'components/buttons/DefaultButton';

const reviews:ReviewCardProps[] = [
  {id: "review1", likes: 11, title: 'WOW I really like this', image: 'profilePic', stars: 5, name: "Steve French", signatureSmell: "X by X", review:"Antique mall with sandalwood and oud. Different, but I like it"},
  {id: "review1", likes: 2, title: 'No one should ever wear this, unless trying to seduce a dumpster.', image: 'profilePic2', stars: 5, name: "Gina Naus", signatureSmell: "Y by X", review: "An unbelievable melon-oud stank bomb of colossal proportions, as if stuffing a rotten log with decaying fruit and spraying over with honey-scented air freshener to (unsuccessfully) cover up... making the end result even more disgusting than it would otherwise be if left alone."},
  {id: "review1", likes: 26, title: "STUNNING", image: 'profilePic3', stars: 4, name: "Sam", signatureSmell: "Y by M", review:"he cantaloupe note is mouthwatering and the oud is smooth and addictive. I don’t even really like oud and I can not get enough of this fragrance. Signature scent worthy. Just bought a full bottle."}
];

export const PerfumeReviews = () => {
  return (
    <SectionWrapper backgroundColor='light'>
      <AbsoluteImageLines src="shape1" alt="decoration shape"></AbsoluteImageLines>
      {/* <AbsoluteImageCircle src="shape2" alt="decoration shape"></AbsoluteImageCircle> */}
      <Container zIndex='upperElement' position='relative'>
      <Typography textAlign="center" type='h3' mb='s64'>
               Here's what our community thinks about your new signature smell:
              </Typography>
      <FlexWrapper alignItems='center' flexDirection={{ _: 'column', tablet: 'row'}}>
            <Box  mx='auto' maxWidth={{ _: '30rem', tablet: '40%', ltablet: '50%'}} mb='s24'>
              <Image src='haze' alt='perfume bottle' objectFit='contain' maxWidthMobile='10rem' maxWidth='100%'></Image>
            </Box>
           
            <Box maxWidth={{ _: '100%', tablet: '60%', ltablet: '50%'}} mx={{ _: 's0', tablet: 'auto'}}>
            <StyledSwiper
                    spaceBetween={100}
                    slidesPerView={1}
                    modules={[ Pagination ]}
                    pagination={{ 
                        clickable: true}}>
                  {
                    reviews.map(({id, image, stars, name, signatureSmell, review, likes, title}) => (
                      <SwiperSlide key={id}><PerfumeReviewCard key={id} likes={likes} title={title} image={image} stars={stars} name={name} signatureSmell={signatureSmell} review={review}></PerfumeReviewCard></SwiperSlide>
                        ))
                    }
                    </StyledSwiper>
            </Box>
        </FlexWrapper>
        <FlexWrapper justifyContent='center'>
          <DefaultButton mr='s16' mt='s40'>Show another</DefaultButton> <DefaultButton backgroundColor='darkaccent' mt='s40'>Where to get one?</DefaultButton>
        </FlexWrapper>
      </Container>
    </SectionWrapper>
  )
}

const StyledSwiper = styled(Swiper)`
    padding: 0rem;
`

