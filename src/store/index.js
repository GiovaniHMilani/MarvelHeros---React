import { createStore } from 'redux';



const initalState = {
  heros: [],
  herosBusca: [],
  msm: '',
  heroLog: {}
}

function lista(state = initalState, action) {

  if (action.type === 'changeHero') {
    return { ...state, heros: action.lista }
  }

  if (action.type === 'changeBusca') {
    let newList = []
    for (let i = 0; i < action.lista.length; i++) {
      if (action.lista[i].name.toUpperCase().indexOf(action.texto.toUpperCase()) !== -1) {
        newList.push({
          _id: action.lista[i]._id,
          name: action.lista[i].name,
          picture: action.lista[i].picture,
          description: action.lista[i].description
        })
      }
    }
    if(newList.length === 0 && action.texto.length !== 0 ){
      return { ...state, msm: "Nenhum resultado encontrado" }
    }
    return { ...state, herosBusca: newList, msm: '' }
  }

  if (action.type === 'changeExibir') {
    return { ...state, heroLog: action.hero }
  }

  return state
}

const store = createStore(lista);

export default store;