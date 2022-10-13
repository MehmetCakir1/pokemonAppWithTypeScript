export interface IState extends IPayloadProps{
    loading:boolean,
    error:string,
    pokemon:{}
}

export interface IPokemonCard{
    name:string,
    url:string,
}

export interface IPayloadProps{
    count: number
    next: string | null
    previous: string | null
    results: IPokemonCard[]
}
export interface IPokemon{
    name?:string
    id?:string
    image?:string //sprites.front_shiny
    moves?:string[] //moves.slice(1).map(item)=>item.move
    
}

