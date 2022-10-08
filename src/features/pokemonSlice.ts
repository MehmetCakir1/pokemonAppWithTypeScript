import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState } from "../types/interfaces";


const initialState:IState={
    pokemons:[],
    loading:false,
    error:""
}
// export const getSimpsons = createAsyncThunk(
//     'simpsons/getSimpsons', async() => {
//         return fetch("https://5fc9346b2af77700165ae514.mockapi.io/simpsons")
//         .then(res=>{
//             return res.json() 
//         })
//     }
// )

export const getPokemons = createAsyncThunk(
    "pokemons/getPokemons",async()=>{
        return fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
                .then(res=>{
                    return res.json() 
                })
    }
)


// const simpsonsSlice = createSlice({
//     name:"simpsons",
//     initialState,
//     reducers:{

//     },
//     extraReducers(builder:any){
//         builder.addCase(getSimpsons.pending, (state: IStateProps) => {
//             state.loading = true;
//           })
//         builder.addCase(getSimpsons.fulfilled,(state:IStateProps,action:PayloadAction<any>)=>{
//             state.loading=false;
//             state.simpsons=(action.payload) 
//         })
//         builder.addCase(getSimpsons.rejected,(state:IStateProps)=>{
//             state.loading=false;
//             // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
//             state.error="An Error Occured"
//         })
//     }
// })




const pokemonSlice=createSlice({
    name:"pokemons",
    initialState,
    reducers:{

    },
        extraReducers(builder:any){
                    builder.addCase(getPokemons.pending, (state: IState) => {
                        state.loading = true;
                      })
                    builder.addCase(getPokemons.fulfilled,(state:IState,action:PayloadAction<any>)=>{
                        state.loading=false;
                        state.pokemons=(action.payload.results) 
                    })
                    builder.addCase(getPokemons.rejected,(state:IState)=>{
                        state.loading=false;
                        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                        state.error="An Error Occured"
                    })
                }
})

export default pokemonSlice.reducer


















