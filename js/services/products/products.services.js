export const fetchProducts = async () => {
  const res = localStorage.getItem('products');
  const products = await JSON.parse(res);
  return products;
};

export const fetchProduct = async (productId) => {
  const res = localStorage.getItem('products');
  const products = await JSON.parse(res);
  const desiredProduct = products
    .filter((product) => parseInt(product.id, 10) === parseInt(productId, 10))[0];
  return desiredProduct;
};

export const deleteProduct = async (productId) => {
  const res = localStorage.getItem('products');
  const products = await JSON.parse(res);
  let deletedProduct;
  const newProductsList = products.filter((product) => {
    if (parseInt(product.id, 10) === parseInt(productId, 10)) {
      deletedProduct = product;
    }
    return parseInt(product.id, 10) !== parseInt(productId, 10);
  });
  localStorage.setItem('products', JSON.stringify(newProductsList));
  return deletedProduct;
};

export const fetchSimilarProducts = async (category, limit) => {
  const res = localStorage.getItem('products');
  const products = await JSON.parse(res);
  const filteredProducts = products.filter((product) => (product.category === category))
    .slice(0, limit);
  return filteredProducts;
};

export const fetchProductsCategory = async (category) => {
  const res = localStorage.getItem('products');
  const products = await JSON.parse(res);
  const filteredProducts = products.filter((product) => product.category === category);
  return filteredProducts;
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
  const res = localStorage.getItem('products');
  const products = await JSON.parse(res);
  let updatedProduct;
  const newProductsList = products.map((product) => {
    if (parseInt(product.id, 10) === parseInt(productId, 10)) {
      updatedProduct = { id: product.id, ...body };
      return { id: product.id, ...body };
    }
    return product;
  });
  localStorage.setItem('products', JSON.stringify(newProductsList));
  return updatedProduct;
};

export const postProduct = async (product) => {
  const res = localStorage.getItem('products');
  const products = await JSON.parse(res);
  const id = parseInt(localStorage.getItem('highestId'), 10) + 1;
  localStorage.setItem('highestId', JSON.stringify(id));
  const newProduct = { id, ...product };
  products.push(newProduct);
  localStorage.setItem('products', JSON.stringify(products));
  return newProduct;
};

export const searchProduct = async (searchText, limit) => {
  const searchTextLowerCase = searchText.toLowerCase();
  const res = localStorage.getItem('products');
  const products = await JSON.parse(res);
  const searchResult = products.filter((product) => product.title.toLowerCase()
    .includes(searchTextLowerCase)).slice(0, limit);
  return searchResult;
};
