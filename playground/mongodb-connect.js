const {MongoClient, ObjectID} = require('mongodb'); 

console.log('hello',obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,db1)=>{
    if(err){
       return console.log('Unable to connect to mongodb');
    }
    console.log('Connected to mongodb server');
    // const db = db1.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false

    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert todo')
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    // const db = db1.db('TodoApp');
    // db.collection('Users').insertOne({
    //     name: 'Gowtham Karnan',
    //     age: 20,
    //     location: 'Chennai;'
    // },(err,result)=>{
    //     if(err){
    //         return console.log(err);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
    // });

    db1.close();
});
