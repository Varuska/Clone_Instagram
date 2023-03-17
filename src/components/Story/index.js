import { useEffect, useState } from 'react';
import './style.css';

export function Story() {

    const [story, setstory] = useState([])

    const [limitUsers, setLimitUsers] = useState(10)

    const slice = story.slice(0, limitUsers) 

        useEffect(() => {
            fetch(`https://api.github.com/users/Varuska/followers`)
                .then((response) => {
                    return response.json()
                })

                .then((result) => {
                    setstory(result)
                })

                .catch((err) => {
                    throw new Error(err)
                })
        }, [])

    return (

        <div className="container">
         <div className="user-elements">
           <div >  
              {slice.map((story, key) => (
               <div key={key}> 
                     <img className="image-user-story" src={`https://github.com/${story.login}.png`} /> 
                </div>
            
              ))}
    
         </div>
          
        </div>        
      </div>
              
      
    )
}