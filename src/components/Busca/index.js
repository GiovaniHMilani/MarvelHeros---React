import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './style.sass'

export default function Busca() {
  const heros = useSelector(state => state.heros);
  const [busca, changeBusca] = useState('')
  const dispatch = useDispatch();


  function handleChange(e) {
    changeBusca(e.target.value)
    dispatch({type: 'changeBusca', texto: e.target.value, lista: heros})
  }

  return (
    <div className="conteudo"> 
      <input value={busca} onChange={(event) => handleChange(event)} />
    </div>
  );
}
