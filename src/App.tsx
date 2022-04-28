import { useEffect, useState } from 'react';
import { Route, Routes  } from 'react-router-dom';
import EntryPage from './components/EntryPage';
import LoginPage from './components/LoginPage';
import Nav from './components/Nav';
import Result from './components/questions/Result';
import QuizPage from './components/QuizPage/QuizPage';
import SignUp from './components/SignUp';
import { englishQuestions, hindiQuestions, kannadaQuestions } from './components/QuestionBank/QuestionBank';



function App() {

  const [language, setLanguage]: any = useState('');
  const [data, setData] :any = useState([]);
  
  useEffect(()=>{
    console.log(language);
    if(language === 'English'){
      setData(englishQuestions)
    }else if(language === 'Hindi'){
      setData(hindiQuestions)
    }else if(language === 'Kannada'){
      setData(kannadaQuestions)
    }
  },[language])
  
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='signup' element={<SignUp/>}/>
      <Route path='/enterpage' element={<EntryPage setLanguage = {setLanguage}/>}/>
      <Route path='/result' element={<Result/>}/>

      <Route
          path="/quiz"
          element={
            <QuizPage
              data={data}
            />
          }
        />
    </Routes>
    </>
  );
}

export default App;