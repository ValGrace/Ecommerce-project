import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton';

const MyFooterNav = () => {
    
    return (
        <>
        <div className="brand">
            <h1>Anypay</h1>
            <h3>2972 Westheimer Rd. Santa Ana, Illinois 85486</h3>
            <div className="social-accounts">
                <div id="account-icon"><FaFacebook size="1.6rem"/></div>
                <div id="account-icon"><FaInstagram size="1.6rem"/></div>
                <div id="account-icon"><FaTwitter size="1.6rem"/></div>
            </div>
             </div>
             <div className="page-navigate">
                 <h1>Pages</h1>
                 <Link to="/dash" className="mylink"><h3>Home</h3></Link>
                <Link to="/prod" className="mylink"> <h3>Shop</h3></Link>
                <Link to="/airtime" className="mylink"><h3>Buy Airtime</h3></Link>
                 <h3>Contact</h3>
             </div>
             <div className="Newsletter">
                 <h1>Newsletter</h1>
                 <p>Get more information about AnyPay and More Updates</p>
                 <form className="form-wrapper cf">
                 <Paper id="subemail"
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "80%" }}
    >
      
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Products"
        inputProps={{ 'aria-label': 'search google maps' }}
        
      />
      <Button variant="contained" sx={{backgroundColor: 'orangered'}}>
  Subscribe
</Button>
      {/* <IconButton type="button" sx={{ p: '10px' }} 
      aria-label="search"
      
      >
        <button className="btn">Subscribe</button>
      </IconButton> */}
      
    </Paper>
                
                 </form>
             </div>
             <hr className='hr-footer'/>
        </>
    )
}

export default MyFooterNav