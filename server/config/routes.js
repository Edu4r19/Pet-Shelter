const pets = require('../controllers/pets')

module.exports = function(app){
    app.get('/api/pets', (req,res) =>{
        pets.index(req,res)
    })
    
    app.get('/api/pets/:id', (req,res) =>{
        pets.show(req,res)
    })

    app.post('/api/pets', (req,res) =>{
        pets.create(req,res)  
    })

    app.put('/api/pets/:id', function(req, res) {
        pets.update(req, res)
    })

    app.delete('/api/pets/:id', function(req, res) {
        pets.destroy(req, res)
    })

    app.get('/api/pets/:id/up', function(req,res){
        pets.like(req,res)
    })

    app.get('/api/pets/:id/down', function(req,res){
        pets.unlike(req,res)
    })
}
