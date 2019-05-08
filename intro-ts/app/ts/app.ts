const orderItem = new OrderItem();

const controller = new OrderItemController();

document
  .querySelector('.form')
  .addEventListener('submit', controller.addNewOrderItem.bind(controller));