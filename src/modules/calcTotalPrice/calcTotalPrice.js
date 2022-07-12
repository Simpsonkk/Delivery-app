class CalcTotalPrice {
  calcTotalPrice() {
    const selectedDishes = document.querySelectorAll('.delivery-content__dish');
    let totalPrice = 0;

    selectedDishes.forEach((dish) => {
      const dishCost = dish.querySelector('.delivery-content__cost').innerHTML;
      const dishPrice = dish.querySelector('[data-counter]').innerHTML;
      const currentPrice = +dishCost * +dishPrice;
      totalPrice += currentPrice;
    });
    document.getElementById('totalPrice').innerHTML = `Total price: ${totalPrice} $`;
  }
}
export const calcTotalPrice = new CalcTotalPrice();
