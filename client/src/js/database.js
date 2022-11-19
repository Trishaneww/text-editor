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

// This creates the connection to the database
const contactDb = await openDB('jate');

const tx = contactDb.transaction('jate', 'readwrite');

const store = tx.objectStore('jate');

const request = store.put(content, "Editor");

// This will get the confirmation of the given request
const result = await request;
console.log('🚀 - data saved to the database', result);

}
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () =>{
  console.log('GET from the database');

  // This creates the connection to the database
  const contactDb = await openDB('jate');

  const tx = contactDb.transaction('jate', 'readonly');

  const store = tx.objectStore('jate');

  // retreives/gets all data in the database
  const request = store.get("Editor");

  // This will get the confirmation of the given request
  const result = await request;
  console.log('result.value', result);
  return result;
} 

initdb();
