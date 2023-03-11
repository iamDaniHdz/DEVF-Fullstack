import server from "./server.js"

//------conexión hacia mongo local
import { connect } from "./database.js";
connect();

//----conexión hacia mongo atlas
//import "./database.js"

server.start( { port: 3000 }, ( { port } ) => {
    console.log('Sever is running on' + port )
})