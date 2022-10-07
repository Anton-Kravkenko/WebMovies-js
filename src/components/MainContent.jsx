
import React from 'react';
import {Link} from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/parallax';
import "swiper/css/free-mode";
import { Navigation, Parallax, A11y, FreeMode } from 'swiper';
import 'swiper/css';

function MainBlock({Film, News, filteringAll, filteringComedy, filteringFantasy, filteringShoter, filteringHorror, filteringDrama,}) {
	
	function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}


	return (
		<div className='Main__wraper_Content'>
		<h1 className='First_text'>AntonKrav Cinema</h1>
			<div className='Filter_block'>
				<Link to="Search"><button className='filter_element' onClick={filteringAll}>🍟 All</button></Link>
					<Link to="Search">	<button  className='filter_element'   onClick={filteringFantasy} >🙄 Fantasy</button></Link>
					<Link to="Search">	<button className='filter_element' onClick={filteringComedy}>🤣 Comedy</button></Link>
					<Link to="Search"><button className='filter_element' onClick={filteringShoter}>💣 Shoter</button></Link>
					<Link to="Search">	<button className='filter_element' onClick={filteringHorror}>😱 Horror</button></Link>
					<Link to="Search"><button className='filter_element' onClick={filteringDrama}>😭 Drama</button></Link>
		
			</div>
			
			<div className='MainBaners'>
				
			 {getMultipleRandom(Film, 1).map(items => (

        <div className="Film_Map_content"   style={{  backgroundImage: `url(${items.MovieAvatar})` }} >
	        	<Link to={"/movie-details"}
 state={{ MovieName: items.MovieName,
          MovieAvatar: items.MovieAvatar,
	        YearsOld: items.YearsOld,
	        rating: items.rating,
	 Desk: items.Description,
  Genre: items.genre,
Duration: items.Duration,
	 id: items.id,
	 	 Video: items.video,
 }}
	>
	        <div className='Text_content_baner' key={items.id}>
	 <h1 className='Movie_name_text'>{items.MovieName}</h1>
	        <h4  className='Description_text'>{items.Description.slice(0,135)}...</h4>
	        <p className='info_content_text'>{items.YearsOld} | {items.genre} | {items.Duration}</p>
		        </div>
	        </Link>
        </div>

      ))}
			
			
							 {getMultipleRandom(News, 1).map(News => (
								 <div className='Orange_back'  key={News.id} >
        <div className="News_Maping_content_block" >
		<img src={News.NewsBaner} className='Image_in_news' alt="news!" />
	         <h1 className='Hot_news_text'>🔥 Hot News!</h1>
	 <h1 className='News_name_text'>{News.Newsname}</h1>
	        <p className='date_news_text'>{News.Data}</p>
		     
        </div>
	 </div>
      ))}
			</div>
		
					<h1 className='Specialforyou'>Special for you</h1>
			
			
			
			
			
			<div className='Film_renders_swiper_element'>
				    <Swiper freeMode={true} modules={[Navigation, Parallax, FreeMode,A11y ]}
      spaceBetween={30}
      slidesPerView={"auto"}
       parallax
        navigation
    >
			{Film.map(items => (
<div className='Film_render_main_block'>

		<SwiperSlide >
				<Link to={"/movie-details"}
 state={{ MovieName: items.MovieName,
          MovieAvatar: items.MovieAvatar,
	        YearsOld: items.YearsOld,
	        rating: items.rating,
	 Desk: items.Description,
  Genre: items.genre,
Duration: items.Duration,
	 id: items.id,
	 Video: items.video,
 }}
	>
     <img src={items.MovieAvatar} className='Image_in_Films_block'  key={items.id} alt='Movie-avatar'/>
	    <div className='Text__down_image'>
	 <h1 className='Film_render_Names'>{items.MovieName}</h1>
	        <p className='Film_render_years_rating'>{items.YearsOld} ⭐{items.rating}</p>
		    
		    </div>
					</Link>
		  </SwiperSlide>
        </div>

      ))}
    </Swiper>
				</div>
			
			
			
		</div>
	);
};

export default MainBlock;
