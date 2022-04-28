import  Quiz from '../components/Quiz' 
import { fireEvent, render, screen } from "@testing-library/react";
import Result from '../components/Result';

jest.mock("react-router-dom",()=>{
    return{
        
        useLocation:()=>{
            return{
                state:'english'
            }
        }
    }
})

describe('test for result componet',()=>{
    test('snap for result',()=>{
        const tree = render(
            <Result/>
        );
        expect(tree).toMatchSnapshot();
        screen.debug()
    })

    test('test for result componet',()=>{
        const mock = jest.fn();
        render(
            <Result/>
        );
        expect(mock).toBeDefined();
;
        const score = screen.getByText('Your Score is');
        expect(score).toBeInTheDocument();
        
        // const data = screen.getByTestId('data')
        // const data1 = screen.getByTestId('data1');
        // expect(data1).toBeInTheDocument()

    }
    )
})