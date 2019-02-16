const {MongoClient, ObjectID} = require('mongodb'); 


MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,db)=>{
    if(err){
       return console.log('Unable to connect to mongodb');
    }
    console.log('Connected to mongodb server');
    const dbo = db.db('TodoApp');

    // dbo.collection('Todos').deleteOne({text:'Eat lunch'}).then((res)=>{
    //     console.log(JSON.stringify(res,undefined,2))
    // });

    dbo.collection('Users').findOneAndDelete({_id: new ObjectID('5c6836eca0d0cb0e284a6408')}).then((res)=>{
        console.log(res);
    });
    

//    db.close();
});
