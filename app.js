let express = require('express');
let app = express();

// app.get('/', (req,res) => {
//   res.sendFile(__dirname + '/index.html')
// })

app.use(express.static(__dirname));


// Server
let PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT}`)
});
