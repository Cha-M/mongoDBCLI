class Movie {
    constructor (title, actor = "Not specified", info = "Not specified") {
        this.title = title;
        this.actor = actor;
        this.info = info;
    }
    //C.reate
    async add (collection) {
        await collection.insertOne(this);
        //there are only two lines, not much of a need for try catch
        return "Success";
        //add this to the database
    }

    //R.ead
    async read (collection) {
        console.log("Film Found?:", await collection.findOne({title : {$eq: this.title}}));
    }

    //U.pdate
    async update (collection) {
        await collection.updateOne( 
            { title : this.title }, 
            { $set : {"actor" : this.actor} },
            { $set : {"info" : this.info} }
            );
    }

    //D.elete
    async delete (collection) {
        await collection.deleteOne({title : {$eq: this.title}});
        console.log("Item deleted:", this.title);
    }

    async list (collection) {
        return await collection.find().toArray();
        //list all movies in the db
    }

    async listActorFilms (collection) {
        const arr =  await collection.find(
            { actor : { $eq : this.actor} }
            ).toArray();

        console.log(arr);

        return await collection.find(
            { actor : { $eq : this.actor} }
            ).toArray();
        //list filtered in the db
    }
}

module.exports = Movie;