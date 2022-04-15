//Dependency inversion principle

class Fetch {
    request(url) {
        //return fetch(url).then(response => response.json())
        return Promise.resolve('data from fetch')
    }
}

class LocalStorage {
    get(){
        const dateFromLocalStorage = 'data from local storage'
        //return localStorage.getItem('key')
        return dateFromLocalStorage
    }
}

//abstraction
class FetchClient {
    constructor(props) {
        this.fetch = new Fetch()
    }
    clientGet(){
        return this.fetch.request('google.com')
    }
}

//abstraction
class LocalStorageClient {
    constructor() {
        this.localStorage = new LocalStorage()
    }
    clientGet(){
        return this.localStorage.get()
    }
}

class Database {
    constructor(client) {
        this.client = client
    }

    getData(key){
        return this.client.clientGet()
    }
}

//const db = new Database(new FetchClient())
const db = new Database(new LocalStorageClient())
console.log(db.getData('key'))