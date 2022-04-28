import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Signup from "../components/Signup";

jest.mock("react-router-dom",()=>{
    return{
        useNavigate:()=>jest.fn()
    }
})

describe('app component',()=>{
    test('snap for signup',()=>{
        const tree = render(
            <Signup/>
        );
        expect(tree).toMatchSnapshot()
        screen.debug()
    })

    test('test elememt for signup',()=>{
        render(
            <Signup/>
        );
        const txt = screen.getByRole('textbox')
        const engrd = screen.getByTestId('english');
        const hrd = screen.getByTestId('hindi');
        const ord = screen.getByTestId('other');
        const btn = screen.getByRole('button')

        fireEvent.change(txt, {target:{value:'test'}})
        fireEvent.click(engrd)
        fireEvent.click(hrd)
        fireEvent.click(ord)
        fireEvent.click(btn)
        fireEvent.submit(btn)
    })
})