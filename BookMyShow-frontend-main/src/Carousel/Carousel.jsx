import React from "react";										
import Carousel from "react-multi-carousel";										
import "react-multi-carousel/lib/styles.css";										
import './Carousel.css'	
import Home from '../Pages/Home'

import image1 from './inn1.png'	
import image2 from './inn2.png'	
import image3 from './inn3.png'	
import image4 from './inn4.png'	
import image5 from './inn5.png'			
import Poster  from "../Poster/Poster";	
import Form from '../Form/Form'

										
const MultiItemCarousel = () => {										
const responsive = {										
mobile: {										
breakpoint: { max: 764, min: 0 },										
items: 1,										
},										
tablet: {										
breakpoint: { max: 1124, min: 764 },										
items: 2,										
},										
desktop: {										
breakpoint: { max: 2000, min: 1124 },										
items: 2,										
},										
};										
const autoPlaySpeed = 3000; // 3 seconds per slide										
										
return (	
	<div>		
		<div>
   <Poster/>
		</div>						
<Carousel
responsive={responsive}										
autoPlay={true}										
autoPlaySpeed={autoPlaySpeed}										
infinite={true}										
>										
										
<img
className="image"
src={image1}																				
/>										
<img	
	className="image"								
src={image2}														
/>										
<img	
	className="image"								
src={image3}/>										
<img	
className="image"									
src={image4}													
/>										
<img										
className="image"
src={image5}													
/>										
<img										
className="image"
src={image3}														
/>																				
</Carousel>	
   <div>
   <Home/>
   </div>
   <div>
	<Form />
   </div>
</div>										
);										
};										
										
export default MultiItemCarousel;										
										
										
										
										