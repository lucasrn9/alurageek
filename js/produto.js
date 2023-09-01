import { fetchProduct, fetchSimilarProducts } from './services/products/products.services.js';

const renderProducts = async () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const productId = urlParams.get('id');
  const produtoContainer = document.querySelector('#produto__container');
  try {
    const product = await fetchProduct(productId);
    produtoContainer.innerHTML = `
<div class="produto__card">
<div class="produto__cardImgContainer">
  <img
    class="produto__cardImg"
    src="${product.imgUrl}"
    alt="${product.title}"
  />
</div>
<div class="produto__cardInfo">
  <h2 class="produto__title">${product.title}</h2>
  <span class="produto__price">R$ ${product.price.toFixed(2)}</span>
  <p class="produto__description">
    ${product.description}
  </p>
</div>
</div>
`;

    const similarProducts = await fetchSimilarProducts(product.category);
    const produtosSimilaresCards = document.querySelector('#produtosSimilares__cards');
    similarProducts.forEach((similarProduct) => {
      produtosSimilaresCards.innerHTML += `
    <div class="produtosSimilares__card">
              <div class="produtosSimilares__cardImgContainer">
                <img
                  class="produtosSimilares__cardImg"
                  src="${similarProduct.imgUrl}"
                  alt="${similarProduct.title}"
                />
              </div>
              <h3 class="produtosSimilares__cardTitle">${similarProduct.title}</h3>
              <span class="produtosSimilares__cardPrice"> R$ ${similarProduct.price.toFixed(2)} </span>
              <a class="produtosSimilares__cardBtn" href="../produto.html?id=${similarProduct.id}">Ver produto</a>
            </div>
    `;
    });
  } catch {
    produtoContainer.innerHTML = '<h1 class="defaultError">Erro ao carregar produto </h1>';
  }
};

renderProducts();
