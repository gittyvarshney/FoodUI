import React, { useState, useMemo, useEffect } from 'react'
import Navigation from './navigation';
import FoodItems from './foodItems';
import './Layout.css';

const Layout = ({restaurants, data, setData}) => {

    const [currentRes, setcurrentRes] = useState(restaurants[0]);

    const items = useMemo( () => {
        return data.menuDetails[currentRes];
    }, [data,currentRes])

    useEffect( () => {
        setcurrentRes(restaurants[0])
    }, [])


    return (
        <div class='layout-design'>
        < Navigation restaurants={restaurants} current={currentRes} setCurrent={setcurrentRes}/>
        < FoodItems items={items} setData={setData} data={data} current={currentRes} />
        </div>
    )
}

export default Layout;