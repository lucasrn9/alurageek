import { fetchProducts, fetchProductsCategory, findCategories } from './services/products/products.services.js';
import db from '../db.js';

const isLocalStorageEmpty = !localStorage.getItem('products');
if (isLocalStorageEmpty) {
  localStorage.setItem('products', JSON.stringify(db.productsAll));
  localStorage.setItem('highestId', JSON.stringify(db.productsAll.length));
}

const renderProducts = async () => {
  const productsContainer = document.querySelector('#products__container');
  try {
    const products = await fetchProducts();
    const categories = findCategories(products);
    categories.forEach((category) => {
      const filteredProducts = products.filter((product) => product.category === category);
      const productsPerCategory = 6;
      const productsToBeDisplayed = filteredProducts.slice(0, productsPerCategory);
      productsContainer.innerHTML += `
    <section class="productsCollection" id="${category}">
    <div class="productsCollection__headers">
      <h2 class="productsCollection__title">${category}</h2>
      <button class="productsCollection__seeAllProducts" id="seeAllProducts-${category}" type="button">
        Ver tudo
        <img
          class="productsCollection__seeAllProductsIcon"
          src="./imgs/arrow_back_black_24dp 1.svg"
          alt="arrow pointing to right"
        />
      </button>
    </div>
    <div class="productsCollection__cards" id="productsCollectionCards__${category.replace(' ', '-')}">
      
    </div>
  </section>
    `;
      const productsCollectionCards = document.querySelector(`#productsCollectionCards__${category.replace(' ', '-')}`);

      productsToBeDisplayed.forEach((product) => {
        productsCollectionCards.innerHTML += `
        <div class="productsCollection__card">
        <div class="productsCollection__cardImgContainer">
          <img
            class="productsCollection__cardImg"
            src="${product.imgUrl}"
            alt="${product.title}"
          />
        </div>
        <h3 class="productsCollection__cardName">${product.title}</h3>
        <span class="productsCollection__cardPrice">R$ ${parseFloat(product.price).toFixed(2)}</span>
        <a class="productsCollection__cardSeeProduct" href="../produto.html?id=${product.id}""
          >Ver produto</a
        >
      </div>
        `;
      });
    });
  } catch {
    productsContainer.innerHTML = '<h1 class="defaultError">Erro ao carregar produtos </h1>';
  }
};

const addSeeAllProductsBtnsListeners = () => {
  const seeAllProductsBtns = document.querySelectorAll('.productsCollection__seeAllProducts');
  seeAllProductsBtns.forEach((btn) => {
    btn.addEventListener('click', async function seeProduct(e) {
      const productsCollectionCards = e.target.parentElement.parentElement.querySelector('.productsCollection__cards');
      const category = e.target.id.slice(15, 100000);
      const products = await fetchProductsCategory(category.replace(' ', ''));
      const newProducts = products.slice(6);
      newProducts.forEach((product) => {
        productsCollectionCards.innerHTML += `
        <div class="productsCollection__card">
        <div class="productsCollection__cardImgContainer">
          <img
            class="productsCollection__cardImg"
            src="${product.imgUrl}"
            alt="${product.title}"
          />
        </div>
        <h3 class="productsCollection__cardName">${product.title}</h3>
        <span class="productsCollection__cardPrice">R$ ${parseFloat(product.price).toFixed(2)}</span>
        <a class="productsCollection__cardSeeProduct" href="../produto.html?id=${product.id}""
          >Ver produto</a
        >
      </div>
        `;
      });
      const cards = productsCollectionCards.querySelectorAll('.productsCollection__card');
      cards.forEach((card) => {
        // eslint-disable-next-line no-param-reassign
        card.style.display = 'inline-block';
      });
      btn.removeEventListener('click', seeProduct);
    });
  });
};

const mountHomePageProducts = async () => {
  await renderProducts();
  addSeeAllProductsBtnsListeners();
};

mountHomePageProducts();
