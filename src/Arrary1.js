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

  function handleInClick(productID, event) {
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

  function handleDeClick(productID, event) {
    console.log(productID);
    let newProducts = products.map((product) => {
      if (productID === product.id) {
        return {
          ...product,
          count: product.count - 1,
        };
      } else {
        return product;
      }
    });

    setProducts(newProducts.filter((p) => p.count > 0));
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={(event) => {
              handleInClick(product.id, event);
            }}
          >
            +
          </button>
          <button
            onClick={(event) => {
              handleDeClick(product.id, event);
            }}
          >
            -
          </button>
        </li>
      ))}
    </ul>
  );
}
