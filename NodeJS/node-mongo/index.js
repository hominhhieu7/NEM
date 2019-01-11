const Mongoclient = require('mongodb').MongoClient;
const assert = require('assert');

const dboper = require('./operation');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

// Mongoclient.connect(url, (err, client) => {

//     assert.equal(err, null);
//     console.log('Connected correctly to server');
//     const db = client.db(dbname);
// const collection = db.collection('dishes');

// collection.insertOne({"name": "Uth","description" : "test"},(err, result)=>{
//     assert.equal(err, null);


//     console.log('After Insert: \n');
//     console.log(result.ops);

//     collection.find({}).toArray((err,doc) =>{
//         assert.equal(err,null);
//         console.log('Found:\n');
//         console.log(doc);
//         db.dropCollection('dishes', (err,result)=>{
//             assert.equal(err, null);
//             client.close();
//         });
//     })
// })
//     dboper.insertDocument(db, { name: "Vadonut", description: "Test" }, 'dishes', (result) => {

//         console.log('Insert Document:\n', result.ops);
//         dboper.findDocument(db, 'dishes', (doc) => {
//             console.log('Found document:\n', doc);
//             dboper.updateDocument(db, { name: 'Vadonut' }, { description: 'Updated Test' }, 'dishes', (result) => {
//                 console.log('Updated Document:\n', result.result);
//                 dboper.findDocument(db, 'dishes', (doc) => {
//                     console.log('Found document:\n', doc);
//                     db.dropCollection('dishes', (result) => {
//                         console.log('Dropped Collection: ', result);
//                         client.close();
//                     });
//                 });
//             });
//         });

//     });
// });
Mongoclient.connect(url).then((client) => {
    // assert.equal(err, null);
    console.log('Connected correctly to server');
    const db = client.db(dbname);
    dboper.insertDocument(db, { name: "Vadonut", description: "Test" }, 'dishes')
        .then((result) => {
            console.log('Insert Document:\n', result.ops);
            return dboper.findDocument(db, 'dishes')
        })
        .then((docs) => {
            console.log('Found document:\n', docs);
            return dboper.updateDocument(db, { name: 'Vadonut' }, { description: 'Updated Test' }, 'dishes')
        })
        .then((result) => {
            console.log('Updated Document:\n', result.result);
            return dboper.findDocument(db, 'dishes')
        })
        .then((docs) => {
            console.log('Found document:\n', docs);
            return db.dropCollection('dishes')
        }).then((result) => {
            console.log('Dropped Collection: ', result);
            client.close();
        });
}).catch((err) => {
    console.log(err);
}).catch((err) => console.log(err))