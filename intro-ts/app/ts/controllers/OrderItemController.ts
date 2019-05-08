class OrderItemController {
  private _inputDate: HTMLInputElement;
  private _inputQuantity: HTMLInputElement;
  private _inputValue: HTMLInputElement;

  constructor() {
    this._inputDate = <HTMLInputElement>document.querySelector('#orderDate');
    this._inputQuantity = <HTMLInputElement>document.querySelector('#orderQuantity');
    this._inputValue = <HTMLInputElement>document.querySelector('#orderItemValue');
  }

  addNewOrderItem(event: Event) {
    event.preventDefault();

    const orderItem = new OrderItem(
      new Date(this._inputDate.value.replace(/-/g, ',')),
      parseInt(this._inputQuantity.value),
      parseFloat(this._inputValue.value)
    );

    console.log(orderItem);
  }
}
