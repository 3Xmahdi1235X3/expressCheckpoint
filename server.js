const express = require('express');
const app = express();
const port = 3000;

const checkWorkingHours = (req, res, next) => {
  const now = new Date();
  const day = now.getDay(); 
  const hour = now.getHours();

  if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
    next();
  } else {
    res.send('Sorry, this website is only available during working hours.');
  }
};

app.use(express.static('public'));
app.use(checkWorkingHours); 

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/home.html');
});

app.get('/services', (req, res) => {
  res.sendFile(__dirname + '/public/services.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
