const express = require('express');
const morgan = require('morgan');
const models = require('./models');

// db.authenticate().
// then(() => {
//   console.log('connected to the database');
// })

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.get("", (req, res) => {
    res.send("");
})

const PORT = 3000;

const init = async() => {
    await models.db.sync();
    app.listen(PORT, () => {
        console.log(`App listening in port ${PORT}`);
      });    
}

init();
