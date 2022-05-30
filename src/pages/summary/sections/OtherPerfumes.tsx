import { Container, FlexWrapper, GridWrapper, SectionWrapper } from 'components'
import React from 'react'
import { PerfumeProps } from 'typings/generalTypes'
import { PerfumeCard } from '../elements'


const OtherPerfumes = () => {

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
    <SectionWrapper zIndex='upperElement'>
        <Container>
            <GridWrapper gridTemplateColumns={{_: '1fr', ltablet: 'repeat(3, 1fr)'}}>

            {
                    perfumes.map(({id, img, name, brand, about, notes}) => (
                      <PerfumeCard key={id} id={id} img={img} brand={brand} name={name} notes={notes} about={about} ></PerfumeCard>
                        ))
                    }

            </GridWrapper>
        </Container>
    </SectionWrapper>
  )
}

export default OtherPerfumes