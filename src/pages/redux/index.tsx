import { Box, Container, SectionWrapper, Typography } from "components";
import React, { useState } from "react";
import {Foodies, Foods} from 'state/types';

type People = 'Viktorija' | 'Vidmis' | 'Martyna' | 'Nojus'; //NOTE: Type might be not only strings



interface FoodiesExt extends Foodies {
	hateFood?: string; //NOTE: ? means optional
}

const FOODS: FoodiesExt[] = [
	{
		id: 1,
		name: 'Viktorija',
		food: Foods.GRYBAI,
	},
	{
		id: 2,
		name: 'Vidmis',
		food: Foods.BURGERIUKAI,
	},
	{
		id: 3,
		name: 'Martyna',
		food: Foods.SALDUMYNAI,
	},
	{
		id: 4,
		name: 'Nojus',
		food: Foods.CEPAI,
	},
];

const LearnRedux: React.FC = () => {
    const [selectedUser, setSelectedUser ] = useState<Foodies>(
        {
            id: null as unknown as number, //nezinau, kas, bet bus skaicius
            name: '',
            food: null as unknown as Foods, 

        }
    );
    return <SectionWrapper backgroundColor="secondary">
            <Container>
                <Typography textAlign='center' type='h3' color='deepblue'>
                    Redux
                </Typography>
{
FOODS.map(({id, name, food})=> (
    <Box
     backgroundColor='primary'
      key={id} 
      padding='s16'
       border={seledcedUser.id === id
         ? `2px solid ${theme.colors.accent}`
        : '2px solid transparent'}
        onClick={()=>{ setSelectedUser({

        })

        }}
       >
        <Typography type='h6'>
            {name}
        </Typography>
        <Typography>
            {food}
        </Typography>
    </Box>
))
}

            </Container>
    </SectionWrapper>  
}

export default LearnRedux;