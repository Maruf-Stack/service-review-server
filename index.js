const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors')
app.use(cors())

//db : service-review
//pass : 2zuaqKay7Z5kG4Yg

app.get('/', (req, res) => {
    res.send('server is running')
})



const uri = "mongodb+srv://service-review:2zuaqKay7Z5kG4Yg@cluster0.ei8vvcb.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try {
        const database = client.db('service-review').collection('services');
        const serviceCollection = client.db('service-review').collection('services');
        app.get('/services', async (req, res) => {
            const query = {};
            const cursor = serviceCollection.find(query);
            const services = await cursor.toArray()
            res.send(services)

        })
    }
    finally {

    }
}
run().catch(error => {
    console.error(error)
})


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
