import React from 'react'
import './header.css'

function Header() {
    return (
        <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitleSm'>React & Node</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
                <img className='Headerimage' src="https://media.istockphoto.com/photos/back-and-front-yard-english-cottage-garden-smooth-green-grass-lawn-picture-id1310272850?b=1&k=20&m=1310272850&s=170667a&w=0&h=ySiYZ4CMVpy8owTBvZ5JsY-7s50ykjTOUr9nyzmICfY=" alt="" />
        </div>
    )
}

export default Header
