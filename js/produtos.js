import { fetchProducts, deleteProduct } from './services/products/products.services.js';

const renderCards = async () => {
  const products = await fetchProducts();
  const produtosCards = document.querySelector('#produtos__produtosCards');
  products.forEach((product) => {
    produtosCards.innerHTML += `
    <div class="produtos__card">
                <div class="produtos__cardImgContainer">
                  <div class="produtos__cardControls">
                      <button class="produtos__cardDelete" id="produtos__cardDelete-${product.id}">
                        <img src="./imgs/deleteIcon.svg" alt="trash bin icon" action delete />
                      </button>
                      <button class="produtos__cardEdit">
                        <img src="./imgs/editIcon.svg" alt="pencil icon" action edit />
                      </button>
                  </div>
                  <img class="produtos__cardImg" src="${product.imgUrl}" alt="${product.title}" />
                </div>
                <div class="produtos__cardInfo">
                  <h3 class="produtos__cardTitle">${product.title}</h3>
                  <span class="produtos__cardPrice">R$ ${parseFloat(product.price).toFixed(2)}</span>
                  <span class="produtos__cardTag">#1111111</span>
                </div>
              </div>
    `;
  });
  produtosCards.addEventListener('click', async (e) => {
    if (e.target.attributes.action) {
      const BtnId = e.target.parentElement.id;
      const productId = BtnId.slice(BtnId.indexOf('-') + 1);
      if (e.target.attributes.delete) {
        if (window.confirm('Voce tem certeza que deseja deletar este produto?')) {
          await deleteProduct(productId);
        }
      }
      if (e.target.attributes.edit) {
        window.alert('função edição ainda não disponivel');
      }
    }
  });
};

renderCards();
