import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  let navigate = useNavigate();
  return <div className='Main__wraper_Content'> {navigate('/Main')} </div>
};

export default PageNotFound;
