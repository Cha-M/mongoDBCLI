const yargs = require("yargs");
const { client, connection } = require("./db/connection");
const Movie = require("./utils");

//Task:
// • Create a CLI that allows users to store movies in a MongoDB database.

// • App must cover all CRUD operations.

// • Movie entries should include optional information.

// • Stretch goals - Allow for filtered search results (by name/actor/rating)


const app = async (yargsObj) => {
    const collection = await connection();
        try {
            if (yargsObj.add) {
                const flick = new Movie(yargsObj.title, yargsObj.actor);
                console.log(await flick.add(collection));
                //take movie info, add it to mongodb database and console.log a success message
            }
            else if (yargsObj.delete) {
                const flick = new Movie (yargsObj.title, yargsObj.actor)
                await flick.delete(collection);
                console.log("Title deleted once: ", yargsObj.title);
                //list all movies in database

            }
            else if (yargsObj.read) {
                const flick = new Movie (yargsObj.title, yargsObj.actor)
                console.log("Title: ", yargsObj.title);
                
                console.log(await flick.read(collection));
                //log movie by title
    
            }
            else if (yargsObj.update) {
                const flick = new Movie (yargsObj.title, yargsObj.actor)
                console.log(await flick.update(collection));
                //list all movies in database

            }
            else if (yargsObj.list) {
                const flick = new Movie (yargsObj.title, yargsObj.actor)
                console.log(await flick.list(collection));
                //list all movies in database

            }
            else {
                console.log("Incorrect command");
                console.log(yargsObj);
            }
            await client.close();

            } catch (error) {
                console.log("error", error);
            }
        }

app(yargs.argv);