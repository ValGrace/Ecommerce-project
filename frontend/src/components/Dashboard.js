import React, {useState} from 'react'
import BestItems from '../StoreComponents/recommended'
import { categories, phones, topdeals, mygames, laptops, recharge } from '../StoreComponents/recommended'
import MyFooterNav from './footerNavbar'
import { FiShoppingBag } from 'react-icons/fi'
import vrguy from '../StoreComponents/images/image5.png'
import { Link } from 'react-router-dom'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth} from '../Context/AuthContext'
import SearchIcon from '@mui/icons-material/Search';
import { productdata } from '../StoreComponents/images/StorePages/StoreContainer'
import MyNavbar from './navbar'
import {useHistory} from 'react-router-dom'
const MyDashBoard = () => {
    // const [searchItem, setSearchItem] = useState('')
    const [bestProducts] = useState(BestItems)
    const [chooseItem] = useState(categories)
    const [newDeals] = useState(topdeals)
    const [shopGames] = useState(mygames)
    const [shopLaptops] = useState(laptops)
    const [shopPhones] = useState(phones)
    const [rechargePhone] = useState(recharge)
    const { currentUser } = useAuth() 
    const navigate = useHistory()
    const [searchResults, setSearchResults] = useState([])
    const [searchInput, setSearchinput] = useState()
    const [mapLimit] = useState(3)
    const searchItems = (searchTerm) => {
        setSearchinput(searchTerm)
        console.log(productdata)
       const filteredData = productdata.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
       })
       setSearchResults(filteredData)
       console.log(searchResults)
    }
    // const addToCart = (topdeals) => {
    //     console.log('we are in addTocart')
    //     setCart([...cart, topdeals])
    // }
    if (currentUser) {
    return (
        <>
        <MyNavbar />
           <div className="welcome-section">
               <div className="intro">Buy The Best Products At Affordable Prices</div>
               <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "80%" }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Products"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={e => searchItems(e.target.value)}
      />
      <IconButton type="button" sx={{ p: '10px' }} 
      aria-label="search"
      onClick={searchItems}
      >
        <SearchIcon />
      </IconButton>
      
    </Paper>
                             
               <h3>Recommended for you</h3>
              {searchInput ? <div className="product">
                  {searchResults.slice(0, mapLimit).map((item, idx)=> {
                    const { image, descr, price} = item
                    return (
                        <div className='product-item' key={idx}>
                            <p style={{display:"grid", gridTemplateColumns:"100%", position:'relative', right:'0'}}> <FiShoppingBag size="1.3em"/></p>
                               <img src={image} alt={descr} width="100%" height="50%" id="recimg"/>
                               <div className="descr">
                               <p>{descr}</p>
                               <h4><span >ksh. </span>{price}</h4>
                            </div>
                            </div>
                    )
                  })}      
              </div>:
               <div className="product">
               
                   {bestProducts.map((item, idx)=>{
                       const { image, descr, price} = item
                       return (
                           <div className="product-item" key={idx}>
                               <p style={{display:"grid", gridTemplateColumns:"100%", position:'relative', right:'0'}}> <FiShoppingBag size="1.3em"/></p>
                               <img src={image} alt={descr} width="100%" height="50%" id="recimg"/>
                               <div className="descr">
                               <p>{descr}</p>
                               <h4><span >ksh. </span>{price}</h4>
                                
                               
                               </div>
                           </div>
                       )
                   })}
               </div>
    }
            </div>
           <div className="recharge">
             <h2>Recharge your phone</h2>
             <div id="options">
                  {rechargePhone.map((airtime)=>{
                      const { id, image, descr} = airtime
                      return (
                          <div id="airtime" key={id}>
                              <Link to="./airtime"><img src={image} alt="" /></Link>
                              <h3>{descr}</h3>
                              </div>
                      )
                  })}
           </div>
           </div>
           <div className="categories">
               <h2>Categories</h2>
               <div className="store-category">
               {chooseItem.map((elem)=>{
                   const { id, image, descr} = elem
                   return (
                       <div className="storeClass" key={id}> 
                        <img src={image} alt={descr} />
                        <h4>{descr}</h4>
                       </div>
                   )
               })}
               </div>
           </div>
               <div className="top-deals">

               <h1>Top Deals Of The Day</h1>
               
               <div className="deals-container">
               {newDeals.map((mydeal)=>{
                   const { id, image, descr, price, deal} = mydeal
                   return (
                       <div className="singleDeal dealSingle" key={id}>
                           <div id="top"><div id="top-price">{deal}</div><span><FiShoppingBag /></span></div>
                           <img src={image} alt={descr} />
                           <h5>{descr}</h5>
                           <h4><span >ksh. </span>{price} </h4>

                           </div>
                   )
               })}
               </div>
               </div>
               <div className="explore">
                   <div style={{fontSize:"2.3rem", width:"17rem"}}>Gaming at your fingertips</div>
                   <button className="explore-btn">Explore more</button>
               </div>
               <div className="gaming-section">
                <div style={{Display:"grid", gridTemplateColumns:"2fr 1fr"}}><h2>Gaming</h2><Link to="./prod" className="mylink"><h2>See All</h2></Link></div>
                <div className="shop-games gameShop">
                    {shopGames.map((game)=>{
                        const {id,image, descr, price} = game
                        return (
                            <div className="singleGame gameSingle" key={id}>
                                <img src={image} alt={descr} />
                                <h3>{descr}</h3>
                                <h4><span >ksh. </span>{price}</h4>
                            </div>
                        )
                    })}
                </div>
               </div>
              
               <div className="image-section">
                   <div className="sect">
                       <h2 style={{fontSize:"2.0rem", width:"17rem"}}>Explore the world of virtual reality</h2>
                     <button className="explore-btn"><Link to="/mystore" className="mylink">Explore All</Link></button>
                   </div>
                   <img src={vrguy} alt=""/>
               </div>
                <div className="gaming-section">
                <h2>Laptops</h2>
                <div className="shop-games gameShop">
                    {shopLaptops.map((laptop)=>{
                        const {id, image, descr, price} = laptop
                        return (
                            <div className="singleGame gameSingle" key={id}>
                                <img src={image} alt={descr} />
                                <h3>{descr}</h3>
                                <h4><span >ksh. </span>{price}</h4>
                            </div>
                        )
                    })}
                </div>
               </div>
               <div className="explore">
                    <p >The future of voice information sharing</p>
                    <button className="btn">Explore All</button>
               </div>
               <div className="gaming-section">
                <h2>Phones</h2>
                <div className="shop-games gameShop">
                    {shopPhones.map((phone)=>{
                        const {id,image, descr, price, dec} = phone
                        return (
                            <div className="singleGame gameSingle" key={id}>
                                <div id="top-price">{dec}</div>
                                <img src={image} alt={descr} />
                                <h3>{descr}</h3>
                                <h4><span> ksh. </span>{price}</h4>
                            </div>
                        )
                    })}
                </div>
               </div>
               <footer className="welcome">
                <MyFooterNav />
                <hr className='hr-footer'/>
                </footer>
               
        </>
    )
                }
                else {
                    return (
                       navigate.push('/')
                    )
                }
}
export default MyDashBoard