// import { PieChart } from 'react-minimal-pie-chart';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { initialValue } from '../../reducer/reducer';


const Results = () => {
  const RIGHTANSWER = useSelector<initialValue, initialValue['rightans']>(state => state.rightans)
  const WRONGANSWER = useSelector<initialValue, initialValue['wrongans']>(state => state.wrongans)
  const scores = useSelector<initialValue, initialValue['score']>(state => state.score)
  const navigate = useNavigate()

  const start = scores * 60

  const mystyle = {
    height: '20rem',
    width: '20rem',
    backgroundColor: "red",
    backgroundImage: `conic-gradient(green 0deg, green ${start}deg,  red ${start}deg, red 360deg)`,
    borderRadius: "50%"

  }

  return (
    <div >
      
      <div style={{ marginLeft: 50, float: 'left' }}>
      <Button variant='contained' sx={{ml:2,mt:2, mb:1}} onClick={()=>{navigate('/enterpage')}}>Retake</Button>
        <h1 style={{ marginBottom: '40px' }}>Your score is <b>{scores}/6</b></h1>

        <h3><u>RIGHT_ANSWERS</u></h3>
      <ol style={{listStyleType: 'none'}}>
       {RIGHTANSWER.map((item:any) => {
          return (
            <li style={{ color: 'green', marginBottom: '10px' }}> <span style={{color:'black', marginRight:'10px'}}>Q{item.ID}. {item.QUE} </span> <br /> &rarr;  "{item.ANS}"  </li>
          )
        })}
       </ol>

        <h3 style={{ marginTop: '40px' }}><u>WRONG_ANSWERS</u></h3>
        <ol style={{listStyleType: 'none'}}>
        {WRONGANSWER.map((item:any) => {
          return (
            <li style={{ color: 'red', marginBottom: '10px' }}><span style={{color:'black', marginRight:'10px'}}>Q{item.ID}. {item.QUE}  </span><br /> &rarr; "{item.ANS}"  </li>
          )
        })}
        </ol>
      </div>

      <div style={{ float: 'right', marginRight: '10rem', marginTop: '5rem' }}>
      <div title='peichart' style={mystyle}></div>

        {/* <PieChart
          data={[
            { title: 'total', value: 6 - scores, color: 'red', totalValue: 6 },
            { title: 'your score', value: scores, color: 'green', totalValue: 6 }
          ]}
          radius={50}
        />; */}

        

      </div>


    </div>
  )
}

export default Results