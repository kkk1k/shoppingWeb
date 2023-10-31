import Homepage from './page/Homepage';
import AboutPage from './page/AboutPage';
import {Routes, Route, Navigate} from "react-router-dom";
import Productpage from './page/Productpage';
import Detail from './page/detail';
import LoginPage from './page/LoginPage';
import UserPage from './page/userPage';
import { useState } from 'react';
function App() {
  const [authenticate, setAuthenticate] = useState(true);
  const PrivateRoute = () =>{
    return  authenticate == true?<UserPage/>:<Navigate to="/login"/>
  }
  return (
    <div >
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/product' element={<Productpage/>}/>
        <Route path='/product/:id' element={<Detail/>}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/user' element={<PrivateRoute/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
