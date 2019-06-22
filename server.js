const express = require('express');
const connectDB = require('./config/db');
// const path = require('path');

const app = express();

// Connect Database
connectDB();
// Init admin user
const User = require('./models/User');

// const user = {
//   name: "Admin",
//   email: "admin@gmail.com",
//   password: "12345",
//   role: "admin"
// }

// User.create(user, function(e) {
//   if (e) {
//       throw e;
//   }
// });

// Init Middleware

// Should allow us to req.body
app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send(`api`))

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));


const PORT = process.env.PORT || 5000; // for heroku OR local - 5000

app.listen(PORT, () => console.log(`server started ${PORT}`));