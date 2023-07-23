import React, {useState} from 'react'
import MyFooterNav from './footerNavbar'
import {FaShoppingBag, FaTrash } from 'react-icons/fa'
import { Link} from 'react-router-dom'
import image1 from '../StoreComponents/images/image1.png'
import image2 from '../StoreComponents/images/image2.png'
import image3 from '../StoreComponents/images/image3.png'
import image4 from '../StoreComponents/images/image.png'
import image13 from '../StoreComponents/images/image 16.png'
import image14 from '../StoreComponents/images/image 17.png'
import image15 from '../StoreComponents/images/image 18.png'
import image16 from '../StoreComponents/images/image 19.png'
import image9 from '../StoreComponents/images/image 12.png'
import image10 from '../StoreComponents/images/image 13.png'
import image11 from '../StoreComponents/images/image 14.png'
import image12 from '../StoreComponents/images/image 11.png'
import image5 from '../StoreComponents/images/image 8.png'
import image6 from '../StoreComponents/images/image 15.png'
import image7 from '../StoreComponents/images/image 2.png'
import image8 from '../StoreComponents/images/image 9.png'
import { Avatar, Table } from 'antd'
const PAGE_PRODUCTS = 'products'
const PAGE_CART = 'cart'
const AllProductsPage = () => {
   const [products] = useState([
    {id:300, image:image1, descr:"PS5 Dual Sense Wireless Controller", price:25000, deal:"15% OFF"},
    {id:301, image:image4, descr:"PS4 Wireless Controller", price:40000, deal:"50% OFF"},
    {id:302, image:image3, descr:"Apple Air Pod", price:25000, deal:"25% OFF"},
    {id:304, image:image2, descr:"PS4 Wireless Controller", price:47000, deal:"30% OFF"},
   {id: 305, image:image13, descr:"Tecno Camon Premier 15", price:45000, deal:""},
    {id: 306, image:image14, descr:"Apple Iphone 11 256GB", price:350000, dec:""},
    {id: 307, image:image15, descr:"Samsung Galaxy A11", price:72000, deal:"13% OFF"},
    {id: 308, image:image16, descr:"Apple Iphone 13 Pro Max", price:450000, deal:"40% OFF"},
    {id: 309, image:image11, descr:"Apple Macbook Air Model A1465", price:600000, deal:""},
    {id: 310, image:image12, descr:"Gaming Laptops 15.6' 8G RAM SSD Laptop Intel Core I3", price:320000, deal:""},
    {id: 311, image:image10, descr:"Microsoft Surface Laptop Go (12.40', Intel Core I5-10", price:250000, deal:""},
    {id: 312, image:image9, descr:"Lenovo Flex 5 2-In-1 14 Touch 8core 8gb 512gb", price:130000, deal:""}, 
     {id:313, image:image6, descr:"Sony PlayStation 5 Consolewith Wireless Controller", price:250000, deal:""},
    {id:314, image:image5, descr:"Wireless Mechanical Gaming Keyboard-Blue Switch", price:50000, deal:""}, 
    {id:315, image:image7, descr:"Cool Red Xbox Series X|S Controller Skin", price:40000, deal:""},
    {id:316, image:image8, descr:"Nintendo Switch Pro Controller", price:25000, deal:""}
])
    const [total, setTotal] = useState(0)
     const [cart, setCart] = useState([])
     const [page, setPage] = useState(PAGE_PRODUCTS)
    
       const renderCart = () => {
        return (
        <>
        <h3>Order Summary</h3>
                   <div id="totals">
                       <h4>Total/Items</h4>
                       <strong><span >&#8358;</span>{total}/{cart.length}</strong>
                   </div>
        </>
        )
    }
    const addToCart = (product) => {
        console.log('we are in addTocart')
        setCart([...cart,{...product}])
        console.log(cart)
        setTotal(total => total + product.price)
    }
   
    const removeFromCart = (productToRemove) => {
       setCart(cart.filter((product) => product !== productToRemove))
       setTotal(total => total -productToRemove.price)
    }
  
    const navigateTo = (nextPage) => {
        setPage(nextPage)
    }
    return (
       <>
       <header>
        <button onClick={()=> navigateTo(PAGE_CART)}><FaShoppingBag size="2rem"/>{cart.length}</button>
        <button onClick={()=> navigateTo(PAGE_PRODUCTS)} className="store-btn">View Products </button>
       </header>
       <h2>Products</h2>
       {page ===PAGE_PRODUCTS &&  <div className="deals-container allproducts">
             
               {products.map((product, idx)=>{
                  console.log(idx)
                   return (
                       <div className="singleDeal" key={idx}>
                           <div id="top">
                               
                           <div id="top-price">{product.deal}</div>
                            <div onClick={()=>addToCart(product)} className="shoppingbag"><FaShoppingBag /></div></div>
                            
                           <img src={product.image} alt={product.descr} />
                           
                           
                           <h5>{product.descr}</h5>
                           <h5><span >&#8358;</span>{product.price}</h5>
                           
                          
                           </div>
                   )
               })}
               </div>}
                
               {page === PAGE_CART && <div className="deals-container cartproducts">
               <h2>Cart</h2>
               <Table
               columns={[
                {
                    title: "Thumbnail",
                    dataIndex: "image",
                    render: (link) => {
                        return <Avatar src={link} />
                    }
                },
                {
                    title: "Product",
                    dataIndex: "descr"
                },
                {
                    title: "Price",
                    dataIndex: "price"
                    
                },
                { 
                    title: "Delete",
                    dataIndex: "id",
                    render: (product) => {
                        return <div onClick={() => removeFromCart(product)}>
                          <FaTrash color='orangered' /> 
                        </div>
                    }
                }
                
               ]}
               dataSource={cart}
               pagination={{
                pageSize: 5,
               }}
               
               >

               </Table>
               <div id="flexing">
              
               <div className="summary">
                   {renderCart()}
                   <p>Shipping information and tax will be in the checkout</p>
                   {/* <Link to={"/checkout/"+total}><button className="btn">Checkout</button></Link> */}
               </div>
               
               </div>
               </div>
               }
                <div className="switchpages">
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>

                <div className="second-image">
                    <p >The future of voice information sharing</p>
                   <Link to="./mystore"> <button className="btn">Explore All</button></Link>
               </div>
                    <footer><MyFooterNav /></footer>
       </>
    )
}

export default AllProductsPage