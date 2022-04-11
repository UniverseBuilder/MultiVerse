import { addItem, addItems } from '@multiverses/verse-utility/indexeddb';

export const addDBData = (db, store, data) => {
  addItem(db.dbName, db.dbVersion, store, data);
};

export const addDBDatas = (db, store, data) => {
  addItems(db.dbName, db.dbVersion, store, data);
};
