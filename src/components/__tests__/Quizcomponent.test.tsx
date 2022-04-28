import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Qu1 from "../questions/Qu1";
import Question from "../QuizPage/Question";
import QuizPage from "../QuizPage/QuizPage";

test('test for quiz page',()=>{
    const tree = render(
        <BrowserRouter><QuizPage data={()=>{}}/></BrowserRouter>
    )
    expect(tree).toMatchSnapshot()
})

test('snapshot for questionpage',()=>{
    const que = render(
        <BrowserRouter>
        <Question 
        item={()=>{}} 
        currPage={()=>{}}
        data={()=>{}}
        prevQue={()=>{}}
        nextQue={()=>{}}
        />
        </BrowserRouter>
    )
    expect(que).toMatchSnapshot()
})