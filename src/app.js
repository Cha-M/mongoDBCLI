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
            const flick = new Movie(yargsObj.title, yargsObj.actor, yargsObj.info);
            if (yargsObj.add) {
                await flick.add(collection);
                //take movie info, add it to mongodb database and console.log a success message
            }
            else if (yargsObj.delete) {
                await flick.delete(collection);
                //list all movies in database

            }
            else if (yargsObj.read) {           
                await flick.read(collection);
                //log movie by title
    
            }
            else if (yargsObj.update) {
                await flick.update(collection);
                // console.log(`"${yargsObj.title}" updated in database`);
                //Update items

            }
            else if (yargsObj.list) {
                console.log(await flick.list(collection));
                //list all movies in database

            }
            else if (yargsObj.listActorFilms) {
                console.log(await flick.listActorFilms(collection));
                
            }
            else {
                console.log("Incorrect command");
                // console.log(yargsObj);

            }
            await client.close();

            } catch (error) {
                console.log("error", error);
            }
        }

app(yargs.argv);