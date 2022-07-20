import '/src/assets/styles/style.scss';
import { localStorageUtil } from '../localstorageUtil/localstorage_util';
import { counter } from '../counter/counter';
import { sendOrder } from '../order/order';

class ShoppingCartPage {
  initAddEventListeners() {
    let btns = document.querySelectorAll('.delivery-content__remove-button');
    btns.forEach(function (btn) {
      btn.addEventListener('click', shoppingCartPage.removeDish);
    });
    document
      .getElementById('submit')
      .addEventListener('click', shoppingCartPage.setOrder);
  }

  render(shopId) {
    const products = localStorageUtil.getProducts();
    let selectedDishesAndQuantity = {};
    for (var i = 0; i < products.length; i++) {
      if (selectedDishesAndQuantity[products[i]]) {
        selectedDishesAndQuantity[products[i]] += 1;
      } else {
        selectedDishesAndQuantity[products[i]] = 1;
      }
    }
    let htmlCatalog = '';
    let sumCatalog = 0;
    shopId.forEach(({ productId, name, price, img }) => {
      const quantity = selectedDishesAndQuantity[productId];
      if (products.indexOf(JSON.stringify(productId)) !== -1) {
        htmlCatalog += `
        <div class="delivery-content__dish row col-4 justify-content-center">
          <img class="delivery-content__img col-auto" src=${img}>
          <div class="w-100"></div>
          <p class="delivery-content__name col-auto">${name}</p>
          <p class="delivery-content__cost col-auto p-0">${price}</p>
          <p class="delivery-content__currency col-auto p-0">$</p>
          <div class="w-100"></div>
          <button type="button" class="delivery-content__remove-button col-2 p-0 btn 
          btn-outline-success" data-id=${productId}>x</button>
          <div class="delivery-content__counter-wrapper col-6 ms-2">
            <div class="delivery-content__control" data-action="minus">-</div>
            <div id="counter" class="delivery-content__current" data-counter>${quantity}</div>
            <div class="delivery-content__control" data-action="plus">+</div>
          </div>
        </div>
        `;
        sumCatalog += price * quantity;
      }
    });
    document.getElementById('selectedDishes').innerHTML = htmlCatalog;
    document.getElementById(
      'totalPrice'
    ).innerHTML = `Total price: ${sumCatalog} $`;
    this.initAddEventListeners();
    counter.plusEl();
    counter.minusEl();
  }

  removeDish(event) {
    localStorageUtil.removeAllProducts(event.target.getAttribute('data-id'));
    shoppingCartPage.getProducts(JSON.parse(selectedShop));
  }

  sumTotal() {
    const selectedDishes = document.querySelectorAll('.delivery-content__dish');

    var totalPrice = 0;
    selectedDishes.forEach((item) => {
      const quantityEl = item.querySelector(
        '.delivery-content__current'
      ).textContent;
      const priceEl = item.querySelector('.delivery-content__cost').textContent;
      const currentPrice = quantityEl * priceEl;
      totalPrice += currentPrice;
    });

    document.getElementById(
      'totalPrice'
    ).innerHTML = `Total price: ${totalPrice} $`;
  }
  async setOrder() {
    let quantityOfDishes = [];
    const products = localStorageUtil.getProducts();
    const shopName = localStorage.getItem('shopId');
    const response = await fetch(
      `http://localhost:7000/api/products/${JSON.parse(shopName)}`
    );
    const list = await response.json();
    const totalPrice = document
      .getElementById('totalPrice')
      .innerHTML.split('Total price: ')
      .join('');
    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const userPhone = document.getElementById('userPhone').value;
    const userAddress = document.getElementById('userAddress').value;
    const btns = document.querySelectorAll('.delivery-content__current');
    btns.forEach((btn) => {
      quantityOfDishes.push(btn.textContent);
    });
    list.length = quantityOfDishes.length;

    const dishesNameAndQuantity = list.reduce((acc, el, i) => {
      acc.push(el.name, quantityOfDishes[i]);
      return acc;
    }, []);
    const resp = await fetch('http://localhost:7000/api/shops');
    const shops = await resp.json();
    const selectedShopName = shops
      .filter((el) => JSON.parse(shopName).includes(el.shopId))
      .map((el) => el.shop);
    const order = {
      shop: selectedShopName.join(''),
      dishesNameAndQuantity: dishesNameAndQuantity,
      totalPrice: totalPrice,
      userName: userName,
      userEmail: userEmail,
      userPhone: userPhone,
      userAddress: userAddress,
    };
    localStorage.clear();
    document.getElementById('selectedDishes').innerHTML = '';
    document.getElementById('totalPrice').innerHTML = 'Total price: 0 $';
    sendOrder(order);
    alert('Your order has been sent!');
  }

  async getProducts(id) {
    const response = await fetch(`http://localhost:7000/api/products/${id}`);
    const products = await response.json();
    this.render(products);
  }
}

export const shoppingCartPage = new ShoppingCartPage();
const selectedShop = localStorage.getItem('shopId');
if (selectedShop) {
  shoppingCartPage.getProducts(JSON.parse(selectedShop));
}
