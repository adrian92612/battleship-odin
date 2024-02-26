import { Ship } from "../ship.js"
describe('Ship',()=>{
    let ship
    beforeEach(()=>{
     ship = new Ship(4)
    })

    test('should match length', () => expect(ship.length).toBe(4))
    
    test('should increment hits', () => { 
        ship.hit()
        ship.hit()
        ship.hit()
        expect(ship.hits).toBe(3)
    })
    
    test('should detect if sunk', () => { 
        ship.hit()
        ship.hit()
        ship.hit()
        ship.hit()
        expect(ship.sunk).toBeTruthy()
     })
})