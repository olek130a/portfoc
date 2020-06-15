const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/portfoctest',{
    useNewUrlParser: true,
    useCreateIndex: true
})
