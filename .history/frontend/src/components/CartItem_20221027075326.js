import { incrementQuantity, decrementQuantity, removeItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

function CartItem({id, image, brand, price, quantity=0}) {
    const dispatch = useDispatch()
    return (
        <div className="store-container" key={id}>
                    <div className="store-image">
                        <img src={image} alt={brand} />
                        
                    </div>
                    <div className="store-content">
                        
                        <h4 id="branded">{brand}</h4>
                        <div id="cart-section">
                        <h4><span>&#8358;</span>{price}</h4>
                        </div>
                        <div>
                            <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
                            <p>{quantity}</p>
                            <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
                            <button onClick={() => dispatch(removeItem(id))}>Remove</button>
                        </div>
                        </div>
                        </div>
    )
} 

export default CartItem
