import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Button, Checkbox, FormControl, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { queEng, queHindi } from '../question';


const Quiz = () => {
    
    const [data, setData] :any = useState();
    const [input, setInput] = useState('');
    const [curPage, setPage] = useState(0);
    const navigate = useNavigate();
    const language = useLocation().state;

    const passData = ()=>{
        if(language === 'english'){
            setData(queEng)
        }else{
            setData(queHindi)
        };
    }

    const redBg = {
        backgroundColor:'red',
        margin:'20px',
        color:'white'
    }

    const grayBg = {
        backgroundColor:'gray',
        margin:'20px',
        color:'white'
    }

    const prev = ()=>{
        setPage((prev:any)=>prev-1)
    }

    const next = ()=>{
        setPage((prev:any)=>prev+1)
    }

    const result = ()=>{
        navigate('/result',{state:data})
    }

useEffect(()=>{
    console.log(language);
    passData()
    console.log(data);
    
},[data]);

const handelClick = (e:any)=>{
    data[curPage].isAnsd = true
    console.log(e.target.value);
    setInput(e.target.value)
    data[curPage].userAns = e.target.value;
    console.log(data[curPage]);
}

const handelArr = (e:any)=>{
    console.log(e.target.value);
    data[curPage].isAnsd = true;
    if(e.target.value !== undefined){
        if(data[curPage].userAns.length < 2){
            data[curPage].userAns.push(e.target.value)
        }else{
            data[curPage].userAns.splice(0,1);
            data[curPage].userAns.push(e.target.value)
        }
    }
    console.log(data[curPage]);

};

const option = ()=>{
    switch(data[curPage]?.type){
        case 'mcq':
            return(
                <>
               <FormControl>
               <RadioGroup 
                defaultValue={data[curPage]?.userAns}
                onClick={handelClick}
                >
                    {data[curPage]?.opt.map((item:any,idx:any)=>{
                        return(
                            <>
                            <FormControlLabel
                            data-testid={`mcq-${idx}`}
                            control={<Radio
                            // checked={item === item.userAns}
                            />}
                            label={item}
                            value={item}
                            />
                            </>
                        )
                    })}
                </RadioGroup>
               </FormControl>
                </>
            );

            case 'fill':
                return(
                    <>
                   <FormControl>
                   <TextField
                   data-testid='fill'
                   value={data[curPage]?.userAns}
                   onChange={handelClick}
                   placeholder='text your answer here'
                   />
                   </FormControl>
                    </>
                );

                case 'bool':
                    return(
                        <>
                       <FormControl>
                       <RadioGroup 
                        defaultValue={data[curPage]?.userAns}
                        onClick={handelClick}
                        >
                            {data[curPage]?.opt.map((item:any,idx:any)=>{
                                return(
                                    <>
                                    <FormControlLabel
                                    data-testid={`bool-${idx}`}
                                    control={<Radio
                                    // checked={item === item.userAns}
                                    />}
                                    label={item}
                                    value={item}
                                    />
                                    </>
                                )
                            })}
                        </RadioGroup>
                       </FormControl>
                        </>
                    );

                    case 'match':
                        return(
                            <>
                           <FormControl>
                               <Typography>
                                   {data[curPage]?.match.map((item:any,idx:any)=>{
                                       return(
                                           <>
                                           <Typography
                                           key={idx}
                                           variant='h6'
                                           >
                                               {item}
                                           </Typography>
                                           </>
                                       )
                                   })}
                               </Typography>
                           <RadioGroup 
                           sx={{mt:3}}
                            defaultValue={data[curPage]?.userAns}
                            onClick={handelClick}
                            >
                                {data[curPage]?.opt.map((item:any,idx:any)=>{
                                    return(
                                        <>
                                        <FormControlLabel
                                        data-testid={`match-${idx}`}
                                        control={<Radio
                                        // checked={item === item.userAns}
                                        />}
                                        label={item}
                                        value={item}
                                        />
                                        </>
                                    )
                                })}
                            </RadioGroup>
                           </FormControl>
                            </>
                        );

                        case 'multi':
                            return(
                                <>
                               <FormControl>
                               <RadioGroup 
                                // defaultValue={data[curPage]?.userAns}
                                onClick={handelArr}
                                >
                                    {data[curPage]?.opt.map((item:any,idx:any)=>{
                                        return(
                                            <>
                                            <FormControlLabel
                                            data-testid={`multi-${idx}`}
                                            control={<Checkbox
                                            // checked={data[cuPage]?.ans.includes(item)}
                                            />}
                                            label={item}
                                            value={item}
                                            />
                                            </>
                                        )
                                    })}
                                </RadioGroup>
                               </FormControl>
                                </>
                            );

            default:
                break;
    }
}

  return (
    <div>
       {data?
       <>
        <Grid sx={{textAlign:'center',mb:3}}>
            {data?.map((item:any,idx:any)=>{
                return(
                    <>
                    <Button 
                    data-testid={`btn-${idx}`} 
                    key={idx} 
                    variant='outlined'
                    style={item.isAnsd ? redBg : grayBg}
                    onClick={(e:any)=>setPage(Number(e.target.innerText)-1)}
                    >
                        {item.id}
                    </Button>
                    </>
                )
            })}
        </Grid>
        <Grid sx={{m:2,ml:10}}>
            <Typography variant='h6'>
              Q{data[curPage]?.id}  {data[curPage]?.que}
            </Typography>
        </Grid>
            
            <Grid sx={{ml:12,mt:3}}>
                {option()}
            </Grid>

        <Grid container sx={{mt:5,ml:10}}>
            <Grid xs={1}>
                <Button variant='outlined' data-testid='back' onClick={prev} disabled={data[curPage]?.id <= 1} >
                    <ArrowBack/>
                </Button>
            </Grid>

            <Grid xs={8}></Grid>

            <Grid xs={1}>
                <Button variant='outlined' data-testid='submit' onClick={result} disabled={data[curPage]?.id < data?.length} >
                    SUBMIT
                </Button>
            </Grid>

            <Grid xs={1}>
                <Button variant='outlined' data-testid='frd' onClick={next} disabled={data[curPage]?.id >= data?.length} >
                    <ArrowForward/>
                </Button>
            </Grid>
        </Grid>
       </>
       :
       null}
    </div>
  )
}

export default Quiz