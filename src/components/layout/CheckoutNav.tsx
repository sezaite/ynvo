
import { FlexWrapper, Box, Image } from 'components'
import React from 'react'

export const CheckoutNav = () => {
  return (
    <FlexWrapper justifyContent='center' py='s10' position='absolute' top='0' width='100%' zIndex='upperElement'>
        <Image src='logo' alt='logo' width='3rem'></Image>
    </FlexWrapper>
  )
}

