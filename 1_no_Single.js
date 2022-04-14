//not Single responsibility principle

class News {
    constructor(title, text) {
        this.title = title
        this.text = text
        this.modified = false
    }
    update(text) {
        this.text = text
        this.modified = true
    }
    toHTML() {
        return `
        <div class="news">
            <h1>${this.title}</h1>
            <p>${this.text}</p>
         </div>
        `
    }
    toJSON() {
        return JSON.stringify({
            title: this.title,
            text: this.text,
            modified: this.modified
        }, null, 2)
    }
    toXml() {
        return `
            <news>
               <title>${this.title}</title>
               <text>${this.text}</text>
            </news>
        `
    }

}



const news = new News('Elon Musk', 'Starlink in Ukraine')

console.log(news.toHTML())
console.log(news.toJSON())
console.log(news.toXml())