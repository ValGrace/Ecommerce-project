import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { useDispatch} from 'react-redux'
import { addToCart } from '../../../redux/cartSlice'

export const PlantsStore = [
    {id:55, descr:"Whonline 1 Pack Artificial Hanging Plants", image:"https://m.media-amazon.com/images/I/71L7TLkkUfS._AC_UL320_.jpg", price:2300, type:"decor"},
    {id:56, descr:"Whonline 2pcs Artificial Mini Potted Plants Fake", image:"https://m.media-amazon.com/images/I/81IwR0w4yjL._AC_UL320_.jpg",price:5000, type:"decor"},
    {id:57, descr:"2 Pack Fake Plants Artificial Potted Faux Plants", image:"https://m.media-amazon.com/images/I/71OoYyaIhoL._AC_UL320_.jpg",price:7000, type:"decor"},
    {id:58, descr:"Small Fake Plants Artificial Potted Faux", image:"https://m.media-amazon.com/images/I/81adbe1ez+S._AC_UL320_.jpg",price:4359, type:"decor"},
    {id:59, descr:"Fake Plants Mini Potted Artificial Plants Real Looking Plastic Fiddle Leaf Plantas", image:"https://m.media-amazon.com/images/I/51IPyzMJwUS._AC_SR160,160_.jpg",price:5000, type:"decor"},
    {id:60, descr:"Artificial Plants in Boho Style Ceramic Pot", image:"https://m.media-amazon.com/images/I/51DFOLSOZhS._AC_SR160,160_.jpg",price:7900, type:"decor"},
    {id:61, descr:"Mini Potted Plants Artificial Eucalyptus plants", image:"https://m.media-amazon.com/images/I/51EiyhHD4mS._AC_SR160,160_.jpg",price:5643, type:"decor"},
    {id:62, descr:"Nearly Natural 43in. Dracaena Silk", image:"https://m.media-amazon.com/images/I/51uzeeezLvS._AC_SR160,160_.jpg",price:8794, type:"decor"},
    {id:63, descr:"Costa Farms Money Tree Pachira, Medium Ships", image:"https://m.media-amazon.com/images/I/41fjvTErn2S._AC_SR160,160_.jpg",price:6900, type:"decor"},
    {id:64, descr:"Veryhome Fake Succulent Plants Artificial Faux", image:"https://m.media-amazon.com/images/S/aplus-media-library-service-media/baa2347b-7543-4773-bace-96fa889928ed.__CR0,0,970,600_PT0_SX970_V1___.jpg",price:12000, type:"decor"},
]

const PlantsPage = ({id, descr, image, price}) => {
    const dispatch = useDispatch()
    return (
        <>
        <div className="singleDeal" key={id}>
                           <div id="top">
                               
                           <div id="top-price"></div>
                            <div onClick={() =>dispatch(addToCart({id, descr, image, price}))} className="shoppingbag"><FaShoppingBag/></div></div>
                            
                           <img src={image} alt={descr} />
                           
                           
                           <h5>{descr}</h5>
                           <h5><span >ksh </span>{price}</h5>
                           
                          
                           </div>
        </>
        
        
                // <div className="store-container" key={id} >
                //     <div className="store-image">
                //     <img src={image} alt={descr} />
                //     </div>
                //     <div className="store-content">
                //     <h3>{descr}</h3>
                //     <div id="cart-section">
                //         <h4><span>ksh. </span>{price}</h4>
                //         <span onClick={() => dispatch(addToCart({
                //           id, descr, image, price
                //        }))}> <FaShoppingCart color="orange" size="2rem"/></span>
                //     </div>
                    
                //     </div>
                // </div>
            )
       
    
}

export default PlantsPage

