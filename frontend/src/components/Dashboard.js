import { useState } from 'react'
import BestItems from '../StoreComponents/recommended'
import { categories, phones, topdeals, mygames, laptops, recharge } from '../StoreComponents/recommended'
import MyFooterNav from './footerNavbar'
import { FiShoppingBag } from 'react-icons/fi'

import { Link } from 'react-router-dom'
import VrBanner from './VRBanner'
import { useAuth } from '../Context/AuthContext'

import { productdata } from '../StoreComponents/images/StorePages/StoreContainer'
import { useHistory } from 'react-router-dom'
const MyDashBoard = () => {
    // const [searchItem, setSearchItem] = useState('')
    const [bestProducts] = useState(BestItems)
    const [chooseItem] = useState(categories)
    // const [vrbanner] = useState(VRBanner)
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
                <div className="categories">
                    <h2>Browse Your Next Tech Upgrade</h2>
                    <div className="store-category">
                        {chooseItem.map((elem) => {
                            const { id, image, descr } = elem
                            return (
                                <div className="storeClass" key={id}>
                                    <img src={image} alt={descr} />
                                    <h4 className='text-lg font-bold'>{descr}</h4>
                                </div>
                            )
                        })}
                    </div>
                </div>


                <div className="welcome-section">
                    <div className="intro">Buy The Best Tech Products At Affordable Prices</div>

                </div>
                <div className="recharge">
                    <h2>Recharge your phone</h2>
                    <div id="options">
                        {rechargePhone.map((airtime) => {
                            const { id, image, descr } = airtime
                            return (
                                <div id="airtime" key={id}>
                                    <Link to="./airtime"><img src={image} alt="" /></Link>
                                    <h3>{descr}</h3>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="top-deals">

                    <h1>Today's Deals</h1>

                    <div className="deals-container">
                        {newDeals.map((mydeal) => {
                            const { id, image, descr, price, deal } = mydeal
                            return (
                                <div className="singleDeal dealSingle" key={id}>
                                    {/* <div id="top"><div id="top-price">{deal}</div></div> */}
                                    <img src={image} alt={descr} />
                                    <div id="top"><div id="top-price">{deal}</div></div>
                                    <h5>{descr}</h5>
                                    <h4 className='text-lg text-[#17255A]'><span className='text-sm'>KES</span>{price} </h4>

                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="explore">
                    <div style={{ fontSize: "2.3rem", width: "17rem" }}>Gaming At Your Fingertips</div>
                    <button className="explore-btn">Explore more</button>
                </div>
                <div className="gaming-section">
                    <div style={{ Display: "grid", gridTemplateColumns: "2fr 1fr" }}><h2 className='text-3xl'>Gaming</h2><Link to="./prod" className="mylink"><h2>See All</h2></Link></div>
                    <div className="shop-games gameShop">
                        {shopGames.map((game) => {
                            const { id, image, descr, price } = game
                            return (
                                <div className="singleGame gameSingle" key={id}>
                                    <img src={image} alt={descr} />
                                    <h3 className='text-left text-xl pt-4'>{descr}</h3>
                                    <h4 className='text-xl text-left'><span className='text-sm'>KES</span>{price}</h4>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <VrBanner />
                <div className="gaming-section">
                    <h2 className='text-3xl'>Laptops</h2>
                    <div className="shop-games gameShop">
                        {shopLaptops.map((laptop) => {
                            const { id, image, descr, price } = laptop
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
                        {shopPhones.map((phone) => {
                            const { id, image, descr, price, dec } = phone
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
                    <hr className='hr-footer' />
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