import express from 'express';
import bodyParser from 'body-parser';
import { hash , compare } from 'bcrypt';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { signup, signin } from './db/db.mjs';

const { urlencoded } = bodyParser;
const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(urlencoded({ extended: true }));
app.use(express.static(join(__dirname, 'public')));

// Registration endpoint
app.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;

    signup(username, password);

    res.send('User registered successfully');
  } catch (error) {
    res.status(500).send('Error registering new user');
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  
    const { username, password } = req.body;
    try{
    let user = await signin(username, password);
    if (!user) {
      return res.status(400).send('Invalid credentials');
    }
      res.send('Login successful');
    } catch (error) {
      res.status(500).send('Error logging in');
    }

});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
