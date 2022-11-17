import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 2, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate');
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
// console.error('putDb not implemented');
//connection to the db and version we want to use
 // Create a connection to the database database and version we want to use.
 const contactDb = await openDB('jate');
 //created a new transaction to specify db and data priviledge
 const tx = contactDb.transaction('jate', 'readwrite');
//opening the desired object store
const store = tx.objectStore('jate');
//using .add() to store and pass in content
const request = store.put(content, "Editor");
// Get confirmation of the request.
const result = await request;
console.log('🚀 - data saved to the database', result);

}
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () =>{
  console.log('GET from the database');

  // Create a connection to the database database and version we want to use.
  const contactDb = await openDB('jate');

  // Create a new transaction and specify the database and data privileges.
  const tx = contactDb.transaction('jate', 'readonly');

  // Open up the desired object store.
  const store = tx.objectStore('jate');

  // Use the .getAll() method to get all data in the database.
  const request = store.get("Editor");

  // Get confirmation of the request.
  const result = await request;
  console.log('result.value', result);
  return result;
} 

initdb();
