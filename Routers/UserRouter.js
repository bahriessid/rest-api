const express = require('express');
const router = express.Router();
const User = require('../Models/UserSchema');

//create many users
  router.post('/ManyUsers',async (req,res)=> {
    try{
      const data= await User.create(req.body)
res.send('User were created')
    }
    catch(err){
      res.status(500).json({error:err.message})
    }
  })

  //  GET :  RETURN ALL USERS 
  router.get('/Users',(req,res)=>{
    User.find({},(err,data)=>err? console.log(err) : res.json(data))
  })

  //POST :  ADD A NEW USER TO THE DATABASE 
  router.post('/NewPerson', (req,res) => {
    const newPerson = new User(req.body)
    newPerson
    .save()
    .then(() => res.send('Record saved'))
    .catch(err => res.status(400).json(err.message))
  })

  //PUT : EDIT A USER BY ID 
  router.put('/:id',(req,res)=>{
    User.findOneAndUpdate({_id: req.params.id},{$set:{age:18}},{new:true},(err,data)=>
    err? console.log(err) : res.json(data))
  })

  //DELETE : REMOVE A USER BY ID
  router.delete('/:PersonID',(req,res)=>{
    User.findByIdAndRemove(req.params.PersonID,(err,data)=>err? console.log(err) : res.send('Person is deleted'))
  })
module.exports= router