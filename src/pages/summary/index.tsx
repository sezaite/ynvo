import { CheckoutNav } from 'components/layout'
import React from 'react'
import { SubsribeSection, PerfumeReviews, SampleHunt, JoinTheCommunity } from './sections'
import ResultsHero from './sections/ResultsHero'

const Summary: React.FC = () => {
   return (
      <>
      <CheckoutNav></CheckoutNav>
      <ResultsHero></ResultsHero>
      <SampleHunt></SampleHunt>
      <JoinTheCommunity title="Join our community and share perfume with verified fragrance lovers!"
      text="Just admit that, one human life is too short to finish that 100ml bottle."></JoinTheCommunity>
        <PerfumeReviews></PerfumeReviews>
        <JoinTheCommunity title="Want to write a comment - become a member!"></JoinTheCommunity>
       
        <SubsribeSection></SubsribeSection>
      </>
   )

    
}

export default Summary;