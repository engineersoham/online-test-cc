import {screen, render} from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../Store';
import Results from '../Result/Results';

test('snapshot for result page',()=>{
    const res = render(
       <BrowserRouter>
          <Provider store={store}> <Results /></Provider>
       </BrowserRouter>
   )
   expect(res).toMatchSnapshot()
       
})


test('snapshot for result page',()=>{
     render(
        <BrowserRouter>
           <Provider store={store}> <Results /></Provider>
        </BrowserRouter>
    )
    
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument()
})

test('result style check',()=>{
    render(
        <BrowserRouter>
           <Provider store={store}> <Results /></Provider>
        </BrowserRouter>
    )
        const peichart = screen.getByTitle('peichart');
        expect(peichart).toHaveStyle('borderRadius: 50%')
        expect(peichart).toBeInTheDocument()

})