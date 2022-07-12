import { BURGER_QUEEN_CATALOG } from '../catalogs/catalogs.js';
import { localStorageUtil } from '../localstorageUtil/localstorage_util';

class Products {
  handleSetLocationStorage(event) {
    localStorageUtil.putProducts(event.target.getAttribute('data-id'));
    event.target.innerHTML = 'Added';
    event.target.setAttribute('disabled', 'disabled');
  }

  render(shopName) {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = '';
    let activeTextButton = '';
    shopName.forEach(({ id, name, price, img }) => {
      if (productsStore.indexOf(id) === -1) {
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
        btn-outline-success" data-id=${id} ${disabledButton}>${activeTextButton}</button>
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
}

export const productsPage = new Products();
localStorage.setItem('shopName', JSON.stringify('BURGER_QUEEN_CATALOG'));
productsPage.render(BURGER_QUEEN_CATALOG);
