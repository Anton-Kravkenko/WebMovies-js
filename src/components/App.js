import { getAuth } from 'firebase/auth'
import React, { useEffect } from "react";
import "../App.css";
import axios from "axios";
import FavoritesPage from "./FavoritePage";
import LeftBar from "./leftBar";
import MainBlock from "./MainContent";
import MovieDetails from "./movie-details";
import Search from "./Search";
import AdminPanel from "./AdminPanel.jsx";
import PageNotFound from "./PageNotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
export const FilmContext = React.createContext();
function App() {
  const [Film, setFilm] = React.useState([]);
  const [News, setNews] = React.useState([]);
  const [FavoritesMovie, setFavoritesMovie] = React.useState([]);
  const [SearchValue, SetSearchValue] = React.useState("");
  
  useEffect(() => {
  
    const FavoritesListLoad = JSON.parse(localStorage.getItem('Favorites'))
    if(FavoritesListLoad) {
  setFavoritesMovie(FavoritesListLoad)
    } else {
      setFavoritesMovie([])
    }
  
  
  
    const FetchFilm = async () => {
      axios
        .get("https://633689678aa85b7c5d2e0915.mockapi.io/Movie/")
        .then(function (response) {
          setFilm(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
  
    const FetchNews = async () => {
      axios
        .get("https://633689678aa85b7c5d2e0915.mockapi.io/News")
        .then(function (response) {
          setNews(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    FetchFilm();
    FetchNews();
  }, []);

  const filteringAll = () => {
    SetSearchValue("");
  };

  const filteringComedy = () => {
    SetSearchValue("Comedy");
  };

  const filteringFantasy = () => {
    SetSearchValue("Fantasy");
  };

  const filteringShoter = () => {
    SetSearchValue("Shoter");
  };

  const filteringHorror = () => {
    SetSearchValue("Horror");
  };

  const filteringDrama = () => {
    SetSearchValue("Drama");
  };
  const SaveToLocalStorage = (items) => {
    localStorage.setItem('Favorites', JSON.stringify(items));
  }
  return (
    <FilmContext.Provider
      value={{
        FavoritesMovie,
        setFavoritesMovie,
        SearchValue,
        SetSearchValue,
        SaveToLocalStorage,
        filteringAll,
        filteringComedy,
        filteringFantasy,
        filteringShoter,
        filteringDrama,
        filteringHorror,
        Film,
        News,
      }}
    >
      <Router>
        <div className="Wrapper">
          <LeftBar />
          <Routes>
            <Route path="Register" element={<Register />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="Main" index element={<MainBlock />}></Route>
            <Route path="Search" element={<Search />}></Route>
            <Route path="/AdminPanel" element={<AdminPanel />}></Route>
            <Route path="/Favorites" element={<FavoritesPage />}></Route>
            <Route
              path={"/movie-details/:MovieName"}
              element={<MovieDetails />}
            ></Route>
            <Route path="*" element={<PageNotFound />} />
            />
          </Routes>
        </div>
      </Router>
    </FilmContext.Provider>
  );
}

export default App;
