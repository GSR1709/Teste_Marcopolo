const fetchProducts = async (query) => {
  const response = await fetch('https://fakestoreapi.com/products/1')
  .then(res=>res.json())
  .then(json=>console.log(json))
  return data.results;
};

export default fetchProducts;
