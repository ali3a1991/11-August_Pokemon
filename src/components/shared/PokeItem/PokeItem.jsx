import React, { useEffect, useState } from 'react'
import './PokeItem.scss'
import { Link } from 'react-router-dom'

function PokeItem(props) {
  const [poke, setPoke] = useState({})
  const [isLaoding, setIsLaoding] = useState(true)

  useEffect(() => {
    const setTime = setTimeout(() => {
      fetch(props.url)
        .then(res => res.json())
        .then(data => {
          setPoke(data)
          setIsLaoding(false)
        })
    },200)
  }, [])

  if(isLaoding){
    return <p>Louding...</p>
  }

  return (
    <Link to={`/${poke.id}`}>
      <li className='item-container'>
        <img src={poke.sprites.other.home.front_default} alt="" />
        <div className='item'>
          <div className='flex flex-wrap'>
            <p>{poke.id < 10 ? `#00${poke.id}` : poke.id < 100 ? `#0${poke.id}` : `#${poke.id}`}</p>
            <p>{props.name}</p>
          </div>
        </div>
        
      </li>
    </Link>
  )
}

export default PokeItem