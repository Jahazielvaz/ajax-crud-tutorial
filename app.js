let express = require('express');
let app = express();

app.set(express.static('./public'));

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/index.html')
})


// Server
let PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT}`)
});
