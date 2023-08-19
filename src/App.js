import './App.css';
import Header from './components/Header';
import News from './components/News';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Profil from './components/Profil';
import Login from './components/Login';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setValidation } from './redusers/formReduser';



function App() {
  const dispatch = useDispatch();
  const valid = localStorage.getItem("autorization");
  useEffect(() => {
    if(!valid || valid === 0){
      dispatch(setValidation(0))
    }else{
      dispatch(setValidation(1))
    };
    
    localStorage.removeItem("step")
  },[valid])

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='news' element={<News/>}/>
        <Route path='profil' element={<Profil/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
