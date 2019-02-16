const {MongoClient, ObjectID} = require('mongodb'); 


MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,db)=>{
    if(err){
       return console.log('Unable to connect to mongodb');
    }
    console.log('Connected to mongodb server');
    const dbo = db.db('TodoApp');
    dbo.collection('Todos').find({completed:false}).toArray()
    .then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log(err);
    });

//    db.close();
});
