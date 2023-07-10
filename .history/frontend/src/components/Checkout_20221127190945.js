import React , {useState, useEffect} from 'react'
import { FaAngleDown, FaPaypal, FaCcVisa, FaAngleUp, FaCcMastercard } from 'react-icons/fa'
import { FiSave } from 'react-icons/fi'
import MyFooterNav from './footerNavbar'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import MyNavbar from './navbar'
import { GetAccessToken } from '../apiintergration/mpesa_api'

const CheckoutPage =(props) => {
    const [checkDetails, setCheckDetails] = useState(false)
    const [makePayment, setMakePayment] = useState(false)
    const [yourCard, setYourCard] = useState('')
    const [cardNum, setCardNum] = useState('')
    const [expire, setExpire] = useState('')
    const [cvv, setCvv] = useState('')
    const [discount, setDiscount] = useState('')
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [phone, setPhone] = useState('')
    const [checkSubmit, setCheckSubmit] = useState(false)
    const [apiResponse, setApiResponse] = useState("")
    const [mpesaButton, setMpesaButton] = useState(false)
    const myClick = () => {
        setCheckDetails(!checkDetails)
    }
    const cart = useSelector((state) => state.cart)
    const myClick2 = () => {
        setMakePayment(!makePayment)
    }
    const handleMySubmit = (event) => {
        event.preventDefault()
        window.localStorage.setItem("phone-number", phone)
        window.localStorage.setItem("firstName", first)
        window.localStorage.setItem("lastName", last)
        setFirst('')
        setLast('')
        setPhone('')
        
    }
    const secondSubmit = (event) => {
        event.preventDefault()
    }
    const handleSubmitted = () => {
        setCheckSubmit(true)
    }

    const detailsConfirm = () => {
        setMpesaButton(true)
        const detailsResponse = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phone: window.localStorage.getItem('phone-number'),
                amount: window.localStorage.getItem('total-price')
            })
        }
        fetch("http://localhost:5000/dev/v2/api/details", detailsResponse)
           .then(res => console.log(res))
    }
   
    const callResponse = (e) => {
        e.preventDefault()
        const postResponse = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify({
                PartyA: window.localStorage.getItem('phone-number'),
                PhoneNumber: window.localStorage.getItem('phone-number'),
                Amount: window.localStorage.getItem('total-price')
            })
        }
        // fetch("http://localhost:5000/dev/mpesa")
        // .then(res => res.text())
        fetch("http://localhost:5000/dev/mpesa", postResponse)
              .then(res => res.json())
              
    } 
   
    // useEffect(() => {
    //     callResponse()
    // })
    const getTotal = () => {
        let totalProducts = 0;
        let totalPrice = 0
        cart.forEach(item => {
            totalProducts += item.quantity
            totalPrice += item.price * item.quantity
        })
        window.localStorage.setItem("total-price", totalPrice)
        return { totalPrice, totalProducts}
    }
    return (
        <>
        <MyNavbar />
        <div className="cart__left">
            <div>
                <h3>Shopping cart</h3>
                {cart?.map((item) => (
                    <CartItem key={item.id}
                    {...item} />
                ))}
            </div>
        </div>
        <h2>Checkout</h2>
        <div className="gateway">
        <div className="shipping">
            <div className="shipping1">
            <h3>Shipping Information</h3>
            <div onClick={myClick} >{checkDetails ?<FaAngleUp /> : <FaAngleDown />}</div>
            </div>
            {checkDetails && <form onSubmit={handleMySubmit}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName"  placeholder="John" style={{"content": "10rem"}} value={first} onChange={(e)=>setFirst(e.target.value)} required/>
                <label htmlFor="laststName">Last Name</label>
                <input type="text" id="lastName" placeholder="Doe" value={last} onChange={(e)=>setLast(e.target.value)} required/>
                
                <label htmlFor="phone">Phone Number</label>
                <input type="text" id="phone"  placeholder="xxx-xxxx-xxx" value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
                <button className="btn" type="submit" onClick={handleSubmitted}><FiSave />Save</button>
                <button className="btn">Next</button>
                <div>{checkSubmit && <strong>Successfully submitted</strong>}</div>
            </form> }
            
        </div>
        <div className="payment">
            <div className="payment1">
            <h1>Payment method</h1>
            <div onClick={myClick2}>{makePayment ? <FaAngleUp />:<FaAngleDown />}</div>
            </div>
            <div className="methods">
                <FaCcVisa size="1.2rem" color="blue" />
                <FaPaypal  size="1.2rem" color="blue"/>
                <FaCcMastercard size="1.2rem" color="blue"/>
            </div>
            {makePayment && <form onSubmit={secondSubmit}>
                <label htmlFor="cardname">Card Name</label>
                <input type="text" id="cardname" value={yourCard} onChange={(e)=> setYourCard(e.target.value)} required/>
                <label htmlFor="cardnum">Card Number</label>
                <input type="text" id="cardnum" value={cardNum} onChange={(e)=> setCardNum(e.target.value)} required/>
                <label htmlFor="expire">Exp. Date</label>
                <input type="date" id="expire" value={expire} onChange={(e)=> setExpire(e.target.value)} required/>
                <label htmlFor="cvv">CVV*</label>
                <input type="text" id="cvv" value={cvv} onChange={(e)=> setCvv(e.target.value)} required/>
                <label htmlFor="discount">Discount</label>
                <input type="text" id="discount" value={discount} onChange={(e)=> setDiscount(e.target.value)} />
                <button type="submit" className="btn" >Apply</button>
                <button className="btn">Save</button>
            </form>}
            
            
        </div>
        </div>
        <div className="checkoutcart">
            <h3>Order Review</h3>
                <hr />
                <div className="buysingle">
                <h4>Purchase single product</h4>
                <p>{props.match.params.descr}</p>
                <p>&#8358;{props.match.params.price}</p>
                <button className="store-btn">Purchase</button>
            </div>
                <div className="buyall">
                    <h5>Purchase all products in cart</h5>
                <strong>Total ksh.{getTotal().totalPrice}</strong>
                {/* <button className='store-btn' onClick={detailsConfirm}>Confirm Purchase</button> */}
                <button className="store-btn" onClick={callResponse}>Buy With Mpesa</button>
                </div>
               {/* <p>{apiResponse}</p> */}
        </div>
        <footer><MyFooterNav /></footer>
        </>
    )
}

export default CheckoutPage