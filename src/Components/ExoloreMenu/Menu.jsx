import React, { useState } from 'react'
import "./Menu.css"
import { menu_list } from '../../assets/assets'

const Menu = ({ category, setCategory }) => {


    return (
        <div id='explore_menu' className='explore_menu'>
            <h1>Explore Our Menu</h1>
            <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eum tenetur rem, fuga non, incidunt a expedita ducimus, atque minus quam consectetur animi porro obcaecati.</p>
            <div className="explore_menu_list">
                {menu_list?.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item?.menu_name ? "All" : item?.menu_name)} key={index} className="explore_menu_list_item">
                            <img className={category === item?.menu_name?"active" : ""} src={item?.menu_image} alt="" />
                            <p>{item?.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default Menu