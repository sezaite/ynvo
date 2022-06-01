import React from 'react'
import { Box, FlexWrapper, Image, Typography } from 'components';
import { DefaultButton } from 'components/buttons/DefaultButton';
import {PerfumeProps} from 'typings/generalTypes';



export const PerfumeCard:React.FC<PerfumeProps> = ({name, notes, brand, img, about, id}) => {
  return (
      <FlexWrapper position='relative' height='100%' borderRadius='radius16' mx='auto' maxWidth='36rem' flexDirection='column' backgroundColor='white' p='s30' border='primary'>
      <Box>
            <Typography textAlign='center' type='h5'>{name}</Typography>
            <Typography textAlign='center' type='h6'>by {brand}</Typography>
      </Box>           
        <FlexWrapper my="s40" justifyContent={{_: 'flex-start', lmobile: 'space-between'}}>
            <Image src={img} alt='perfume buttle image' width='5rem' objectFit='contain'></Image>
            <FlexWrapper ml={{_: 's16', lmobile: 's0'}} as="ul" flexDirection='column' alignItems={{_: 'start', lmobile: 'end'}}>
               {
                   notes.map((note)=>(
                    <FlexWrapper key={note} alignItems='center'>
                        <Typography>{note}</Typography>
                        <Box backgroundColor='darkaccent' width='0.5rem' height='0.5rem' ml='s10' borderRadius='circle' display={{_: 'none', lmobile: 'inline-block'}}></Box>
                      </FlexWrapper>
                   ))
               }
            </FlexWrapper>
        </FlexWrapper>
        <Typography pb='s20' fontStyle='italic'>
            {about}
        </Typography>
        <DefaultButton mt='auto' mx='auto'>Where to get them</DefaultButton>
    </FlexWrapper>
  )
}

