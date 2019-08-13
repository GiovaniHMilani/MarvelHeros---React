import React from 'react';
import { Link } from 'react-router-dom'
import './style.sass'

export default function Hero(props) {
  return (
    <>
      <div className="cotainer-hero">
        <img className="img" src={props.heroi.picture} />
        <div className="container-texto">
          <h1>{props.heroi.name}</h1>
          <p>{props.heroi.description}</p>
        </div>
      </div>
    </>
  );
}
