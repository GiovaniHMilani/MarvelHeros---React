import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './style.sass';

import ListItem from './ListItem';
import Exibir from '../Exibir/Exibir';

import axios from 'axios';

export default function Body() {
  const heros = useSelector(state => state.heros);
  const herosBusca = useSelector(state => state.herosBusca);
  const msm = useSelector(state => state.msm);
  const [exibir, changeExibir] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const buscarDados = async () => {
      await axios.get('https://api-ezdevs.herokuapp.com/heros')
        .then(response => {
          dispatch({type: 'changeHero', lista: response.data})
        })
    }
    buscarDados();
  })

  return (
    <div className="body">
      <Exibir exibir={exibir} trocar={changeExibir} />
      {
        msm.length === 0 
        ? (<ul className="lista">
            {
              herosBusca.length === 0 
              ? heros.map(hero => <ListItem key={hero._id} trocar={changeExibir} hero={hero} />) 
              : herosBusca.map(hero => <ListItem key={hero._id} trocar={changeExibir} hero={hero} />)
            }
          </ul>)
        : <div className="msm"><h1>{msm}</h1></div>
      }
      
    </div>
  );
}
