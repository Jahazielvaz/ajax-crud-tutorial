let express = require('express');
let app = express();
app.use(express.static(__dirname));

let products = [
  {id: 1, name: 'MacBook Pro'},
  {id: 1, name: 'USB Port'},
  {id: 1, name: 'Kali Linux'}

]

let currentId = 2;

// Routes
app.get('/products', (req, res) => {
  res.send({products: products})
})

// Server
let PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT}`)
});
