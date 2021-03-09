const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/postManagerDB',{useNewUrlParser: true, useUnifiedTopology: true },

err =>{
    if(!err)
    console.log('Mangodb connection succeded .')
    else
    console.log('error while connection mongodb :' )
})