export interface initialValue {
    drawer: boolean,
    ans1: boolean,
    ans2: boolean,
    ans3: boolean,
    ans4: boolean,
    ans5: boolean,
    score: number,
    rightans: string[],
    wrongans: string[],
    RightAns:string[]
    
}

interface draweraction {
    type: 'SET_DRAWER'
}
interface scoreaction {
    type: 'SCORE'
}
interface ans1 {
    type: 'ANS1'
}
interface ans2 {
    type: 'ANS2'
}
interface ans3 {
    type: 'ANS3'
}
interface ans4 {
    type: 'ANS4'
}
interface ans5 {
    type: 'ANS5'
}

interface rightanswers {
    type:'ANSWER',
    payload:string[]
}
type action = draweraction | scoreaction | ans1 | ans2 | ans3 | ans4 | ans5 | rightanswers

const InitialValue = {
    drawer: false,
    ans1: false,
    ans2: false,
    ans3: false,
    ans4: false,
    ans5: false,
    score: 0,
    rightans:[],
    wrongans:[],
    RightAns:['is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications.',
                'facebook','(1)-(b),(2)-(d),(3)-(a),(4)-(c)','False', 'It allows us to write HTML inside JavaScript' , 'JSX stands for JavaScript XML'
]
}

const reducer = (state: initialValue = InitialValue, action: action) => {
    const newState = {...state};

    switch (action.type) {
        case 'SET_DRAWER':
            newState.drawer = !newState.drawer;
            break;
        case 'SCORE':
            newState.score = newState.rightans.length
            break;
        case 'ANS1':
            newState.ans1 = true
            break;
        case 'ANS2':
            newState.ans2 = true
            break;
        case 'ANS3':
            newState.ans3 = true
            break;
        case 'ANS4':
            newState.ans4 = true
            break;
        case 'ANS5':
            newState.ans5 =true
            break;
        case 'ANSWER':
            action.payload.forEach(item => {
                if(newState.RightAns.includes(item)){
                    if(!newState.rightans.includes(item)){
                        newState.rightans = [...newState.rightans, item]
                    }
                }else 
                    if(!newState.wrongans.includes(item)){
                        newState.wrongans = [...newState.wrongans, item]
                    }
                    
            })
           
            
             break;
        
        default:
            break;
    }
    return newState
}

export default reducer