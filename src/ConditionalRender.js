import React from 'react';

function Item(props) {
  return (
    <li className="item">
      {props.isPacked ? <del>{props.name + ' ✔'}</del> : props.name}
    </li>
  );
}

export default function ConditionalRender() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={false} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
