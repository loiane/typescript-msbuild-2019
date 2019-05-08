// @ts-check 

class OrderItem {

  /**
   * 
   * @param {Date} date 
   * @param {Number} quantity 
   * @param {Number} value 
   */
 constructor(date, quantity, value) {
    this._date = date;
    this._quantity = quantity;
    this._value = value;
  }
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
    return this.quantity * this.value;
  }
}
