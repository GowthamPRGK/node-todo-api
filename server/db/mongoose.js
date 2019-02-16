
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true });

// var Todo = mongoose.model('Todo',{
//     text:{
//         type: String,
//         required: true,
//         minlength:1,
//         trim: true
//     },
//     completed:{
//         type: Boolean,
//         default: false
//     },
//     completedAt:{
//         type: Number,
//         default: null
//     }
// }); 

// var newTodo = new Todo({
//     text: 'SOmething to do'
// });

// newTodo.save().then((doc)=>{
//     console.log(doc);
// },(e)=>{
//     console.log(e);
// });

// var otherTodo = new Todo({
//     text: 'Feed the cat',
//     completed: true,
//     completedAt: 12.0
// });

// otherTodo.save().then((doc)=>{
//     console.log(doc);
// },(e)=>{
//     console.log(e);
// });

// var User = new mongoose.model('User',{
//     email:{
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 4
//     }
// });

// var newUser = new User({
//     email:'gowtham@gmail.com'
// });

// newUser.save().then((docs)=>{
//     console.log(docs);
// },(err)=>{
//     console.log(err);
// });

module.exports = {
    mongoose
};

