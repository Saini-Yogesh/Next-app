const ProductList = async () => {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  let products = data.products;
  return (
    <div>
      <h1>Product List</h1>
      {products.map((item) => (
        <h3>Name: {item.title}</h3>
      ))}
    </div>
  );
};

export default ProductList;
