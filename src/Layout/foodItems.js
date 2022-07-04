import React, { useEffect, useState } from 'react'
import './foodItems.css'

const FoodItems = ({items ,data, setData, current}) => {

    const [foodItems, setFoodItems ] = useState([]);

    useEffect( () => {
        setFoodItems(items);
    },[items])

    const toggleItem = (clickedFoodItem) => {
        const new_items = foodItems.map( n => {
            if(n.foodid === clickedFoodItem.foodid){
                return {
                    ...n,
                    outofstock: !n.outofstock
                }
            }else{
                return n;
            }
        })

        setFoodItems(new_items);
    }

    const handleClick = (e) => {
        console.log(e.target.id);
        if(e.target.id === 'all-available' || e.target.id === 'all-unavailable'){
            const new_items = foodItems.map( n => {
                return{
                    ...n,
                    outofstock: e.target.id === 'all-available' ? false : true
                }
            })
            console.log("food items are now is: ", new_items);
            setFoodItems(new_items);
        }else if(e.target.id === 'apply'){
            console.log("current is: ", current)
            console.log("menudetails is: ", data.menuDetails);
            console.log("items are: ", items);

            const new_data = { ...data, menuDetails: {
                ...data.menuDetails, [current] : [...foodItems]
            }}
            setData(new_data);
        }
        e.stopPropagation();
    }

    return (
        <>
        <div class='food-items'>
            <div class='card-layout'>
            {foodItems.map( (val,i) => {
                return(
                    <div class={`card-title ${ val.outofstock ? 'outOfStock' : ''}`} key={val.foodid} onClick={() => toggleItem(val)}>
                        <p> {val.foodname}</p>
                    </div>
                )
            })}
            </div>
        <div class='actions' onClick={handleClick}>
            <button class='action-buttons' id='all-unavailable'> All Unavailable </button>
            <button class='action-buttons' id='all-available'> All Available </button>
            <button class='action-buttons' id='apply'> Apply </button>
        </div>
        </div>
        </>
    )
}

export default FoodItems;