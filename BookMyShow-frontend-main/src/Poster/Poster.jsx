import React from 'react'
import './Poster.css'
import image6 from './inn6.png'
import image7 from './inn7.png'



function Poster() {
  return (
    <div className='img_div' 
    style={{backgroundImage:`url(${image7})`}}>
        <img src={image6} className='img-fix'/>
        <div style={{marginTop:"7%"}}>
         <p className='pera_img_text'>
          <span className='header'> Avengers: Endgame</span><br/>
        Avengers: Endgame is a 2019 American superhero film based 
        on the Marvel Comics <br/>
        superhero team the Avengers. Produced by Marvel Studios and distributed by Walt <br/>
        Disney Studios Motion Pictures, it is the direct sequel to Avengers: Infinity War <br/>
        (2018) and the 22nd film in the MarvelCinematic Universe (MCU). <br/>
        <a href='Home'>
          Book now
        </a>
        </p>
        </div>
        </div>
  )
}

export default Poster