import React from 'react'

function PageControl(props) {
  return (
    <div className='flex justify-between mt-5'>
      <div className='flex'>
        <button className='bg-white w-16 rounded-lg hover:bg-yellow-200' onClick={props.prevOnClick}>previus</button>
        <p className='bg-white w-8 rounded-lg text-center mr-1 ml-1' >{props.page}</p>
        <button className='bg-white w-16 rounded-lg hover:bg-yellow-200' onClick={props.nextOnClick}>next</button>
      </div>
      <div>
        <label htmlFor="limit">limit Card = </label>
        <select name="limit" id="limit" onChange={props.onChange} className='rounded-lg'>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  )
}

export default PageControl