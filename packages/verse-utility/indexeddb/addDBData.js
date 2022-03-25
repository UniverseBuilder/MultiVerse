import { addItem } from '@multiverses/verse-utility/indexeddb';

export const addDBData = (db, store, data) => {
  addItem(db.dbName, db.dbVersion, store, data);
};
