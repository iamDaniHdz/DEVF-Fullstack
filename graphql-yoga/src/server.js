import resolvers from "./graphql/index.js"
import { GraphQLServer } from "graphql-yoga";
import path from "path"
import { fileURLToPath } from 'url';

//-----
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname( __filename );
//-----
//relativas    /DEVF-Fullstack
//absolutas   /c/Users/danie/Documents/Master en Coding/09 - Fullstack/DEVF-Fullstack/graphql-yoga

const server = new GraphQLServer( {
    typeDefs: path.join( __dirname, "graphql/schema.graphql" ),  // -> /c/Users/danie/Documents/Master en Coding/09 - Fullstack/DEVF-Fullstack/graphql-yoga
    resolvers: resolvers                                                     
} )

export default server