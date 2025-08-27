import sequelize from "../config/database.cjs";
import UserModel from "./user.js";
import AddressModel from "./address.js";
import CategoryModel from "./category.js";
import ProductModel from "./product.js";
import ProductImageModel from "./productImage.js";
import OrderModel from "./order.js";
import OrderItemModel from "./orderItem.js";
import CartModel from "./cart.js";

// Initialize models
const User = UserModel(sequelize);
const Address = AddressModel(sequelize);
const Category = CategoryModel(sequelize);
const Product = ProductModel(sequelize);
const ProductImage = ProductImageModel(sequelize);
const Order = OrderModel(sequelize);
const OrderItem = OrderItemModel(sequelize);
const Cart = CartModel(sequelize);

// Associations
User.hasMany(Address, { foreignKey: "user_id" });
Address.belongsTo(User, { foreignKey: "user_id" });

Category.hasMany(Product, { foreignKey: "category_id" });
Product.belongsTo(Category, { foreignKey: "category_id" });

Product.hasMany(ProductImage, { foreignKey: "product_id" });
ProductImage.belongsTo(Product, { foreignKey: "product_id" });

User.hasMany(Order, { foreignKey: "user_id" });
Order.belongsTo(User, { foreignKey: "user_id" });

Order.hasMany(OrderItem, { foreignKey: "order_id" });
OrderItem.belongsTo(Order, { foreignKey: "order_id" });

OrderItem.belongsTo(Product, { foreignKey: "product_id" });

User.hasMany(Cart, { foreignKey: "user_id" });
Cart.belongsTo(User, { foreignKey: "user_id" });

Cart.belongsTo(Product, { foreignKey: "product_id" });

export { sequelize, User, Address, Category, Product, ProductImage, Order, OrderItem, Cart };