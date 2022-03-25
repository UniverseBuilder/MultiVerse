export const checkIDBSupport = () => {
  if (!window.indexedDB) {
    return "Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.";
  } else {
    return 'IndexedDB is supported';
  }
};

export const openIDB = (dbName, dbVersion) => {
  try {
    const request = window.indexedDB.open(dbName, dbVersion);
    request.onerror = event => {
      return `Database ${dbName} creation has experienced an error ${event.target.errorCode}`;
    };
    request.onsuccess = event => {
      return `Database ${dbName} has been created successfully`;
    };
  } catch (err) {
    return err;
  }
};

export const createIDB = (dbName, dbVersion, onUpgrade) => {
  try {
    const request = indexedDB.open(dbName, dbVersion);

    request.onerror = event => {
      // Handle errors.
    };
    request.onupgradeneeded = event => {
      if (onUpgrade) {
        const db = event.target.result;
        onUpgrade(db);
      }
    };
    request.onsuccess = event => {
      console.log('DB creation success');
    };
  } catch (err) {
    return err;
  }
};

export const upgradeIDB = (dbName, dbVersion, onUpgrade) => {
  try {
    const request = indexedDB.open(dbName, dbVersion);

    request.onerror = event => {
      // Handle errors.
    };
    request.onupgradeneeded = event => {
      if (onUpgrade) {
        const db = event.target.result;
        onUpgrade(db);
      }
    };
  } catch (err) {
    return err;
  }
};

export const addItem = (dbName, dbVersion, objectStore, data) => {
  console.log(data);
  const request = indexedDB.open(dbName, dbVersion);
  request.onerror = event => {
    console.log(event);
  };
  request.onsuccess = event => {
    const db = event.target.result;
    const store = db
      .transaction([objectStore], 'readwrite')
      .objectStore(objectStore);
    const request = store.add(data);
    request.onerror = event => {
      console.log(event);
    };
  };
};

export const addItems = (dbName, dbVersion, objectStore, data) => {
  try {
    const request = indexedDB.open(dbName, dbVersion);

    request.onerror = event => {
      // Handle errors.
    };
    request.onupgradeneeded = event => {
      const db = event.target.result;
      const store = db
        .transaction([objectStore], 'readwrite')
        .objectStore(objectStore);
      data.forEach(item => {
        const request = store.add(item);
        request.onsuccess = event => {
          return 'Items added successfully';
        };
      });
    };
  } catch (err) {
    return err;
  }
};

export const getItems = (dbName, dbVersion, objectStore, data) => {
  try {
    const request = indexedDB.open(dbName, dbVersion);

    request.onerror = event => {
      // Handle errors.
    };
    request.onupgradeneeded = event => {
      const db = event.target.result;
      db.transaction(objectStore).objectStore(objectStore).get(data).onsuccess =
        event => {
          return event.target.result;
        };
    };
  } catch (err) {
    return err;
  }
};

export const putItem = (dbName, dbVersion, objectStore, data) => {
  try {
    const request = indexedDB.open(dbName, dbVersion);

    request.onerror = event => {
      // Handle errors.
    };
    request.onupgradeneeded = event => {
      const db = event.target.result;
      db.transaction(objectStore).objectStore(objectStore).get(data).onsuccess =
        event => {
          return event.target.result;
        };
    };
  } catch (err) {
    return err;
  }
};

export const getAll = (dbName, dbVersion, objectStore, cb) => {
  const request = indexedDB.open(dbName, dbVersion);
  request.onsuccess = event => {
    const db = event.target.result;
    db.transaction(objectStore).objectStore(objectStore).getAll().onsuccess =
      event => {
        cb(event.target.result);
      };
  };
};
