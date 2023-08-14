import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Types.scss'

function Types(props) {
  const location = useLocation().pathname;
  
  return (
    <>
      {location === '/types' ?
      <ul className='type-list'>
        <Link to={'/'} onClick={props.pokesTypeHandle} ><li data-type='bug' className='type bug'>BUG</li></Link>
        <Link to={'/'} onClick={props.pokesTypeHandle} ><li data-type='dark' className='type dark'>DARK</li></Link>
        <Link to={'/'} onClick={props.pokesTypeHandle} ><li data-type='drogon' className='type drogon'>DROGON</li></Link>
        <Link to={'/'} onClick={props.pokesTypeHandle} ><li data-type='electric' className='type electric'>ELECTRONIC</li></Link>
        <Link to={'/'} onClick={props.pokesTypeHandle} ><li data-type='fairy' className='type fairy'>FAIRY</li></Link>
        <Link to={'/'} onClick={props.pokesTypeHandle} ><li data-type='fighting' className='type fighting'>FIGHTING</li></Link>
        <Link to={'/'} onClick={props.pokesTypeHandle} ><li data-type='fire' className='type fire'>FIRE</li></Link>
        <Link to={'/'} onClick={props.pokesTypeHandle} ><li data-type='flying' className='type flying'>FLYING</li></Link>
        <Link to={'/'} onClick={props.pokesTypeHandle} ><li data-type='ghost' className='type ghost'>GHOST</li></Link>
        <Link to={'/'} onClick={props.pokesTypeHandle} ><li data-type='grass' className='type grass'>GRASS</li></Link>
        <Link to={'/'} onClick={props.pokesTypeHandle} ><li data-type='ground' className='type ground'>GROUND</li></Link>
        <Link to={'/'} onClick={props.pokesTypeHandle} ><li data-type='ice' className='type ice'>ICE</li></Link>
        <Link to={'/'} onClick={props.pokesTypeHandle} ><li data-type='normal' className='type normal'>NORMAL</li></Link>
        <Link to={'/'} onClick={props.pokesTypeHandle} ><li data-type='plant' className='type plant'>PLANT</li></Link>
        <Link to={'/'} onClick={props.pokesTypeHandle} ><li data-type='poison' className='type poison'>POISON</li></Link>
        <Link to={'/'} onClick={props.pokesTypeHandle} ><li data-type='psychic' className='type psychic'>PSYCHIC</li></Link>
        <Link to={'/'} onClick={props.pokesTypeHandle} ><li data-type='rock' className='type rock'>ROCK</li></Link>
        <Link to={'/'} onClick={props.pokesTypeHandle} ><li data-type='steel' className='type steel'>STEEL</li></Link>
        <Link to={'/'} onClick={props.pokesTypeHandle} ><li data-type='water' className='type water'>WATER</li></Link>
      </ul>
      :
      <ul className='type-list'>
        <Link to={`/`} onClick={props.pokesTypeHandle} ><li data-type={props.name} className={`type ${props.name}`}>{props.name.toUpperCase()}</li></Link>
      </ul>}
    </>
  )
}

export default Types