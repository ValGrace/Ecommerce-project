import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useDispatch} from 'react-redux'
import { addToCart } from '../../../redux/cartSlice'
export const LaptopStore = [
    {id:84, descr:"Lenovo Chromebook S330 Laptop, 14-Inch FHD (1920 x 1080) Display, MediaTek MT8173C Processor, 4GB LPDDR3, 64GB eMMC, Chrome OS, 81JW0000US, Business Black", brand:"Lenovo", image:"https://m.media-amazon.com/images/I/61ViOMIUhmL._AC_UY218_.jpg", price:20600, type:"system"},
    {id:85, descr:"2021 Newest Dell Inspiron 15.6 HD Business Laptop, Intel Pentium Silver N5030, 16GB RAM, 1TB PCIe SSD, Online Meeting Ready, WiFi, Webcam, HDMI, Bluetooth, Win10 Pro", brand:"", image:"https://m.media-amazon.com/images/I/71mnsLl6+tS._AC_UY218_.jpg", price:69900, type:"system"},
    {id:86, descr:"Lenovo IdeaPad 5 14.0 FHD IPS 300nits Laptop, AMD Ryzen 7 4700U (Beat i7-10710U), Webcam, Backlit KB, Wi-Fi 6, HDMI, USB-C, AMD Radeon Graphics, Win 10", brand:"Lenovo", image:"https://m.media-amazon.com/images/I/41iaTny6fbS._AC_UY218_.jpg", price:83900, type:"system"},
    {id:87, descr:"Dell Inspiron 17 2-in-1 QHD+ Touchscreen Laptop Intel i7-1165G7 16GB RAM 1TB SSD, Lightweight Thin Design, Backlit Keyboard",brand:"Dell", image:"https://m.media-amazon.com/images/I/61N+oO2rhTL._AC_UY218_.jpg", price:123900, type:"system"},
    {id:88, descr:"HP Stream 14 Pink - Celeron N4000 - 4 GB RAM - 64 GB eMMC Storage - 14 LCD - Wireless - Bluetooth - Webcam - Windows 10 S", brand:"HP", image:"https://m.media-amazon.com/images/I/61Jt71WXgnL._AC_UY218_.jpg", price:43289, type:"system"},
    {id:89, descr:"2020 Latest Business Laptop Dell Inspiron 15 5000 5593 15.6' FHD 1080p Non-Touch Screen 10th Gen Intel Core i7-1065G7 16GB RAM | 512G SSD", brand:"Dell", image:"https://m.media-amazon.com/images/I/41-FyLgqbxL._AC_UY218_.jpg", price:67000, type:"system"},
    {id:90, descr:"2020 Latest Business Laptop Dell Inspiron 15 5000 5593 15.6 FHD 1080p Non-Touch Screen 10th Gen Intel Core i7-1065G7 16GB RAM | 512G SSD", brand:"Dell", image:"https://m.media-amazon.com/images/I/41-FyLgqbxL._AC_UY218_.jpg", price:67000, type:"system"},
    {id:91, descr:"2021 Newest Lenovo Flex 5 14 2-in-1 Touchscreen Laptop, Octa-core AMD Ryzen 7 5700U(Beat i7-10750H), 16GB RAM 1TB PCIe SS...2021 Newest Lenovo Flex 5 1, 16GB RAM 1TB PCIe SSD", brand:"", image:"https://m.media-amazon.com/images/I/71x2T-eUFXL._AC_UY218_.jpg", price:"", type:"system"},
    {id:92, descr:"OEM Lenovo ThinkPad T490 Laptop 14” WQHD IPS Display 2560x1440, Intel Quad Core i7-8665U, 24GB RAM, 1TB NVMe, Fingerprint, W10P", brand:"Lenovo", image:"https://m.media-amazon.com/images/I/61zzF2XxiCL._AC_UY218_.jpg", price:78000, type:"system"},
    {id:93, descr:"Acer Chromebook C810 13.3-Inch Screen 16 GB Compact Foldable Laptop Computer, Black (Renewed)",brand:"Acer", image:"https://m.media-amazon.com/images/I/61GHI79-FDL._AC_UY218_.jpg", price:109000, type:"system"},
    {id:94, descr:"HP Pavilion Gaming 15-Inch Laptop, Intel Core i5-9300H, NVIDIA GeForce GTX 1650, 12GB RAM, 256GB SSD, Windows 10 (15-dk0041nr, Black)",brand:"HP", image:"https://m.media-amazon.com/images/I/810gynDZHzL._AC_UY218_.jpg", price:49000, type:"system"},
    {id:95, descr:"Laptop Computers 14-Inch Windows-10 Notebook - WinBook K146 Intel Celeron Processor 6GB RAM 64GB ROM FHD IPS Display 5G WiFi HDMI (Silver)", brand:"Notebook", image:"https://m.media-amazon.com/images/I/711jy9tw0uL._AC_UY218_.jpg", price:70000, type:"system"},
    {id:96, descr:"Apple MacBook Air MD761LL/A 13.3-Inch Laptop (OLD VERSION) (Renewed)", brand:"Apple", image:"https://m.media-amazon.com/images/I/51NAVrA16EL._AC_UY218_.jpg", price:70859, type:"system"},
    {id:97, descr:"Laptop Computers 14-Inch Windows-10 Notebook - WinBook K146 Intel Celeron Processor 6GB RAM 64GB ROM FHD IPS Display 5G WiFi HDMI (Silver)", brand:"Notebook", image:"https://m.media-amazon.com/images/I/51NAVrA16EL._AC_UY218_.jpg", price:93999, type:"system"},
    {id:98, descr:"Acer Chromebook C810 13.3-Inch Screen 16 GB Compact Foldable Laptop Computer, Black (Renewed)", brand:"Acer", image:"https://m.media-amazon.com/images/I/711jy9tw0uL._AC_UY218_.jpg", price:89000, type:"system"},
    {id:99, descr:"2021 Newest Dell Inspiron 15.6 HD Laptop, Intel 4205U Processor, 8GB DDR4 Memory, 1TB HDD, Online Class Ready, Webcam, WiFi, HDMI, Bluetooth, Win10 Home, Black", brand:"", image:"https://m.media-amazon.com/images/I/51rj7NH27DL._AC_UY218_.jpg", price:56000, type:"system"},
]

const LaptopPage = ({id, descr, brand, image, price}) => {
   const dispatch = useDispatch()
    return (
        
                <div className="store-container" key={id}>
                    <div className="store-image">
                        <img src={image} alt={descr} />
                        
                    </div>
                    <div className="store-content">
                        <h3>{descr}</h3>
                        <h4 id="branded">{brand}</h4>
                        <div id="cart-section">
                        <h4><span>ksh. </span>{price}</h4>
                       <span onClick={() => dispatch(addToCart({
                          id, descr, image, price
                       }))}>Purchase <FaShoppingCart color="orange" size="2rem"/></span>
                    </div>
                    </div>
                    
                </div>
            )
     
}

export default LaptopPage