import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useDispatch} from 'react-redux'
import { addToCart } from '../../../redux/cartSlice'
export const VirtualReality = [
    {id:20, name:"RealityTech",types:"Non-immersive Virtual Reality", image:"https://images.unsplash.com/photo-1617802690992-15d93263d3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", price:70000, descr:"Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB", type:"virtual"},
    {id:21, name:"VR Now", types:"Fully-immersive Virtual Reality", image:"https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", price:100000, descr:"Oculus Quest All-in-one VR Gaming Headset – 64GB ", type:"virtual"},
    {id:22, name:"Reality Jam", types:"Semi-immersive Virtual Reality", image:"https://images.unsplash.com/photo-1525459571112-472991c82d74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60", price:64999, descr:"VR Headset for iPhone and Android Phones, 3D Virtual Reality Glasses /Goggles with Wireless Headphones", type:"virtual"},
    {id:23, name:"RealityTech", types:"Augmented Reality", image:"https://images.unsplash.com/photo-1626387346567-68d0b1ee4f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60", price:54500, descr:"Oculus Rift S PC-Powered VR Gaming Headset", type:"virtual"},
    {id:24, name:"Reality Link", types:"Collaborative VR", image:"https://images.unsplash.com/photo-1622979135240-caa6648190b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60", price:75000, descr:"VR Headset with Controller Adjustable 3D VR Glasses Virtual Reality Headset HD Blu-ray Eye Protected Support 5~7 Inch for Phone/Android", type:"virtual"},
    {id:25, name:"VR Now", types:"Semi-immersive Virtual Reality",image:"https://images.unsplash.com/photo-1562177613-f2669eea104f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60", price:81239, descr:"Oculus Quest All-in-one VR Gaming Headset – 64GB", type:"virtual"},
    {id:26, name:"VR Now",types:"Fully-immersive Virtual Reality", image:"https://images.unsplash.com/photo-1626387346555-08f186d8c407?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60", price:45250, descr:"Peiloh VR Headset Compatible with 4.7-6.3 inch iPhone and Android, Virtual Reality Headset ", type:"virtual"},
    {id:27, name:"RealityTech",types:"Augmented Reality", image:"https://images.unsplash.com/photo-1478416272538-5f7e51dc5400?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60", price:70000, descr:"Pansonite VR Headset with Remote Control, 3D Glasses Virtual Reality Headset with Bluetooth for VR Games & 3D Movies", type:"virtual"},
    {id:28, name:"Reality Jam",types:"Non-immersive Virtual Reality", image:"https://images.unsplash.com/photo-1525459819821-1c2d33189e23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60", price:60000, descr:"Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 256 GB", type:"virtual"},
    {id:29, name:"VR Now", types:"Augmented Reality",image:"https://images.unsplash.com/photo-1626379961798-54f819ee896a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", price:45000, descr:"VR Headset Compatible with iPhone & Android Phone, VR Headsets with Remote Controller", type:"virtual"},
    {id:30, name:"Virtual Flash",types:"Collaborative VR", image:"https://images.unsplash.com/photo-1622979136013-fcbffb84789c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", price:37400, descr:"VR Headset Compatible with iPhone and Android Phones | VR Set Incl. Remote Control for Android Smartphones", type:"virtual"},
    {id:31, name:"VR Buffs", image:"https://images.unsplash.com/photo-1562177617-8a133331c4fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", price:120000, descr:"Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB", type:"virtual"},
    {id:32, name:"Reality Jam", types:"Semi-immersive Virtual Reality",image:"https://images.unsplash.com/photo-1514499007249-cd680c1d1060?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", price:100000, descr:"VR Headset with Controller Adjustable 3D VR Glasses Virtual Reality Headset", type:"virtual"},
]

const RealityPage = ({id, name, types, image, descr, price}) => {
   
    const dispatch = useDispatch()
    return (
       
       
                <div className="store-container" key={id}>
                    <div className="store-image">
                        <img src={image} alt={descr} />
                    </div>
                    <div className="store-content">
                        <h3>{descr} </h3>
                        <div id="mini">
                        <h4>{types}</h4>       
                        <h5>-- {name}</h5>
                        </div>
                        <div id="cart-section">
                        <h4><span>&#8358;</span>{price}</h4>
                        <div id="shopcart"><span onClick={() => dispatch(addToCart({
                            id, descr, image, price
                        }))}><FaShoppingCart color="orange" size="2rem"/></span></div>
                        </div>
                        
                    </div>
                </div> 
            )
    
      
    
}

export default RealityPage