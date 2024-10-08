const { Sequelize, DataTypes } = require('sequelize');
const IngridientModel = require('./ingredient')
const CategoryModel = require('./category')
const DishModel = require('./dish')
const MenuModel = require('./menus')
const OrderModel = require('./order')
const UserModel = require('./user')

const sequelize = new Sequelize('sqlite::memory:')
const Ingredient = IngridientModel(sequelize,DataTypes)
const Category = CategoryModel(sequelize,DataTypes)
const Dish = DishModel(sequelize,DataTypes)
const Menu = MenuModel(sequelize,DataTypes)
const Order = OrderModel(sequelize,DataTypes)
const User = UserModel(sequelize,DataTypes)
sequelize.sync({ force: false })


module.exports={
    Category,
    Dish,
    Menu,
    Ingredient,
    Order,
    User
}

// const express = require('express');
// const cors = require('cors');
// const path = require('path');
// const https = require('https');
// const fs = require('fs');
// const sequelize = require('../config/config.json');

// // Import routes
// const menuRoutes = require('../routes/menus');
// const dishRoutes = require('../routes/dishes');
// const ingredientRoutes = require('../routes/ingredients');
// const categoryRoutes = require('../routes/categories');
// const userRoutes = require('../routes/users');
// const orderRoutes = require('../routes/orders');

// // Initialize Express app
// const app = express();

// // Configure CORS
// app.use(cors());

// // Parse incoming JSON requests
// app.use(express.json());

// // Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, '../public')));

// // Use routes
// //app.use('/api/menus', menuRoutes);
// app.use('/api/dishes', dishRoutes);
// app.use('/api/ingredients', ingredientRoutes);
// app.use('/api/categories', categoryRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/orders', orderRoutes);

// // Error handling for non-existent routes
// app.use((req, res, next) => {
//     res.status(404).json({ message: 'Not Found' });
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).json({ message: 'Internal Server Error' });
// });

// // Set the port number
// const PORT = process.env.PORT || 3001;

// // HTTPS options
// const options = {
//     key: fs.readFileSync('localhost-key.pem'),
//     cert: fs.readFileSync('localhost.pem')
// };

// // Sync database and start server
// sequelize.authenticate()
//     .then(() => {
//         console.log('Database connected...');
//         https.createServer(options, app).listen(PORT, () => {
//             console.log(`Server is running on https://localhost:${PORT}`);
//         });
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });
