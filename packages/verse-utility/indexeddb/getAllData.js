import { getAll, getData } from '@multiverses/verse-utility/indexeddb';

export const getAllData = (db, store, cb) => {
  getAll(db.dbName, db.dbVersion, store, cb);
};

export const getColData = (db, store, keyName, cb) => {
  getData(db.dbName, db.dbVersion, store, keyName, cb);
};
