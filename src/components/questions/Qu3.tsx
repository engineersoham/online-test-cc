import React, { useState,useEffect } from 'react'
import { Grid, Typography,  Radio, RadioGroup, FormControlLabel, Table, TableRow, TableCell} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const Qu2 = () => {
  const questions = [

    {
      questionText: '',
      answerOptions: [
          { answerText: '(1)-(a),(2)-(b),(3)-(c),(4)-(d)', isCorrect: false },
          { answerText: '(1)-(a),(2)-(c),(3)-(d),(4)-(b)', isCorrect: false },
          { answerText: '(1)-(b),(2)-(d),(3)-(a),(4)-(c)', isCorrect: true },
          { answerText: '(1)-(b),(2)-(a),(3)-(d),(4)-(c)', isCorrect: false },
      ],

  }
  ];

  const [currentAns, setAns] = useState<string[]>([])
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleAnswerOptionClick = (e: any) => {
    setAns([e.target.value])
   
    dispatch({type:'ANS3'})
  };

  
  const goto = () => {
    navigate('/que4')
  }

  const backto = () => {
   navigate('/que2')
  }
  useEffect(() => {
    return ()=> {dispatch({ type: 'ANSWER', payload:currentAns })};
})

  return (
    <>
     <Grid sx={{ml:22}}>
     <Grid xs={12}>
        <Typography sx={{ p: 3 }}>
          Q3. Match The following
          
          <Table>
            <TableRow>
              <TableCell>
                1) Redux
              </TableCell>
              <TableCell>
                a) Javascript Library
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                2) Props
              </TableCell>
              <TableCell>
                b) State management Tool
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                3) React
              </TableCell>
              <TableCell>
                c) Transpiler
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                4) Babel
              </TableCell>
              <TableCell>
                d) pass to child component
              </TableCell>
            </TableRow>
          </Table>

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
          {questions[0].answerOptions.map((answerOption, idx) => (
            <>
              
                <FormControlLabel sx={{width:'200rem',ml:5}}  key={idx} value={answerOption.answerText} control={<Radio />} label={answerOption.answerText} />
              

            </>


          ))}

        </RadioGroup>

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