//import { seedDatabase } from '../seed';
require("dotenv").config();
const config = process.env.DB;

const firebase = window.firebase.initializeApp(config);
const { FieldValue } = window.firebase.firestore;

//seedDatabase(firebase);

export { firebase, FieldValue };
