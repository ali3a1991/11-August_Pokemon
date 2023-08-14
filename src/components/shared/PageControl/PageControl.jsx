import React from 'react'

function PageControl(props) {
  return (
    <div className='flex justify-between mt-5 items-center'>
      <div className='flex'>
        <button className='bg-white w-16 rounded-lg hover:bg-yellow-200' onClick={props.prevOnClick}>previus</button>
        <p className='bg-white w-8 rounded-lg text-center mr-1 ml-1' >{props.page}</p>
        <button className='bg-white w-16 rounded-lg hover:bg-yellow-200' onClick={props.nextOnClick}>next</button>
      </div>
      <div className='bg-white rounded-lg pr-2 pl-2'>
        <select name="limit" id="limit" onChange={props.onChange}>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
        <label htmlFor="limit" className=''> Cards in page</label>
      </div>
    </div>
  )
}

export default PageControl