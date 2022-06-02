import { Container, Loader, Typography, Box, GridWrapper } from 'components'
import React, { useEffect, useState } from 'react'
import { SectionWithFullImg } from 'components/wrappers/SectionWithFullImg'
import { PerfumeProps } from 'typings/generalTypes'
import { PerfumeCard } from '../elements'
import { completeQuiz } from 'state/slice'
import { useAppDispatch } from 'state/store'
import { useSelector } from 'react-redux'
import { selectIsQuizCompleted } from 'state/selectors'


const ResultsHero = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const isQuizCompleted = useSelector(selectIsQuizCompleted);
    const dispatch = useAppDispatch();

useEffect(()=> {
    if (isQuizCompleted) {
        setIsLoaded(true);
        setShowResults(true);
        return;
    }
    setTimeout(()=>{
        setIsLoaded(true);
        setTimeout(()=>{
            setShowResults(true);
            dispatch(completeQuiz());
        }, 1000)
    }, 1000)
}, []);

const perfumes:PerfumeProps[] = [
    {
        id: 0, img: 'camel', name: 'Camel', brand: 'Zoologist', notes: ['Amber', "Dates", "Musk", "Tonka Beans", "Oud"], about: "n Zoologist Camel, beautiful aromas of rose, and jasmine-infused, succulent dried fruits are joined along the way by an alluring blend of incense, myrrh, amber, and cinnamon. Soon met by animalistic musks and authentic oud, they surround you in a rich tapestry. This sensual caravan of fragrance carries you away to accompany the camel on its long, lonely journey across the ageless desert."
    },
    {
        id: 1, img: 'haze', name: 'Whispered Myths', brand: 'Imaginary Authors', notes: ['Cantaloupe','Cedarwood','Muskdana','Honey','Salvaged Shipwreck', 'Natural Cambodian Oud',], about: 'This is a classic scent with deep historic undertones. It is long-lasting, bold, and artful. Wear it with reverence and appreciate your dynamic place in this big, crazy world.'
    },
    {
        id: 3, img: 'naomi', name: 'Corpus Equus', brand: 'Naomi Goodsir', notes: ['Amber','Animalic Notes','Incense','Leather','Smoke'], about: 'A deep black animalistic composition, with assertive leather notes. Inspiration - A tribute to a fiery & impetuous horse.'
    },

]


  return (
    <SectionWithFullImg pt='s60' height={isLoaded && showResults ? "auto" : "200vh"} src={isLoaded && showResults ? "animalprint" : ""} backgroundColor='light' zIndex='upperElement'>
        <Container>
            <Typography pt='s60' type='h4' textAlign='center'>{isLoaded? 'Turns out you are a real:' : "We have calculated your results..."} </Typography>
            
            {
                isLoaded && showResults ? <Typography my='s60' type='jumbo' textAlign='center' letterSpacing='large' color='darkaccent' textTransform='uppercase'>Animalic Diva</Typography> :
                <Box mx='auto' mt='s40' width='3rem' height='3rem'>
                    <Loader></Loader>
                </Box>
               
            }
            
        </Container>
{
    isLoaded && showResults ?
    <Container>
            <Box maxWidth={{_: '100%', tablet: '50%'}} mx='auto'>
                <Typography type='h3' textAlign='center' py='s40'>
                    You never play safe. You're 
                    <Typography type='span' color='darkaccent' letterSpacing='large'> brave, adventurous </Typography> and 
                     <Typography type='span' color='darkaccent' letterSpacing='large' > bold</Typography>, but still rather <Typography type='span' color='darkaccent' letterSpacing='large'>sweet</Typography></Typography>


                <Typography py='s60' textAlign='center' type='h4'>Here are the perfumes we think will match your vibe perfectly</Typography>
                <Typography pb='s40' textAlign='center' type='body20'>We dare you to try one of them! And then another. And then another</Typography>
            </Box>

            <GridWrapper gridGap='s24' gridTemplateColumns={{_: '1fr', ltablet: 'repeat(3, 1fr)'}}>

            {
                    perfumes.map(({id, img, name, brand, about, notes}) => (
                      <PerfumeCard key={id} id={id} img={img} brand={brand} name={name} notes={notes} about={about} ></PerfumeCard>
                        ))
                    }

            </GridWrapper>
        </Container>

        : ""
}
        

    </SectionWithFullImg>
    
  )
}

export default ResultsHero