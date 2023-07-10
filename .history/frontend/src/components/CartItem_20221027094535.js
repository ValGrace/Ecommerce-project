import { incrementQuantity, decrementQuantity, removeItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { FaPlus, FaMinus} from 'react-icons/fa'
function CartItem({id, image, descr, price, quantity=0}) {
    const dispatch = useDispatch()
    return (
        <div className="store-container" key={id}>
                    <div className="store-image">
                        <img src={image} alt={descr} />
                        
                    </div>
                    <div className="store-content">
                        
                        <h4>{descr}</h4>
                       
                        <h4><span>&#8358;</span>{price}</h4>
                        
                        <div className="btn-dispatch">
                            <button onClick={() => dispatch(decrementQuantity(id))} className="store-btn"><FaMinus /></button>
                            <p>{quantity}</p>
                            <button onClick={() => dispatch(incrementQuantity(id))} className="store-btn"><FaPlus/></button>
                            <button onClick={() => dispatch(removeItem(id))} className="store-btn">Remove</button>
                        </div>
                        </div>
                        </div>
    )
} 

export default CartItem
