const express = require("express");
const userModel = require("./models");
const router = express.Router()

router.route('/add_item')
.post((request, response) => {
    const user = new userModel(request.body);
    try {
      user.save((err,result)=>{
        response.send(result);
      });
      // response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
});

router.route('/read_all')
.post((req,res)=>{
  // const user = new userModel(req.body);
  try{
    userModel.find((err,doc)=>{
      res.send(doc);
    })
    // res.send(user);
  } catch(error){
    res.status(500).send(error);
  }
})

router.route('/update_one')
.post((req,res)=>{
  userModel.updateOne({item:req.body.item},{qty: req.body.qty, min_qty: req.body.min_qty},(err,result)=>{
    res.send(result);
  });
})

router.route('/delete_item')
.post((req,res)=>{
  userModel.deleteOne({item:req.body.item},(err,result)=>{
    res.send(result);
  })
})

// router.route()

module.exports = router;