import React from 'react'
import logo from '../../../assets/image/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function SearchHeader() {
  return (
    <div>
      <div  className='flex justify-between items-center text-2xl'>
        <img className='w-40' src={logo} alt="" />
        <Link to={'/'}>
          <FontAwesomeIcon icon={faXmark} size="2xl" style={{color: "#ffffff",}} />
        </Link>
      </div>
      <div className='flex justify-center gap-10 text-4xl mt-10 mb-10 detail-style'>
        <p>TYPE</p>
      </div>
      
    </div>
  )
}

export default SearchHeader