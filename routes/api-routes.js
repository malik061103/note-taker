const router = require('express').Router();
const {v4:uuidv4}=require('uuid')
const fs = require('fs');

router.get('/notes',async(req,res) => {
const dbjson =await JSON.parse(fs.readFileSync("db/db.json","utf8"));
res.json(dbjson);
});

router.post ('/notes',async(req,res) => {
    const dbjson =await JSON.parse(fs.readFileSync("db/db.json","utf8"));
    const newFeedback ={
        title:req.body.title,
        text:req.body.text,
        id:uuidv4(),
    };
    dbjson.push(newFeedback)
    fs.writeFile("db/db.json",JSON.stringify(dbjson),err=>{
        console.err
    });
    res.json(dbjson);
});

module.exports=router;