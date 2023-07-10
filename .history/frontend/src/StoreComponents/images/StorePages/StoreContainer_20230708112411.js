import React, {useState} from "react";
import RealityPage, {VirtualReality} from "./virtualReal";
import SpeakersStore, {speakers} from "./speakers";
import LaptopPage, {LaptopStore} from "./laptops";
import GamingPage, {Controller} from "./gaming";
import PlantsPage, {PlantsStore} from "./plants";
import PhonesPage, {PhonesStore} from "./phones";
import MyNavbar from "../../../components/navbar";
import {  FaShoppingCart } from "react-icons/fa";
import { ShoppingCartOutlined} from "@ant-design/icons"
import { Badge, FloatButton } from "antd";
import { useSelector } from "react-redux";
import MyFooterNav from "../../../components/footerNavbar";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const productdata = VirtualReality.concat(speakers).concat(LaptopStore).concat(Controller).concat(PlantsStore).concat(PhonesStore)
const MyStore = () => {
    
    return (
        <div className="entireStore">
            
            <article>
                <StoreProducts />
            </article>
        </div>
    )
}
const StoreProducts = () => {
    const [virtualStore] = useState(VirtualReality)
    const [speakerItem] = useState(speakers)
    const [singlePlant] = useState(PlantsStore)
    const [myLaptop] = useState(LaptopStore)
    const [gameController] = useState(Controller)
    const [singlePhone] = useState(PhonesStore)
    const cart = useSelector((state) => state.cart)
    
    const getTotalProducts = () => {
        let total = 0
        cart.forEach(item =>{
            total += item.quantity
        })
        return total
    }
    
    return (
        <>
        <MyNavbar />
        <div className="fullStore">
                    <h1>Virtual Reality</h1>
                    <div className="deals-container allproducts">
                    {virtualStore.map((vritem)=>{
                        return(
                            <RealityPage key={vritem.id} {...vritem}/>
                        )
                    })}
                    </div>
                </div>
                 <div className="fullStore">
                     <h1>Speakers</h1>
                     <div className="deals-container allproducts">
                     {speakerItem.map((speaker)=>{
                         return(
                             <SpeakersStore key={speaker.id} {...speaker} />
                         )
                     })}
                     </div>
                     </div>   
                     <div className="fullStore">
                         <h1>Laptops</h1>
                         <div className="deals-container allproducts">
                         {myLaptop.map((screen)=>{
                             return (
                                 <LaptopPage key={screen.id} {...screen} />
                             )
                         })}
                         </div>
                     </div>
                        <div className="fullstore">
                            <h1>PlayStore Controllers</h1>
                            <div className="deals-container allproducts">
                            {gameController.map((game)=>{
                                return (
                                    <GamingPage key={game.id} {...game} />
                                )
                            })}
                            </div>
                        </div>
            
            
            <div className="fullStore">
                <h1>Plants Store</h1>
                <div className="deals-container allproducts">
                {singlePlant.map((plant)=>{
                    return (
                        <PlantsPage key={plant.id} {...plant} />
                    )
                })}
                </div>
            </div>
           <div className="fullStore">
                <h1>Phones Store</h1>
                <div className="deals-container allproducts">
                {singlePhone.map((phone)=>{
                    return (
                        <PhonesPage key={phone.id} {...phone} />
                    )
                })}
                </div>
            </div>
            
             <Link to="/checkout"><FloatButton shape="circle" badge={{count: getTotalProducts() || 0, color: "orangered"}} icon={<ShoppingCartOutlined style={{ right: 24 + 70 + 70 }} />} /></Link>
                
               
             <footer><MyFooterNav /></footer>  
        </>
    )
}

export default MyStore