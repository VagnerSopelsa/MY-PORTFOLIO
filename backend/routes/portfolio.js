const router = require('express').Router();
const Portfolio = require('../models/Portfolio');

//create
router.post('/', async (req, res) => {
    // console.log('file not open',req.body)
    const portfolio = new Portfolio({
        title: req.body.title,
        description: req.body.description
    });

    try{
        const savedPortfolio = await portfolio.save()
        res.json({
            sucess: true,
            data: savedPortfolio
        })
    }catch(err){
        res.json({
            sucess: false,
            message: err
        })
    }
})

// Read
router.get('/', async (req, res) => {  
    try {
         const portfolio = await Portfolio.find()
 
         res.json({
             sucess: true,
             data: portfolio 
         })
     }catch(err){
         res.json({
             sucess: false,
             data: err 
         })
     }
 });
 
 router.get('/:slug', async (req, res) => {
     try {
         const portfolio = await Portfolio.findOne({
             slug: req.params.slug
         })
 
         res.json({
             sucess: true,
             data: portfolio 
         })
     }catch(err){
         res.json({
             sucess: false,
             message: err 
         })
     }
 });

 // Update
router.patch('/:slug', async (req, res) => {
    try{
        const updatedPortfolio = await Portfolio.updateOne({
            slug: req.params.slug
        },
        {
            $set: {
                title: req.body.title,
                description: req.body.description
            }
        })

        res.json({
            success: true,
            updated: updatedPortfolio.modifiedCount
            
        }) 
    } catch(err){
        res.json({
            sucess: false,
            message: err
        })
    } 
})
 //Delete
 router.delete('/:slug', async (req, res) => {
     try {
         const deletedPortfolio = await Portfolio.deleteOne ({
             slug: req.params.slug
         });

         res.json({
             sucess: true,
             deleted: deletedPortfolio.deletedCount
         })
     } catch(err ) {
         res.json({
             sucess: false,
             message: err
         })
     }
 })
module.exports = router