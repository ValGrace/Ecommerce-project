import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

export const Controller = [
    {id: 100, descr:"DualShock 4 Wireless Controller for PlayStation 4 - Magma Red", image:"https://m.media-amazon.com/images/I/81L9+4dTIgL._AC_UY218_.jpg", price:27800, type:"games"},
    {id: 101, descr:"PlayStation DualSense Wireless Controller – Midnight Black", image:"https://m.media-amazon.com/images/I/61O9tWR6WDS._AC_UY218_.jpg", price:9900, type:"games"},
    {id: 102, descr:"YCCTEAM Wireless Game Controller Compatible with PS-4 Console/iOS 13 /Android 10", image:"https://m.media-amazon.com/images/I/61N7i3uyXqS._AC_UY218_.jpg", price:2715, type:"games"},
    {id: 103, descr:"Sony DualShock 4 Wireless Controller - Midnight Blue - PlayStation 4", image:"Sony DualShock 4 Wireless Controller - Midnight Blue - PlayStation 4", price:8999, type:"games"},
    {id: 104, descr:"Playstation DualSense Wireless Controller", image:"https://m.media-amazon.com/images/I/612bjwBuobS._AC_UY218_.jpg", price:3500, type:"games"},
    {id: 105, descr:"XUANMEIKE Wireless Game Controller Compatible with PS4 - White", image:"https://m.media-amazon.com/images/I/6160K2luU4L._AC_UY218_.jpg", price:1600, type:"games"},
    {id: 106, descr:"ADHLEK Wireless Controller for PS-4/Pro/Slim,with Dual Vibration Game Joystick-1000mAh", image:"https://m.media-amazon.com/images/I/61pv5LZQ1tL._AC_UY218_.jpg", price:2600, type:"games"},
    {id: 107, descr:"DualShock 4 Wireless Controller for PlayStation 4 - Red Camo", image:"https://m.media-amazon.com/images/I/71Kh7hBk5NL._AC_UY218_.jpg", price:10600, type:"games"},
    {id: 108, descr:"DualShock 4 Wireless Controller for PlayStation 4", image:"https://m.media-amazon.com/images/I/7116+QdOdvL._AC_UY218_.jpg", price:12000, type:"games"},
    {id: 109, descr:"Zamia Controller Gamepad Joystick for PS4/Slim/Pro/Windows PC !", image:"https://m.media-amazon.com/images/I/616D2b2qvoS._AC_UY218_.jpg", price:3599, type:"games"},
    {id: 110, descr:"Ps4 Controller Wireless Bluetooth with USB Cable for Sony Playstation 4 Chasdi", image:"https://m.media-amazon.com/images/I/31iTezoNyZS._AC_UY218_.jpg", price:2499, type:"games"},
    {id: 111, descr:"Xbox 360 4GB Slim Console - (Renewed)", image:"https://m.media-amazon.com/images/I/61oFqsoj9nL._AC_UY218_.jpg", price:24499, type:"games"},
    {id: 112, descr:"P4 Wireless Controller, Game Controller with Dual Vibration, Touch Pad", image:"https://m.media-amazon.com/images/I/61iiFlmSOdL._AC_UY218_.jpg", price:14899, type:"games"},
    {id: 113, descr:"MINSWC Compatible with PS4 Controller Wireless Compatible with Playstation", image:"https://m.media-amazon.com/images/I/71mEtySnwuL._AC_UY218_.jpg", price:2290, type:"games"},
]

const GamingPage = ({id, descr, image, price}) => {
    

    return (
        
                <div className="store-container" key={id}> 
                    <div className="store-image">
                        <img src={image} alt={descr} />
                    </div>
                    <div className="store-content">
                        <h3>{descr}</h3>
                        <div id="cart-section">
                        <h4><span>&#8358;</span>{price}</h4>
                        <FaShoppingCart color="orange" size="2rem"/>
                    </div>
                    </div>
                </div>
            )
     
       
    
}

export default GamingPage