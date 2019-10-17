let express = require('express');
let app = express();
app.use(express.static(__dirname));
let bodyParser = require('body-parser');
app.use(bodyParser.json())

let urlencoded = bodyParser.urlencoded({extended: false})

let products = [
  {id: 1, name: 'MacBook Pro'},
  {id: 2, name: 'USB Port'},
  {id: 3, name: 'Kali Linux'}

]

let currentId = 3;

// Routes
app.get('/products', (req, res) => {
  res.send({products: products})
})

app.post('/products', (req, res) => {
  let productName = req.body.name
  currentId++

  products.push({
    id: currentId,
    name: productName
  })

  res.send('SUCCESS')
})

// Server
let PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT}`)
});
