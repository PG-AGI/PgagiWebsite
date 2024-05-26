const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const algoliasearch = require("algoliasearch/lite");

try{
    dotenv.config();
    
    if(!process.env.ALGOLIA_APP_ID){
        throw new Error("ALGOLIA APP ID is not defined")
    }
    if(!process.env.ADMIN_API_KEY){
        throw new Error("Api key is not defined")
    }
}catch (error){
    console.error(error);
    process.exit(1);
}

const CONTENT_PATH = path.join(process.cwd(), 'src/app/content')