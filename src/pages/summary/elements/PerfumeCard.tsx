import { Box, FlexWrapper, Image, Typography } from 'components';
import { DefaultButton } from 'components/buttons/DefaultButton';
import React from 'react'
import {PerfumeProps} from 'typings/generalTypes';



export const PerfumeCard:React.FC<PerfumeProps> = ({name, notes, brand, img, about, id}) => {
  return (
      <FlexWrapper borderRadius='radius16' mx='auto' maxWidth='36rem' flexDirection='column' backgroundColor='white' p='s30' border='primary'>
      <Box>
            <Typography textAlign='center' type='h5'>{name}</Typography>
            <Typography textAlign='center' type='h6'>by {brand}</Typography>
      </Box>
                
        <FlexWrapper my="s40" justifyContent='space-between'>
            <Image src={img} alt='perfume buttle image' width='5rem' objectFit='contain'></Image>
            <FlexWrapper as="ul" flexDirection='column' alignItems='end'>
               {
                   notes.map((note)=>(
                    <FlexWrapper key={note} alignItems='center'>
                        <Typography type="h6" >{note}</Typography>
                        <Box backgroundColor='darkaccent' width='0.5rem' height='0.5rem' ml='s10' borderRadius='circle'></Box>
                      </FlexWrapper>
                   ))
               }
            </FlexWrapper>
        </FlexWrapper>
        <Typography fontStyle='italic'>
            {about}
        </Typography>
        <DefaultButton mx='auto' my='s20'>Where to get them</DefaultButton>
    </FlexWrapper>
  )
}

