const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const todomodel = require("./model/model")

const app = express()
app.use(cors());
app.use(express.json());
const port = 3000

mongoose.connect('mongodb://localhost:27017/mytask')

app.get('/get', (req, res) => {
    todomodel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/add', (req, res) => {
    const mytask = req.body.mytask;
    todomodel.create({
        mytask : mytask
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})

app.put('/update/:id', (req, res)=> {
    const {id} = req.params;
    todomodel.findByIdAndUpdate({_id: id}, {done: true})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.delete('/delete/:id', (req, res)=> {
    const {id} = req.params;
    todomodel.findByIdAndDelete({_id: id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

// app.delete('/delete/:id', (req, res) => {
//    const id = req.params;
//     todomodel.findByIdAndDelete({id:_id})
//     }).then(result => res.json(result))
//     .catch(err => res.json(err))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})