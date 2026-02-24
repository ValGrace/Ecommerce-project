import {useState} from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { useDispatch} from 'react-redux'
import { addToCart } from '../../../redux/cartSlice'
export const PhonesStore = [
    {id:65, descr:"SAMSUNG Galaxy S8 G950U 64GB Unlocked GSM U.S. Version Phone - w/ 12MP Camera - Orchid Gray ", brand:"Samsung",image:"https://m.media-amazon.com/images/I/31JmJT2qy6L._AC_UY218_.jpg", price:17500, type:"iphone"},
    {id:66, descr:"Samsung Galaxy S21 5G G9910 128GB 8GB RAM International Version - Phantom Gray", brand:"Samsung",image:"https://m.media-amazon.com/images/I/51eWHdtNfYL._AC_UY218_.jpg", price:79900, type:"iphone"},
    {id:67, descr:"Samsung Galaxy A72 A725F-DS 4G Dual 256GB 8GB RAM Factory Unlocked ", brand:"Samsung",image:"https://m.media-amazon.com/images/I/41t2if-Wt9S._AC_UY218_.jpg", price:54300, type:"iphone"},
    {id:68, descr:"Samsung Galaxy A10s SM-A107F/DS Dual-SIM 2GB RAM 32GB ROM Unlocked - Black", brand:"Samsung",image:"https://m.media-amazon.com/images/I/5131VRyl57L._AC_UY218_.jpg", price:61000, type:"iphone"},
    {id:69, descr:"Nokia C2-01.5 Unlocked GSM Phone with 3.2 MP Camera and Music and Video Player", brand:"Nokia",image:"https://m.media-amazon.com/images/I/81lt1DYxfaL._AC_UY218_.jpg", price:5700, type:"iphone"},
    {id:70, descr:"Unlocked Nokia 6700c Original Genuine Classic Bar Metal Mobile phone (Yellow)", brand:"Nokia",image:"https://m.media-amazon.com/images/I/61z1vzcDmkL._AC_UY218_.jpg", price:30000, type:"iphone"},
    {id:71, descr:"Samsung Galaxy S4 16GB Unlocked GSM Smartphone w/ 4G LTE Also in USA - Black Mist", brand:"Samsung",image:"https://m.media-amazon.com/images/I/81suaO+v0mL._AC_UY218_.jpg", price:7000, type:"iphone"},
    {id:72, descr:"Samsung SGH-T359 Smiley : GSM Cell Phone Black T-Mobile New", brand:"Samsung",image:"https://m.media-amazon.com/images/I/41T3NS42zFL._AC_UY218_.jpg", price:13000, type:"iphone"},
    {id:73, descr:"OnePlus 8T | 5G Unlocked Android Smartphone | A Day’s Power in 15 Minutes", brand:"OnePlus",image:"https://m.media-amazon.com/images/I/71YRy9m7fVS._AC_UY218_.jpg", price:34000, type:"iphone"},
    {id:74, descr:"Apple iPhone 11 Pro Max, 512GB, Space Gray - Unlocked (Renewed Premium)", brand:"Apple",image:"https://m.media-amazon.com/images/I/81LmL94PUvS._AC_UY218_.jpg", price:90000, type:"iphone"},
    {id:75, descr:"Apple iPhone 12 Pro, 256GB, Gold - Fully Unlocked (Renewed)", brand:"Apple",image:"https://m.media-amazon.com/images/I/71LbB2+EOZL._AC_UY218_.jpg", price:135000, type:"iphone"},
    {id:76, descr:"OnePlus 7 Pro (256GB) GSM Unlocked", brand:"OnePlus",image:"https://m.media-amazon.com/images/I/61JE6HJuj6L._AC_UY218_.jpg", price:27900, type:"iphone"},
    {id:77, descr:"Asus ROG Phone 3 ZS661KS / I003DD SD865+, 5G, International Version (No Warranty)", brand:"Asus",image:"https://m.media-amazon.com/images/I/812-Lob-xlL._AC_UY218_.jpg", price:30000, type:"iphone"},
    {id:78, descr:"Samsung Galaxy Note 10 N970 6.3 Android 256GB Smartphone (Renewed) (Aura Glow, T-Mobile)", brand:"Samsung",image:"https://m.media-amazon.com/images/I/61rgVSFKdUL._AC_UY218_.jpg", price:50500, type:"iphone"},
    {id:79, descr:"Apple iPhone XR, 256GB, White - Unlocked (Renewed Premium)", brand:"Apple",image:"https://m.media-amazon.com/images/I/41ZjUOH6nRL._AC_UY218_.jpg", price:46900, type:"iphone"},
    {id:80, descr:"(Refurbished) Apple iPhone 11 Pro, US Version, 256GB, Space Gray - Unlocked", brand:"Apple",image:"https://m.media-amazon.com/images/I/81x9I9qXbmL._AC_UY218_.jpg", price:70000, type:"iphone"},
    {id:81, descr:"Galaxy Z Flip Factory Unlocked New Android Cell Phone | Korean Version Smartphone", brand:"Samsung",image:"https://m.media-amazon.com/images/I/81x9I9qXbmL._AC_UY218_.jpg", price:86900, type:"iphone"},
    {id:82, descr:"Apple iPhone 7 Plus, US Version, 256GB, Black - Unlocked (Renewed)", brand:"Apple",image:"https://m.media-amazon.com/images/I/71b4kAq+5QL._AC_UY218_.jpg", price:27900, type:"iphone"},
    {id:83, descr:"Sony Xperia 1 II Unlocked Smartphone", brand:"Sony Xperia",image:"https://m.media-amazon.com/images/I/71xoD1b0KjL._AC_UY218_.jpg", price:114500, type:"iphone"},
]

const PhonesPage = ({ id, descr, brand, image, price}) => {
    const dispatch = useDispatch()
    const [wishlist, setWishlist] = useState([]);
    
    return (
        <>
       
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             
                <div
                  key={id}
                  className="bg-[#141414] rounded-xl overflow-hidden group hover:bg-[#1A1A1A] transition-all duration-300"
                >
                  <div className="relative aspect-square overflow-hidden bg-[#1A1A1A]">
                    <img
                      src={image}
                      alt={descr}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <button
                      onClick={() => dispatch(addToCart({ id, descr, image, price }))}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 transition-all"
                    >
                      <FaShoppingBag
                        className={`w-5 h-5 fill-[#d90b00] text-[#d91d00]`}
                           
                       
                      />
                    </button>
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="text-white font-semibold mb-1">{brand}</h3>
                        <p className="text-gray-400 text-sm">{descr}</p>
                      </div>
                      <div className="text-white font-bold ml-4">KES{price}</div>
                    </div>
                  </div>
                </div>
              
            </div>
                
                           </>        
            )
       
    
}

export default PhonesPage