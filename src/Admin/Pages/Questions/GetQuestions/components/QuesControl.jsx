import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import {useSelector,useDispatch} from "react-redux";

import { prevQues,nextQues } from '../../../../../store/slices/PrevnextSlice';
import { Button } from '@mui/material';
import { quesList } from '../../../../../store/slices/QuestionsSlice';

const QuesControl = () => {

  const data = useSelector(state => state.prevNext)
  const dispatch=useDispatch();

  const quesdata= useSelector(state=>state.quesList);
  return (
    <div className='flex justify-between pt-4 pb-10 bg-gradient-to-r from-testFooterGrad1 to-testFooterGrad2'>
  
        <Button variant='text' sx={{color:"black"}} onClick={()=>dispatch(prevQues(quesdata.initialQues))} startIcon={<ArrowBackIosNewIcon/>}>
             Previous Question
        </Button>
        <Button  variant='text' sx={{color:"black"}} onClick={()=>dispatch(nextQues(quesdata.initialQues))} endIcon={<ArrowForwardIosIcon/>}>
            Next Question
            
        </Button>
    </div>
  )
}

export default QuesControl