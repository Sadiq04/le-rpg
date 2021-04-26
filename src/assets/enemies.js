export default [
    {
        enemyName: "Skeleton Knight",
        enemyCurrentHealth: 300,
        enemyMaxHealth: 300,
        enemyStatus: [{}, {}, {}, {}, {}, {}, {}, {}],
        enemyAttacks: [{
            attackName: "Sword Slash",
            attackDamage: 10,
            attackRange: 1,
            attackType: "Light",
            attackStatusEffect: 5,
            attackStatus: "Bleeding",
            attackStatusDuration: 3,
            attackCooldown: 1,
            initialAttackCooldown: 1,
            onCooldown: false
        },
        {
            attackName: "Jump Attack",
            attackDamage: 15,
            attackRange: 2,
            attackType: "Medium",
            attackStatus: "",
            attackStatusDuration: 1,
            attackCooldown: 3,
            initialAttackCooldown: 3,
            onCooldown: false,
            isDashAttack: true
        },
        {
            attackName: "Shield Bash",
            attackDamage: 5,
            attackRange: 1,
            attackStatus: "Stunned",
            attackStatusDuration: 1,
            attackCooldown: 4,
            initialAttackCooldown: 4,
            onCooldown: true
        }],
        get enemyAttackNames() {
            return `${this.enemyAttacks[0].attackName},  ${this.enemyAttacks[1].attackName}, ${this.enemyAttacks[2].attackName}`
        }
    },
    {
        enemyName: "Golyat",
        enemyCurrentHealth: 400,
        enemyMaxHealth: 400,
        enemyStatus: [{}, {}, {}, {}, {}, {}, {}, {}],
        enemyAttacks: [{
            attackName: "Club Swing",
            attackDamage: 15,
            attackRange: 2,
            attackType: "Heavy",
            attackStatus: "Stunned",
            attackStatusDuration: 1,
            attackCooldown: 4,
            initialAttackCooldown: 4,
            onCooldown: false
        },
        {
            attackName: "Punch",
            attackDamage: 20,
            attackRange: 1,
            attackType: "Heavy",
            attackStatus: "",
            attackCooldown: 0,
            initialAttackCooldown: 0,
            onCooldown: false
        },
        {
            attackName: "Object Throw",
            attackDamage: 10,
            attackRange: 3,
            attackType: "Heavy",
            attackStatus: "",
            attackCooldown: 2,
            initialAttackCooldown: 2,
            onCooldown: true
        }],
        get enemyAttackNames() {
            return `${this.enemyAttacks[0].attackName},  ${this.enemyAttacks[1].attackName}, ${this.enemyAttacks[2].attackName}`
        }
    },
    {
        enemyName: "Vampire",
        enemyCurrentHealth: 250,
        enemyMaxHealth: 250,
        enemyStatus: [{}, {}, {}, {}, {}, {}, {}, {}],
        enemyAttacks: [{
            attackName: "Fang Slash",
            attackDamage: 20,
            attackRange: 1,
            attackStatus: "Bleeding",
            attackStatusDuration: 3,
            attackCooldown: 1,
            initialAttackCooldown: 1,
            onCooldown: false
        },
        {
            attackName: "Blood Suck",
            attackDamage: 15,
            attackRange: 1,
            attackStatus: "Bleeding",
            attackStatusDuration: 2,
            attackEffect: "Health Absorb",
            attackCooldown: 3,
            initialAttackCooldown: 3,
            onCooldown: false
        },
        {
            attackName: "Vampire's Dash",
            attackDamage: 35,
            attackRange: 2,
            attackStatus: "Bleeding",
            attackStatusDuration: 2,
            attackCooldown: 5,
            initialAttackCooldown: 5,
            onCooldown: true,
            isDashAttack: true
        }],
        get enemyAttackNames() {
            return `${this.enemyAttacks[0].attackName},  ${this.enemyAttacks[1].attackName}, ${this.enemyAttacks[2].attackName}`
        }
    },
    {
        enemyName: "Dragon",
        enemyCurrentHealth: 500,
        enemyMaxHealth: 500,
        enemyStatus: [{}, {}, {}, {}, {}, {}, {}, {}],
        enemyAttacks: [{
            attackName: "Flame Breath",
            attackDamage: 20,
            attackRange: 2,
            attackStatus: "Burning",
            attackStatusDuration: 2,
            attackCooldown: 3,
            initialAttackCooldown: 3,
            onCooldown: false
        },
        {
            attackName: "Tail Swing",
            attackDamage: 15,
            attackRange: 1,
            attackCooldown: 1,
            initialAttackCooldown: 1,
            onCooldown: false
        },
        {
            attackName: "Predatory Dive",
            attackDamage: 25,
            attackRange: 3,
            attackCooldown: 4,
            initialAttackCooldown: 4,
            onCooldown: true,
            isDashAttack: true
        }],
        get enemyAttackNames() {
            return `${this.enemyAttacks[0].attackName},  ${this.enemyAttacks[1].attackName}, ${this.enemyAttacks[2].attackName}`
        }
    }
]