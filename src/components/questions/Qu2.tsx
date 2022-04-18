import React, { useState } from 'react'
import { Grid, Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const Qu2 = () => {
  const questions = { questionText: 'React is Built by?' }

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [flag, setflag] = useState<boolean>(false)

  const [input, setname] = useState<string[]>([])


  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setname([e.target.value])

  }


  const save = () => {
    setflag(true)
    dispatch({ type: 'ANS2' })
    dispatch({ type: 'ANSWER', payload: input })
  }
  const goto = () => {
    navigate('/que3')

  }

  const backto = () => {
    navigate('/que1')
  }

  return (
    <>
      <Grid sx={{ ml: 22 }}>
        <Grid xs={12}>
          <Typography sx={{ p: 3 }}>
            Q2. {questions.questionText}

          </Typography>

        </Grid>

        <Grid item xs={12} sx={{ m: 1, ml: 10 }}>

          <form action="">
            <input
              id='browsers'
              type="text"
              name='name'
              onChange={handelChange}
              value={input}
              placeholder="enter you answer here"
              style={{ height: '2.5rem', width: '15rem', margin: '10px' }}
            />
            <Button variant='outlined' onClick={save} style={{ backgroundColor: 'grey', marginRight: 20, color: 'blue' }}>Save</Button>
            {flag ? <h5>{input}</h5> : null}

          </form>


        </Grid>


        <Grid container sx={{ m: 8 }}>
          <Grid item xs={2}><ArrowBackIcon onClick={backto} />  </Grid>
          <Grid item xs={7}></Grid>
          <Grid item xs={2}><ArrowForwardIcon onClick={goto} /></Grid>
        </Grid>
      </Grid>


    </>
  )
}

export default Qu2