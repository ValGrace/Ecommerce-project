import { FaShoppingBag} from 'react-icons/fa'
import { useDispatch} from 'react-redux'
import { addToCart } from '../../../redux/cartSlice'
export const LaptopStore = [
    {id:84, descr:"Lenovo Chromebook S330 Laptop, 14-Inch FHD (1920 x 1080) Display, MediaTek MT8173C Processor, ", brand:"Lenovo", image:"https://m.media-amazon.com/images/I/61ViOMIUhmL._AC_UY218_.jpg", price:20600, type:"system"},
    {id:85, descr:"2021 Newest Dell Inspiron 15.6 HD Business Laptop, Intel Pentium Silver N5030, 16GB RAM, 1TB PCIe SSD", brand:"", image:"https://m.media-amazon.com/images/I/71mnsLl6+tS._AC_UY218_.jpg", price:69900, type:"system"},
    {id:86, descr:"Lenovo IdeaPad 5 14.0 FHD IPS 300nits Laptop, Backlit KB, Wi-Fi 6, HDMI, USB-C, Win 10", brand:"Lenovo", image:"https://m.media-amazon.com/images/I/41iaTny6fbS._AC_UY218_.jpg", price:83900, type:"system"},
    {id:87, descr:"Dell Inspiron 17 2-in-1 QHD+ Touchscreen Laptop Intel i7-1165G7 16GB RAM 1TB SSD",brand:"Dell", image:"https://m.media-amazon.com/images/I/61N+oO2rhTL._AC_UY218_.jpg", price:123900, type:"system"},
    {id:88, descr:"HP Stream 14 Pink - Celeron N4000 - 4 GB RAM - 64 GB eMMC Storage", brand:"HP", image:"https://m.media-amazon.com/images/I/61Jt71WXgnL._AC_UY218_.jpg", price:43999, type:"system"},
    {id:89, descr:"2020 Latest Business Laptop Dell Inspiron 15 5000 5593 15.6' FHD 1080p", brand:"Dell", image:"https://m.media-amazon.com/images/I/41-FyLgqbxL._AC_UY218_.jpg", price:66999, type:"system"},
    {id:90, descr:"2020 Latest Business Laptop Dell Inspiron 15 5000 5593 15.6 FHD 1080p", brand:"Dell", image:"https://m.media-amazon.com/images/I/41-FyLgqbxL._AC_UY218_.jpg", price:66999, type:"system"},
    {id:91, descr:"2021 Newest Lenovo Flex 5 14 2-in-1 Touchscreen Laptop, Octa-core AMD Ryzen 7 5700U", brand:"", image:"https://m.media-amazon.com/images/I/71x2T-eUFXL._AC_UY218_.jpg", price:49999, type:"system"},
    {id:92, descr:"OEM Lenovo ThinkPad T490 Laptop 14” WQHD IPS Display 2560x1440, Intel Quad Core i7-8665U", brand:"Lenovo", image:"https://m.media-amazon.com/images/I/61zzF2XxiCL._AC_UY218_.jpg", price:77999, type:"system"},
    {id:93, descr:"Acer Chromebook C810 13.3-Inch Screen 16 GB Compact Foldable Laptop Computer, Black (Renewed)",brand:"Acer", image:"https://m.media-amazon.com/images/I/61GHI79-FDL._AC_UY218_.jpg", price:109299, type:"system"},
    {id:94, descr:"HP Pavilion Gaming 15-Inch Laptop, Intel Core i5-9300H, NVIDIA GeForce GTX 1650",brand:"HP", image:"https://m.media-amazon.com/images/I/810gynDZHzL._AC_UY218_.jpg", price:484999, type:"system"},
    {id:95, descr:"Laptop Computers 14-Inch Windows-10 Notebook - WinBook K146 Intel Celeron Processor", brand:"Notebook", image:"https://m.media-amazon.com/images/I/711jy9tw0uL._AC_UY218_.jpg", price:69599, type:"system"},
    {id:96, descr:"Apple MacBook Air MD761LL/A 13.3-Inch Laptop (OLD VERSION) (Renewed)", brand:"Apple", image:"https://m.media-amazon.com/images/I/51NAVrA16EL._AC_UY218_.jpg", price:70859, type:"system"},
    {id:97, descr:"Laptop Computers 14-Inch Windows-10 Notebook - WinBook K146 Intel Celeron Processor", brand:"Notebook", image:"https://m.media-amazon.com/images/I/51NAVrA16EL._AC_UY218_.jpg", price:93999, type:"system"},
    {id:98, descr:"Acer Chromebook C810 13.3-Inch Screen 16 GB Compact Foldable Laptop Computer, Black (Renewed)", brand:"Acer", image:"https://m.media-amazon.com/images/I/711jy9tw0uL._AC_UY218_.jpg", price:88799, type:"system"},
    {id:99, descr:"2021 Newest Dell Inspiron 15.6 HD Laptop, Intel 4205U Processor, 8GB DDR4 Memory", brand:"", image:"https://m.media-amazon.com/images/I/51rj7NH27DL._AC_UY218_.jpg", price:56799, type:"system"},
]

const LaptopPage = ({id, descr, brand, image, price}) => {
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
                        <h3 className="text-white font-semibold mb-1">{brand}</h3>
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

export default LaptopPage