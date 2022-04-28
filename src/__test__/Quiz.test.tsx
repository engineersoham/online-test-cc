import  Quiz from '../components/Quiz' 
import { fireEvent, render, screen } from "@testing-library/react";

jest.mock("react-router-dom",()=>{
    return{
        useNavigate:()=>jest.fn(),
        useLocation:()=>{
            return{
                state:'english'
            }
        }
    }
})

describe('test for quiz componet',()=>{
    test('snap for quiz',()=>{
        const tree = render(
            <Quiz/>
        );
        expect(tree).toMatchSnapshot();
        screen.debug()
    })

    test('test for quiz componet',()=>{
        render(
            <Quiz/>
        );

        const frd = screen.getByTestId('frd')
        const mcq = screen.getByTestId('mcq-0');
        fireEvent.click(mcq);
        fireEvent.click(frd);

        const fill = screen.getByTestId('fill');
        // fireEvent.change(fill, {target : {value :'test'}});
        fireEvent.click(frd);

        const bool = screen.getByTestId('bool-0');
        fireEvent.click(bool);
        fireEvent.click(frd);

        const match = screen.getByTestId('match-0');
        fireEvent.click(match);
        fireEvent.click(frd);

        const multi = screen.getByTestId('multi-0');
        fireEvent.click(multi);
        fireEvent.click(frd);

        const back = screen.getByTestId('back');
        fireEvent.click(back);
        const btn = screen.getByTestId('btn-0')
        fireEvent.click(btn);

        const submit = screen.getByTestId('submit');
        fireEvent.click(submit)
        
    })
})