import React,{useEffect} from "react";
export default useEffect(() => {
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
