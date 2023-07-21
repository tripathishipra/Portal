import { FormControlLabel, FormLabel, RadioGroup,FormControl, Radio } from '@mui/material'
import React, { useEffect } from 'react'
import {useSelector} from "react-redux";
import EditIcon from '@mui/icons-material/Edit';
import EditQuestion from './EditQuestion';
import { useDispatch } from 'react-redux';
import {toggleEditOpt} from "../../../../../store/slices/EditContSlice"
import { quesList } from '../../../../../store/slices/QuestionsSlice';

const GetQuestions = () => {
    
    useEffect(()=>{
        dispatch(quesList())
    },[])
    const data = useSelector(state => state.prevNext)
    const questionDisplay= useSelector(state=>state.quesList)
    const showEdit= useSelector(state=>state.editShow)
    const dispatch=useDispatch();

  return (
    <div className='p-10 flex flex-col justify-between h-full'>
        
        <div className=''>
        <div className='flex justify-between my-3'>
            <p>Question-{data.initialQues}</p>
            <EditIcon onClick={()=>dispatch(toggleEditOpt())} style={{cursor:"pointer"}}/>
        </div>
        <hr/>
            <p>{questionDisplay.initialQues[data.initialQues-1].question}</p>
            
            <FormControl>
                <RadioGroup>
                {questionDisplay.initialQues[data.initialQues-1].answer.map((item,key)=>{
                    return(<FormControlLabel key={key} value={item} control={<Radio/>} label={item}/>)
                })}
                </RadioGroup>
                </FormControl>
        </div>
            <div  className='text-[#097309] font-bold'>
                <p>Correct Answer</p>
                <hr/>
                <p>{questionDisplay.initialQues[data.initialQues-1].correctAns}</p>
            </div>

            <div className={showEdit.initialValue?'absolute top-0 start-0 w-full h-full z-10':'hide'}>
                <EditQuestion/>
            </div>

          
       
    </div>
  )
}

export default GetQuestions