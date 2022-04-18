import React, { useState,} from 'react'
import { Grid, Typography, Button,  RadioGroup,  } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';



const Qu2 = () => {
  const questions = [

    {
      questionText: 'What is JSX?',
      answerOptions: [
          { answerText: 'It is a Library', isCorrect: false },
          { answerText: 'It allows us to write HTML inside JavaScript', isCorrect: true },
          { answerText: 'JSX stands for JavaScript XML', isCorrect: false },
          { answerText: 'JSX stands for JavaScript extention', isCorrect: false },
      ],
     
  }
  ];
  const [currentAns, setAns] = useState<string[]>([])
  const navigate = useNavigate();
  const dispatch =useDispatch()

  const handleAnswerOptionClick = (e: any) => {
    setAns([...currentAns, e.target.value])
    dispatch({type:'ANS5'})
  };


  const goto = () => {
    navigate('/result')
    dispatch({type:'SET_DRAWER'})
    
    if(currentAns.length === 2){
      dispatch({type:'ANSWER', payload:currentAns})
    }
    setTimeout(() => dispatch({type:'SCORE'}) ,0)
    
  }

  const backto = () => {
    
   navigate('/que4')
  }
  

  return (
    <>
    <Grid sx={{ml:22}}>
    <Grid xs={12}>
        <Typography sx={{ p: 3 }}>
          Q5. {questions[0].questionText}

        </Typography>

      </Grid>

      <Grid item xs={12} sx={{ m: 1 }}>

        <RadioGroup
          // aria-labelledby="demo-row-radio-buttons-group-label"
          // name="row-radio-buttons-group"
          onChange={(e) => { console.log(e.target.value) }}
          onClick={handleAnswerOptionClick}
        >
          {questions[0].answerOptions.map((answerOption, idx) => (
            <span key={idx} style={{width:'200rem', marginLeft:'2rem', fontSize:'1.2rem'}}>
              <input type='radio' value={answerOption.answerText} /> <label htmlFor="">{answerOption.answerText}</label>
            </span>


          ))}

        </RadioGroup>

      </Grid>

      <Grid container sx={{ m: 8 }}>
        <Grid item xs={2}><Button><ArrowBackIcon onClick={backto} /></Button>  </Grid>
        <Grid item xs={7}></Grid>
        <Grid item xs={2}><Button variant='outlined' onClick={goto} >Submit</Button></Grid>
      </Grid>
    </Grid>
    
               
    </>
  )
}

export default Qu2