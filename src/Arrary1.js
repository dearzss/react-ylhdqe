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

  function handleAddClick(productID) {
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

  function handleDelClick(productID) {
    let newProducts = products.map((product) => {
      if (product.id === productID) {
        return {
          ...product,
          count: product.count - 1,
        };
      } else return product;
    });
    setProducts(newProducts.filter((product) => product.count > 0));
  }

  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} (<b>{product.count}</b>)
            <button
              onClick={() => {
                handleAddClick(product.id);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                handleDelClick(product.id);
              }}
            >
              -
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
