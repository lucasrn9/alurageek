const searchButton = document.querySelector('#header__searchButton');
const hideElements = document.querySelectorAll('[hide]');
const headerContainer = document.querySelector('#header__container');
const searchBarWrapper = document.querySelector('#header__searchbarWrapper');
const searchbar = document.querySelector('#searchbar');
const searchbarResults = document.querySelector('#header__searchbarResults');
const closeSearchbarBtn = document.querySelector('#header__closeSearchbarBtn');

const removeElementsInlineStyle = (elements) => {
  elements.forEach((element) => {
    element.removeAttribute('style');
  });
};

const handleSearchbarToggle = () => {
  searchButton.addEventListener('click', () => {
    hideElements.forEach((element) => {
      // eslint-disable-next-line no-param-reassign
      element.style.display = 'none';
    });
    searchButton.style.display = 'none';
    headerContainer.style.justifyContent = 'center';
    searchBarWrapper.style.display = 'flex';
    closeSearchbarBtn.style.display = 'flex';
    searchbar.style.borderRadius = 'auto';
    searchbar.style.boxShadow = 'none';
    searchbar.focus();
  });

  closeSearchbarBtn.addEventListener('click', () => {
    removeElementsInlineStyle([
      closeSearchbarBtn,
      ...hideElements,
      searchButton,
      headerContainer,
      searchBarWrapper,
      searchbar]);
  });
};

const handleSearchbarProductsSearch = () => {
  searchbar.addEventListener('input', async (e) => {
    const searchText = e.target.value;
    if (searchText) {
      const isSearchbarResultsVisible = searchbarResults.style.display === 'flex';
      if (!isSearchbarResultsVisible) {
        searchbarResults.style.display = 'flex';
      }
      const res = await fetch(`http://localhost:3000/productsAll?q=${searchText}&_limit=3`);
      const products = await res.json();
      if (products.length > 0) {
        const resultsCards = products.map((product) => `
          <a class="header__searchbarCardLink" href="./produto.html?id=${product.id}">
          <div class="header__searchbarCard"> 
          <div class="header__searchbarCardImgContainer"> 
          <img class="header__searchbarCardImg" src="${product.imgUrl}" />
          </div>
          <p class="header__searchbarCardTitle">${product.title}</p>
          </div>
          </a>
          `);
        searchbarResults.innerHTML = '';
        searchbarResults.innerHTML = `
          ${resultsCards.join(' ')}
          `;
        return;
      }
      searchbarResults.innerHTML = `
      <div class="header__searchbarNoResults">sem resultados<div>
      `;
      return;
    }
    searchbarResults.removeAttribute('style');
  });
};

handleSearchbarToggle();
handleSearchbarProductsSearch();
