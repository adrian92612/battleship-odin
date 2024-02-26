
class Ship {
    constructor(length) {
        this.length = length
        this.hits = 0
        this.sunk = false
    }

     hit = () => {
        this.hits++
        if(this.isSunk()) this.sunk = true
     }
     isSunk = () => this.hits >= this.length
}

export {Ship}