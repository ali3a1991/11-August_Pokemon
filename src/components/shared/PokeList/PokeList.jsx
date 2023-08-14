import React, { useContext } from 'react'
import PokeItem from '../PokeItem/PokeItem'
import './PokeList.scss'
import { PokesDataContext } from '../../../context/pokesDataContext'

function PokeList(props) {
  const pokes = useContext(PokesDataContext)

  return (
    <ul className='list'>
      {props.hasFilter ? pokes.map(poke => <PokeItem key={poke.pokemon.name} name={poke.pokemon.name} url={poke.pokemon.url} />) : pokes.map(poke => <PokeItem key={poke.id} name={poke.name} url={poke.url} />)}
    </ul>
  )
}

export default PokeList