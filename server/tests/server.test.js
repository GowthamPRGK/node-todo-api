const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {Todo}=require('./../models/todo');

const todos = [{
    _id: new ObjectID(),
    text: 'First test todo'    
},{
    _id: new ObjectID(),
    text: 'Second test todo'
}];

beforeEach((done)=>{
    Todo.remove({}).then(()=>{
        return Todo.insertMany(todos);
    }).then(()=>done());
});

describe('POST / todos',()=>{
    it('Should create anew todo',(done)=>{
        var text = 'Test todo text';

        request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res)=>{
            expect(res.body.text).toBe(text);
        })
        .end((err,res)=>{
            if(err){
                return done(err);
            }
            Todo.find({text}).then((todos)=>{
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe(text);
                done();
            }).catch((e)=>done(e));
        });
    });
    it('Should not create anew todo with invalid data',(done)=>{
        var text = '';

        request(app)
        .post('/todos')
        .send({text})
        .expect(400)
        .end((err,res)=>{
            if(err){
                return done(err);
            }
            Todo.find().then((todos)=>{
                expect(todos.length).toBe(2);
                done();
            }).catch((e)=>done(e));
        });

    });
});

describe('GET /todos',()=>{
    it('Should get all the todos',(done)=>{
        request(app)
        .get('/todos')
        .expect((res)=>{
            expect(res.body.todos.length).toBe(2);
        })
        .end(done);
    });
});

describe('GET /todos/id',()=>{
    it('should retur todo doc',(done)=>{

        request(app)
        .get(`/todos/${todos[0]._id.toHexString()}`)
        .expect(200)
        .expect((res)=>{
            expect(res.body.todo.text).toBe(todos[0].text);
        })
        .end(done);

    });

    it('should return 404 not found',(done)=>{
        var hId = new ObjectID;
        request(app)
        .get(`/todos/${hId.toHexString()}`)
        .expect(404)
        .end(done);
    });

    it('should return 404 not found for invalid id',(done)=>{
        request(app)
        .get(`/todos/123`)
        .expect(404)
        .end(done);
    });
});

describe('DELETE /todos/:id',()=>{
    it('should remove the todo',(done)=>{
        var hexId = todos[1]._id.toHexString();

        request(app)
        .delete(`/todos/${hexId}`)
        .expect(200)
        .expect((res)=>{
            expect(res.body.todo.text).toBe(todos[1].text)
        })
        .expect((res)=>{
            expect(res.body.todo._id).toBe(hexId);
        })
        .end((err,res)=>{
            if(err){
                return done(err);
            }
            Todo.findById(hexId).then((todo)=>{
                expect(todo).toBe(null);
                done();
            }).catch((e)=> done(e));
        });
    });
    it('should return 404 if todo not found',(done)=>{
        var hId = new ObjectID;
        request(app)
        .delete(`/todos/${hId.toHexString()}`)
        .expect(404)
        .end(done);
    })
    it('shouls return 404 if objectid is invalis not valid',(done)=>{
        request(app)
        .delete(`/todos/123`)
        .expect(404)
        .end(done);
    })
});