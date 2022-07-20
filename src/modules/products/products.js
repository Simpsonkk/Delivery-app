import { localStorageUtil } from '../localstorageUtil/localstorage_util';

class Products {
  handleSetLocationStorage(event) {
    localStorageUtil.putProducts(event.target.getAttribute('data-id'));
    event.target.innerHTML = 'Added';
    event.target.setAttribute('disabled', 'disabled');
  }

  render(products) {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = '';
    let activeTextButton = '';
    products.forEach(({ productId, name, price, img }) => {
      if (productsStore.indexOf(productId) === -1) {
        activeTextButton = 'Add to Cart';
      } else {
        activeTextButton = 'Added';
        var disabledButton = 'disabled="disabled"';
      }

      htmlCatalog += `
      <div class="delivery-content__dish row col-4 justify-content-center">
        <img class="delivery-content__img col-auto" src=${img}>
        <div class="w-100"></div>
        <p class="delivery-content__name col-auto">${name}</p>
        <p class="delivery-content__cost col-auto">${price} $</p>
        <div class="w-100"></div>
        <button type="button" class="delivery-content__buy-button col-6 btn 
        btn-outline-success" data-id=${productId} ${disabledButton}>${activeTextButton}</button>
      </div>
      `;
    });
    const html = `
    <div class="delivery-content__shop-menu row ms-1 p-0 pb-1">
      ${htmlCatalog}
    </div>
    `;

    document.getElementById('allMenuContainer').innerHTML = html;
    this.initAddEventListeners();
  }

  initAddEventListeners() {
    let btns = document.querySelectorAll('.delivery-content__buy-button');
    btns.forEach(function (btn) {
      btn.addEventListener('click', productsPage.handleSetLocationStorage);
    });
  }

  async getShops() {
    const response = await fetch('http://localhost:7000/api/shops');
    const shops = await response.json();
    let btns = '';
    shops.forEach(({ shop, shopId }) => {
      btns += `
         <div class="w-100"></div>
          <button id="shopButton-${shopId}" type="button" class="delivery-content__shop-button btn btn-outline-warning col mb-2" data-id="${shopId}">${shop}</button>
          `;
    });
    document.querySelector('.delivery-content__shops').innerHTML = btns;
    const elements = document.querySelectorAll('button[id^="shopButton-"]');
    elements.forEach((element) => {
      const id = element.getAttribute('data-id');
      element.addEventListener('click', () => {
        this.getProducts(id);
        localStorage.clear();
        localStorage.setItem('shopId', JSON.stringify(id));
      });
    });
  }

  async getProducts(id) {
    const response = await fetch(`http://localhost:7000/api/products/${id}`);
    const products = await response.json();
    this.render(products);
  }
}

export const productsPage = new Products();
productsPage.getShops();
