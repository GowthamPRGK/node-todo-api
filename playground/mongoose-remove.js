const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((res)=>{
//     console.log(res);
// });

// Todo.findOneAndDelete({}).then((todo)=>{

// });

Todo.findByIdAndDelete('5c68e96b118ff4276cde54f0').then((todo)=>{
    console.log(todo);
});