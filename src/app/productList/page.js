"use client";

import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("https://dummyjson.com/products");
        let data = await response.json();
        setProduct(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {product.map((item) => (
        <h4 key={item.id}>Name: {item.price}</h4>
      ))}
    </div>
  );
};

export default ProductList;
