const {Pet} = require('../models/pets')

module.exports = {
    index: (req,res) =>{
        Pet.find()
        .then(data =>{
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
    },
    create: (req,res) =>{
        Pet.create(req.body)
        .then(pet =>{
            res.json(pet)
        })
        .catch(err =>{
            let errors = [];
            for (var key in err.errors){
                errors.push(err.errors[key].message)
            }
            res.json({errors:errors})
        })
    },

    update: (req,res) =>{
        Pet.update({_id:req.params.id}, {$set: req.body})
        .then(Pet =>{
            res.json(Pet)
        })
        .catch(err =>{
            let errors = [];
            for (var key in err.errors){
                errors.push(err.errors[key].message)
            }
            res.json({errors:errors})
        })
    },

    destroy: (req,res) =>{
        Pet.remove({_id:req.params.id})
        .then(()=>{
            res.json('Successfully Erased Pet: '+req.params.id)
        })
        .catch(err =>{
            res.json(err)
        })
    },

    show: (req,res) =>{
        Pet.findOne({_id:req.params.id})
        .then(pet =>{
            res.json(pet)
        })
        .catch(err =>{
            res.json(err)
        })
    },

    like: (req,res) =>{
        Pet.update({_id:req.params.id}, {$inc:{likes:1}})
        .then(pet =>{
            res.json(pet)
        })
        .catch(err =>{
            res.json(err)
        })
    },

    unlike: (req,res) =>{
        Pet.update({_id:req.params.id}, {$inc:{likes:-1}})
        .then(pet =>{
            res.json(pet)
        })
        .catch(err =>{
            res.json(err)
        })
    }
}