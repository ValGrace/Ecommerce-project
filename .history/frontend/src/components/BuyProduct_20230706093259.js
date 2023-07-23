import React, { useState} from 'react'
import { FiMinus, FiPlus, FiShoppingBag} from 'react-icons/fi'
import { withRouter, Link } from 'react-router-dom'
import MyFooterNav from './footerNavbar'
import { topdeals } from '../StoreComponents/recommended'
import { FaAngleRight } from 'react-icons/fa'


const MakePurchase = (props) => {
    console.warn(props)

    
    const [quantity, setQuantity] = useState(0)
    const increaseQuantity = () => {
        setQuantity(prev => prev + 1)
    }
    const decreaseQuantity = () => {
        setQuantity(prev1 => prev1 - 1)
    }
    const [newDeals] = useState(topdeals)
    const { image } = props
   
    return (
        <>
        <div className="details-component">
            
            <div className="image-container">
                
        <img src={`/${image}/`} alt="" />
        </div>
        <div className="content-container">
        <h2>{props.match.params.descr}</h2>
        <h3>Price: <span >ksh. </span>{props.match.params.price}</h3>
        <h4>Color Options</h4>
        <div className="color-options">
            <button className="btn-color red"></button>
            <button className="btn-color white"></button>
            <button className="btn-color black"></button>
            <button className="btn-color orange"></button>
            <button className="btn-color blue"></button>
            <button className="btn-color green"></button>
        </div>
        <div className="quantity">
            <div onClick={decreaseQuantity}><FiMinus /></div>
            <div>{quantity}</div>
            <div onClick={increaseQuantity}> <FiPlus /></div>
            
           
        </div>
        <button className="btn">Add to Cart</button>
        </div>
        </div>
        <div className="about-section">
            <h1>About Product</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe numquam aperiam ea qui dolorem placeat esse minus facere. Ratione nihil laboriosam natus veritatis accusamus in eius aliquid error maxime nemo, doloremque tempore temporibus velit quaerat ut. Culpa nemo porro eaque non possimus quos aliquid repellat omnis aut, deleniti iusto esse maxime quisquam reiciendis cupiditate perferendis, ratione qui, illum nesciunt facilis itaque officia unde? Totam ducimus esse dolorem accusantium veritatis adipisci.</p>

        </div>
        <div className="reviews">
            <h1>Reviews(10)</h1>
            <h3>Top Reviews(3)</h3>
            <div className="reviews-section">
                <aside>
            <div style={{width: "3rem",height:"3rem", borderRadius:"50%", backgroundColor: 'whitesmoke'}}><img src="" alt=""/></div>
            <div>
            <p>Name</p>
            <p>Rating</p>
            </div>
            </aside>
            <p>Comment</p>
            </div>
        </div>
        <div className="ratings">

        </div>

        <div className="related">
                <div className="related-prod">
               <h2>Related Products</h2>
               <Link to="/prod"><h4>See All <FaAngleRight /></h4></Link>
               </div>
               <div className="deals-container">
               {newDeals.map((mydeal)=>{
                   const { id, image, descr, price, deal} = mydeal
                   return (
                       <div className="singleDeal" key={id}>
                           <div id="top"><div id="top-price">{deal}</div><span><FiShoppingBag /></span></div>
                           <img src={image} alt={descr} />
                           <h5>{descr}</h5>
                           <h4><span >ksh. </span>{price} </h4>

                           </div>
                   )
               })}
               </div>

        </div>
        <footer>
            <MyFooterNav />
        </footer>
        </>
    )
}

export default withRouter(MakePurchase)