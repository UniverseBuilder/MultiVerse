import { getAll } from '@multiverses/verse-utility/indexeddb';

export const getAllData = (db, store, cb) => {
  getAll(db.dbName, db.dbVersion, store, cb);
};
