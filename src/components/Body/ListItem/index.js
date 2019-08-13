import React from 'react';
import { useDispatch } from 'react-redux'

import './style.sass'

export default function ListItem(props) {

  const dispatcher = useDispatch();

  function handleClick() {
    const func = async () => {
      await dispatcher({ type: 'changeExibir', hero: props.hero });

    }
    func();
    props.trocar(true);
    document.title = props.hero.name;
  }

  return (
    <li onClick={handleClick}>
      <div className="item" onClick={handleClick}>
        <img src={props.hero.picture} />
        <div className="texto">
          <p>{props.hero.name}</p>
        </div>
      </div>
    </li>
  );
}
