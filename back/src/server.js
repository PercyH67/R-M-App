
const PORT = 3001;
const app = require("./routes/index")

app.listen(PORT, () => {
   console.log('Server raised in port ' + PORT);
});