import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Register from './Pages/Shared/Register/Register';
import Donation from './Pages/Donation/Donation';
import Login from './Pages/Shared/Login/Login';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/donation" element={<Donation></Donation>}></Route>
        <Route path="/event" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Home></Home>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
