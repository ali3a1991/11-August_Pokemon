import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Types from '../../shared/Types/Types';
import './PokeDetail.scss'
import Loading from '../../shared/Loading/Loading';

function PokeDetail(props) {
  const pokeId = useParams().id;
  const [poke, setPoke] = useState({});
  const [isLouding, setIsLaoding] = useState(true)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
      .then(res => res.json())
      .then(data => {
        setPoke(data)
        setIsLaoding(false)
      })
  }, [])

  if (isLouding) {
    return <Loading/>
  }

  return (
    <div>
      <div>
        <img className='ml-auto mr-auto' src={poke.sprites.other.home.front_default} />
      </div>
      <div className='flex justify-center gap-10 text-4xl detail-style'>
        <p>{poke.id < 10 ? `#00${poke.id}` : poke.id < 100 ? `#0${poke.id}` : `#${poke.id}`}</p>
        <p>{poke.name}</p>
      </div>
      <ul className='type-list'>
        {poke.types.map(type => <Types key={type.type.name} name={type.type.name} url={type.type.url} pokesTypeHandle={props.pokesTypeHandle} /> )}
      </ul>
    </div>
  )
}

export default PokeDetail