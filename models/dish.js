module.exports = (sequelize, DataTypes) => {
    const Dish = sequelize.define('Dish', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false
      }
    });
    return Dish;
  };
  