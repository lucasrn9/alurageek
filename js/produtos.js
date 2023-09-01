import {
  fetchProducts, deleteProduct, fetchProduct, updateProduct,
} from './services/products/products.services.js';
import addFieldValidation from './formsValidations/addFieldValidation.js';
import validateForm from './formsValidations/validateForm.js';
import validators from './formsValidations/validators.js';

const editFormInputs = document.querySelectorAll('[validate]');
const produtosCards = document.querySelector('#produtos__produtosCards');
const produtosEditor = document.querySelector('#produtos__edit');
const editProductsForm = document.querySelector('#editProduct__form');
const editProductFormCloseBtn = document.querySelector('#produtos__editCloseBtn');
const urlInput = document.querySelector('#addProduct__url');
const categoryInput = document.querySelector('#addProduct__categoria');
const nameInput = document.querySelector('#addProduct__nome');
const priceInput = document.querySelector('#addProduct__preco');
const descriptionInput = document.querySelector('#addProduct__descricao');

const addValidationToEditForm = () => {
  editFormInputs.forEach((input) => {
    addFieldValidation(input);
  });
};

const handleCardsActions = () => {
  produtosCards.addEventListener('click', async (e) => {
    if (e.target.attributes.action) {
      const BtnId = e.target.parentElement.id;
      const productId = BtnId.slice(BtnId.indexOf('-') + 1);
      if (e.target.attributes.delete) {
        if (window.confirm('Voce tem certeza que deseja deletar este produto?')) {
          try {
            await deleteProduct(productId);
          } catch {
            window.alert('Erro ao deletar produto');
          }
        }
      }
      if (e.target.attributes.edit) {
        produtosEditor.style.display = 'block';
        let productInfo;
        try {
          productInfo = await fetchProduct(productId);
        } catch {
          productInfo = false;
        }
        if (productInfo) {
          urlInput.value = productInfo.imgUrl;
          categoryInput.value = productInfo.category;
          nameInput.value = productInfo.title;
          priceInput.value = parseFloat(productInfo.price).toFixed(2);
          descriptionInput.value = productInfo.description;
          editProductsForm.setAttribute('productId', productId);
        }
      }
    }
  });
};

const handleEditProductFormClose = () => {
  editProductFormCloseBtn.addEventListener('click', () => {
    produtosEditor.removeAttribute('style');
  });
};

const handleEditProductFormSubmit = () => {
  editProductsForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validateForm(editFormInputs, validators)) {
      return;
    }
    const productId = editProductsForm.getAttribute('productId');
    const updateProductBody = {
      category: categoryInput.value,
      description: descriptionInput.value,
      imgUrl: urlInput.value,
      price: priceInput.value,
      title: nameInput.value,
    };
    let newProduct;
    try {
      newProduct = await updateProduct(productId, updateProductBody);
    } catch {
      newProduct = false;
    }
    if (newProduct) {
      window.alert('produto editado com sucesso!');
      return;
    }
    window.alert('error ao atualizar produto, tente novamente mais tarde');
  });
};

const renderCards = async () => {
  try {
    const products = await fetchProducts();
    products.forEach((product) => {
      produtosCards.innerHTML += `
    <div class="produtos__card">
                <div class="produtos__cardImgContainer">
                  <div class="produtos__cardControls">
                      <button class="produtos__cardDelete" id="produtos__cardDelete-${product.id}">
                        <img src="./imgs/deleteIcon.svg" alt="trash bin icon" action delete />
                      </button>
                      <button class="produtos__cardEdit"
                      id="produtos__cardEdit-${product.id}">
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
  } catch {
    produtosCards.innerHTML = '<h1 class="defaultError">Erro ao carregar produtos </h1>';
  }
};

renderCards();
addValidationToEditForm();
handleCardsActions();
handleEditProductFormClose();
handleEditProductFormSubmit();
