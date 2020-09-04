import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.jpg';


const Logo = () =>{
    return(
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} > 
                <img className="Tilt-inner" src={brain} alt='Logo'/>
            </Tilt> 
        </div>
    );
}

export default Logo;