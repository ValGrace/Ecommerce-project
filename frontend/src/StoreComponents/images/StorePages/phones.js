import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

export const PhonesStore = [
    {id:65, descr:"SAMSUNG Galaxy S8 G950U 64GB Unlocked GSM U.S. Version Phone - w/ 12MP Camera - Orchid Gray ", brand:"Samsung",image:"https://m.media-amazon.com/images/I/31JmJT2qy6L._AC_UY218_.jpg", price:17500, type:"iphone"},
    {id:66, descr:"Samsung Galaxy S21 5G G9910 128GB 8GB RAM International Version - Phantom Gray", brand:"Samsung",image:"https://m.media-amazon.com/images/I/51eWHdtNfYL._AC_UY218_.jpg", price:79900, type:"iphone"},
    {id:67, descr:"Samsung Galaxy A72 A725F-DS 4G Dual 256GB 8GB RAM Factory Unlocked (GSM Only | No CDMA - not Compatible with Verizon/Sprint) International Version - Awesome White", brand:"samsung",image:"https://m.media-amazon.com/images/I/41t2if-Wt9S._AC_UY218_.jpg", price:54300, type:"iphone"},
    {id:68, descr:"Samsung Galaxy A10s SM-A107F/DS Dual-SIM 2GB RAM 32GB ROM Unlocked - Black", brand:"Samsung",image:"https://m.media-amazon.com/images/I/5131VRyl57L._AC_UY218_.jpg", price:61000, type:"iphone"},
    {id:69, descr:"Nokia C2-01.5 Unlocked GSM Phone with 3.2 MP Camera and Music and Video Player--U.S. Version with Warranty (Warm Silver)", brand:"Nokia",image:"https://m.media-amazon.com/images/I/81lt1DYxfaL._AC_UY218_.jpg", price:5700, type:"iphone"},
    {id:70, descr:"Unlocked Nokia 6700c Original Genuine Classic Bar Metal Mobile phone (Yellow)", brand:"Nokia",image:"https://m.media-amazon.com/images/I/61z1vzcDmkL._AC_UY218_.jpg", price:30000, type:"iphone"},
    {id:71, descr:"Samsung Galaxy S4 16GB Unlocked GSM Smartphone w/ 4G LTE Also in USA - Black Mist", brand:"Samsung",image:"https://m.media-amazon.com/images/I/81suaO+v0mL._AC_UY218_.jpg", price:7000, type:"iphone"},
    {id:72, descr:"Samsung SGH-T359 Smiley : GSM Cell Phone Black T-Mobile New", brand:"Samsung",image:"https://m.media-amazon.com/images/I/41T3NS42zFL._AC_UY218_.jpg", price:13000, type:"iphone"},
    {id:73, descr:"OnePlus 8T | 5G Unlocked Android Smartphone | A Day’s Power in 15 Minutes | Ultra Smooth 120Hz Display", brand:"OnePlus",image:"https://m.media-amazon.com/images/I/71YRy9m7fVS._AC_UY218_.jpg", price:34000, type:"iphone"},
    {id:74, descr:"Apple iPhone 11 Pro Max, 512GB, Space Gray - Unlocked (Renewed Premium)", brand:"Apple",image:"https://m.media-amazon.com/images/I/81LmL94PUvS._AC_UY218_.jpg", price:90000, type:"iphone"},
    {id:75, descr:"Apple iPhone 12 Pro, 256GB, Gold - Fully Unlocked (Renewed)", brand:"Apple",image:"https://m.media-amazon.com/images/I/71LbB2+EOZL._AC_UY218_.jpg", price:135000, type:"iphone"},
    {id:76, descr:"OnePlus 7 Pro (256GB) GSM Unlocked", brand:"OnePlus",image:"https://m.media-amazon.com/images/I/61JE6HJuj6L._AC_UY218_.jpg", price:27900, type:"iphone"},
    {id:77, descr:"Asus ROG Phone 3 ZS661KS / I003DD SD865+, 5G, International Version (No Warranty), 512GB 12GB RAM, Black Glare - GSM Unlocked", brand:"Asus",image:"https://m.media-amazon.com/images/I/812-Lob-xlL._AC_UY218_.jpg", price:30000, type:"iphone"},
    {id:78, descr:"Samsung Galaxy Note 10 N970 6.3 Android 256GB Smartphone (Renewed) (Aura Glow, T-Mobile)", brand:"Samsung",image:"https://m.media-amazon.com/images/I/61rgVSFKdUL._AC_UY218_.jpg", price:50500, type:"iphone"},
    {id:79, descr:"Apple iPhone XR, 256GB, White - Unlocked (Renewed Premium)", brand:"Apple",image:"https://m.media-amazon.com/images/I/41ZjUOH6nRL._AC_UY218_.jpg", price:46900, type:"iphone"},
    {id:80, descr:"(Refurbished) Apple iPhone 11 Pro, US Version, 256GB, Space Gray - Unlocked", brand:"Apple",image:"https://m.media-amazon.com/images/I/81x9I9qXbmL._AC_UY218_.jpg", price:70000, type:"iphone"},
    {id:81, descr:"Galaxy Z Flip Factory Unlocked New Android Cell Phone | Korean Version Smartphone | 256GB Storage | Folding Glass Technology", brand:"Samsung",image:"https://m.media-amazon.com/images/I/81x9I9qXbmL._AC_UY218_.jpg", price:86900, type:"iphone"},
    {id:82, descr:"Apple iPhone 7 Plus, US Version, 256GB, Black - Unlocked (Renewed)", brand:"Apple",image:"https://m.media-amazon.com/images/I/71b4kAq+5QL._AC_UY218_.jpg", price:27900, type:"iphone"},
    {id:83, descr:"Sony Xperia 1 II Unlocked Smartphone", brand:"Sony Xperia",image:"https://m.media-amazon.com/images/I/71xoD1b0KjL._AC_UY218_.jpg", price:114500, type:"iphone"},
]

const PhonesPage = ({ id, descr, brand, image, price}) => {
    
    return (
        
                <div className="store-container" key={id}>
                    <div className="store-image">
                        <img src={image} alt={descr} />

                    </div>
                    <div className="store-content">
                        <h3>{descr}</h3>
                        <h4 id="branded">{brand}</h4>
                        <div id="cart-section">
                        <h4><span>&#8358;</span>{price}</h4>
                        <FaShoppingCart color="orange" size="2rem"/>
                    </div>
                    </div>
                </div>
            )
       
    
}

export default PhonesPage