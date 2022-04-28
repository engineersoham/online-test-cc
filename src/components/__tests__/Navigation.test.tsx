import { Pagination } from '@mui/material';
import {screen, render, fireEvent, getByRole} from '@testing-library/react'
import { Provider } from 'react-redux';
import {BrowserRouter, Link} from 'react-router-dom';
import { store } from '../../Store';
import EntryPage from '../EntryPage';
import Nav from '../Nav';
import SignUp from '../SignUp';


test('get snapshot of navbar', ()=>{
    const tree = render(
        <BrowserRouter><Nav></Nav></BrowserRouter>
    )
    expect(tree).toMatchSnapshot()
})

describe('test Signup button', ()=>{
    it('sign Up button test', ()=>{
        render(
            <BrowserRouter><Nav></Nav></BrowserRouter>
        )
        const text = screen.getByText('Sign Up')
        expect(text).toBeInTheDocument()
    });

    test('signup page test',()=>{
        render(
            <BrowserRouter><SignUp/></BrowserRouter>
        )
        expect(screen.getAllByRole('textbox').length).toBe(3)
        expect(screen.getAllByRole('radio').length).toBe(3)
        expect(screen.getByRole('button')).toBeInTheDocument()
    });

    test('button function',()=>{
        const mockfun = jest.fn();
        render(
            <BrowserRouter><EntryPage setLanguage={mockfun}/></BrowserRouter>
        );
        
        fireEvent.click(screen.getByText('Start Test'));
        expect(mockfun).toHaveBeenCalled();
    })

    test('test for enter page',()=>{
        render(
            <BrowserRouter><EntryPage setLanguage={()=>{}}/></BrowserRouter>
        );
        expect(screen.getByText('Start Test')).toBeInTheDocument()
            screen.debug()
    })

})