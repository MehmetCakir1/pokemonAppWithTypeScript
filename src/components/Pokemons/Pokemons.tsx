import {useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getPokemons,next,previous } from '../../features/pokemonSlice'
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
    const {results}=useAppSelector(state=>state.pokemons)
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
        <div>
        <button onClick={()=>dispatch(previous)}>Previous</button>
        <button onClick={()=>dispatch(next(10))}>Next</button>
        </div>
    </PokemonsContainer>
  )
}

export default Pokemons