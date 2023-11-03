import { Route, Routes } from "react-router-dom";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Navbar from "./component/Navbar";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div >
      <Navbar/>
     <Routes>
     <Route path="/" element={<ProductAll />} />
     <Route path="/login" element={<Login />} />
     <Route path="/detail/:id" element={<ProductDetail />} />
     </Routes>
    </div>
  );
}

export default App;
