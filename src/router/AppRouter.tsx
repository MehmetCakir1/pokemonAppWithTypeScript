import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "../pages/Home"
import PokemonDetail from "../pages/PokemonDetail"


const AppRouter = () => {
    return (
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/pokemon-detail/:id" element={<PokemonDetail/>}/>
      </Routes>
      </BrowserRouter>
    )
  }
  
  export default AppRouter