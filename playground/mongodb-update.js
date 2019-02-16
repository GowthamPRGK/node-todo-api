const {MongoClient, ObjectID} = require('mongodb'); 


MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,db)=>{
    if(err){
       return console.log('Unable to connect to mongodb');
    }
    console.log('Connected to mongodb server');
    const dbo = db.db('TodoApp');

    // dbo.collection('Todos').findOneAndUpdate({
    //     _id:new ObjectID('5c684432b132302def79acf4')
    // },{
    //     $set:{
    //         completed: true
    //     }
    // },{returnOriginal: false}).then((res)=>{
    //     console.log(res);
    // });

    dbo.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c683540173d04553cbc315b')
    },{
        $set:{
            name: 'Gowtham Karnan'
        },
        $inc:{
            age:1
        }
    },{
        returnOriginal:false
    }).then((res)=>{
        console.log(res);
    });
    

//    db.close();
});
