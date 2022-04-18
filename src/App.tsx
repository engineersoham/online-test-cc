import { useSelector } from 'react-redux';
import { Route, Routes,  } from 'react-router-dom';
import Drawer from './components/Drawer';
import EntryPage from './components/EntryPage';
import LoginPage from './components/LoginPage';
import Nav from './components/Nav';
import Qu1 from './components/questions/Qu1';
import Qu2 from './components/questions/Qu2';
import Qu3 from './components/questions/Qu3';
import Qu4 from './components/questions/Qu4';
import Qu5 from './components/questions/Qu5';
import Result from './components/questions/Result';
import SignUp from './components/SignUp';
import {initialValue} from './reducer/reducer'


function App() {
  const state = useSelector<initialValue, initialValue['drawer']>((state)=>state.drawer)
  
  return (
    <>
    <Nav/>
    
    {state ? <Drawer/> : null}
    <Routes>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='signup' element={<SignUp/>}/>
      <Route path='/enterpage' element={<EntryPage/>}/>
      <Route path='/que1' element={<Qu1/>}/>
      <Route path='/que2' element={<Qu2/>}/>
      <Route path='/que3' element={<Qu3/>}/>
      <Route path='/que4' element={<Qu4/>}/>
      <Route path='/que5' element={<Qu5/>}/>
      <Route path='/result' element={<Result/>}/>
    </Routes>
    </>
  );
}

export default App;