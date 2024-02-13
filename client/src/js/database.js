  import { openDB } from 'idb';

  const initdb = async () =>
    openDB('jate', 1, {
      upgrade(db) {
        if (db.objectStoreNames.contains('jate')) {
          console.log('jate database already exists');
          return;
        }
        db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
        console.log('jate database created');
      },
    });

  // TODO: Add logic to a method that accepts some content and adds it to the database
  export const putDb = async (content) => {
  try {
    // Open the database
    const db = await initdb();
    // Access the object store
    const tx = db.transaction('jate', 'readwrite');
    const store = tx.objectStore('jate');
    // Add the content to the store
    await store.add(content);
    // Complete the transaction
    await tx.done;
    console.log('Content added to database:', content);
  } catch (error) {
    console.error('Error adding content to database:', error);
  }
};

  // TODO: Add logic for a method that gets all the content from the database
  export const getDb = async () => console.error('getDb not implemented');

  initdb();
