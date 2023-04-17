import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const items = useSelector((state) => state.cart);
 
    return (
        <div >
        <div className='container mt-3 '>
            <div className='row'>
                <div className='controls-navbar d-flex align-items-center justify-content-between'>

                    <div className='logo'>
                        <Link to='/'>Ecommerce</Link>
                    </div>
                    <div className='navbar_section d-flex gap-15'>
                        <Link to="/">Home</Link>
                        <Link to="/cart" >Cart</Link>
                    </div>
                    <div className='badge_icon '>
                    <Link to="/cart">
                        <Badge color="secondary" badgeContent={items.length} showZero>
                            <ShoppingCartIcon />
                        </Badge>
                        </Link>
                        </div>
                   
                </div>
            </div>
        </div>
        </div>
    )
}

export default Navbar
