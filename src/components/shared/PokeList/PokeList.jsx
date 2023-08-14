import React, { useContext } from 'react'
import PokeItem from '../PokeItem/PokeItem'
import './PokeList.scss'
import { PokesDataContext } from '../../../context/pokesDataContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function PokeList(props) {
  const pokes = useContext(PokesDataContext)
  
  return (
    <div>
      {props.hasFilter && <div className='bg-blue-300 h-16 flex items-center mt-10 justify-evenly rounded-3xl'>
        <div className={`type ${pokes.name}`}>{pokes.name}</div>
        <div className='cursor-pointer'>
          <FontAwesomeIcon icon={faXmark} size="2xl" style={{color: "#ffffff",}} onClick={props.deleteFilterHandle} />
        </div>
      </div>}
        <ul className='list'>
          {props.hasFilter ? pokes.pokemon.map(poke => <PokeItem key={poke.pokemon.name} name={poke.pokemon.name} url={poke.pokemon.url} />) : pokes.map(poke => <PokeItem key={poke.name} name={poke.name} url={poke.url} />)}
        </ul>
    </div>
  )
}

export default PokeList