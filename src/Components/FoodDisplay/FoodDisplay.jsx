import React, { useContext } from 'react'
import "./FoodDisplay.css"
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'


const FoodDisplay = ({ category }) => {

    const { food_list } = useContext(StoreContext)

    return (
        <div id='food_display' className='food_display'>
            <h2>Top Dishes Near You</h2>
            <div className="food_display_list">
                {food_list?.map((item, index) => {
                    if (category === "All" || category === item?.category) {
                        return <FoodItem key={index} id={item?._id} description={item?.description} image={item?.image} name={item?.name} price={item?.price} />
                    }

                })}
            </div>
        </div>
    )
}

export default FoodDisplay