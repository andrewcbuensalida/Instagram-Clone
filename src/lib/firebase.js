//import { seedDatabase } from '../seed';
require("dotenv").config();
console.log("this is in lib firebase");
console.log(process.env);
console.log(process.env.DB);
const config = process.env.DB;

const firebase = window.firebase.initializeApp(config);
const { FieldValue } = window.firebase.firestore;

//seedDatabase(firebase);

export { firebase, FieldValue };
