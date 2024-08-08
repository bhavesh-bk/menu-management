module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Menu;
}

// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/database'); // Assuming your sequelize instance is in this file

// class Menu extends Model {}

// Menu.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     modelName: 'Menu',
//     tableName: 'menus',
//     timestamps: false, // Disable timestamps if not required
//   }
// );

// module.exports = Menu;
