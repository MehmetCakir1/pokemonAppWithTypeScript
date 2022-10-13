import Pokemons from '../components/Pokemons/Pokemons'
import SearchForm from '../components/SearchForm/SearchForm'


const Home = () => {
 

  return (
    <div>
      <h1>
        <SearchForm/>
        <Pokemons/>
      </h1>
    </div>
  )
}

export default Home