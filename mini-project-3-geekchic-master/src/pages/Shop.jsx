import React from 'react'
import { Link } from 'react-router-dom';
import { useProducts } from '../contexts/products/ProductContext'

function Shop() {
  const products = useProducts();
  console.log(products);

  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <div style={{
                backgroundColor: "lightblue",
                height: "400px",
                width: "250px",
                border: "1px solid black",
                textAlign: "center",
              }}>
                <img src="/images/example.jpeg" style={{
                  height: "300px",
                  width: "250px",
                }} alt={product.name} /> {/* Updated src and alt */}
                {product.name} <br />{product.price} Rs
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Shop;
