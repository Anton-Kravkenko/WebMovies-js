import axios from "axios";
import React, {useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/parallax';
import "swiper/css/free-mode";
import { Navigation, Parallax, A11y, FreeMode } from 'swiper';
import 'swiper/css';
function MainBlock() {
	const [Film, setFilm] = React.useState([]);
		const [News, setNews] = React.useState([]);
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
	
	

	

	
	return (
		<div className='Main__wraper_Content'>
		<h1 className='First_text'>AntonKrav Cinema</h1>
			<div className='Filter_block'>
			<button className='filter_element'>🍟 All</button>
						<button className='filter_element'>🙄 Fantasy</button>
						<button className='filter_element'>🤣 Comedy</button>
						<button className='filter_element'>💣 Shoter</button>
						<button className='filter_element'>😱 Horror</button>
		<button className='filter_element'>😭 Drama</button>
			</div>
			
			<div className='MainBaners'>
				
			 {Film.slice(4,5).map(items => (

        <div className="Film_Map_content" key={items.id}  style={{  backgroundImage: `url(${items.MovieAvatar})` }} >
	        <div className='Text_content_baner'>
	 <h1 className='Movie_name_text'>{items.MovieName}</h1>
	        <h4  className='Description_text'>{items.Description.slice(0,135)}...</h4>
	        <p className='info_content_text'>{items.YearsOld} | {items.genre} | {items.Duration}</p>
		        </div>
        </div>

      ))}
			
			
							 {News.slice(0,1).map(News => (
								 <div className='Orange_back'  key={News.id} >
        <div className="News_Maping_content_block" >
		<img src={News.NewsBaner} className='Image_in_news' />
	         <h1 className='Hot_news_text'>🔥 Hot News!</h1>
	 <h1 className='News_name_text'>{News.Newsname}</h1>
	        <p className='date_news_text'>{News.Data}</p>
		     
        </div>
	 </div>
      ))}
			</div>
		
					<h1 className='Specialforyou'>Special for you</h1>
			
			
			
			
			
			
			<div className='Film_renders_swiper_element'>
				    <Swiper freeMode={true}
				            modules={[Navigation, Parallax, FreeMode,A11y ]}
      spaceBetween={30}
      slidesPerView={"auto"}
       parallax
        navigation
    >
			{Film.map(items => (
<div className='Film_render_main_block'>
	 <SwiperSlide key={items.id}>
     <img src={items.MovieAvatar} className='Image_in_Films_block' />
	    <div className='Text__down_image'>
	 <h1 className='Film_render_Names'>{items.MovieName}</h1>
	        <p className='Film_render_years_rating'>{items.YearsOld} ⭐{items.rating}</p>
		    </div>
		  </SwiperSlide>
        </div>

      ))}
    </Swiper>
				</div>
			
			
			
		</div>
	);
};

export default MainBlock;
