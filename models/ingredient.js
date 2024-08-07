module.exports = (sequelize, DataTypes) => {
    const Ingredient = sequelize.define('Ingredient', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return Ingredient;
  };
  