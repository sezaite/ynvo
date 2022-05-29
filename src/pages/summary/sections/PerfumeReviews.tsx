import { FlexWrapper, SectionWrapper, Image, Container, Typography, Box} from 'components'
import { ReviewCard } from 'pages/home/elements/ReviewCard';
import { ReviewCardProps } from 'typings/generalTypes';
import { AbsoluteImageCircle, AbsoluteImageLines } from 'pages/quiz'
import React from 'react';
import { PerfumeReviewCard } from '../elements/PerfumeReviewCard';

const reviews:ReviewCardProps[] = [
  {id: "review1", likes: 11, title: 'My new favorite fragrance!', image: 'profilePic', stars: 5, name: "Steve French", signatureSmell: "X by X", review:"I have been using this program for 3 months now and It helped me to lose 16lbs, taught me how to breathe properly and now I look forward to my workout. Great challenges for different problem zones. Definitely recommend to anyone that wants to lose weight and feel better without long hour at the gym or exhausting workouts."},
  {id: "review1", likes: 2, title: 'Perfect for a hot summer day', image: 'profilePic2', stars: 5, name: "Gina Naus", signatureSmell: "Y by X", review: "I will be very straightforward - I hate sports and working out. Positive Yoga put my physical activity to the next level. I started to enjoy my morning yoga routines where I get my dose of cardio, resistance, and stretching in one place. I could barely hold a plank at the beginning. Now I’m doing various yoga poses that looked impossible at first. My body shape improved a lot and I am very motivated by both: results and the feeling of progress."},
  {id: "review1", likes: 26, title: "I didn't like it at first, but...", image: 'profilePic3', stars: 4, name: "Sam", signatureSmell: "Y by M", review:"I have many friends who practice yoga and I decided to try it myself. It is the best decision I have made in a long time. With Positive Yoga program I started to lose weight, which was demotivating me for a long time. Also, I’ve learned about yoga philosophy and poses that encourage me to practice mindfulness and pay attention to stress reduction. I am very proud of myself. Feeling better is my biggest motivation."}
];

export const PerfumeReviews = () => {
  return (
    <SectionWrapper backgroundColor='light'>
      <AbsoluteImageLines src="shape1" alt="decoration shape"></AbsoluteImageLines>
      <AbsoluteImageCircle src="shape2" alt="decoration shape"></AbsoluteImageCircle>
      <Container zIndex='upperElement' position='relative'>
      <Typography textAlign="center" type='h3' mb='s64'>
               Here's what our community thinks about your new signature smell:
              </Typography>
      <FlexWrapper flexDirection={{ _: 'column', ltablet: 'row'}}>
            <Box  mx='auto' maxWidth={{ _: '30rem', ltablet: '50%'}} mb='s24'>
              <Image src='haze' alt='perfume bottle' objectFit='contain' maxWidthMobile='10rem' maxWidth='100%'></Image>
            </Box>
           
            <Box maxWidth={{ _: '100%', ltablet: '50%'}} mx={{ _: 's0', ltablet: 'auto'}}>
                  {
                    reviews.map(({id, image, stars, name, signatureSmell, review, likes, title}) => (
                        <PerfumeReviewCard key={id} likes={likes} title={title} image={image} stars={stars} name={name} signatureSmell={signatureSmell} review={review}></PerfumeReviewCard>
                        ))
                    }
            </Box>
        </FlexWrapper>
      </Container>
    </SectionWrapper>
  )
}

