import React from 'react'
import logo from '../../../assets/image/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'
import './Header.scss'
import { Link, useLocation } from 'react-router-dom'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

function Header(props) {
  const location = useLocation().pathname

  return (
    <header>
      <div className='logo'>
        <img src={logo} alt="logo" />
      </div>
      <nav>
        {location === '/'?
        <Link to={'/types'} className='menu'>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </Link> : 
        <Link to={'/'}><FontAwesomeIcon icon={faChevronLeft} size="2xl" style={{color: "#EBEBEB",}} /></Link>
        }
        <input type="text" placeholder='Search Pokemon' onChange={props.searchHandle} /> 
        <div className='cursor-pointer'>
          <FontAwesomeIcon icon={faCircleHalfStroke} size="2xl" style={{color: "#fff",}} onClick={props.darkModeHandle} />
        </div>
      </nav>
    </header>
  )
}

export default Header