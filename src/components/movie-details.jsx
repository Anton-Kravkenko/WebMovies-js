import axios from 'axios'
import React, { useEffect } from "react";
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { FilmContext, MovieContext } from './App'
import { useParams } from "react-router-dom";
const MovieDetails = () => {
  let params = useParams();
  const navigate = useNavigate();
  const [CurrentMovie, SetcurrentMovie] = React.useState({})
  const [isFavorite, setIsFavorite] = React.useState(false)
  const { FavoritesMovie,setFavoritesMovie, SaveToLocalStorage } = React.useContext(FilmContext);
  useEffect( () => {
    const FetchCurrentMovie = async () => {
      axios
        .get(`https://633689678aa85b7c5d2e0915.mockapi.io/Movie/?MovieName=${params.MovieName}`)
        .then(function (res) {
          SetcurrentMovie(res.data[0])
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    FetchCurrentMovie()
  }, [])
  
 
  
  const AddToFavorites = () => {
    setFavoritesMovie([...FavoritesMovie, CurrentMovie])
    setIsFavorite(true)
  }
  
  
  useEffect(() => {
    SaveToLocalStorage(FavoritesMovie)
  }, [AddToFavorites])
  
  return (
    <div className="Main__wraper_Content">
      <h1 onClick={() => navigate(-2)} className="Go_back_in_movie_page">
        <BiArrowBack /> Go back
      </h1>
      <div className="first_name_addtoBookmark">
        <h1 className="Film_render_Names1">{CurrentMovie.MovieName}</h1>
  
        {(!FavoritesMovie.find(obj => obj.id === CurrentMovie.id)) ?
          <button onClick={AddToFavorites} className="add_to_save_in_movie_app">
          <BsBookmark />
          Add to save
          </button>  : <Link to={'/Favorites'} className='Alredy_add_to_favorites'>Lets to Favorites  😍</Link>  }
       
      </div>
      <div className="Main_film_and_fact_wrapeer">
        <iframe src={CurrentMovie.video} className="Film_image_in_movie_page" />

        <div className="Orange_back">
          <div className="Film_interesting_fact">
            <h1 className="Hot_Film_in_film_page">😎 Hot Film!</h1>
            <h1 className="Text_in_film_block_all_fact">
              1️⃣ Years: {CurrentMovie.YearsOld}
            </h1>
            <h2 className="Text_in_film_block_all_fact">2️⃣ Genre: {CurrentMovie.genre}</h2>
            <h3 className="Text_in_film_block_all_fact">
              3️⃣ Rating: ⭐{CurrentMovie.rating}
            </h3>
            <h3 className="Text_in_film_block_all_fact">
              4️⃣ Duration: {CurrentMovie.Duration}
            </h3>
            <p className="date_news_text">{CurrentMovie.Description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
