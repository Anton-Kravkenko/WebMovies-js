import React, {useEffect} from "react";
import '../App.css';
import axios from "axios";
import Favorites from "../components/Favorites";
import LeftBar from "../components/leftBar";
import MainBlock from "../components/MainContent";
import MovieDetails from "../components/movie-details";
import Search from "../components/Search";
import AdminPanel from "../components/AdminPanel";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Register from "../components/Register";
import Login from "../components/Login";
function App() {
  const [Film, setFilm] = React.useState([]);
		const [News, setNews] = React.useState([]);
    const [SearchValue, SetSearchValue] = React.useState('')
	useEffect(() => {

axios.get('https://633689678aa85b7c5d2e0915.mockapi.io/Movie/').then(function (response) {
		setFilm(response.data)
  })
  .catch(function (error) {
    console.log(error);
  })
		
		axios.get('https://633689678aa85b7c5d2e0915.mockapi.io/News').then(function (response) {
		setNews(response.data)
	 
  })
  .catch(function (error) {
    console.log(error);
  })
}, [])
  
  
  
  const filteringAll = () => {
	SetSearchValue('')
	}
	
	const filteringComedy = () => {
	SetSearchValue('Comedy')
	}
	
		const filteringFantasy = () => {
	SetSearchValue('Fantasy')
	}
	
		const filteringShoter = () => {
	SetSearchValue('Shoter')
	}
	
		const filteringHorror = () => {
	SetSearchValue('Horror')
	}
	
		const filteringDrama = () => {
	SetSearchValue('Drama')
	}
	
  return (
  
  <Router>
    <div className="Wrapper">
    <LeftBar/>
       <Routes>
          <Route path="/Register" element={ <Register />}> </Route>
          <Route path="/login" element={  <Login />}> </Route>
            <Route path="/" element={  <MainBlock SearchValue={SearchValue} SetSearchValue={SetSearchValue} Film={Film} News={News} filteringDrama={filteringDrama} filteringHorror={filteringHorror}  filteringShoter={filteringShoter} filteringFantasy={filteringFantasy} filteringComedy={filteringComedy}  filteringAll={filteringAll }/> }></Route>
         
         
         
          <Route path="/Search" element={<Search SearchValue={SearchValue} SetSearchValue={SetSearchValue} Film={Film} filteringDrama={filteringDrama} filteringHorror={filteringHorror}  filteringShoter={filteringShoter} filteringFantasy={filteringFantasy} filteringComedy={filteringComedy}  filteringAll={filteringAll }/>}></Route>
         
         
       
         
         
             <Route path="/AdminPanel" element={  <AdminPanel/> }></Route>
            <Route path="/Favorites" element={  <Favorites/> }></Route>
           <Route path="/movie-details" element={  <MovieDetails/> }></Route>
        </Routes>
        
    </div>
    </Router>
  );
}

export default App;
