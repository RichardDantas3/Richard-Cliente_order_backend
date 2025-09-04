const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const clientRoutes = require('./routes/clients');
const orderRoutes = require('./routes/orders');

app.use('/api/clients', clientRoutes);
app.use('/api/orders', orderRoutes)

app.get('/',(req, res) =>{
    res.json({
        message:'API funcionando',
        timestamp: new Date().toISOString()
    });
});

const PORT = 3005;

app.listen(PORT, () => {
    console.log(`Server funcionando em ${PORT}`);
    // console.log(`Server funcionando em http://localhost:${PORT}/api/clients`);
});
module.exports = app;