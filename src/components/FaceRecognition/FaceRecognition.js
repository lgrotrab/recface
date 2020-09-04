import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) =>{
    console.log(box);
    return(
        <div className='center pt2'>  
            <div className='absolute'>
                <img id='inputImage' alt={''} src={imageUrl} width='500px' height='auto'/>
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, left: box.leftCol, bottom: box.bottomRow}}></div>
            </div>  
         </div>
    );
}

export default FaceRecognition;