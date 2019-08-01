const express = require('express');
const connectDB = require('./config/db')


const app = express();

//Connect to Database
connectDB()

//Init
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json({ msg: 'Welcome to the Contact Keeper API 7/28/19' }));

const PORT = process.env.port || 5000;

app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));