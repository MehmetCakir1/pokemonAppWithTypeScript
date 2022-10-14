import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BASE_URL, BASE_URL_PAGES } from "../constants/api";
import { IPayloadProps, IPokemon, IState } from "../types/interfaces";


const initialState:IState={
    loading:false,
    error:"",
    count: 1154,
    next: "",
    previous: "",
    results: [],
    pokemon:<IPokemon>{}
}


export const getPokemons = createAsyncThunk(
    "pokemons/getPokemons",async()=>{
        return fetch(`${BASE_URL_PAGES}`)
                .then(res=>{
                    return res.json() 
                })
    }
)
export const getSinglePokemon = createAsyncThunk(
    "pokemons/getSinglePokemon",async({id}:IPokemon)=>{
        return fetch(`${BASE_URL}/${id}`)
                .then(res=>{
                    return res.json() 
                })
    }
)


const pokemonSlice=createSlice({
    name:"pokemons",
    initialState,
    reducers:{

    },
        extraReducers(builder:any){
                    builder.addCase(getPokemons.pending, (state: IState) => {
                        state.loading = true;
                      })
                    builder.addCase(getPokemons.fulfilled,(state:IState,action:PayloadAction<IPayloadProps>)=>{
                        state.loading=false;
                        state.results=(action.payload.results) 
                        state.next=action.payload.next
                        state.previous=action.payload.previous
                    })
                    builder.addCase(getPokemons.rejected,(state:IState)=>{
                        state.loading=false;
                        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                        state.error="An Error Occured"
                    })
                    builder.addCase(getSinglePokemon.pending, (state: IState) => {
                        state.loading = true;
                      })
                    builder.addCase(getSinglePokemon.fulfilled,(state:IState,action:PayloadAction<any>)=>{
                        state.loading=false;
                        state.pokemon=action.payload
                    })
                    builder.addCase(getSinglePokemon.rejected,(state:IState)=>{
                        state.loading=false;
                        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                        state.error="An Error Occured"
                    })
                }
})

export default pokemonSlice.reducer


















