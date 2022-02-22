const yargs = require("yargs");
const { client, connection } = require("./db/connection");
const Movie = require("./utils");

const app = async (yargsObj) => {
    const collection = await connection();
    try {
        if (yargsObj.add) {
            const flick = new Movie(yargsObj.title, yargsObj.actor);
            console.log(await flick.add(collection));
            //take movie info, add it to mongodb database and console.log a success message
        }
        else if (yargsObj.list) {
            const movie = new Movie (yargsObj.title, yargsObj.actor)
            console.log(await movie.list(collection));
            //list all movies in database
        }
        else {
            console.log("Incorrect command");
        }
        await client.close();

    } catch (error) {
        console.log(error);
    }

}

app(yargs.argv);