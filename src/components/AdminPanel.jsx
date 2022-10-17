import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { Link, Navigate } from "react-router-dom";
const AdminPanel = () => {
  let navigate = useNavigate();
  const auth = getAuth();
  const User = auth.currentUser;
  const [MovieName, SetMovieName] = React.useState("");
  const [YearsOld, SetYearsOld] = React.useState("");
  const [genre, Setgenre] = React.useState("");
  const [Duration, SetDuration] = React.useState("");
  const [Description, SetDescription] = React.useState("");
  const [rating, Setrating] = React.useState("");
  const [Image, SetImage] = React.useState("");
  const [Confirm_add_film, SetConfirm_add_film] = React.useState("");
  const [file, Setfile] = React.useState("");
  const [UserAdmin, SetUserAdmin] = React.useState(false);
  let nowDate = new Date();
  const HandleAddFilm = (e) => {
    e.preventDefault();
    axios.post("https://633689678aa85b7c5d2e0915.mockapi.io/Movie/", {
      createdAt: nowDate,
      MovieName: MovieName,
      MovieAvatar: Image,
      YearsOld: YearsOld,
      genre: genre,
      Duration: Duration,
      Description: Description,
      id: nowDate,
      rating: rating,
      video: file,
    });
    SetConfirm_add_film("You film add!!!");
    setTimeout(() => {
      return navigate("/Main");
    }, 1000);
  };
  const Alldata = () => {
    return (
      <div className="add_film_wrapper">
        <h1 className="First_text"> Admin page 🔐</h1>
        <form className="Form_in_add_film_wrapper" onSubmit={HandleAddFilm}>
          <input
            value={MovieName}
            onChange={(event) => SetMovieName(event.target.value)}
            type="text"
            placeholder="MovieName"
            className="Name_in_add_film"
          />
          <input
            value={YearsOld}
            onChange={(event) => SetYearsOld(event.target.value)}
            type="text"
            placeholder="YearsOld"
            className="Years_in_add_film"
          />
          <input
            value={genre}
            onChange={(event) => Setgenre(event.target.value)}
            type="text"
            placeholder="genre"
            className="genre_in_add_film"
          />
          <input
            value={Duration}
            onChange={(event) => SetDuration(event.target.value)}
            className="duration_in_add_film"
            type="text"
            placeholder="Duration"
          />
          <textarea
            value={Description}
            onChange={(event) => SetDescription(event.target.value)}
            className="Desk_in_add_film"
            placeholder="Description"
          />
          <input
            value={rating}
            onChange={(event) => Setrating(event.target.value)}
            className="rating_in_add_film"
            type="text"
            placeholder="rating"
            maxLength={3}
          />
          <input
            value={Image}
            onChange={(event) => SetImage(event.target.value)}
            className="rating_in_add_film"
            type="text"
            placeholder="Image link (url)"
          />

          <input
            value={file}
            onChange={(event) => Setfile(event.target.value)}
            className="rating_in_add_film"
            type="text"
            placeholder="Video link(url)"
          />
          <button type="submit" className="button_in_add_film">
            Send film
          </button>
        </form>
        {Confirm_add_film && (
          <p className="Happy_message">{Confirm_add_film}</p>
        )}
      </div>
    );
  };

  return (
    <div className="Main__wraper_Content">
      {(User && Alldata()) || (
        <Link className="Link_in_Register_and_login_page" to={"/Login"}>
          Please, go to auth page
        </Link>
      )}
    </div>
  );
};

export default AdminPanel;
