import './Topbar.css'
import {Link} from 'react-router-dom'
import React from 'react'

function Topbar() {
    const user = false;
    return (
        <div className="Top">
        <div className="topLeft">
        <i className="topicon fab fa-twitter"></i>
        <i className="topicon fab fa-facebook"></i>
        <i className="topicon fab fa-github"></i>
        <i className="topicon fab fa-instagram"></i>
        </div>
        <div className="topCenter">
        <ul className='topList'>
            <li className='topListitem'>
            <Link className='link' to='/login' >Home</Link>
            </li>
            <li className='topListitem'>
            <Link className='link' to='/register' >About</Link>
            </li>
            <li className='topListitem'>
            <Link className='link' to='/register' >Contact</Link>
            </li>
            <li className='topListitem'>
            <Link className='link' to='/write' >Write</Link>
            </li>
            
            <li className='topListitem'>
            {/* <Link className='link' to='/' >LOGOUT</Link> */}
            {user && "LOGOUT"}
            </li>
        </ul>
        </div>
        <div className="topRight">{
            user ? (
                <img className='topImage' src="https://images.unsplash.com/photo-1633113215844-b2ddc0411724?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
        
            ): (
                <>
                <Link className='link' to='/login' >Login</Link>
                <Link className='link' to='/register' >Register</Link>
                </>
            )
        }
        <img className='topImage' src="https://images.unsplash.com/photo-1633113215844-b2ddc0411724?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
        <i class="topSearchicon fas fa-search"></i>
        </div>
        </div>


        
    )
}

export default Topbar
