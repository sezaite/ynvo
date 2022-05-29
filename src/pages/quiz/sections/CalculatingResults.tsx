import { Box, FlexWrapper, Loader, SectionWrapper, Typography } from "components";
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
      }, 300);
    }
        setTimeout(()=>{
            navigate('/summary');
        }, 3000)
      return () => clearInterval(intervalID);
  }, [isCounting]);

  useEffect(()=> {
    if(percentage > 84) {
        
        setIsCounting(false);
        setPercentage(100);
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
function useEffet(arg0: () => void, arg1: number[]) {
    throw new Error("Function not implemented.");
}

