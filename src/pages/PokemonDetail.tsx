import {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from '../app/hooks'
import { getSinglePokemon } from '../features/pokemonSlice'

const PokemonDetail = () => {
  const {id}=useParams()
  const dispatch=useAppDispatch()
  console.log("next",id)
  // console.log("previous",previous)


  // useEffect(() => {
  //   dispatch(getSinglePokemon())
  //  }, [])

  return (
    <div>PokemonDetail</div>
  )
}

export default PokemonDetail