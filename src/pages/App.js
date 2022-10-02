import React from "react";
import '../App.css';
import LeftBar from "../components/leftBar";
import MainBlock from "../components/MainContent";
import Search from "../components/Search";
import AdminPanel from "../components/AdminPanel";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Register from "../components/Register";
import Login from "../components/Login";
function App() {
  const [Left_menu_effect, setLeft_menu_effect] = React.useState("")
  return (
  
  <Router>
    <div className="Wrapper">
   
    <LeftBar/>
    
       <Routes>
          <Route path="/Register" element={ <Register />}> </Route>
          <Route path="/login" element={  <Login />}> </Route>
          <Route path="/Search" element={<Search />}></Route>
          <Route path="/" element={  <MainBlock/> }></Route>
             <Route path="/AdminPanel" element={  <AdminPanel/> }></Route>
        </Routes>
        
    </div>
    </Router>
  );
}

export default App;
