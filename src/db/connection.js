require("dotenv").config();//required to put things in env
const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI);//(process.argv is what we used for arguments on command line)

const connection = async () => {
    try {
        await client.connect();
        const db = client.db("Movies");
        return db.collection("Film");

    } catch(error) {
        console.log(error);
    }
    
}

module.exports = {client, connection};