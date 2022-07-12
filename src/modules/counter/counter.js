import { calcTotalPrice } from '../calcTotalPrice/calcTotalPrice';
import { localStorageUtil } from '../localstorageUtil/localstorage_util';

class Counter {
  minusEl() {
    const selectedDishes = document.querySelectorAll('.delivery-content__dish');
    selectedDishes.forEach((item) => {
      item
        .querySelector('[data-action="minus"]')
        .addEventListener('click', () => {
          const counter = item.querySelector('[data-counter]');
          if (+counter.innerText > 1) {
            counter.innerText = --counter.innerText;
            const idDish = item
              .querySelector('[data-id]')
              .getAttribute('data-id');
            calcTotalPrice.calcTotalPrice();
            localStorageUtil.removeProducts(idDish);
          }
        });
    });
  }

  plusEl() {
    const selectedDishes = document.querySelectorAll('.delivery-content__dish');
    selectedDishes.forEach((item) => {
      item
        .querySelector('[data-action="plus"]')
        .addEventListener('click', () => {
          const counter = item.querySelector('[data-counter]');
          counter.innerText = ++counter.innerText;
          const id = item.querySelector('[data-id]').getAttribute('data-id');
          calcTotalPrice.calcTotalPrice();
          localStorageUtil.putProducts(id);
        });
    });
  }
}

export const counter = new Counter();
