import { upgradeIDB } from '@multiverses/verse-utility/indexeddb';

export const createStore = (db, storeName) => {
  upgradeIDB(db.dbName, db.dbVersion, dbObj => {
    const { columns, property } = db.stores[storeName];
    console.log(columns);
    console.log(property);
    var objectStore = dbObj.createObjectStore(storeName, property);
    for (let i = 0; i < columns.length; i++) {
      objectStore.createIndex(
        columns[i].name,
        columns[i].name,
        columns[i].property
      );
    }
  });
};
