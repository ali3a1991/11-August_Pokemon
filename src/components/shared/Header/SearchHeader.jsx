import React from 'react'
import logo from '../../../assets/image/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function SearchHeader() {
  return (
    <div className='flex justify-between items-center text-2xl'>
      <img className='w-40' src={logo} alt="" />
      <Link to={'/'}>
        <FontAwesomeIcon icon={faXmark} size="2xl" style={{color: "#ffffff",}} />
      </Link>
      
    </div>
  )
}

export default SearchHeader