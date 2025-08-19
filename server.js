const express = require('express');

const PORT = 3000;
const app = express();

const clientRoutes = require('./routes/clients');
app.use('/api/clients', clientRoutes);

app.get('/',(req,res) =>{
    res.json({
        message:'Servidor de API funcionando'
    });
});

app.listen(PORT, ()=>{
    console.log(`Server funcionando em http://localhost:${PORT}`);
    console.log(`Server funcionando em http://localhost:${PORT}/api/clients`);
});
module.exports = app;