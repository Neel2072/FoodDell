import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer_content">
                <div className="footer_content_left">
                    <img src={assets?.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus expedita sed, nihil optio praesentium voluptatibus ratione corrupti velit modi eaque soluta voluptates.</p>
                    <div className="footer_social_icons">
                        <img src={assets?.facebook_icon} alt="" />
                        <img src={assets?.twitter_icon} alt="" />
                        <img src={assets?.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer_content_center">
                    <h2>company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery </li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer_content_right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+123-456-7890</li>
                        <li>abc@gmail.com</li>
                    </ul>
                </div>

            </div>
            <hr />
            <p className="footer_copyright">
                All rights reserved
            </p>
        </div>
    )
}

export default Footer