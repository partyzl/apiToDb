const express = require('express');
const router = express.Router();

const Phone = require('../models/phone');

router.get('/', async(req, res)=>{
    try {
        const phone = await Phone.all;
        res.json({phone});
    } catch (error) {
        res.status(500).json({error});
    }
})

router.post('/', async(req, res)=>{
    try {
        const phone = new Phone.create(req.body.name, req.body.age, req.body.phoneNumber);
        res.json(phone);
    } catch (error) {
        res.status(400).json({error})
    }
})

module.exports = router;