import mechanics from "../assets/mechanics.js"
export default [
[{
    attackName: "Stunning Blow",
    attackDamage: 20,
    attackRange: 1,
    attackType: "Heavy",
    attackStatus: "Stunned",
    attackStatusDuration: 1,
    attackCooldown: 4,
    initialAttackCooldown: 4,
    get description(){
        return `Does a vertical hit with a hard blunt weapon intended to stun the enemy and do ${this.attackDamage} damage.
Range: ${this.attackRange}.
Cooldown: ${this.initialAttackCooldown}.`
    },
    onCooldown: false,
    inRange: false
},
{
    attackName: "Axe Throw",
    attackDamage: 15,
    attackRange: 2,
    attackType: "Heavy",
    attackStatus: "",
    attackCooldown: 2,
    initialAttackCooldown: 2,
    get description(){
    return  `Throws an axe to the enemy from medium range and does ${this.attackDamage} damage.
Range: ${this.attackRange}.
Cooldown: ${this.initialAttackCooldown}.`
    },
    onCooldown: false,
    inRange: false
},
{
    attackName: "Gutting Slash",
    attackDamage: 10,
    attackRange: 1,
    attackType: "Medium",
    attackStatus: "Bleeding",
    attackStatusDuration: 2,
    attackCooldown: 1,
    initialAttackCooldown: 1,
    get description(){
    return  `Does a horizontal strike towards the enemy's internal organs, applies ${this.attackStatus} for ${this.attackStatusDuration} turns and does ${this.attackDamage} damage.
Range: ${this.attackRange}.
Cooldown: ${this.initialAttackCooldown}.`
    },
    onCooldown: false,
    inRange: false
},
{
    attackName: "Bloody Flail",
    attackDamage: 20,
    attackRange: 1,
    attackStatus: "Bleeding",
    attackStatusDuration: 3,
    attackCooldown: 4,
    initialAttackCooldown: 4,
    get description(){
        return  `Throws a spiky flail towards the enemy, dealing ${this.attackDamage} damage and applying ${this.attackStatus} for ${this.attackStatusDuration} turns
Range: ${this.attackRange}.
Cooldown: ${this.initialAttackCooldown}.`
    },
    onCooldown: false,
    inRange: false
},
{
    attackName: "Bow Snipe",
    attackDamage: 10,
    attackRange: 3,
    attackCooldown: 2,
    initialAttackCooldown: 2,
    get description(){
        return  `Shoots an arrow from long range with high precision, dealing ${this.attackDamage} damage.
Range: ${this.attackRange}.
Cooldown: ${this.initialAttackCooldown}.`
    },
    onCooldown: false,
    inRange: false
},
{
    attackName: "Sword Dash",
    attackDamage: 15,
    attackRange: 2,
    attackCooldown: 4,
    initialAttackCooldown: 4,
    get description(){
        return  `Leaps onto the enemy and deals ${this.attackDamage} damage.
Range: ${this.attackRange}.
Cooldown: ${this.initialAttackCooldown}.`
    },
    onCooldown: false,
    inRange: false,
    isDashAttack: true
}],
[{
    attackName: "Blazing Fireball",
    attackDamage: 15,
    attackRange: 3,
    attackStatus: "Burning",
    attackStatusDuration: 2,
    attackCooldown: 2,
    initialAttackCooldown: 2,
    get description(){
        return `Sends a fireball from long range dealing ${this.attackDamage} damage and applying ${this.attackStatus} for ${this.attackStatusDuration} turns.
Range: ${this.attackRange}
Cooldown: ${this.attackCooldown}`},
    onCooldown: false,
    inRange: false
},
{
    attackName: "Air Blast",
    attackDamage: 10,
    attackRange: 1,
    attackEffect: "Push",
    attackStatusEffect: 3,
    attackCooldown: 3,
    initialAttackCooldown: 3,
    get description(){
        return `Blasts the enemy with air, dealing ${this.attackDamage} damage and increasing the distance by ${this.attackStatusEffect}.
Range: ${this.attackRange}
Cooldown: ${this.attackCooldown}`},
    onCooldown: false,
    inRange: false
},
{
    attackName: "Health absorb",
    attackDamage: 10,
    attackEffect: "Health Absorb",
    attackRange: 2,
    attackCooldown: 3,
    initialAttackCooldown: 3,
    get description(){
       return `Damages the enemy by ${this.attackDamage} points and heals self by damage done.
Range: ${this.attackRange}
Cooldown: ${this.attackCooldown}`},
    onCooldown: false,
    inRange: false
},
{
    attackName: "Ice Stream",
    attackDamage: 15,
    attackStatus: "Freeze",
    attackStatusDuration: 3,
    attackRange: 2,
    attackCooldown: 4,
    initialAttackCooldown: 4,
    get description(){
        return `Splashes chilling ice towards the enemy dealing ${this.attackDamage} damage and applying ${this.attackStatus} for ${this.attackStatusDuration} turns.
 Range: ${this.attackRange}
 Cooldown: ${this.attackCooldown}`},
     onCooldown: false,
     inRange: false
},
{
    attackName: "Rock Bombardment",
    attackDamage: 25,
    attackRange: 3,
    attackCooldown: 2,
    initialAttackCooldown: 2,
    get description(){
        return `Bombards the enemy with rocks dealing ${this.attackDamage}.
 Range: ${this.attackRange}
 Cooldown: ${this.attackCooldown}`},
     onCooldown: false,
     inRange: false
},
{
    attackName: "Blinding Light",
    attackDamage: 0,
    attackStatus: "Stunned",
    attackStatusDuration: 1,
    attackRange: 2,
    attackCooldown: 2,
    initialAttackCooldown: 2,
    get description(){
        return `Blinds the enemy with light, applying ${this.attackStatus}.
 Range: ${this.attackRange}
 Cooldown: ${this.attackCooldown}`},
     onCooldown: false,
     inRange: false
}],
[{
    attackName: "Assassin's Slash",
    attackDamage: 20,
    attackRange: 1,
    attackCooldown: 1,
    initialAttackCooldown: 1,
    get description(){
        return `Stabs the enemy with surgical precision dealing ${this.attackDamage} damage.
Range: ${this.attackRange}
Cooldown: ${this.attackCooldown}`},
    onCooldown: false,
    inRange: false
},
{
    attackName: "Throwing Knife",
    attackDamage: 10,
    attackRange: 2,
    attackStatus: "Bleeding",
    attackStatusDuration: 2,
    attackCooldown: 4,
    initialAttackCooldown: 4,
    get description(){
        return `Throws a knife from medium distance, dealing ${this.attackDamage} damage and applying ${this.attackStatus} for ${this.attackStatusDuration} turns while staying hidden.
Range: ${this.attackRange}
Cooldown: ${this.attackCooldown}`},
    onCooldown: false,
    inRange: false
},
{
    attackName: "Piercing Bomb",
    attackDamage: 15,
    attackStatus: "Bleeding",
    attackStatusDuration: 3,
    attackRange: 2,
    attackCooldown: 3,
    initialAttackCooldown: 3,
    get description(){
        return `Throws a bomb to the enemy that releases sharp projectiles when exploded, deals ${this.attackDamage} damage and applies ${this.attackStatus} for ${this.attackStatusDuration} turns.
Range: ${this.attackRange}
Cooldown: ${this.attackCooldown}`},
    onCooldown: false,
    inRange: false
},
{
    attackName: "Stun Bomb",
    attackDamage: 5,
    attackStatus: "Stunned",
    attackStatusDuration: 1,
    attackRange: 2,
    attackCooldown: 3,
    initialAttackCooldown: 3,
    get description(){
        return `Throws a bomb to the enemy that explodes into a bright flash of light, dealing ${this.attackDamage} damage and applying ${this.attackStatus}.
Range: ${this.attackRange}
Cooldown: ${this.attackCooldown}`},
    onCooldown: false,
    inRange: false
},
{
    attackName: "Murderous Dash",
    attackDamage: 10,
    attackStatus: "Bleeding",
    attackStatusDuration: 2,
    attackRange: 2,
    attackCooldown: 2,
    initialAttackCooldown: 2,
    get description(){
        return `Dashes towards the enemy, dealing ${this.attackDamage} damage and applying ${this.attackStatus} for ${this.attackStatusDuration} turns.
Range: ${this.attackRange}
Cooldown: ${this.attackCooldown}`},
    onCooldown: false,
    inRange: false,
    isDashAttack: true
},
{
    attackName: "Delay Trap",
    attackDamage: 0,
    attackEffect: "Delay Trap",
    attackEffectDelay: 3,
    attackRange: 4,
    attackCooldown: 1,
    initialAttackCooldown: 1,
    get description(){
        return `Delays the triggering of traps by ${this.attackEffectDelay}, does not remove Hidden.
Range: ${this.attackRange}
Cooldown: ${this.attackCooldown}`},
    onCooldown: false,
    inRange: false,
}],
[{
    attackName: "Staff Hit",
    attackDamage: 10,
    attackRange: 1,
    attackCooldown: 1,
    initialAttackCooldown: 1,
    get description(){
        return `Hits the enemy with a staff as a last resort for when your golems are dead, deals ${this.attackDamage} damage.
Range: ${this.attackRange}
Cooldown: ${this.attackCooldown}`},
    onCooldown: false,
    inRange: false
},
{
    attackName: "Golem Self Destruct",
    attackDamage: 0,
    attackEffect: "Self Destruct",
    attackEffectDamage: 50,
    attackRange: 4,
    attackCooldown: 1,
    initialAttackCooldown: 1,
    get description(){
        return `Orders your Golems to self destruct, dealing ${this.attackEffectDamage} damage if they are in close range to the enemy.
Range: ${this.attackRange}
Cooldown: ${this.attackCooldown}`},
    onCooldown: false,
    inRange: false
},
{
    attackName: "Golem Strengthen",
    attackEffect: "Golem Damage Buff",
    attackDamage: 0,
    attackStatus: "Damage Buff",
    attackStatusDuration: 1,
    attackRange: 4,
    attackCooldown: 3,
    initialAttackCooldown: 3,
    get description(){
        return `Boosts the damage of your Golems by ${mechanics.golemDamageBuff}.
Range: ${this.attackRange}
Cooldown: ${this.attackCooldown}`},
    onCooldown: false,
    inRange: false
},
{
    attackName: "Order Retreat",
    attackDamage: 0,
    attackEffect: "Retreat",
    attackRange: 4,
    attackCooldown: 1,
    initialAttackCooldown: 1,
    get description(){
        return `Orders your Golems to retreat.
Range: ${this.attackRange}
Cooldown: ${this.attackCooldown}`},
    onCooldown: false,
    inRange: false
},
{
    attackName: "Mini Golem Bomb",
    attackDamage: 25,
    attackRange: 3,
    attackCooldown: 3,
    initialAttackCooldown: 3,
    get description(){
        return `Summons a miniature Golem and immediately orders it to self destruct on the enemy dealing ${this.attackDamage} damage.
Range: ${this.attackRange}
Cooldown: ${this.attackCooldown}`},
    onCooldown: false,
    inRange: false
},
{
    attackName: "Golem Purify",
    attackDamage: 0,
    attackRange: 4,
    attackEffect: "Purify",
    attackStatus: "Immune",
    attackStatusDuration: 1,
    attackCooldown: 2,
    initialAttackCooldown: 2,
    get description(){
        return `Purifies the stasusses of your golems and gives them ${this.attackStatus}.
Range: ${this.attackRange}
Cooldown: ${this.attackCooldown}`},
    onCooldown: false,
    inRange: false
}]
]