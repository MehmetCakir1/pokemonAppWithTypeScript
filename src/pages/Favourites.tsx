import styled from 'styled-components';
import { useAppSelector } from '../app/hooks'


const FavContainer=styled.div`
border: 1px solid gray;
`

const Favourites = () => {
  const {favourites}=useAppSelector(state=>state.pokemons)
  console.log(favourites);
    
  return (
    <div>
      {
        favourites.map((item:any)=>{

          return(
            <FavContainer>
            <div>
              <img src={item?.sprites?.other.home.front_default} alt="" /> 
            </div>
            <h1>{item.name}</h1>
            </FavContainer>
          )
        })
      }
    </div>
  )
}

export default Favourites