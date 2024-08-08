const express = require('express');
const cors = require('cors');
const path = require('path');
const http = require('http');
const fs = require('fs');
const { Sequelize, DataTypes } = require('sequelize');
const db = require("./models");
const Ingredient = require('./models/index')

// Load configuration
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config.json')[env];

// Initialize Sequelize
// Ingredient(sequelize, DataTypes);
// const sequelize = new Sequelize(config.database, config.username, config.password, {
//   host: config.host,
//   dialect: config.dialect
// });

// Initialize Express app
const app = express();

// Configure CORS
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, './public')));

// Import routes
const menuRoutes = require('./routes/menus');
const dishRoutes = require('./routes/dishes');
const ingredientRoutes = require('./routes/ingredients');
const categoryRoutes = require('./routes/categories');
const userRoutes = require('./routes/users');
const orderRoutes = require('./routes/orders');

// Use routes
app.use('/api/menus', menuRoutes);
app.use('/api/dishes', dishRoutes);
app.use('/api/ingredients', ingredientRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

// Error handling for non-existent routes
app.use((req, res, next) => {
    res.status(404).json({ message: 'Not Found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

// Set the port number
const PORT = process.env.PORT || 3001;

// HTTP options
const options = {
    // key: fs.readFileSync('localhost-key.pem'),
    // cert: fs.readFileSync('localhost.pem')
};

// Sync database and start server
// sequelize.authenticate()
//     .then(() => {
        console.log('Database connected...');
        http.createServer(options, app).listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    // })
    // .catch(err => {
    //     console.error('Unable to connect to the database:', err);
    // });
