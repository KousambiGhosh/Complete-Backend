const express = require ("express");
const app =express();
const port= 4000;

app.get('/', (req,res)=>{
    res.send('Hello World');
});

app.get('/youtube',(req,res)=>{
    res.send('i am youtube');
});

app.listen(port,()=>{
    console.log('app listening on port',{port});
});