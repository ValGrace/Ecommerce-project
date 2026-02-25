import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { useDispatch} from 'react-redux'
import { addToCart } from '../../../redux/cartSlice'
export const speakers = [
    {id: 43, descr:"Ortizan Portable Bluetooth Speaker, IPX7 Waterproof Wireless Speaker with 24W Loud Stereo Sound", image:"https://m.media-amazon.com/images/I/81qTTdKhiOL._AC_UY218_.jpg", price:15000, type:"volume"},
    {id:44, descr:"Edifier G2000 32W PC Computer Speakers for Gaming Desktop PC ", image:"https://m.media-amazon.com/images/I/618Y4gPJHOS._AC_UL640_QL65_.jpg", price:20000, type:"volume"},
    {id:45, descr:"Bose SoundLink Color II: Portable Bluetooth, Wireless Speaker with Microphone- Soft Black", image:"https://m.media-amazon.com/images/I/71Xg3PvaiQL._AC_UY218_.jpg", price:7000, type:"volume"},
    {id:46, descr:"Computer Speakers, Dynamic RGB Computer Sound Bar, HiFi Stereo Bluetooth ", image:"https://m.media-amazon.com/images/I/61NnjHlWekL._AC_UY218_.jpg", price:5000, type:"volume"},
    {id:47, descr:"Logitech S120 2.0 Stereo Speakers", image:"https://images.unsplash.com/photo-1596457941236-c0611cc87551?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3BlYWtlcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", price:12000, type:"volume"},
    {id:48, descr:"Amazon Basics AC Powered PC Multimedia External Speakers", image:"https://m.media-amazon.com/images/I/81PWdFFIN6L._AC_UY218_.jpg", price:26000, type:"volume"},
    {id:49, descr:"OontZ Angle 3 Bluetooth Portable Speaker, Louder Volume, Crystal Clear Stereo Sound", image:"https://m.media-amazon.com/images/I/71evtyMeLiL._AC_UY218_.jpg", price:20000, type:"volume"},
    {id:50, descr:"Bluetooth Speaker, BUGANI M118 Portable Bluetooth Speakers,50W High Volume,Microphone Input", image:"https://m.media-amazon.com/images/I/61G488YlSaL._AC_UY218_.jpg", price:48000, type:"volume"},
    {id:51, descr:"Computer Speakers, Dynamic RGB Computer Sound Bar, HiFi Stereo Bluetooth 5.0 ", image:"https://images.unsplash.com/photo-1558089687-f282ffcbc126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNwZWFrZXJzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", price:12000, type:"volume"},
    {id:52, descr:"JBL Pulse 3 - Wireless Bluetooth Waterproof Speaker - Black", image:"https://m.media-amazon.com/images/I/71XRDYZChLL._AC_UY218_.jpg", price:8000, type:"volume"},
    {id:53, descr:"JBL CLIP 3 - Waterproof Portable Bluetooth Speaker - Black", image:"https://m.media-amazon.com/images/I/71HwlJxtdZS._AC_UY218_.jpg", price:35000, type:"volume"},
    {id:54, descr:"IPX7 Waterproof Shower Bluetooth Speaker, Sewowibo Portable Wireless Outdoor Speaker", image:"https://m.media-amazon.com/images/I/71VZWsPt+yS._AC_UY218_.jpg", price:9900, type:"volume"},
]

const SpeakersStore = ({id, descr, image, price}) => {
   
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

export default SpeakersStore