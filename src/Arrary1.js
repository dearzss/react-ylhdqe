import React from 'react';

const initialProducts = [
  {
    id: 0,
    name: 'Baklava',
    count: 1,
  },
  {
    id: 1,
    name: 'Cheese',
    count: 5,
  },
  {
    id: 2,
    name: 'Spaghetti',
    count: 2,
  },
];

export default function Arrary1() {
  const [products, setProducts] = React.useState(initialProducts);

  function handleClick(productID, event) {
    console.log(productID);
    setProducts(
      products.map((product) => {
        if (productID === product.id) {
          return {
            ...product,
            count: product.count + 1,
          };
        } else {
          return product;
        }
      })
    );
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={(event) => {
              handleClick(product.id, event);
            }}
          >
            +
          </button>
        </li>
      ))}
    </ul>
  );
}
