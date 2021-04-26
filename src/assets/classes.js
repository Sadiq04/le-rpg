import attacks from "../assets/attacks.js"
import ultAttacks from "../assets/ultAttacks.js"
import items from "../assets/items.js"
import mechanics from "../assets/mechanics.js"

export default [{
    className: "Warrior",
    classType: "Warrior",
    classCurrentHealth: 200,
    classMaxHealth: 200,
    classStatus: [{}, {}, {}, {}, {}, {}, {}, {}],
    classItems:[items[0][0], items[0][1], items[0][2]],
    classAttacks: [attacks[0][0], attacks[0][1], attacks[0][2], ultAttacks[0][0]],
    get classItemNames() {
        return `${this.classItems[0].itemName},  ${this.classItems[1].itemName}, ${this.classItems[2].itemName}`
    },
    get classAttackNames() {
        return `${this.classAttacks[0].attackName},  ${this.classAttacks[1].attackName}, ${this.classAttacks[2].attackName}, ${this.classAttacks[3].attackName}`
    }
},
{
    className: "Mage",
    classType: "Mage",
    classCurrentHealth: 100,
    classMaxHealth: 100,
    classStatus: [{}, {}, {}, {}, {}, {}, {}, {}],
    classItems:[items[1][0], items[1][1], items[1][2]],
    classAttacks: [attacks[1][0], attacks[1][1], attacks[1][2], ultAttacks[1][0]],
    get classItemNames() {
        return `${this.classItems[0].itemName},  ${this.classItems[1].itemName}, ${this.classItems[2].itemName}`
    },
    get classAttackNames() {
        return `${this.classAttacks[0].attackName},  ${this.classAttacks[1].attackName}, ${this.classAttacks[2].attackName}, ${this.classAttacks[3].attackName}`
    }
},
{
    className: "Assassin",
    classType: "Assassin",
    classCurrentHealth: 125,
    classMaxHealth: 125,
    classStatus: [{}, {}, {}, {}, {}, {}, {}, {}],
    classItems:[items[2][0], items[2][1], items[2][2]],
    classAttacks: [attacks[2][0], attacks[2][1], attacks[2][2], ultAttacks[2][0]],
    get classItemNames() {
        return `${this.classItems[0].itemName},  ${this.classItems[1].itemName}, ${this.classItems[2].itemName}`
    },
    get classAttackNames() {
        return `${this.classAttacks[0].attackName},  ${this.classAttacks[1].attackName}, ${this.classAttacks[2].attackName}, ${this.classAttacks[3].attackName}`
    }
},
{
    className: "Alchemist",
    classType: "Alchemist",
    classCurrentHealth: 75,
    classMaxHealth: 75,
    classStatus: [{}, {}, {}, {}, {}, {}, {}, {}],
    classItems:[items[3][0], items[3][1], items[3][2]],
    classAttacks: [attacks[3][0], attacks[3][1], attacks[3][2], ultAttacks[3][0]],
    get classItemNames() {
        return `${this.classItems[0].itemName},  ${this.classItems[1].itemName}, ${this.classItems[2].itemName}`
    },
    get classAttackNames() {
        return `${this.classAttacks[0].attackName},  ${this.classAttacks[1].attackName}, ${this.classAttacks[2].attackName}, ${this.classAttacks[3].attackName}`
    }
}]
