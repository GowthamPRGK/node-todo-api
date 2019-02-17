const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5c68df6c64bf9d35bcc7a531';

if(!ObjectID.isValid(id)){
    console.log('id not valid');
}

Todo.find({
    _id: id
}).then((todos)=>{
    console.log('Todos',todos);
},(e)=>{
    console.log(e)
});

Todo.findOne({
    _id: id
}).then((todo)=>{
    console.log('Todo',todo);
});

Todo.findById(id).then((todo)=>{
    console.log('Find by id',todo);
});
