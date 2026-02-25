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
       {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
             
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
                        {/* <h3 className="text-white font-semibold mb-1">{brand}</h3> */}
                        <p className="text-gray-400 text-sm">{descr}</p>
                      </div>
                      <div className="text-white font-bold ml-4">KES{price}</div>
                    </div>
                  </div>
                </div>
              
            {/* </div> */}
        </>
        
        
            
            )
       
    
}

export default PlantsPage

