module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
    return Order;
  };
  