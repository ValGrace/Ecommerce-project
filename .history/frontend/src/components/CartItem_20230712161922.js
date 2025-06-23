import { incrementQuantity, decrementQuantity, removeItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { FaPlus, FaMinus} from 'react-icons/fa'
import IconButton from "@mui/material/IconButton";
function CartItem({id, image, descr, price, quantity=0}) {
    const dispatch = useDispatch()
    return (
        <div className="store-container" key={id}>
                    <div className="store-image">
                        <img src={image} alt={descr} />
                        
                    </div>
                    <div className="store-content">
                        
                        <h3>{descr}</h3>  
                        <div id="cart-section">                     
                        <h4><span>Ksh. </span>{price}</h4>
                        <div className="btn-dispatch">
                            <IconButton onClick={() => dispatch(decrementQuantity(id))} type="button" sx={{ p: '10px' }} ><FaMinus /></IconButton>
                            <span>{quantity}</span>
                            <button onClick={() => dispatch(incrementQuantity(id))} className="redux-store-btn"><FaPlus/></button>
                            
                        </div>
                        
                        </div>
                        <button onClick={() => dispatch(removeItem(id))} className="redux-store-btn">Remove</button>
                        </div>
                        </div>
    )
} 

export default CartItem
