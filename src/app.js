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
            //C.reate
            if (yargsObj.add) {
                await flick.add(collection);
                //take movie info, add it to mongodb database and console.log a success message
            }
            //R.ead
            else if (yargsObj.read) {           
                await flick.read(collection);
                //log movie by title
    
            }
            //U.pdate
            else if (yargsObj.update) {
                await flick.update(collection);
                //Update items

            }
            //D.elete
            else if (yargsObj.delete) {
                await flick.delete(collection);
                //list all movies in database

            }
            else if (yargsObj.listFilms) {
                await flick.list(collection);
                //list all movies in database

            }
            else if (yargsObj.listActorFilms) {
                await flick.listActorFilms(collection);
                //log filtered list by actor
                
            }
            else if (yargsObj.listInfoFilms) {
                await flick.listInfoFilms(collection);
                //log filtered list by info field
                
            }
            else if (yargsObj.helpMe) {
                console.log("Incorrect\ncommand");
                //log filtered list by info field
                
            }
            else {
                console.log("Incorrect command");


            }
            await client.close();

            } catch (error) {
                console.log("error", error);
            }
        }

app(yargs.argv);