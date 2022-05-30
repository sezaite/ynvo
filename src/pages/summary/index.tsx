import { CheckoutNav } from 'components/layout'
import React from 'react'
import { SubsribeSection, PerfumeReviews, SampleHunt, JoinTheCommunity } from './sections'
import OtherPerfumes from './sections/OtherPerfumes'
import ResultsHero from './sections/ResultsHero'
import SignaturePerfume from './sections/SignaturePerfume'


const Summary: React.FC = () => {
   return (
      <>
      <CheckoutNav></CheckoutNav>
      <ResultsHero></ResultsHero>
      <SampleHunt></SampleHunt>
      <JoinTheCommunity title="Join our community and share perfume with verified fragrance lovers!"
      text="Let's admit, one human life is too short to finish that 100ml bottle."></JoinTheCommunity>
      {/* <SignaturePerfume></SignaturePerfume> */}
      {/* <OtherPerfumes></OtherPerfumes> */}
        <PerfumeReviews></PerfumeReviews>
        <JoinTheCommunity title="Want to write a comment - join our community!"></JoinTheCommunity>
       
        <SubsribeSection></SubsribeSection>
      </>
   )

    
}

export default Summary;