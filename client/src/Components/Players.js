import React from 'react';



const Card = props => {
   return (
     <div className='card'>
       <h2>Name: {props.name}</h2>
       <h4>Country: {props.country}</h4>
       <p>Searches#: {props.searches}</p>  
     </div>  
   )
}


export default Card;