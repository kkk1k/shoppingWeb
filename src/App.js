import { Navigate, Route, Routes } from "react-router-dom";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Navbar from "./component/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";
function App() {
  const [authenticate, setAuthenticate] = useState(false); // true면 로그인
  useEffect(() => {
    console.log(authenticate);
  }, [authenticate]);
  
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />

        <Route path="/" element={<ProductAll />} />

        <Route path="/detail/:id" element={<PrivateRoute authenticate={authenticate} />} />
      </Routes>
    </div>
  );
}

export default App;
