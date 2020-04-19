import React from 'react';



const Card = props => {
   return (
    <div className='player'> 
      <div className='card'>
        <h2>{props.name}</h2>
        <h4>{props.country}</h4>
        <p>{props.searches}</p>  
      </div>
    </div>    
   )
}


export default Card;