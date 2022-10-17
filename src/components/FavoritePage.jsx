import React from "react";
import { Link } from 'react-router-dom'
import { FilmContext } from './App'
import {RiDeleteBin5Line} from 'react-icons/ri'
function FavoritesPage() {
  const { FavoritesMovie,setFavoritesMovie,SaveToLocalStorage } = React.useContext(FilmContext);
  const DeleteFavoritesMovie = id => {
  const copy = [...FavoritesMovie]
    setFavoritesMovie(copy.filter(item => item.id !== id));
    SaveToLocalStorage(copy.filter(item => item.id !== id));
  }
  return (
    <div className="Main__wraper_Content">
      <h1 className="First_text_Favorites">You favorites Movie 💾</h1>
      <div className="Film_Wrapeer">
      {FavoritesMovie.map(items => (
        <div className="Film_render_main_block">
          <Link>
           <div className='Image_and_deleteButton'>
             <Link to={`/movie-details/${items.MovieName}`}>
             <img
               src={items.MovieAvatar}
               key={items.id}
               className="Image_in_Films_block_search"
               alt={"Load..."}
             />
             </Link>
             <RiDeleteBin5Line onClick={() => DeleteFavoritesMovie(items.id)} className='Delete_From_favorites'/>
           </div>
            <div className="Text__down_image">
              <Link  to={`/movie-details/${items.MovieName}`} className="Film_render_Names">{items.MovieName}</Link>
              <Link  to={`/movie-details/${items.MovieName}`} className="Film_render_years_rating">
                {items.genre} | {items.YearsOld} ⭐{items.rating}
              </Link>
            </div>
          </Link>
        </div>
      ))}
      </div>
    </div>
  );
}

export default FavoritesPage;
