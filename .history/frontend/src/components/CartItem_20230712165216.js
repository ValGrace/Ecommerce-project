import { incrementQuantity, decrementQuantity, removeItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { FaPlus, FaMinus, FaTrash} from 'react-icons/fa'
import { Button } from "antd";
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
                            <Button shape="circle" onClick={() => dispatch(decrementQuantity(id))}><FaMinus color="orangered"/></Button>
                            <span>{quantity}</span>
                            <Button shape="circle" onClick={() => dispatch(incrementQuantity(id))} ><FaPlus color="orangered"/></Button>
                            
                        </div>
                        
                        </div>
                        <Button onClick={() => dispatch(removeItem(id))} color="orangered">Remove  <FaTrash color="orangered"/></Button>
                        </div>
                        </div>
    )
} 

export default CartItem
