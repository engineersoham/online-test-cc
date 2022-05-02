import { Button, FormControl, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState('');

    const handelChange = (e:any)=>{
        console.log(e.target.value);
        setInput(e.target.value)
    }

    const handelSubmit = (e:any)=>{
        console.log(input);
        e.preventDefault();
        setInput('');
        navigate('/quiz',{state:input})
    }

  return (
    <div>
        <form onSubmit={handelSubmit} style={{padding:'20px',width:'30vw',marginLeft:'35vw',border:'1px solid black', boxShadow:'8px 10px #888888',backgroundColor:'palegreen'}}>
            <Typography variant='h5' sx={{textAlign:'center',m:1}}>
                SIGN UP
            </Typography>
            <TextField sx={{textAlign:'center',m:2}} placeholder='enter your name'/>
            <Typography  sx={{m:2}}>
                select Gender
            </Typography>
            <RadioGroup row>
                <FormControlLabel
                value='male'
                label='Male'
                control={<Radio/>}
                />
                <FormControlLabel
                value='female'
                label='Female'
                control={<Radio/>}
                />
                <FormControlLabel
                value='other'
                label='other'
                control={<Radio/>}
                />
            </RadioGroup>
            <Typography variant='h6' sx={{m:2}}>
                Select Test language
            </Typography>
            <RadioGroup onClick={handelChange}>
                <FormControlLabel
                data-testid='english'
                value='english'
                label='English'
                control={<Radio/>}
                />
                <FormControlLabel
                data-testid='hindi'
                value='hindi'
                label='hindi'
                control={<Radio/>}
                />
                <FormControlLabel
                data-testid='other'
                value='other'
                label='other'
                control={<Radio/>}
                />
            </RadioGroup>
            <Button sx={{textAlign:'center',m:2}} variant='contained' type='submit'>Start Test</Button>
        </form>
    </div>
  )
}

export default Signup