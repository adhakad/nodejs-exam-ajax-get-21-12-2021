const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/abc', {useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology:true,useFindAndModify:false,});
var conn =mongoose.Collection;
var examResultSchema =new mongoose.Schema({
     
    eid:{
        type:Number,
    },
    sn:{
        type:Number,  
    },      
    ans_sn:{
        type:Number, 
    },
    select_ans_sn:{
        type:Number, 
    },
    right_ans:{
        type:Number, 
    },
           
});

var examResultModel = mongoose.model('examResult', examResultSchema);
module.exports=examResultModel;

//mongodb+srv://abhishek_dhakad:Aa1Bb2Hh3@cluster0.fxygu.mongodb.net/<dbname>?retryWrites=true&w=majority