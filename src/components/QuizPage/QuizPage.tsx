import {  useState } from "react";

import Question from "./Question";

import Pagination from "./Pagination";

type Props = {
  data: any;
};

const QuizPage: React.FC<Props> = ({ ...props }) => {
  const [currPage, setCurrPage] = useState(0);

  const prevQue = () => {
    setCurrPage((prevState) => prevState - 1);
  };

  const nextQue = () => {
    setCurrPage((prevState) => prevState + 1);
  };

  return (
    <div>
      {props.data[currPage] !== undefined && (
        <div>
          <div style={{marginLeft:'35rem',marginTop:'10px', marginBottom:'3rem'}}>
          <Pagination
            data={props.data}
            currPage={currPage}
            setCurrPage={setCurrPage}
          />
         
          </div>
          <Question
            item={props.data}
            currPage={currPage}
            data={props.data[currPage]}
            prevQue={prevQue}
            nextQue={nextQue}
           
          />
        </div>
      )}
    </div>
  );
};
export default QuizPage;