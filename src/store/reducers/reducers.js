let initialState = {
  favorites: []
}
export default function(state=initialState, action) {
  switch(action.type){
      case 'GET_POKEMONS_ALL_SUCCESSFUL': 
      return {...state, allPokemons: action.payload, status: 'done'}
      case 'GET_POKEMON_BY_NAME': 
      return {...state, pokemon: action.payload, status: 'done'}
      case 'CLEAR_POKEMON_DETAILS':
      return {...state,pokemon: action.payload}
      case 'TOGGLE_FAVORITES':
      return {...state,favorites: action.payload}
      case 'GET_POKEMONS_ALL_FAILED': 
      return {...state, allPokemons: action.payload, status: 'failed'}
    default:
      return state;
  }
}