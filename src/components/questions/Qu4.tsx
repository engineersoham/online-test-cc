import React, { useState, useEffect } from 'react'
import { Grid, Typography, Radio, RadioGroup, Button, FormControlLabel } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { initialValue } from '../../reducer/reducer';


type Props = {
  queObj: any;
  currPage: number;
  data: any;
  prevQue: any;
  nextQue: any;
 
};

const Qu4: React.FC<Props> = ({ ...props }) => {

  const [currentAns, setAns] = useState<string>('')
  const [showAns, setShowAns] = useState<string>('')
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const correctAns = useSelector<initialValue, initialValue['answers']> (state => state.answers)

  const handleAnswerOptionClick = (e: any) => {
    setAns(e.target.value)


  };

  const goto = () => {
    navigate('/result')
    dispatch({ type: 'SCORE' })

  }
  
const save = ()=>{}

  useEffect(() => {
    if(currentAns !== ''){
      dispatch({type:'ANS', payload:{queId:props.data.id, ans:currentAns}})
      dispatch({type:'ID', payload:props.currPage+1})
  }
},[currentAns])

useEffect(()=>{
  correctAns.forEach((item:any)=>{
      if(item.queId === props.data.id){
          setShowAns(item.ans)
      }
  })
},[currentAns])

  return (
    <>
      <Grid sx={{ ml: 10 }}>
        <Grid xs={12}>
          <Typography sx={{ p: 3 }}>
            Q{props.currPage + 1}. {props.data.questionText}

          </Typography>

        </Grid>

        <Grid item xs={12} sx={{ m: 1 }}>



          <RadioGroup

            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={(e) => { console.log(e.target.value) }}
            onClick={handleAnswerOptionClick}
          >
            {props.data.answerOptions.map((answerOption: any, idx: any) => (
              <>

                <FormControlLabel sx={{ width: '200rem', m:1, ml: 5 }} key={idx} value={answerOption.answerText} control={<Radio />} label={answerOption.answerText} />


              </>


            ))}

          </RadioGroup>
          <br />

          Your answer :- " {showAns ? showAns : null} "

        </Grid>




        <Grid container sx={{ m: 8 }}>
          <Grid item xs={2}><Button onClick={props.prevQue} variant='outlined' disabled={props.currPage <= 0}><ArrowBackIcon /></Button>  </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={1}><Button disabled={props.data.type !== "multi-select"} variant='outlined' onClick={save} >Save</Button></Grid>
          <Grid item xs={1}><Button disabled={props.currPage < props.queObj.length - 1} variant='outlined' onClick={goto} >Submit</Button></Grid>
          <Grid item xs={1}> <Button variant='outlined' disabled={props.currPage >= props.queObj.length - 1} onClick={props.nextQue}><ArrowForwardIcon /></Button></Grid>
        </Grid>
      </Grid>


    </>
  )
}

export default Qu4