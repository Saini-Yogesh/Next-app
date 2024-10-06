import CheckPriceButton from "./checkPriceButton";

const ProductList = async () => {
    
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  let products = data.products;

  return (
    <div>
      <h1>Product List</h1>
      {products.map((item) => (
        <div>
          <h3>Name: {item.title}</h3>
          <CheckPriceButton price={item.price} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
