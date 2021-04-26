import mechanics from "../assets/mechanics.js"
export default [
[{
    attackName: "Champion's Charge",
    attackDamage: 40,
    attackRange: 2,
    attackStatus: "Cripple",
    attackStatusDuration: 3,
    attackCooldown: 5,
    initialAttackCooldown: 5,
    get description(){
        return `Brutally charges the enemy, does ${this.attackDamage} damage and applies ${this.attackStatus} for ${this.attackStatusDuration} turns.
Range: ${this.attackRange}.
Cooldown: ${this.initialAttackCooldown}.`
    },
    onCooldown: true,
    inRange: false,
    isDashAttack: true
},
{
    attackName: "Ground Crush",
    attackDamage: 20,
    attackRange: 2,
    attackStatus: "Stunned",
    attackStatusDuration: 2,
    attackCooldown: 6,
    initialAttackCooldown: 6,
    get description(){
        return `Creates a shockwave by slamming a weapon down to the ground, dealing ${this.attackDamage} damage and applying ${this.attackStatus} for ${this.attackStatusDuration} turns.
Range: ${this.attackRange}.
Cooldown: ${this.initialAttackCooldown}.`
    },
    onCooldown: true,
    inRange: false,
},
{
    attackName: "Boiling Oil",
    attackDamage: 45,
    attackRange: 2,
    attackStatus: "Burning",
    attackStatusDuration: 3,
    attackCooldown: 7,
    initialAttackCooldown: 7,
    get description(){
        return `Throws a bucket of boiling hot oil towards the enemy, dealing ${this.attackDamage} damage and applying ${this.attackStatus} for ${this.attackStatusDuration} turns.
Range: ${this.attackRange}.
Cooldown: ${this.initialAttackCooldown}.`
    },
    onCooldown: true,
    inRange: false,
}],
[{
    attackName: "Thunder Beam",
    attackDamage: 40,
    attackRange: 4,
    attackStatus: "Stunned",
    attackStatusDuration: 2,
    attackCooldown: 6,
    initialAttackCooldown: 6,
    get description(){
        return `Sends a stream of lightning from very long range dealing ${this.attackDamage} damage and applying ${this.attackStatus} for ${this.attackStatusDuration} turns.
Range: ${this.attackRange}
Cooldown: ${this.attackCooldown}`},
    onCooldown: true,
    inRange: false
},
{
    attackName: "Dark Mirror",
    attackDamage: 0,
    attackRange: 4,
    attackStatus: "Mirror",
    attackStatusDuration: 3,
    attackCooldown: 8,
    initialAttackCooldown: 8,
    get description(){
        return `Summons dark mirrors around the enemy, redirecting damage dealt by the enemy back towards it.
Range: ${this.attackRange}
Cooldown: ${this.attackCooldown}`},
    onCooldown: true,
    inRange: false
},
{
    attackName: "Forbidden Magic",
    attackDamage: 0,
    attackRange: 999,
    attackCooldown: 0,
    initialAttackCooldown: 0,
    get description(){
        return `Casts a mysterious spell with an unknown effect. (Can only be used on the brink of death)`
    }
}],
[{
    attackName: "Blinding Blow",
    attackDamage: 30,
    attackRange: 1,
    attackStatus: "Hidden",
    attackStatusDuration: 999,
    attackCooldown: 6,
    initialAttackCooldown: 6,
    get description(){
        return `Blinds the enemy with a toxic substance allowing you to go back to hiding, while dealing ${this.attackDamage} damage.
Range: ${this.attackRange}
Cooldown: ${this.attackCooldown}`},
    onCooldown: true,
    inRange: false
},
{
    attackName: "Deadly Cut",
    attackDamage: 50,
    attackRange: 1,
    attackStatus: "Bleeding",
    attackStatusDuration: 2,
    attackCooldown: 7,
    initialAttackCooldown: 7,
    get description(){
        return `Strikes the enemy with a deep cut, dealing ${this.attackDamage} and applying ${this.attackStatus} for ${this.attackStatusDuration} turns.
Range: ${this.attackRange}
Cooldown: ${this.attackCooldown}`},
    onCooldown: true,
    inRange: false
},
{
    attackName: "Poisoned Wound",
    attackDamage: 25,
    attackRange: 2,
    attackStatus: "Poison",
    attackStatusDuration: 4,
    attackCooldown: 7,
    initialAttackCooldown: 7,
    get description(){
        return `Wounds the enemy with a special poison coated knife, dealing ${this.attackDamage} and applying ${this.attackStatus} for ${this.attackStatusDuration} turns.
Range: ${this.attackRange}
Cooldown: ${this.attackCooldown}`},
    onCooldown: true,
    inRange: false
}],
[{
    attackName: "Golem Heal",
    attackDamage: 0,
    attackEffect: "Healing",
    attackEffectHealing: 25,
    attackRange: 4,
    attackCooldown: 6,
    initialAttackCooldown: 6,
    get description(){
        return `Heals your Golems by ${this.attackEffectHealing}.
Range: ${this.attackRange}
Cooldown: ${this.attackCooldown}`},
    onCooldown: true,
    inRange: false
},
{
    attackName: "Immortal Pain",
    attackDamage: 0,
    attackRange: 4,
    attackEffect: "Immortal Pain",
    attackEffectDamage: 10,
    attackStatus: "Immortal",
    attackStatusDuration: 3,
    attackCooldown: 6,
    initialAttackCooldown: 6,
    get description(){
        return `Damages your Golems by ${this.attackEffectDamage} and gives them ${this.attackStatus} for ${this.attackStatusDuration} turns.
Range: ${this.attackRange}
Cooldown: ${this.attackCooldown}`},
    onCooldown: true,
    inRange: false
},
{
    attackName: "Enhanced Staff Hit",
    attackDamage: 10,
    attackEffect: "Enhanced Staff Hit",
    attackEffectBuff: 25,
    attackRange: 1,
    attackCooldown: 5,
    initialAttackCooldown: 5,
    get description(){
        return `Hits the enemy with a staff and deals ${this.attackDamage} damage, increases the damage dealt by ${this.attackEffectBuff} for each Golem you control.
Range: ${this.attackRange}
Cooldown: ${this.attackCooldown}`},
    onCooldown: true,
    inRange: false
}]]