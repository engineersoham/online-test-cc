import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

describe('app component',()=>{
    test('snap for app',()=>{
        const tree = render(
            <BrowserRouter><App/></BrowserRouter>
        );
        expect(tree).toMatchSnapshot()
    })
})