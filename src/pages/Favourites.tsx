import styled from 'styled-components';
import { useAppSelector } from '../app/hooks'
import { TiArrowBack } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';




const FavContainer=styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 2rem;
`

const FavCardContainer=styled.div`
border: 1px solid gray;
width: 300px;

`
const FavHeader=styled.h1`
text-transform: uppercase;
text-align: center;
padding: 0.2rem;
`
const FavImg=styled.img`
width: 100%;
height: 250px;
`
const BackButton=styled.button`
position: absolute;
top: 1rem;
left: 2rem;
border: none;
background-color: transparent;
font-size: 3rem;
color: orangered;
cursor: pointer;
@media (min-width: 600px) {
  left: 5rem;
}
`

const Favourites = () => {
  const navigate=useNavigate()
  const {favourites,loading}=useAppSelector(state=>state.pokemons)
  // console.log(favourites);
    
  if(loading){
    <h1>LOADING..</h1>
  }
  return (
    <FavContainer>
      <BackButton
      onClick={()=>navigate("/")}
      >
        <TiArrowBack/>
        </BackButton>
      {
        favourites.map((item:any)=>{

          return(
            <FavCardContainer>
            <div>
              <FavImg src={item?.sprites?.other.home.front_default} alt={item.name} /> 
            </div>
            <FavHeader>{item.name}</FavHeader>
            </FavCardContainer>
          )
        })
      }
    </FavContainer>
  )
}

export default Favourites