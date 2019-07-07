const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('call', () => {
    console.log('call event has occurred')
})

eventEmitter.emit('call')

class Person extends EventEmitter {
    constructor(name) {
        super()
        this.name = name
    }
}

const person = new Person('Pedro')
person.on('call', () => {
    console.log(`hello ${person.name}`)
})
person.emit('call')
