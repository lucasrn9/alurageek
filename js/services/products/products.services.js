export const fetchProducts = async () => {
  const res = await fetch('http://localhost:3000/productsAll');
  const products = await res.json();
  return products;
};

export const fetchProduct = async (productId) => {
  const res = await fetch(`http://localhost:3000/productsAll/${productId}`);
  const product = await res.json();
  return product;
};

export const deleteProduct = async (productId) => {
  const res = await fetch(`http://localhost:3000/productsAll/${productId}`, { method: 'DELETE' });
  const deleteResponse = await res.json();
  return deleteResponse;
};

export const fetchSimilarProducts = async (category) => {
  const res = await fetch(`http://localhost:3000/productsAll?category=${category}&_limit=6`);
  const products = await res.json();
  return products;
};

export const fetchProductsHome = async () => {
  const res = await fetch('http://localhost:3000/productsHome');
  const products = await res.json();
  return products;
};

export const fetchProductsCategory = async (category) => {
  const res = await fetch(`http://localhost:3000/productsAll?category=${category}`);
  const products = await res.json();
  return products;
};

export const findCategories = (products) => {
  const categories = [];
  products.forEach((product) => {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
  });
  return categories;
};

export const updateProduct = async (productId, body) => {
  const res = await fetch(`http://localhost:3000/productsAll/${productId}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  const updatedProduct = await res.json();
  return updatedProduct;
};
