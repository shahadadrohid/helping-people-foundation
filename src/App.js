import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Register from './Pages/Shared/Register/Register';
import Donation from './Pages/Donation/Donation';
import Login from './Pages/Shared/Login/Login';
import Home from './Pages/Home/Home/Home';
import Manage from './Pages/Manage/Manage';
import RequireAuth from './RequireAuth/RequireAuth';

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
        <Route path="/manage"
          element={
            <RequireAuth>
              <Manage></Manage>
            </RequireAuth>
          }></Route>
      </Routes>
    </div>
  );
}

export default App;
