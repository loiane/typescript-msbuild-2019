class OrderItemController {
  constructor() {
    this._inputDate = document.querySelector('#orderDate');
    this._inputQuantity = document.querySelector('#orderQuantity');
    this._inputValue = document.querySelector('#orderItemValue');
  }

  addNewOrderItem(event) {
    event.preventDefault();
    const orderItem = new OrderItem(
      new Date(this._inputDate.value.replace(/-/g, ',')),
      parseInt(this._inputQuantity.value),
      parseFloat(this._inputValue.value)
    );
    console.log(orderItem);
  }
}
