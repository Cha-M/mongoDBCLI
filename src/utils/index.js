class Movie {
    constructor (title, actor = "Not specified") {
        this.title = title;
        this.actor = actor;
    }
    async add (collection) {
        await collection.insertOne(this);
        //there are only two lines, not much of a need for try catch
        return "Success";
        //add this to the database
    }

    async list (collection) {
        return await collection.find().toArray();
        //list all movies in the db
    }
}

module.exports = Movie;