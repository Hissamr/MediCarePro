const express = require('express');
const router = express.Router()
const Doctor = require('./doctorSchema')

router.post('/', async(req, res)=>{
    try{
        console.log(req.body.username);

        const doc = await new Doctor({
            name: req.body.name,
            username: req.body.username,
            specialization: req.body.specialization,
            experience: req.body.experience,
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

        doc.save()
        .then(() => console.log('account saved!'))
        .catch((err) => console.error('Error saving account:', err));

        res.json(doc);

    }catch(err){
        res.status(400).json({'err':err.message})
    }
})

module.exports = router;