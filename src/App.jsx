import { useEffect, useState } from 'react';
import {pokeApi} from './utilities/dataApi';
import Header from './components/shared/Header/Header';
import PokeList from './components/shared/PokeList/PokeList';
import { v4 as uuidv4 } from 'uuid';
import { Route, Routes, useLocation } from 'react-router-dom';
import PokeDetail from './components/Pages/PokeDetail/PokeDetail';
import SearchHeader from './components/shared/Header/SearchHeader';
import PageControl from './components/shared/PageControl/PageControl';
import SortPoke from './components/Pages/sort/SortPoke';
import { PokesDataContext } from './context/pokesDataContext';
import './App.scss';

function App() {
  const [pokes, setPokes] = useState([]);
  const [isLaoding, setIsLaoding] = useState(true);
  const location = useLocation().pathname;
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [hasFilter,setHasFilter] = useState(false);

  const PageHandle = param =>{
    if(page === 1 && param === -1){
      return
    }
    setPage(page + param)
  }

  const limitCardHandle =(event) =>{
    setLimit(event.target.value)
  }

  const apiFetch = () => {
    fetch(`${pokeApi}?offset=${(page -1 )*limit}&limit=${limit}`)
      .then(res => res.json())
      .then(data => {
        const datas = data.results.map((poke) => {
          return  {...poke, id: uuidv4()}
        })
        setPokes(datas)
        setIsLaoding(false)
        setHasFilter(false)
      })
  }

  const searchHandle = (event) => {
    if(event.target.value === ''){
      apiFetch()
    }else{
      fetch(`${pokeApi}?offset=0&limit=100000`)
        .then(res => res.json())
        .then(data => {
          const datas = data.results.filter((poke) => {
            return  poke.name.includes(event.target.value.toLowerCase())
          })
          setPokes(datas)
          setIsLaoding(false)
        })
    }
  }

  const deleteFilterHandle = () => {
    apiFetch()
  }

  useEffect(() => {
    apiFetch()
  }, [page, limit])

  const pokesTypeHandle = (event) => {
    fetch(`https://pokeapi.co/api/v2/type/${event.target.dataset.type}`)
      .then(res => res.json())
      .then(data => {
        setPokes(data)
        setIsLaoding(false)
        setHasFilter(true)
      })
  }

  

  if(isLaoding){
    return <p>Louding...</p>

  }

  return (
    <main>
      <PokesDataContext.Provider value={pokes}>
        {location === '/types' ? <SearchHeader/> : <Header searchHandle={searchHandle} />}
        {location === '/' && hasFilter === false && <PageControl page={page} onChange={limitCardHandle} prevOnClick={() => {PageHandle(-1)}} nextOnClick={() => {PageHandle(+1)}} />}
        <Routes>
          <Route path='/' element={<PokeList hasFilter={hasFilter} deleteFilterHandle={deleteFilterHandle} />} />
          <Route path='/:id' element={<PokeDetail pokesTypeHandle={pokesTypeHandle}/>} />
          <Route path='/types' element={<SortPoke pokesTypeHandle={pokesTypeHandle}/>} />
        </Routes>
      </PokesDataContext.Provider>
      
    </main>
  )
}

export default App
