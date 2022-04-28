import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { initialValue } from '../../reducer/reducer';
import Results from '../Result/Results';



const Result = () => {
  const ANSWER:any = useSelector<initialValue, initialValue['answers']>(state => state.answers)
  
  const dispatch = useDispatch()
  const questions:any = useLocation().state;

  
  const rightAns = ()=>{
    for(let i =0 ; i< ANSWER.length; i++){
      for(let j = 0; j<questions.length; j++){
        if( ANSWER[i].queId === questions[j].id){
          if(questions[j].type !== "multi-select"){
            if(ANSWER[i].ans === questions[j].answer){
              dispatch({type:'SCORE'})
              dispatch({type:'ANSWER', payload:{ID:questions[j].id, QUE:questions[j].questionText, ANS:ANSWER[i].ans}})
            }
            else {
             dispatch({ type: 'WRONGANS', payload: {ID:questions[j].id, QUE:questions[j].questionText, ANS:ANSWER[i].ans}})
            }
          }else {
            ANSWER[i].ans.forEach((item:any)=>{
              if(questions[j].answer.includes(item)){
                dispatch({type:'SCORE'})
                dispatch({type:'ANSWER', payload:{ID:questions[j].id, QUE:questions[j].questionText, ANS:item}})
              }else{
               dispatch({ type: 'WRONGANS', payload: {ID:questions[j].id, QUE:questions[j].questionText, ANS:item}})
              }
            })
          }
        }
      }
    } 
  }

  
useEffect(()=>{
  rightAns()
  console.log('answer called')
  // console.log('function called')
},[])

  return (
    <div >
      <Results />
    </div>
  )
}

export default Result