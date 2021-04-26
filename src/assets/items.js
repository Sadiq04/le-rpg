import mechanics from "../assets/mechanics.js"
export default [
[{
    itemName: "Health Potion",
    itemEffectType: "Health",
    itemEffect: 30,
    itemStatus: "Health Regeneration",
    itemStatusDuration: 3,
    itemCount: 2,
    initialItemCount: 2,
    get description(){
       return `Heals you by ${this.itemEffect} points and applies ${this.itemStatus} for ${this.itemStatusDuration} turns.
Amount: ${this.itemCount}.`}
},
{
    itemName: "Berserker Mushroom",
    itemEffectType: "Berserk",
    itemStatus: "Berserk",
    itemStatusDuration: 3,
    itemCount: 2,
    initialItemCount: 2,
    get description(){
        return `Makes you go mad with bloodlust while increasing you damage by ${mechanics.berserkDamageBuff} points and preventing the use of Defense, Items and Backing out for ${this.itemStatusDuration} turns.
Amount: ${this.itemCount}.`}
},
{
    itemName: "Immune Potion",
    itemEffectType: "Immune",
    itemStatus: "Immune",
    itemStatusDuration: 5,
    itemCount: 2,
    initialItemCount: 2,
    get description(){
        return `Applies Immune which purifies all the statusses you have and prevents the enemy from applying any new statusses for the next ${this.itemStatusDuration} turns.
Amount: ${this.itemCount}.`
    }
},
{
    itemName: "Defence Potion",
    itemEffectType: "Defended",
    itemStatus: "Defended",
    itemStatusDuration: 3,
    itemCount: 1,
    initialItemCount: 1,
    get description(){
        return `Automatically defends you from half of incoming damage without the need to block for ${this.itemStatusDuration}
Amount: ${this.itemCount}.`
    }
},
{
    itemName: "Whetstone",
    itemEffectType: "Sharpened",
    itemStatus: "Sharpened",
    itemStatusDuration: 7,
    itemCount: 1,
    initialItemCount: 1,
    get description(){
        return `Sharpens your weapon, allowing it to deal ${mechanics.sharpenDamageBuff} more damage for the next ${this.itemStatusDuration} turns.
Amount: ${this.itemCount}.`
    }
}],
[{
    itemName: "Magical Talisman",
    itemEffectType: "Magic Buff",
    itemStatus: "Magic Buff",
    itemStatusDuration: 3,
    itemCount: 1,
    initialItemCount: 1,
    get description(){
        return `Amplifies the damage of your magic attacks by ${mechanics.talismanDamageBuff} points and allows you to cast spells from any range for ${this.itemStatusDuration} turns.
Amount: ${this.itemCount}`}
},
{
    itemName: "Ancient Scroll",
    itemEffectType: "Cooldown Reset",
    itemCount: 1,
    initialItemCount: 1,
    get description(){
        return `Resets the cooldowns of all your spells.
Amount: ${this.itemCount}`}
},
{
    itemName: "Sleeping herbs",
    itemEffectType: "Sleep",
    itemStatusEffect: 10,
    itemStatus: "Sleep",
    itemStatusDuration: 3,
    itemCount: 1,
    initialItemCount: 1,
    get description(){
        return `Puts the enemy to sleep for ${this.itemStatusDuration} turns or until damaged and makes the first hit while the enemy is sleeping do ${mechanics.sleepingDamageBuff} more damage.
Amount: ${this.itemCount}`}
},
{
    itemName: "Unstable Spellbook",
    itemEffectType: "Random Spell",
    itemCount: 1,
    initialItemCount: 1,
    get description(){
        return `Casts a random spell.
Amount: ${this.itemCount}`
    }
},
{
    itemName: "Healing Tome",
    itemEffectType: "Healing Tome",
    itemHealing: 10,
    itemEffect: 10,
    itemCount: 1,
    initialItemCount: 1,
    get description(){
        return `Heals you by ${this.itemHealing}, increases the healing by ${this.itemEffect} for every spell used.
Amount: ${this.itemCount}`}
}],
[{
    itemName: "Poison Oil",
    itemEffectType: "Poison",
    itemStatus: "Poison Coating",
    itemStatusDuration: 5,
    itemCount: 1,
    initialItemCount: 1,
    get description(){
        return `Coats your blade with an oil that applies ${this.itemStatus} when attacking an enemy, lasts ${this.itemStatusDuration} turns but wears out quicker with use.
Amount: ${this.itemCount}`
    }
},
{
    itemName: "Smoke Bomb",
    itemEffectType: "Hidden",
    itemStatus: "Hidden",
    itemStatusDuration: 999,
    itemCount: 2,
    initialItemCount: 2,
    get description(){
        return `Throws a smoke bomb that allows you to go back into hiding.
Amount: ${this.itemCount}`
        }
},
{
    itemName: "Stun Trap",
    itemEffectType: "Trap",
    itemStatusEffect: 15,
    trapTriggerTime: 2,
    itemStatus: "Stunned",
    itemStatusDuration: 2,
    itemCount: 1,
    initialItemCount: 1,
    get description(){
        return `Sets up a trap that triggers after ${this.trapTriggerTime} turns, applies ${this.itemStatus} and deals ${this.itemStatusEffect} damage.
Amount: ${this.itemCount}`
    }
},
{
    itemName: "Fire Trap",
    itemEffectType: "Trap",
    itemStatusEffect: 20,
    trapTriggerTime: 2,
    itemStatus: "Burning",
    itemStatusDuration: 3,
    itemCount: 1,
    initialItemCount: 1,
    get description(){
        return `Sets up a trap that triggers after ${this.trapTriggerTime} turns, applies ${this.itemStatus} for ${this.itemStatusDuration} turns and deals ${this.itemStatusEffect} damage.
Amount: ${this.itemCount}`
    }
},
{
    itemName: "Decoy",
    itemEffectType: "Decoy",
    itemCount: 1,
    initialItemCount: 1,
    decoyProperties: {
        decoyName: "Decoy",
        decoyCurrentHealth: 50,
        decoyMaxHealth: 50,
        decoyDistance: 0,
        decoyStatus: [{}, {}, {}, {}, {}, {}, {}],
},
    get description(){
        return `Sets up a decoy with ${this.decoyProperties.decoyMaxHealth} health which makes the enemy attack it instead of you.
Amount: ${this.itemCount}`
    }
}],
[{
    itemName: "Sand Golem",
    itemEffectType: "Golem",
    golemProperties:{
        golemName: "Sand Golem",
        golemCurrentHealth: 40,
        golemMaxHealth: 40,
        golemDistance: 0,
        golemStatus: [{}, {}, {}, {}, {}, {}, {}],
        golemAttacks: [{
            attackName: "Sand Splash",
            attackDamage: 10,
            attackRange: 1,
            attackStatus: "Stunned",
            attackStatusDuration: 1,
            attackCooldown: 4,
            initialAttackCooldown: 4,
            onCooldown: false,
            inRange: false,
        },
        {
            attackName: "Punch",
            attackDamage: 10,
            attackRange: 1,
            attackCooldown: 1,
            initialAttackCooldown: 1,
            onCooldown: false,
            inRange: false,
        }],
        isGolem1: false,
        isGolem2: false,
    },
    golemProperties2:{
        golemName: "Sand Golem",
        golemCurrentHealth: 40,
        golemMaxHealth: 40,
        golemDistance: 0,
        golemStatus: [{}, {}, {}, {}, {}, {}, {}],
        golemAttacks: [{
            attackName: "Sand Splash",
            attackDamage: 10,
            attackRange: 1,
            attackStatus: "Stunned",
            attackStatusDuration: 1,
            attackCooldown: 4,
            initialAttackCooldown: 4,
            onCooldown: false,
            inRange: false,
        },
        {
            attackName: "Punch",
            attackDamage: 10,
            attackRange: 1,
            attackCooldown: 1,
            initialAttackCooldown: 1,
            onCooldown: false,
            inRange: false,
        }],
        isGolem1: false,
        isGolem2: false,
    },
    itemCount: 2,
    initialItemCount: 2,
    get description(){
        return `Spawns a ${this.itemName} to protect you.
Amount: ${this.itemCount}`
    }
},
{
    itemName: "Fire Golem",
    itemEffectType: "Golem",
    golemProperties:{
        golemName: "Fire Golem",
        golemCurrentHealth: 50,
        golemMaxHealth: 50,
        golemDistance: 0,
        golemStatus: [{}, {}, {}, {}, {}, {}, {}],
        golemAttacks: [{
            attackName: "Fire Blast",
            attackDamage: 20,
            attackRange: 2,
            attackStatus: "Burning",
            attackStatusDuration: 2,
            attackCooldown: 4,
            initialAttackCooldown: 4,
            onCooldown: false,
            inRange: false,
        },
        {
            attackName: "Punch",
            attackDamage: 15,
            attackRange: 1,
            attackCooldown: 1,
            initialAttackCooldown: 1,
            onCooldown: false,
            inRange: false,
        }],
        isGolem1: false,
        isGolem2: false,
    },
    golemProperties2:{
        golemName: "Fire Golem",
        golemCurrentHealth: 50,
        golemMaxHealth: 50,
        golemDistance: 0,
        golemStatus: [{}, {}, {}, {}, {}, {}, {}],
        golemAttacks: [{
            attackName: "Fire Blast",
            attackDamage: 20,
            attackRange: 2,
            attackStatus: "Burning",
            attackStatusDuration: 2,
            attackCooldown: 4,
            initialAttackCooldown: 4,
            onCooldown: false,
            inRange: false,
        },
        {
            attackName: "Punch",
            attackDamage: 15,
            attackRange: 1,
            attackCooldown: 1,
            initialAttackCooldown: 1,
            onCooldown: false,
            inRange: false,
        }],
        isGolem1: false,
        isGolem2: false,
    },
    itemCount: 1,
    initialItemCount: 1,
    get description(){
        return `Spawns a ${this.itemName} to protect you.
Amount: ${this.itemCount}`
    }
},
{
    itemName: "Golem Restructurer",
    itemEffectType: "Golem Revive",
    itemCount: 1,
    initialItemCount: 1,
    get description(){
        return `Revives your last killed golem.
Amount: ${this.itemCount}`
    }
},
{
    itemName: "Ice Golem",
    itemEffectType: "Golem",
    golemProperties:{
        golemName: "Ice Golem",
        golemCurrentHealth: 50,
        golemMaxHealth: 50,
        golemDistance: 0,
        golemStatus: [{}, {}, {}, {}, {}, {}, {}],
        golemAttacks: [{
            attackName: "Ice Blast",
            attackDamage: 20,
            attackRange: 2,
            attackStatus: "Freeze",
            attackStatusDuration: 2,
            attackCooldown: 4,
            initialAttackCooldown: 4,
            onCooldown: false,
            inRange: false,
        },
        {
            attackName: "Punch",
            attackDamage: 15,
            attackRange: 1,
            attackCooldown: 1,
            initialAttackCooldown: 1,
            onCooldown: false,
            inRange: false,
        }],
        isGolem1: false,
        isGolem2: false,
    },
    golemProperties2:{
        golemName: "Ice Golem",
        golemCurrentHealth: 50,
        golemMaxHealth: 50,
        golemDistance: 0,
        golemStatus: [{}, {}, {}, {}, {}, {}, {}],
        golemAttacks: [{
            attackName: "Ice Blast",
            attackDamage: 20,
            attackRange: 2,
            attackStatus: "Freeze",
            attackStatusDuration: 2,
            attackCooldown: 4,
            initialAttackCooldown: 4,
            onCooldown: false,
            inRange: false,
        },
        {
            attackName: "Punch",
            attackDamage: 15,
            attackRange: 1,
            attackCooldown: 1,
            initialAttackCooldown: 1,
            onCooldown: false,
            inRange: false,
        }],
        isGolem1: false,
        isGolem2: false,
    },
    itemCount: 1,
    initialItemCount: 1,
    get description(){
        return `Spawns a ${this.itemName} to protect you.
Amount: ${this.itemCount}`
    }
},
{
    itemName: "Summoning Circle",
    itemEffectType: "Random Golem",
    itemCount: 1,
    initialItemCount: 1,
    get description(){
        return `Spawns a random Golem to protect you.
Amount: ${this.itemCount}`
    }
}]
]