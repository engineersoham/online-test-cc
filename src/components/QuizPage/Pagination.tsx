import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import  { initialValue } from '../../reducer/reducer'

type Props = {
  data: any;
  currPage: any;
  setCurrPage: any;
};

const Pagination: React.FC<Props> = ({ ...props }) => {
  const pageChange = (e: any) => {
    props.setCurrPage(Number(e.target.innerText) - 1);
  };

  const ansID = useSelector<initialValue, initialValue['ansID']> (state => state.ansID)

  return (
    <div >
      {props.data.map((item: any, idx:any) => {
        return (
          <Button
            key={idx}
            variant={ansID.includes(idx+1) ? 'contained' : "outlined" } 
            // variant='outlined'
            onClick={pageChange}
            style={{margin:'10px'}}
          >
            {props.data.indexOf(item) + 1}
          
          </Button>
        );
      })}
    </div>
  );
};

export default Pagination;