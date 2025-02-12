const express = require('express');
const router = express.Router()
const Patient = require('./patientSchema')

router.post('/', async(req, res)=>{
    try{
        console.log(req.body.username);

        const pat = await new Patient({
            name: req.body.name,
            username: req.body.username,
            phoneno: req.body.phoneno,
            email: req.body.email,
            password: req.body.password,
            dob: req.body.dob,
            address: req.body.address,
            address2: req.body.address2,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
        })

        pat.save()
        .then(() => console.log('account saved!'))
        .catch((err) => console.error('Error saving account:', err));

        res.json(pat);

    }catch(err){
        res.status(400).json({'err':err.message})
    }
})

module.exports = router;