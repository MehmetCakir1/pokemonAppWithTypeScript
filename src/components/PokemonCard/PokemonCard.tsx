import { useNavigate } from 'react-router-dom'
import styled from "styled-components"
import { useAppSelector } from '../../app/hooks'
import { IPokemonCard } from '../../types/interfaces'

const PokemonCardName = styled.div`
  border:2px solid gray;
  padding:1rem;
  cursor: pointer;
  margin: 1rem;
  transition:var(--transition);
  &:hover{
    background:gray;
    color:white;
  }
`

const PokemonCard = ({item}:any) => {
  const navigate=useNavigate()
  const {results}=useAppSelector(state=>state.pokemons)
  const id=results.indexOf(item)+1

 

  return (
   
    <PokemonCardName onClick={()=>navigate(`/pokemon-detail/${id}`)}>
      {item.name}
    </PokemonCardName>
    
  )
}

export default PokemonCard

//TODO: index type ? 