import React from 'react';
import { getByText, render, screen,fireEvent, act } from '@testing-library/react';
import App from './App';
import {BrowserRouter, Link} from 'react-router-dom';
import Nav from './components/Nav';
import SignUp from './components/SignUp';
import { Login } from '@mui/icons-material';
import LoginPage from './components/LoginPage';
import EntryPage from './components/EntryPage';
import { Provider } from 'react-redux';
import { store } from './store';
import Drawer from './components/Drawer';
import Qu1 from './components/questions/Qu1';
import Qu2 from './components/questions/Qu2';
import Qu3 from './components/questions/Qu3';
import Qu4 from './components/questions/Qu4';
import Qu5 from './components/questions/Qu5';
import Result from './components/questions/Result';

it('snapshot for app file', ()=>{
  const component = render(
    <BrowserRouter>
    <Nav/>
    </BrowserRouter>
  )
  expect(component).toMatchSnapshot()
})


it('snapshot for app file', ()=>{
  const component = render(
    <BrowserRouter>
    <LoginPage/>
    </BrowserRouter>
  )
  expect(component).toMatchSnapshot()
})

it('snapshot for app file', ()=>{
  const component = render(
    <BrowserRouter>
    <SignUp/>
    </BrowserRouter>
  )
  expect(component).toMatchSnapshot()
})


describe('test for Navigation bar', () => {
  it('test for login and sign up buttons', () => {
    render(
      <BrowserRouter>
        <Nav/>
      </BrowserRouter>
    );
   
  const  getByTest  = screen.getByText('Login') 
  expect(getByTest).toBeInTheDocument();

  const { getByTestId } = render(<a data-testid='link' href="/signup">Sign Up</a>);
  expect(getByTestId('link')).toHaveAttribute('href', '/signup');
  })
})


describe('test for sign up component', () => {
  it('test for sign up component ', () => {
    render(
      <BrowserRouter>
          <SignUp />
       </BrowserRouter>
    );
  
    const textbox = screen.getAllByRole('textbox')
    const button = screen.getByRole('button')
    const radiobtn = screen.getAllByRole('radio')

    expect(textbox.length).toBe(3);
    expect(button).toBeInTheDocument();
    expect(radiobtn.length).toBe(3);

  });
});

describe('test for login page', () => {
  test('tst for login page', () => {
    render(
      <BrowserRouter>
      <LoginPage/>
      </BrowserRouter>
    );

    const btn = screen.getByRole('button');
    const textfield = screen.getByRole('textbox');

    expect(textfield).toBeInTheDocument()
    expect(btn).toBeInTheDocument();
  })
})

 describe('test for entry page nd drawer', () => {
   test('test for enttry page', () => {
      render(
        <BrowserRouter>
        <Provider store={store}><EntryPage /></Provider>
        </BrowserRouter>
      );

      screen.debug()
   });
   

   test('test for drawer', ()=>{
     render(
       <BrowserRouter>
       <Provider store={store}><Drawer/></Provider>
       </BrowserRouter>
     );
     const radiobtn = screen.getAllByRole('radio');

     expect(radiobtn.length).toBe(5)
   })
 })

 describe('test for question components', () => {
   test('que1 componet', () => {
     render(
      <BrowserRouter>
          <Provider store={store}><Qu1/></Provider>
      </BrowserRouter>
     );
     expect(screen.getAllByRole('radio').length).toBe(4)
     screen.debug()
   });

   test('que2 componet', () => {
    render(
     <BrowserRouter>
         <Provider store={store}><Qu2/></Provider>
     </BrowserRouter>
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    screen.debug()
  });

  test('que3 componet', () => {
    render(
     <BrowserRouter>
         <Provider store={store}><Qu3 /></Provider>
     </BrowserRouter>
    );
    expect(screen.getAllByRole('radio').length).toBe(4)
    screen.debug()
  });

  test('que4 componet', () => {
    render(
     <BrowserRouter>
         <Provider store={store}><Qu4/></Provider>
     </BrowserRouter>
    );
    expect(screen.getAllByRole('radio').length).toBe(2)
    screen.debug()
  });

  test('que5 componet', () => {
    render(
     <BrowserRouter>
         <Provider store={store}><Qu5/></Provider>
     </BrowserRouter>
    );
    expect(screen.getAllByRole('radio').length).toBe(4)
    screen.debug()
  });


 })

 describe('test for result', ()=>{
   it('result test', () => {
     render(
       <BrowserRouter>
       <Provider store={store}><Result/></Provider>
       </BrowserRouter>
     );
     screen.debug();
   })
 })