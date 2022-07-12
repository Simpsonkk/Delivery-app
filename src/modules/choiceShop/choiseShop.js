import { productsPage } from './../products/products';
import { catalogs } from '../catalogs/catalogs';

class ChoiseShop {
  initEventListeners() {
    const btns = document.querySelectorAll('.delivery-content__shop-button');
    btns.forEach((btn) => {
      btn.addEventListener('click', chosenShop.getShopMenu);
    });
  }

  getShopMenu(event) {
    const shopName = event.target.getAttribute('data-shop');
    const selectedShop = catalogs[shopName];
    productsPage.render(selectedShop);
    localStorage.removeItem('shopName');
    localStorage.removeItem('products');
    localStorage.setItem('shopName', JSON.stringify(shopName));
  }
}
export const chosenShop = new ChoiseShop();
chosenShop.initEventListeners();
