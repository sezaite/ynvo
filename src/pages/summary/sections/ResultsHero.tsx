import { Container, Loader, SectionWrapper, Typography, Box, GridWrapper } from 'components'
import React, { useEffect, useState } from 'react'
import animalprint from 'assets/images/animalprint.png'
import { SectionWithFullImg } from 'components/wrappers/SectionWithFullImg'
import { PerfumeProps } from 'typings/generalTypes'
import { PerfumeCard } from '../elements'


const ResultsHero = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [showResults, setShowResults] = useState(false);
    

useEffect(()=> {
    setTimeout(()=>{
        setIsLoaded(true);
        setTimeout(()=>{
            setShowResults(true);
        }, 2000)
    }, 2000)
}, []);

const perfumes:PerfumeProps[] = [
    {
        id: 0, img: 'camel', name: 'Camel', brand: 'Zoologist', notes: ['Amber', "Dates", "Musk", "Tonka Beans", "Oud"], about: "n Zoologist Camel, beautiful aromas of rose, and jasmine-infused, succulent dried fruits are joined along the way by an alluring blend of incense, myrrh, amber, and cinnamon. Soon met by animalistic musks and authentic oud, they surround you in a rich tapestry. This sensual caravan of fragrance carries you away to accompany the camel on its long, lonely journey across the ageless desert."
    },
    {
        id: 1, img: 'haze', name: 'Whispered Myths', brand: 'Imaginary Authors', notes: ['Natural Cambodian Oud','Cantaloupe','Cedarwood','Muskdana','Honey','Salvaged Shipwreck'], about: 'This is a classic scent with deep historic undertones. It is long-lasting, bold, and artful. Wear it with reverence and appreciate your dynamic place in this big, crazy world.'
    },
    {
        id: 3, img: 'naomi', name: 'Corpus Equus', brand: 'Naomi Goodsir', notes: ['Amber','Animalic Notes','Incense','Leather','Smoke'], about: 'A deep black animalistic composition, with assertive leather notes. Inspiration - A tribute to a fiery & impetuous horse.'
    },

]


  return (
    <SectionWithFullImg pt='s60' backgroundImage={isLoaded && showResults ? animalprint : ""} backgroundColor='light' zIndex='upperElement'>
        <Container>
            <Typography pt='s60' type='h4' textAlign='center'>{isLoaded? 'Turns out you are a real:' : "We calculated your results..."} </Typography>
            
            {
                isLoaded && showResults ? <Typography my='s60' type='jumbo' textAlign='center' letterSpacing='large' color='darkaccent' textTransform='uppercase'>Animalic Diva</Typography> :
                <Box mx='auto' mt='s40' width='3rem' height='3rem'>
                    <Loader></Loader>
                </Box>
               
            }
            
        </Container>

        <Container>

            <Box maxWidth={{_: '100%', tablet: '50%'}} mx='auto'>
                <Typography py='s60' textAlign='center' type='h4'>Here are the perfumes to match your vibe</Typography>
                <Typography pb='s40' textAlign='center'>We dare you to one of them! And then another. And then another</Typography>
            </Box>

            <GridWrapper gridGap='s24' gridTemplateColumns={{_: '1fr', ltablet: 'repeat(3, 1fr)'}}>

            {
                    perfumes.map(({id, img, name, brand, about, notes}) => (
                      <PerfumeCard key={id} id={id} img={img} brand={brand} name={name} notes={notes} about={about} ></PerfumeCard>
                        ))
                    }

            </GridWrapper>
        </Container>

    </SectionWithFullImg>
    
  )
}

export default ResultsHero