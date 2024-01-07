const route = require('express').Router();

//catatan jika ingin menuliskan end poin harus jangan menulis pakai titik './' tapi '/' saja
route.get('/',(req,res)=>{
    res.json({
        message:"anjay halaman utama"
    })
})

const itemRoutes = require('./item');
//harus menggunakan route.use karena menggunakan variable itemRoutes bukan route.get karena ini untuk mengambil data
route.use('/items',itemRoutes);

module.exports=route;