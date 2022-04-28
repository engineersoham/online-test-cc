import React, { useState, useEffect } from 'react'
import { Grid, Typography, Button } from '@mui/material';
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

const Qu2: React.FC<Props> = ({ ...props }) => {

  const dispatch = useDispatch()
  const [showAns, setShowAns] = useState<string>('')
  const [currentAns, setCurrentAns] = useState<string>('')
  const correctAns = useSelector<initialValue, initialValue['answers']> (state => state.answers)
  const navigate = useNavigate();
  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentAns(e.target.value)

  }
  const goto = () => {
    navigate('/result')
    dispatch({ type: 'SCORE' })

  }

  const save = () => {
    if(currentAns !== ''){
      dispatch({type:'ANS', payload:{queId:props.data.id, ans:currentAns}})
      dispatch({type:'ID', payload:props.currPage+1})
  }
    
  }

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
            Q{props.currPage + 1}. {props.data?.questionText}

          </Typography>

        </Grid>

        <Grid item xs={12} sx={{ m: 1, ml: 10 }}>

          <form action="">
            <input
              id='browsers'
              type="text"
              name='name'
              onChange={handelChange}
              value={currentAns}
              placeholder="enter you answer here"
              style={{ height: '2.5rem', width: '15rem', margin: '10px' }}
            />
            <Button variant='outlined' onClick={save} style={{ backgroundColor: 'grey', marginRight: 20, color: 'blue' }}>Save</Button>
            <br />
            Your answer :- " {showAns ? showAns : null} "

          </form>


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

export default Qu2