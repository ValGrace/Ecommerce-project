import { incrementQuantity, decrementQuantity, removeItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
// import { FaPlus, FaMinus, FaTrash} from 'react-icons/fa'
// import { Button } from "antd";
import { Heart, X } from "lucide-react";
function CartItem({id, image, descr, price, quantity=0}) {
    const dispatch = useDispatch()
    return (
        <div className="flex gap-4" key={id}>
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                        <img src={image} alt={descr} />
                        <button className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50">
                                                <Heart className="w-3.5 h-3.5 text-gray-600" />
                                              </button>
                    </div>
                    <div className="flex-1">
                        
                        <h3 className="font-semibold text-gray-900 mb-1">{descr.substring(0, 34)}...</h3>  
                                           
                        <div className="flex gap-2 text-xs text-gray-600 mb-2">
                            <span>Size: M</span>
                            <span>Category: Premium</span>
                        
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-gray-300 rounded">
                          <button className="px-2 py-1 hover:bg-gray-50" onClick={() => dispatch(decrementQuantity(id))}>−</button>
                          <span className="px-3 py-1 text-sm">{quantity}</span>
                          <button className="px-2 py-1 hover:bg-gray-50" onClick={() => dispatch(incrementQuantity(id))}>+</button>
                        </div>
                      </div>
                                                
                        
                        
                  
                        </div>
                        <div className="flex flex-col items-end justify-between">
                      <button className="text-gray-400 hover:text-gray-600">
                        <X className="w-5 h-5" />
                      </button>
                      <p className="font-bold text-gray-900">KES. {price.toFixed(2)}</p>
                    </div>
                        
                        </div>
    )
} 

export default CartItem
