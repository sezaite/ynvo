import { Box, Loader, SectionWrapper, Typography } from "components";
import { navigate } from "gatsby";
import React, { useState, useEffect } from "react";


export const CalculatingResults = () => {

const [percentage, setPercentage] = useState<number>(0);
const [isCounting, setIsCounting] = useState(true);


let intervalID:any;
useEffect(() => {
    if (isCounting) {
      intervalID = setInterval(() => {
        setPercentage(percentage=> {
            percentage+=17;
            return percentage;
        })
      }, 500);
    }
      return () => clearInterval(intervalID);
  }, [isCounting]);

  useEffect(()=> {
    if(percentage > 84) {
        
        setIsCounting(false);
        setPercentage(100);
        navigate('/summary');
    }
  }, [percentage])


return (
<SectionWrapper>
    <Typography textAlign='center'>Stand by!</Typography>   
    {                
        !isCounting && <Box width="3rem" height="3rem"><Loader/></Box>
    }       
    <Typography textAlign="center" type="h3" ml="s24">We are calculating your results...</Typography>
    <Typography textAlign="center" type="h3">{percentage}%</Typography>
</SectionWrapper>
)
}


