import {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { getSinglePokemon } from '../features/pokemonSlice'
import { IPokemon } from '../types/interfaces'

const PokemonDetail = () => {
  const {id}=useParams()
  const dispatch=useAppDispatch()
  const {pokemon,loading}=useAppSelector(state=>state.pokemons)
  
  const {name,sprites,moves}=pokemon
  console.log(moves)

  useEffect(() => {
    dispatch(getSinglePokemon({id}))
   }, [])

   if(loading){
    <h1>LOADING...</h1>
   }
  return (
    <main>
      <div>
      <img src={sprites?.front_shiny} alt={name} /> 
      </div>
      <h1>{name}</h1>
      <div>
         {moves?.slice(0,5).map((item:any,index)=>{
          return(
            <p key={index}>{item.move.name}</p>
          )
         })}
      </div>
     
    </main>
  )
}

export default PokemonDetail

// name?:string
//     id?:string 
//     image?:string //sprites.front_shiny
//     moves?:string[] //moves.slice(1).map(item)=>item.move