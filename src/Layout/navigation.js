import React, { useEffect, useState} from 'react'
import './navigation.css'

const Navigation = ({restaurants, current, setCurrent}) => {

    const [restaurant, setRestaurants] = useState(['none'])

    useEffect( () => {
        setRestaurants(restaurants)
    }, [restaurants])

    const setCurrentRes = (value) => {
        if(value !== current){
            setCurrent(value);
        }
    }
    
    return (

        <div class='side-navigation'>
            { restaurant.map( (n,i) => {
                return(
                    <div key={`${n}-${i}`} className={`restaurant ${ current === n ? 'active' : ''}`} onClick={() => setCurrentRes(n)}> 
                        <p>{n}</p> 
                    </div>
                )
            })}
        </div>
    )
}

export default Navigation;