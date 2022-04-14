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

class Database {
    constructor(props) {
        //this.fetch = new Fetch()
        this.localStorage = new LocalStorage()
    }

    getData(){
        //return this.fetch.request('google.com')
        return this.localStorage.get('key')
    }
}

const db = new Database()
console.log(db.getData())