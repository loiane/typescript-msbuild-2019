class OrderItem {
  constructor(private _date: Date, 
    private _quantity: number,
    private _value: number) {}

  get date() {
    return this._date;
  }
  get quantity() {
    return this._quantity;
  }
  get value() {
    return this._value;
  }
  get totalValue() {
    return this._quantity * this._value;
  }
}
