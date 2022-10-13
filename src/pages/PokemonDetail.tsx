import {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { getSinglePokemon } from '../features/pokemonSlice'
import { IPokemon } from '../types/interfaces'

const PokemonDetail = () => {
  const {id}=useParams()
  const dispatch=useAppDispatch()
  const {pokemon}=useAppSelector(state=>state.pokemons)
  console.log(pokemon);

  useEffect(() => {
    dispatch(getSinglePokemon({id}))
   }, [])

  return (
    <div>
      l
    </div>
  )
}

export default PokemonDetail

// name?:string
//     id?:string 
//     image?:string //sprites.front_shiny
//     moves?:string[] //moves.slice(1).map(item)=>item.move