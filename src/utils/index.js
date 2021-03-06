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
        console.log(`"${this.title}" added to database.`);
        //add this to the database
    }

    //R.ead
    async read (collection) {
        if (await collection.findOne({title : {$eq: this.title}})) {
            console.log(`"${this.title}" found in database.`);
        }
        else {
            console.log(`"${this.title}" not found in database.`);
        }
    }

    //U.pdate
    async update (collection) {
        await collection.updateOne( 
                { title : this.title }, 
                { $set : 
                    {
                        actor : this.actor,
                        info : this.info
                    }
                }
            )
            console.log(`"${this.title}" updated in database.`);

    }

    //D.elete
    async delete (collection) {
        await collection.deleteOne({title : {$eq: this.title}});
        console.log(`"${this.title}" deleted from database`);
    }

    async listFilms (collection) {
        console.log(await collection.find().toArray());
        //list all movies in the db
    }

    //Filter
    async listActorFilms (collection) {
        console.log(await collection.find(
            { actor : { $eq : this.actor} }
            ).toArray());
        //filtered list by actor
    }
    //Filter
    async listInfoFilms (collection) {
        console.log(await collection.find(
            { info : { $eq : this.info} }
            ).toArray());
        //filtered list by info field

    }
}

module.exports = Movie;