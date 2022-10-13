import {useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getPokemons } from '../../features/pokemonSlice'
import { IPokemonCard } from '../../types/interfaces'
import styled from "styled-components"

    import PokemonCard from '../PokemonCard/PokemonCard'

const PokemonsContainer = styled.div`
 display:grid;
 grid-template-columns: repeat(auto-fill,minmax(400px,2fr));
 text-transform: capitalize;
 text-align: center;
 margin-top:4rem
`

const Pokemons = () => {
    const {results,next,previous}=useAppSelector(state=>state.pokemons)
    const dispatch=useAppDispatch()
    // console.log("next",next)
    // console.log("previous",previous)
  
    useEffect(() => {
     dispatch(getPokemons())
    }, [])

  return (
    <PokemonsContainer>
        {
            results.map((item:IPokemonCard,index:number)=>{
                return(
                    <PokemonCard key={index} item={item}/>
                    )                
            })
        } 
    </PokemonsContainer>
  )
}

export default Pokemons