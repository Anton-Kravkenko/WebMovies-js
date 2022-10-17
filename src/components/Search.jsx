import React from "react";
import { Link } from "react-router-dom";
import { FilmContext } from "./App";

const Search = () => {
  const {
    SearchValue,
    SetSearchValue,
    filteringAll,
    filteringComedy,
    filteringFantasy,
    filteringShoter,
    filteringDrama,
    filteringHorror,
    Film,
    News,
  } = React.useContext(FilmContext);
  return (
    <div className="Main__wraper_Content">
      <h1 className="First_text">Search 🔎</h1>

      <div className="Filter_block">
        <button className="filter_element" onClick={filteringAll}>
          🍟 All
        </button>
        <button className="filter_element" onClick={filteringFantasy}>
          🙄 Fantasy
        </button>
        <button className="filter_element" onClick={filteringComedy}>
          🤣 Comedy
        </button>
        <button className="filter_element" onClick={filteringShoter}>
          💣 Shoter
        </button>
        <button className="filter_element" onClick={filteringHorror}>
          😱 Horror
        </button>
        <button className="filter_element" onClick={filteringDrama}>
          😭 Drama
        </button>
        <input
          className="SearchValue"
          placeholder="Search.."
          value={SearchValue}
          onChange={(e) => SetSearchValue(e.target.value)}
        />
      </div>

      <div className="Film_Wrapeer">
        {Film.filter((items) =>
          (items.MovieName + items.genre + items.YearsOld + items.rating)
            .toLowerCase()
            .includes(SearchValue.toLowerCase())
        ).map((items) => (
          <div className="Film_render_main_block">
            <Link
              to={`/movie-details/${items.MovieName}`}
            >
              <img
                src={items.MovieAvatar}
                key={items.id}
                className="Image_in_Films_block_search"
                alt={"Load..."}
              />
              <div className="Text__down_image">
                <h1 className="Film_render_Names">{items.MovieName}</h1>
                <p className="Film_render_years_rating">
                  {items.genre} | {items.YearsOld} ⭐{items.rating}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
