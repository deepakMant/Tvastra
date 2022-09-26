var mongoose=require("mongoose");
var express=require("express");
// const DB='mongodb+srv://saikat:14091998@cluster0.lw9wi.mongodb.net/tvastrausers?retryWrites=true&w=majority'
const DB ='mongodb://localhost:27017/UserTvastra';
mongoose.connect(DB,
    {
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true,
        useFindAndModify:false
    }).then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
});