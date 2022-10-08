import {useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { getPokemons } from '../features/pokemonSlice'

const Home = () => {
  const {pokemons}=useAppSelector(state=>state.pokemons)
  const dispatch=useAppDispatch()
  console.log(pokemons)

  useEffect(() => {
   dispatch(getPokemons())
  }, [])
  
  return (
    <div>Home</div>
  )
}

export default Home