const router = require('express').Router();
const Fruit = require('../models/fruit')


router.get('', (req, res) =>{
    Fruit.find().then((fruits)=>{
        res.json(
            {
                message: 'Fruits found',
                fruits:fruits
            }
        )
    })
})


router.post('',  (req, res) =>{
    const fruit = new Fruit (
        {
            id: req.body.id,
            name: req.body.name
    })
    fruit.save().then(()=>{
        res.status(201).json({
            message: 'Fruit created',
            fruit:fruit
        })
    })
})

router.delete("/:id", (req, res)=>{
    Fruit.deleteOne({_id: req.params.id})
    .then((result)=>
    {
        res.status(200).json({message:"Fruit Deleted"});
    })
})

module.exports = router