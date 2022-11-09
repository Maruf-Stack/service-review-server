const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const { MongoClient, ServerApiVersion } = require('mongodb');

//db : service-review
//pass : 2zuaqKay7Z5kG4Yg

app.get('/', (req, res) => {
    res.send('server is running')
})



const uri = "mongodb+srv://<username>:<password>@cluster0.ei8vvcb.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
