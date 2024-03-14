const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://subieen99:PJcC6YCz6SVOrdXN@cluster0.uywvym1.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log("connected to the db")
}).catch((err)=>{
    console.log(err)
});


