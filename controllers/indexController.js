const fs = require('fs');
const path = require('path');
let productos = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','productos.json'),'utf-8'));

module.exports = {
    index : (req,res) => {
        return res.render('index', {
        title : "Pimienta & Sal",
        imageAbout : "principal.jpg",
        productos 
    });
},
    detail : (req,res) => {
       return res.render('detail', {
        producto : productos.find(producto => producto.id === +req.params.id)
       });
    }
}