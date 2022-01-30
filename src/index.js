export default class Team {
    constructor() {
      this.members = new Set();
    }
  
    add(newPlayer) {

        function compareObjects(obj1, obj2) {
            if (Object.keys(obj1).length === Object.keys(obj2).length) {
                return Object.keys(obj1).every(
                    key => obj2.hasOwnProperty(key) && obj2[key] === obj1[key]
                )
            }
            // return false
        }

        this.members.forEach(member => {
            if (compareObjects(member, newPlayer)) {
                throw new Error('This player has already joined the team!')
            }
        })     

        this.members.add(newPlayer)
    }
  
    addAll(...newPlayers) {
        const noRepeatingPlayers = newPlayers.filter(((set) => (f) => !set.has(f.name) && set.add(f.name))(new Set()))
        noRepeatingPlayers.forEach(item => this.members.add(item))
    }
  
    toArray() {
      return Array.from(this.members)
    }
}
