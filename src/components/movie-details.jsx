import React from 'react';
import {useLocation} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi"
import { BsBookmark } from "react-icons/bs"


const MovieDetails = () => {
	const {state} = useLocation();

	const {MovieName, MovieAvatar, YearsOld, rating, Desk, Genre, Duration, id, Video } = state;
	  const navigate = useNavigate();
	return (
			<div className='Main__wraper_Content'>
			
			<h1 onClick={() => navigate(-1)} className='Go_back_in_movie_page'>	<BiArrowBack/>  Go back </h1>
				<div className='first_name_addtoBookmark'>
				 <h1 className='Film_render_Names1'>{MovieName}</h1>
					<button className='add_to_save_in_movie_app'> <BsBookmark/>Add to save</button>
				</div>
				<div className='Main_film_and_fact_wrapeer'>
			  <iframe src={Video} className='Film_image_in_movie_page' />
					
					
					<div className='Orange_back'  key={id} >
        <div className="Film_interesting_fact" >
	         <h1 className='Hot_Film_in_film_page'>😎 Hot Film!</h1>
	 <h1 className='Text_in_film_block_all_fact'>1️⃣ Years: {YearsOld}</h1>
	         <h2 className='Text_in_film_block_all_fact'>2️⃣ Genre: {Genre}</h2>
	            <h3 className='Text_in_film_block_all_fact'>3️⃣ Rating: ⭐{rating}</h3>
	           <h3 className='Text_in_film_block_all_fact'>4️⃣ Duration: {Duration}</h3>
	        <p className='date_news_text'>{Desk}</p>
		     
        </div>
	 </div>
		
	
				</div>
				

		</div>
	);
};

export default MovieDetails;
