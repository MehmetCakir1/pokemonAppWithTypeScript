import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getSinglePokemon } from "../features/pokemonSlice";
import styled from "styled-components";

const SinglePokemonContainer = styled.div`
  max-width: 30rem;
  margin: 5rem auto;
`;
const ImgContainer = styled.div`
  width: 13rem;
  margin: auto;
`;
const PokemonName = styled.h1`
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  padding: 0.7rem 0;
`;
const PokemonMoves = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  font-size: 1rem;
  padding: 0.7rem 0;
`;
const PokemonHeader = styled.h2`
  text-transform: uppercase;
  text-decoration: underline;
  color: #444;
`;
const PokemonMove = styled.p`
  text-transform: uppercase;
  color: #687980;
`;
const BackButton = styled.button`
  text-transform: uppercase;
  color: #02475e;
  padding: 0.3rem 1rem;
  background-color: transparent;
  border: 1px solid;
  border-radius: var(--radius);
  cursor: pointer;
  transition: var(--transition);
  &:hover{
    background-color: #02475e;
    color: white;
  }
`;

const PokemonDetail = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { pokemon, loading } = useAppSelector((state) => state.pokemons);
  const navigate=useNavigate()

  const { name, sprites, moves } = pokemon;
  console.log(moves);

  useEffect(() => {
    dispatch(getSinglePokemon({ id }));
  }, []);

  if (loading) {
    <h1>LOADING...</h1>;
  }
  return (
    <SinglePokemonContainer>
      <BackButton
      onClick={()=>navigate(-1)}
      >Go Back</BackButton>
      <ImgContainer>
        <img src={sprites?.front_shiny} alt={name} />
      </ImgContainer>
      <PokemonName>{name}</PokemonName>
      <PokemonMoves>
        <PokemonHeader>moves</PokemonHeader>
        {moves?.slice(0, 5).map((item: any, index) => {
          return <PokemonMove key={index}>{item.move.name}</PokemonMove>;
        })}
      </PokemonMoves>
    </SinglePokemonContainer>
  );
};

export default PokemonDetail;
