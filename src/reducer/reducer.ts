export interface initialValue {
    
    score: number,
    rightans: {}[],
    wrongans: {}[],
    ansID:number[]
    answers:{}[]
}


interface scoreaction {
    type: 'SCORE',
    payload:any
}

interface rightanswer {
    type:'ANSWER',
    payload:any
}

interface wronganswer {
    type:'WRONGANS',
    payload:any
}

interface answersID {
    type:'ID',
    payload:number
}

interface ans {
    type:'ANS',
    payload:any
}
type action =  scoreaction |  rightanswer | wronganswer | answersID |ans

const InitialValue = {
    score: 0,
    rightans:[],
    wrongans:[],
    ansID:[],
    answers:[]
}

const reducer = (state: initialValue = InitialValue, action: action) => {
    const newState = {...state};

    switch (action.type) {
        
        case 'SCORE':
            console.log(action.payload)
           if(newState.score < 6){
            newState.score = newState.score+1
           }
            break;
        
        case 'ANSWER':
            newState.rightans = [...newState.rightans, action.payload]
             break;
             
        case 'WRONGANS':
            console.log('wrong call')
            console.log(action.payload)
            newState.wrongans = [...newState.wrongans, action.payload]
            break;

        case 'ID':
            if(!newState.ansID.includes(action.payload)){
                newState.ansID = [...newState.ansID, action.payload]
            }
            break;

        case 'ANS':
            if(newState.answers.length < 1){
                newState.answers = [...newState.answers, action.payload]
            }else {
                let flag = true
                newState.answers.forEach((item:any)=>{
                    if(item.queId === action.payload.queId){
                        flag = false
                        item.ans = action.payload.ans
                    }
                })
                if(flag){
                    newState.answers = [...newState.answers, action.payload]
                }
            }

            break;

        default:
            break;
    }
    return newState
}

export default reducer