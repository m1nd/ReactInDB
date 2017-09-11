import idb from 'idb';

export default class DB {
  constructor(store) {
    this.state = {
      name: 'Name',
      data: [],
    };

    this.dbPromise = idb.open('myDB', 1, updateDB => {
      // let co = updateDB.createObjectStore("tabs", { keyPath: "email" });
      const co = updateDB.createObjectStore('tabs', {
        keyPath: 'id',
        autoIncrement: true,
      });
      co.createIndex('tabId', 'tabId', { unique: false });
      co.createIndex('name', 'name', { unique: false });
      co.createIndex('checked', 'checked', { unique: false });

      store.map((item, index) => co.add(item));
      return co;
    });

    this.getData = this.getData.bind(this);
    this.getAllData = this.getAllData.bind(this);
    this.setData = this.setData.bind(this);
    this.deleteData = this.deleteData.bind(this);
  }

  get(key) {
    return this.dbPromise
      .then(db =>
        db
          .transaction('tabs')
          // .objectStore("tabs").index("email").get(key)).then(val =>  this.setState({ name: val.name}));
          .objectStore('tabs')
          .index('tabId')
          .getAll(key),
      )
      .then(val => console.log(val));
  }

  getAll() {
    return this.dbPromise.then(db => {
      return db
        .transaction('tabs')
        .objectStore('tabs')
        .getAll();
    })
    // .then(val => this.setState({ data: val }));
  }

  delete(key) {
    return this.dbPromise.then(db => {
      const tx = db.transaction('tabs', 'readwrite');
      tx.objectStore('tabs').delete(key);
      tx.objectStore('tabs').getAll();
      // .then(val => this.setState({data: val}));
      // tx.objectStore("tabs").getAll().then(val => console.log(val));

      return tx.complete;
    });
  }

  set(val) {
    return this.dbPromise.then(db => {
      const tx = db.transaction('tabs', 'readwrite');
      tx.objectStore('tabs').put(val);
      tx.objectStore('tabs').getAll();
      // .then(val => this.setState({data: val}));
      return tx.complete;
    });
  }

  getData() {
    this.get('tab_1');
  }

  getAllData() {
    return this.getAll();
  }

  setData() {
    this.set({ tabId: 'tab_4', name: 'Event Four', checked: true });
  }

  deleteData() {
    this.delete('Event Three');
  }
}
