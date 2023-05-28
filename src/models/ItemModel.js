const ItemModel = {
  id: 0,
  description: "",
  price: 0,
  image: "",
  category: "",
  title: "",
};

const ItemOrderModel = { amount: 0, item: ItemModel };

const OrderModel = {
  date: "",
  id: 0,
  items: [ItemOrderModel],
};

const CollectionOrdersModel = {
  orders: [OrderModel],
};
