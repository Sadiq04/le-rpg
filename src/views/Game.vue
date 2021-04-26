<template>
  <div style="height: 800px" id="game">
    <router-link to="/"><b-button variant="outline-primary" size="lg" @click="reset" style="position: relative; float: left;bottom: 50px; left: 20px">Home</b-button></router-link>
    <div style="float: left">
      <h1>{{ classes[$route.params.classID].className }}</h1>
      <h1>Health: {{ classes[$route.params.classID].classCurrentHealth }} / {{ classes[$route.params.classID].classMaxHealth }}</h1>
      <h1>Statusses: {{ classes[$route.params.classID].classStatus[0].status }} {{ classes[$route.params.classID].classStatus[1].status }} {{ classes[$route.params.classID].classStatus[2].status }} {{ classes[$route.params.classID].classStatus[3].status }} {{ classes[$route.params.classID].classStatus[4].status }} {{ classes[$route.params.classID].classStatus[5].status }} {{ classes[$route.params.classID].classStatus[6].status }} {{ classes[$route.params.classID].classStatus[7].status }}</h1>
    <div style="position:relative; top: 25px" v-if="golem1.golemName">
      <h1>{{ golem1.golemName }}</h1>
      <h1>Health: {{ golem1.golemCurrentHealth }} / {{ golem1.golemMaxHealth }}</h1>
      <h1>Statusses: {{ golem1.golemStatus[0].status }} {{ golem1.golemStatus[1].status }} {{ golem1.golemStatus[2].status }} {{ golem1.golemStatus[3].status }} {{ golem1.golemStatus[4].status }} {{ golem1.golemStatus[5].status }} {{ golem1.golemStatus[6].status }}</h1>
      <h1>Golem Distance: {{ golem1.golemDistance }}</h1>
    </div>
    <div style="position:relative; top: 25px" v-if="decoy.decoyName">
      <h1>{{ decoy.decoyName }}</h1>
      <h1>Health: {{ decoy.decoyCurrentHealth }} / {{ decoy.decoyMaxHealth }}</h1>
      <h1>Statusses: {{ decoy.decoyStatus[0].status }} {{ decoy.decoyStatus[1].status }} {{ decoy.decoyStatus[2].status }} {{ decoy.decoyStatus[3].status }} {{ decoy.decoyStatus[4].status }} {{ decoy.decoyStatus[5].status }} {{ decoy.decoyStatus[6].status }}</h1>
      <h1>Decoy Distance: {{ decoy.decoyDistance }}</h1>
    </div>
    <div style="position:relative; top: 50px" v-if="golem2.golemName">
      <h1>{{ golem2.golemName }}</h1>
      <h1>Health: {{ golem2.golemCurrentHealth }} / {{ golem2.golemMaxHealth }}</h1>
      <h1>Statusses: {{ golem2.golemStatus[0].status }} {{ golem2.golemStatus[1].status }} {{ golem2.golemStatus[2].status }} {{ golem2.golemStatus[3].status }} {{ golem2.golemStatus[4].status }} {{ golem2.golemStatus[5].status }} {{ golem2.golemStatus[6].status }}</h1>
      <h1>Golem Distance: {{ golem2.golemDistance }}</h1>
    </div>
    </div>
    <div style="float: right">
      <h1>{{ enemies[$route.params.enemyID].enemyName }}</h1>
      <h1>Health: {{ enemies[$route.params.enemyID].enemyCurrentHealth }} / {{ enemies[$route.params.enemyID].enemyMaxHealth }}</h1>
      <h1>Statusses: {{ enemies[$route.params.enemyID].enemyStatus[0].status }} {{ enemies[$route.params.enemyID].enemyStatus[1].status }} {{ enemies[$route.params.enemyID].enemyStatus[2].status }} {{ enemies[$route.params.enemyID].enemyStatus[3].status }} {{ enemies[$route.params.enemyID].enemyStatus[4].status }} {{ enemies[$route.params.enemyID].enemyStatus[5].status }} {{ enemies[$route.params.enemyID].enemyStatus[6].status }} {{ enemies[$route.params.enemyID].enemyStatus[7].status }}</h1>
    </div>
      <h1>Distance: {{ mechanics.distance }}</h1>
    <div style="position:absolute;top: 250px;left: 500px;max-width: 1000px;min-width: 500px;">
        <b-card style="height: 200px; text-align: left; white-space: pre-wrap">{{ showCurrentAction() }}</b-card>
    </div>
    <div style="position: relative;top: 400px;">
      <b-button @click="showAttackOptions()" size="lg" variant="danger" :disabled="gameOver || showFMOptions">Attack</b-button> |
      <b-button @click="chooseAction('Defence');changeCurrentAction('Explain Defence');attackOptionsShown=false;itemOptionsShown=false" size="lg" variant="primary" :disabled="gameOver || classes[$route.params.classID].classStatus[3].status=='Berserk' || showFMOptions">Defend</b-button> |
      <b-button @click="showItemOptions()" size="lg" variant="info" :disabled="gameOver || classes[$route.params.classID].classStatus[3].status=='Berserk' || showFMOptions">Item</b-button> |
      <b-button @click="chooseAction('Back Out');changeCurrentAction('Explain Back Out');attackOptionsShown=false;itemOptionsShown=false" size="lg" variant="dark" :disabled="gameOver || classes[$route.params.classID].classStatus[3].status=='Berserk' || showFMOptions">Back out</b-button> |
      <b-button @click="chooseAction('Approach');changeCurrentAction('Explain Approach');attackOptionsShown=false;itemOptionsShown=false" size="lg" variant="warning" :disabled="gameOver || mechanics.distance == 1 || showFMOptions">Approach</b-button> |
      <b-button @click="chooseAction('Skip Turn');changeCurrentAction('Explain Skip Turn');attackOptionsShown=false;itemOptionsShown=false" size="lg" variant="light" :disabled="gameOver || showFMOptions">Skip Turn</b-button>
    <div style="position: relative; top: 25px">
       <b-button variant="info" v-if="itemOptionsShown" @click="changeCurrentAction('Explain', classes[$route.params.classID].classItems[0]);chooseAction('Item', classes[$route.params.classID].classItems[0])" :disabled="classes[$route.params.classID].classItems[0].itemCount<=0 || checkItemUsage(classes[$route.params.classID].classItems[0])"> {{ classes[$route.params.classID].classItems[0].itemName }}</b-button> |
       <b-button variant="info" v-if="itemOptionsShown" @click="changeCurrentAction('Explain', classes[$route.params.classID].classItems[1]);chooseAction('Item', classes[$route.params.classID].classItems[1])" :disabled="classes[$route.params.classID].classItems[1].itemCount<=0 || checkItemUsage(classes[$route.params.classID].classItems[1])"> {{ classes[$route.params.classID].classItems[1].itemName }}</b-button> |
       <b-button variant="info" v-if="itemOptionsShown" @click="changeCurrentAction('Explain', classes[$route.params.classID].classItems[2]);chooseAction('Item', classes[$route.params.classID].classItems[2])" :disabled="classes[$route.params.classID].classItems[2].itemCount<=0 || checkItemUsage(classes[$route.params.classID].classItems[2])"> {{ classes[$route.params.classID].classItems[2].itemName }}</b-button>
    </div>
    <div style="position: relative;top: 50px;">
      <b-button v-if="attackOptionsShown" @click="changeCurrentAction('Explain', classes[$route.params.classID].classAttacks[0]);chooseAction('Attack', classes[$route.params.classID].classAttacks[0])" size="lg" variant="danger" :disabled="classes[$route.params.classID].classAttacks[0].onCooldown==true || !classes[$route.params.classID].classAttacks[0].inRange">{{ classes[$route.params.classID].classAttacks[0].attackName }} </b-button> |
      <b-button v-if="attackOptionsShown" @click="changeCurrentAction('Explain', classes[$route.params.classID].classAttacks[1]);chooseAction('Attack', classes[$route.params.classID].classAttacks[1])" size="lg" variant="danger" :disabled="classes[$route.params.classID].classAttacks[1].onCooldown==true || !classes[$route.params.classID].classAttacks[1].inRange">{{ classes[$route.params.classID].classAttacks[1].attackName }} </b-button> |
      <b-button v-if="attackOptionsShown" @click="changeCurrentAction('Explain', classes[$route.params.classID].classAttacks[2]);chooseAction('Attack', classes[$route.params.classID].classAttacks[2])" size="lg" variant="danger" :disabled="classes[$route.params.classID].classAttacks[2].onCooldown==true || !classes[$route.params.classID].classAttacks[2].inRange">{{ classes[$route.params.classID].classAttacks[2].attackName }} </b-button> |
      <b-button v-if="attackOptionsShown" @click="changeCurrentAction('Explain', classes[$route.params.classID].classAttacks[3]);chooseAction('Attack', classes[$route.params.classID].classAttacks[3])" size="lg" variant="danger" :disabled="classes[$route.params.classID].classAttacks[3].onCooldown==true || !classes[$route.params.classID].classAttacks[3].inRange || classes[$route.params.classID].classAttacks[3].attackName=='Forbidden Magic'">{{ classes[$route.params.classID].classAttacks[3].attackName }} </b-button>
    </div>
    <div style="position: relative; top: 60px">
       <b-button v-if="showAcceptAction" @click="processAction()" :disabled="gameOver || showFMOptions">Accept</b-button>
    </div>
    </div>
    <div v-if="showFMOptions">
       <b-button variant="danger" @click="useFM()" style="position: relative; top: 500px">Use Forbidden Magic</b-button> |
       <b-button variant="dark" @click="die()" style="position: relative; top: 500px">Die</b-button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import attacks from "../assets/attacks.js"
import ultAttacks from "../assets/ultAttacks.js"
import items from "../assets/items.js"
export default {
    data() {
        return{
          currentAction: "",
          currentEnemyAction: "",
          currentMiscAction: "",
          currentMiscAction2: "",
          attackOptionsShown: false,
          itemOptionsShown: false,
          isDefending: false,
          enemyMoved: [false, ""],
          gameOver: false,
          showFMOptions: false,
          hadFM: false,
          actionType: "Opening Line",
          action: "",
          item: "",
          enemyDealtDamage: 0,
          classDealtDamage: 0,
          attack: {},
          trap: "",
          trapTimer: 0,
          trap2: "",
          trap2Timer: 0,
          showAcceptAction: false,
          chosenAction: "",
          chosenActionType: "",
          enemyAction: "",
          enemyActionType: "",
          miscAction: "",
          miscActionType: "",
          miscAction2: "",
          miscActionType2: "",
          miscAction3: "",
          miscActionType3: "",
          availableAttacks: [],
          golem1: {},
          golem2: {},
          decoy: {},
          golem1Moved: false,
          golem2Moved: false,
          golem1AvailableAttacks: [],
          golem2AvailableAttacks: [],
          golemGrave: {},
          summonedGolem: {},
          golemRetreat: false,
          tomeHealing: 0,
          healing: 0,
          golem1Died: [false, {}],
          golem2Died: [false, {}],
          decoyDied: [false, {}]
        }
    },
computed: {
     ...mapState([
        'classes',
        'enemies',
        'mechanics'
    ]),
    },
    methods: {
      chooseAction(type, theAction){
        this.enemyAction=""
        this.enemyActionType=""
        this.miscAction=""
        this.miscActionType=""
        this.miscAction2=""
        this.miscActionType2=""
        this.enemyMoved=false
        this.golem1Moved=false
        this.golem2Moved=false
        this.chosenActionType = type
        this.chosenAction = theAction
        this.showAcceptAction = true
      },
      processAction(){
        this.attack=""
        this.item=""
        this.actionType=""
        this.action=""
        this.currentAction = ""
        this.currentEnemyAction = ""
        this.currentMiscAction = ""
        this.currentMiscAction2 = ""
        this.currentMiscAction3 = ""
        this.enemyDealtDamage=0
        this.classDealtDamage=0
        this.healing=0,
        this.enemyMoved=[false, ""]
        this.golem1Moved=false
        this.golem2Moved=false
        this.golem1Died=[false, {}],
        this.golem2Died=[false, {}],
        this.decoyDied=[false, {}],
        this.golemRetreat=false
        this.checkInRange()
        if(this.golem1.golemName){
          if(this.golemRetreat){
            this.golem1Distance++
          } else if (this.attack.attackEffect!="Self Destruct"){this.useGolem1Attack()}}
        if(this.golem2.golemName){
          if(this.golemRetreat){
            this.golem2Distance++
          } else if (this.attack.attackEffect!="Self Destruct"){this.useGolem2Attack()}}
        if(this.chosenActionType=="Attack"){
           this.useAttack()
         } else if (this.chosenActionType=="Defence"){
           this.useDefense()
           } else if (this.chosenActionType=="Item"){
           this.useItem()
           } else if (this.chosenActionType=="Back Out"){
           let shouldAttack = true
           if(this.enemies[this.$route.params.enemyID].enemyStatus[0].status == "Stunned" || this.enemies[this.$route.params.enemyID].enemyStatus[3].status == "Sleep"){
            shouldAttack = false
           }
           this.mechanics.distance++
           this.processStatus()
           this.processCooldown()
           if(shouldAttack) {this.useEnemyAttack("Back Out")}
           else{this.changeCurrentAction("Action Made", "Back Out")}
           } else if (this.chosenActionType=="Approach") {
           let shouldAttack = true
           if(this.enemies[this.$route.params.enemyID].enemyStatus[0].status == "Stunned" || this.enemies[this.$route.params.enemyID].enemyStatus[3].status == "Sleep"){
            shouldAttack = false
           }
           this.mechanics.distance--
           this.processStatus()
           this.processCooldown()
           if(shouldAttack) {this.useEnemyAttack("Approach")}
           else{this.changeCurrentAction("Action Made", "Approach")}
           } else if (this.chosenActionType=="Skip Turn"){
           let shouldAttack = true
           if(this.enemies[this.$route.params.enemyID].enemyStatus[0].status == "Stunned" || this.enemies[this.$route.params.enemyID].enemyStatus[3].status == "Sleep"){
            shouldAttack = false
           }
           this.processStatus()
           this.processCooldown()
           if(shouldAttack) {this.useEnemyAttack("Skip Turn")}
           else{this.changeCurrentAction("Action Made", "Skip Turn")}
           }
           this.checkHP()
           this.checkInRange()
           this.checkWin()
           this.chosenAction = null
           this.chosenActionType = ""
      },
      changeCurrentAction(theActionType, theAction){
       this.actionType = theActionType
       this.action = theAction
      },
      changeCurrentEnemyAction(enemyActionType, theEnemyAction){
       this.enemyActionType = enemyActionType
       this.enemyAction = theEnemyAction
      },
      changeCurrentMiscAction(miscActionType, theMiscAction){
       this.miscActionType = miscActionType
       this.miscAction = theMiscAction
      },
      changeCurrentMiscAction2(miscActionType2, theMiscAction2){
       this.miscActionType2 = miscActionType2
       this.miscAction2 = theMiscAction2
      },
      changeCurrentMiscAction3(miscActionType3, theMiscAction3){
       this.miscActionType3 = miscActionType3
       this.miscAction3 = theMiscAction3
      },
      showCurrentAction(){
        this.currentAction = ""
        this.currentEnemyAction = ""
        this.currentMiscAction = ""
        this.currentMiscAction2 = ""
        this.currentMiscAction3 = ""
        if(this.actionType=="Opening Line"){this.currentAction = `A wild ${this.enemies[this.$route.params.enemyID].enemyName} appears!`}
        else if (this.actionType == "Explain") {
           return this.currentAction = this.action.description}
          if (this.enemyActionType == "Damage Dealt") {
            if(this.enemyAction.attackEffect=="Health Absorb"){this.currentEnemyAction=`${this.enemies[this.$route.params.enemyID].enemyName} used ${this.enemyAction.attackName}, did ${this.enemyDealtDamage} damage, healed by ${this.enemyDealtDamage}.`
          } else if(this.enemyAction.attackStatus) {this.currentEnemyAction=`${this.enemies[this.$route.params.enemyID].enemyName} used ${this.enemyAction.attackName}, did ${this.enemyDealtDamage} damage and applied ${this.enemyAction.attackStatus} for ${this.enemyAction.attackStatusDuration} turns.`}
            else {this.currentEnemyAction = `${this.enemies[this.$route.params.enemyID].enemyName} used ${this.enemyAction.attackName} and did ${this.enemyDealtDamage} damage.`}
        } else if (this.enemyActionType == "Damage Blocked") {
          this.currentEnemyAction = `${this.enemies[this.$route.params.enemyID].enemyName} used ${this.enemyAction.attackName} but you blocked it and only took ${this.enemyDealtDamage} damage.`
        } else if (this.enemyActionType == "Damage to Golem1"){
            let target
            if(this.golem1.golemName) {
            target = this.golem1.golemName
            } else {target = this.golem1Died[1].golemName}
            if(this.enemyAction.attackEffect=="Health Absorb"){this.currentEnemyAction=`${this.enemies[this.$route.params.enemyID].enemyName} used ${this.enemyAction.attackName} on ${target}, did ${this.enemyDealtDamage} damage, healed by ${this.enemyDealtDamage} and applied ${this.enemyAction.attackStatus} for ${this.enemyAction.attackStatusDuration} turns.`
          } else if(this.enemyAction.attackStatus){this.currentEnemyAction = `${this.enemies[this.$route.params.enemyID].enemyName} used ${this.enemyAction.attackName} on ${target}, did ${this.enemyDealtDamage} damage and applied ${this.enemyAction.attackStatus} for ${this.enemyAction.attackStatusDuration} turns.`
          } else {this.currentEnemyAction = `${this.enemies[this.$route.params.enemyID].enemyName} used ${this.enemyAction.attackName} on ${target} and did ${this.enemyDealtDamage} damage.`}
        } else if (this.enemyActionType == "Damage to Golem2"){
            let target
            if(this.golem2.golemName) {
            target = this.golem2.golemName
            } else {target = this.golem2Died[1].golemName}
            if(this.enemyAction.attackEffect=="Health Absorb"){this.currentEnemyAction=`${this.enemies[this.$route.params.enemyID].enemyName} used ${this.enemyAction.attackName} on ${target}, did ${this.enemyDealtDamage} damage, healed by ${this.enemyDealtDamage}.`
          } else if(this.enemyAction.attackStatus){this.currentEnemyAction = `${this.enemies[this.$route.params.enemyID].enemyName} used ${this.enemyAction.attackName} on ${target}, did ${this.enemyDealtDamage} damage and applied ${this.enemyAction.attackStatus} for ${this.enemyAction.attackStatusDuration} turns.`
          } else {this.currentEnemyAction = `${this.enemies[this.$route.params.enemyID].enemyName} used ${this.enemyAction.attackName} on ${target} and did ${this.enemyDealtDamage} damage.`}
          } else if (this.enemyActionType == "Damage to Decoy"){
            let target
            if(this.decoy.decoyName) {
            target = this.decoy.decoyName
            } else {target = this.decoyDied[1].decoyName}
            if(this.enemyAction.attackEffect=="Health Absorb"){this.currentEnemyAction=`${this.enemies[this.$route.params.enemyID].enemyName} used ${this.enemyAction.attackName} on ${target}, did ${this.enemyDealtDamage} damage, healed by ${this.enemyDealtDamage}.`
          } else if(this.enemyAction.attackStatus){this.currentEnemyAction = `${this.enemies[this.$route.params.enemyID].enemyName} used ${this.enemyAction.attackName} on ${target}, did ${this.enemyDealtDamage} damage and applied ${this.enemyAction.attackStatus} for ${this.enemyAction.attackStatusDuration} turns.`
          } else {this.currentEnemyAction = `${this.enemies[this.$route.params.enemyID].enemyName} used ${this.enemyAction.attackName} on ${target} and did ${this.enemyDealtDamage} damage.`}
          } else if(this.enemyActionType=="Damage to Self"){
            if(this.enemyAction.attackEffect=="Health Absorb"){this.currentEnemyAction=`${this.enemies[this.$route.params.enemyID].enemyName} used ${this.enemyAction.attackName} on itself, achieving nothing.`
          } else if(this.enemyAction.attackStatus){this.currentEnemyAction = `${this.enemies[this.$route.params.enemyID].enemyName} used ${this.enemyAction.attackName} on itself, took ${this.enemyDealtDamage} damage and gained ${this.enemyAction.attackStatus} for ${this.enemyAction.attackStatusDuration} turns.`
          } else {this.currentEnemyAction = `${this.enemies[this.$route.params.enemyID].enemyName} used ${this.enemyAction.attackName} on itself and took ${this.enemyDealtDamage} damage.`}
          }
          if(this.decoy.decoyName){
             if(this.decoyDied[0]==true){this.currentMiscAction3 = `${this.decoy.decoyName} got destroyed.`}
          }
          if (this.miscActionType=="Trap"){this.currentMiscAction = `${this.miscAction.itemName} triggered, did ${this.miscAction.itemStatusEffect} damage and applied ${this.miscAction.itemStatus} to the enemy.`
          } else if(this.miscActionType=="Golem1"){
              if(this.miscAction.attackStatus){this.currentMiscAction = `${this.golem1.golemName} used ${this.miscAction.attackName}, did ${this.golem1DealtDamage} damage and applied ${this.miscAction.attackStatus} for ${this.miscAction.attackStatusDuration} turns.`
              } else {this.currentMiscAction = `${this.golem1.golemName} used ${this.miscAction.attackName} and did ${this.golem1DealtDamage} damage.`}
              if(this.golem1Died[0]==true){this.currentMiscAction = `${this.golem1Died[1].golemName} used ${this.miscAction.attackName} and did ${this.golem1DealtDamage} damage. ${this.golem1Died[1].golemName} died.`}}
          if (this.miscActionType2=="Golem2"){
              if(this.miscAction2.attackStatus){this.currentMiscAction2 = `${this.golem2.golemName} used ${this.miscAction2.attackName}, did ${this.golem2DealtDamage} damage and applied ${this.miscAction2.attackStatus} for ${this.miscAction2.attackStatusDuration} turns.`
              } else {this.currentMiscAction2 = `${this.golem2.golemName} used ${this.miscAction2.attackName} and did ${this.golem2DealtDamage} damage.`}
              if(this.golem2Died[0]==true){this.currentMiscAction2 = `${this.golem2Died[1].golemName} used ${this.miscAction2.attackName} and did ${this.golem2DealtDamage} damage. ${this.golem2Died[1].golemName} died.`}
        } else if (this.miscActionType2=="Trap"){this.currentMiscAction2 = `${this.miscAction2.itemName} triggered, did ${this.miscAction2.itemStatusEffect} damage and applied ${this.miscAction2.itemStatus} to the enemy.`}
              if(this.action == "Item"){
                if(this.item.itemName=="Health Potion"){this.currentAction = `You used ${this.item.itemName}, healed by ${this.item.itemEffect} and gained ${this.item.itemStatus} for ${this.item.itemStatusDuration} turns.`
                } else if(this.item.itemEffectType=="Hidden"){this.currentAction=`You used ${this.item.itemName} and became ${this.item.itemStatus}.`
                } else if(this.item.itemEffectType=="Trap"){this.currentAction=`You set up the ${this.item.itemName} which will spring in ${this.item.trapTriggerTime} turns.`
                } else if(this.item.itemEffectType=="Golem"){this.currentAction=`You summoned a ${this.item.itemName}.`
                } else if(this.item.itemEffectType=="Sleep"){this.currentAction=`You used ${this.item.itemName} and slept ${this.enemies[this.$route.params.enemyID].enemyName}.`
                } else if(this.item.itemEffectType=="Cooldown Reset"){this.currentAction=`You used ${this.item.itemName} and reset all your attack cooldowns.`
                } else if(this.item.itemEffectType=="Healing Tome"){this.currentAction=`You used ${this.item.itemName} and healed yourself by ${this.healing}`
                } else if(this.item.itemEffectType=="Decoy"){this.currentAction="You placed a Decoy."
                } else if(this.item.itemEffectType=="Sharpened"){this.currentAction=`You used ${this.item.itemName} and sharpened your weapons.`
                } else if(this.item.itemEffectType=="Random Golem"){this.currentAction=`You used ${this.item.itemName} and summoned ${this.summonedGolem.golemName}.`
                } else if(this.item.itemEffectType=="Random Spell"){
                  if(this.attack.attackStatus){this.currentAction=`You used ${this.item.itemName} and casted ${this.attack.attackName}, which did ${this.classDealtDamage} damage and applied ${this.attack.attackStatus} for ${this.attack.attackStatusDuration} turns.`
                  } else {this.currentAction=`You used ${this.item.itemName} and casted ${this.attack.attackName}, which did ${this.classDealtDamage} damage.`}
                } else if(this.item.itemStatus){this.currentAction=`You used ${this.item.itemName} and gained ${this.item.itemStatus} for ${this.item.itemStatusDuration} turns.`
                } else {this.currentAction=`You used ${this.item.itemName}.`}}
              else if (this.action=="Attack"){
                  if(this.attack.attackEffect=="Push"){this.currentAction=`You used ${this.attack.attackName}, did ${this.classDealtDamage} damage and pushed ${this.enemies[this.$route.params.enemyID].enemyName} back by ${this.attack.attackStatusEffect}.`
                } else if (this.attack.attackEffect=="Health Absorb"){this.currentAction=`You used ${this.attack.attackName}, did ${this.classDealtDamage} damage and healed by ${this.classDealtDamage}.`
                } else if (this.attack.attackEffect=="Golem Damage Buff"){this.currentAction=`You used ${this.attack.attackName} and gave ${this.attack.attackStatus} to your golems for ${this.attack.attackStatusDuration} turns.`
                } else if (this.attack.attackEffect=="Self Destruct"){
                  this.currentAction=`You ordered your golems to self destruct and did ${this.classDealtDamage} damage.`
                  return this.currentAction + this.currentEnemyAction
                } else if (this.attack.attackEffect=="Purify"){this.currentAction=`You used ${this.attack.attackName} and gave ${this.attack.attackStatus} to your Golems.`
                } else if (this.attack.attackEffect=="Retreat"){this.currentAction=`You ordered your Golems to retreat.`
                } else if (this.attack.attackEffect=="Immortal Pain"){this.currentAction=`You damaged your Golems by ${this.attack.attackEffectDamage} and gave them ${this.attack.attackStatus} for ${this.attack.attackStatusDuration} turns.`
                } else if (this.attack.attackEffect=="Delay Trap"){this.currentAction = `You used ${this.attack.attackName} and increased the spring time of your traps by ${this.attack.attackEffectDelay} turns.`
                } else if (this.attack.attackEffect=="Healing"){this.currentAction=`You used ${this.attack.attackName} and healed your golems by ${this.attack.attackEffectHealing}.`
                } else if (this.attack.attackDamage==0 && this.attack.attackStatus){this.currentAction = `You used ${this.attack.attackName} and applied ${this.attack.attackStatus}.`
                } else if (this.attack.attackStatus){this.currentAction=`You used ${this.attack.attackName}, did ${this.classDealtDamage} damage and applied ${this.attack.attackStatus} for ${this.attack.attackStatusDuration} turns.`
                } else {this.currentAction=`You used ${this.attack.attackName} and did ${this.classDealtDamage} damage.`}}
              else if (this.action=="Defend" && !this.enemyActionType=="Damage Blocked"){this.currentAction="You blocked thin air."}
              else if (this.action=="Skip Turn"){this.currentAction="You waited around."}
              else if (this.action=="Approach"){this.currentAction=`You moved towards the ${this.enemies[this.$route.params.enemyID].enemyName}.`}
              else if (this.action=="Back Out"){this.currentAction=`You moved away from the ${this.enemies[this.$route.params.enemyID].enemyName}.`}
                if (this.enemyMoved[0]) {this.currentEnemyAction = `${this.enemies[this.$route.params.enemyID].enemyName} moved towards ${this.enemyMoved[1]}.`}
                if(this.trap.itemName && this.trapTimer != this.trap.trapTriggerTime){
                  if (this.trapTimer>1) {this.currentMiscAction =  `\n${this.trap.itemName} will trigger in ${this.trapTimer} turns`}
                else if (this.trapTimer==1) {this.currentMiscAction = `\n${this.trap.itemName} will trigger next turn`}}
                if(this.trap2.itemName && this.trap2Timer != this.trap2.trapTriggerTime){
                  if (this.trap2Timer>1) {this.currentMiscAction2 =  `\n${this.trap2.itemName} will trigger in ${this.trap2Timer} turns`}
                else if (this.trap2Timer==1) {this.currentMiscAction2 = `\n${this.trap2.itemName} will trigger next turn`}}
           else if (this.actionType=="Explain Defence"){return this.currentAction = "Halves the damage taken and prevents the enemy from applying statusses on you."}
           else if (this.actionType=="Explain Back Out"){return this.currentAction = "Increases the distance between the enemy and yourself by 1."}
           else if (this.actionType=="Explain Approach"){return this.currentAction = "Decreases the distance between the enemy and yourself by 1."}
           else if (this.actionType=="Explain Skip Turn"){return this.currentAction = "Skips the current turn."}
           else if (this.actionType=="You Both Died"){return this.currentAction = `You killed ${this.enemies[this.$route.params.enemyID].enemyName} but also died yourself.`}
           else if (this.actionType=="You Died"){return this.currentAction = "You died."}
           else if (this.actionType=="You Won"){return this.currentAction = `You killed ${this.enemies[this.$route.params.enemyID].enemyName}.`}
           if(this.actionType=="Almost Dead"){return this.currentAction = "You're on the brink of death."}
           if(this.actionType=="FM"){
             if(this.action=="Win"){return this.currentAction = `You cast Forbidden Magic and see a portal open and a dark cloaked man step out of it and move towards ${this.enemies[this.$route.params.enemyID].enemyName} as you faint from pain, when you wake up you see ${this.enemies[this.$route.params.enemyID].enemyName} dead and the cloacked man nowhere in sight.\nYou win I guess.`
           } else if (this.action=="Lose"){return this.currentAction = `You cast Forbidden Magic and see a portal open and a horned creature come out of it, it takes you too long to realise its goal.\nYou died.`
           } else if (this.action=="Tie"){return this.currentAction = `You cast Forbidden Magic and see a portal open and a box with "Nuclear" written on it come out, after a moment it explodes and takes out you, ${this.enemies[this.$route.params.enemyID].enemyName} and likely all nearby towns.`
           } else if (this.action=="Heal"){return this.currentAction = `You cast Forbidden Magic and see a portal open and a winged creaturn come out, all of a sudden you feel like your health has fully restored.`}}
           let message = `${this.currentAction} ${this.currentEnemyAction} ${this.currentMiscAction} ${this.currentMiscAction2} ${this.currentMiscAction3}`
           return message
       },
       showAttackOptions(){
         this.attackOptionsShown = true;
         this.itemOptionsShown = false;
       },
       showItemOptions(){
         this.itemOptionsShown = true;
         this.attackOptionsShown = false;
       },
       useAttack(){
          this.attack = this.chosenAction
          let shouldAttack = true
          if(this.enemies[this.$route.params.enemyID].enemyStatus[0].status == "Stunned" || this.enemies[this.$route.params.enemyID].enemyStatus[3].status == "Sleep"){
            shouldAttack = false
          }
          this.classDealtDamage = this.attack.attackDamage
          if(this.attack.inRange){
          if(this.attack.attackEffect=="Self Destruct"){
            if(this.golem1.golemName){
              if(this.golem1.golemDistance==1){this.classDealtDamage += 50}
              this.golemGrave = this.golem1
              this.golem1 = {}
            }
            if(this.golem2.golemName){
              if(this.golem2.golemDistance==1){this.classDealtDamage += 50}
              this.golemGrave = this.golem2
              this.golem2 = {}
            }
          }
          if(this.classes[this.$route.params.classID].classStatus[3].status=="Berserk"){this.classDealtDamage += this.mechanics.berserkDamageBuff}
          else if(this.classes[this.$route.params.classID].classStatus[3].status=="Magic Buff"){this.classDealtDamage += this.mechanics.talismanDamageBuff}
          else if(this.classes[this.$route.params.classID].classStatus[4].status=="Hidden"){
            this.classDealtDamage += this.mechanics.hiddenDamageBuff
            if(this.attack.attackName!="Throwing Knife" && this.attack.attackName!="Delay Trap"){this.classes[this.$route.params.classID].classStatus[4] = {}}}
          if(this.classes[this.$route.params.classID].classStatus[4].status=="Sharpened"){
            this.classDealtDamage += this.mechanics.sharpenDamageBuff
          }
          if(this.classes[this.$route.params.classID].classStatus[6].status=="Poison Coating"){
            let status = this.classes[this.$route.params.classID].classItems[0].itemEffectType
            let duration = 2
            this.enemies[this.$route.params.enemyID].enemyStatus[6] = {status, duration}
            this.classDealtDamage += this.mechanics.coatingDamageBuff
            this.classes[this.$route.params.classID].classStatus[6].duration--
            }
          if(this.enemies[this.$route.params.enemyID].enemyStatus[3].status=="Sleep"){
            this.classDealtDamage += this.mechanics.sleepingDamageBuff
            this.enemies[this.$route.params.enemyID].enemyStatus[3]={}
          }
          if(this.attack.attackEffect=="Enhanced Staff Hit"){
            if(this.golem1.golemName){this.classDealtDamage += this.attack.attackEffectBuff}
            if(this.golem2.golemName){this.classDealtDamage += this.attack.attackEffectBuff}
          }
          if(this.enemies[this.$route.params.enemyID].enemyStatus[5].status=="Burning"){this.classDealtDamage += this.mechanics.burnDamageBuff}
          this.processStatus()
          this.enemies[this.$route.params.enemyID].enemyCurrentHealth -= this.classDealtDamage;
          let status = this.attack.attackStatus
          let duration = this.attack.attackStatusDuration
          if(this.attack.attackEffect=="Push"){
            this.mechanics.distance += this.attack.attackStatusEffect
          } else if (this.attack.attackEffect=="Health Absorb"){
            this.classes[this.$route.params.classID].classCurrentHealth += this.classDealtDamage
          } else if (this.attack.attackEffect=="Healing"){
            if(this.golem1.golemName){this.golem1.golemCurrentHealth += this.classes[this.$route.params.classID].classAttacks[3].attackEffectHealing}
            if(this.golem2.golemName){this.golem2.golemCurrentHealth += this.classes[this.$route.params.classID].classAttacks[3].attackEffectHealing}
          } else if(this.attack.attackEffect=="Delay Trap"){
            if(this.trap.itemName){this.trapTimer += 3}
            if(this.trap2.itemName){this.trap2Timer += 3}
          } else if (this.attack.attackEffect=="Retreat"){
            this.golemRetreat=true
            if(this.golem1.golemName){this.golem1.golemDistance++}
            if(this.golem2.golemName){this.golem2.golemDistance++}
          } else if (this.attack.attackEffect=="Purify"){
            if(this.golem1.golemName){
              this.golem1.golemStatus = [{}, {}, {}, {}, {}, {}, {}]
              this.golem1.golemStatus[2] = {status, duration}
              }
            if(this.golem2.golemName){
              this.golem2.golemStatus = [{}, {}, {}, {}, {}, {}, {}]
              this.golem2.golemStatus[2] = {status, duration}}
          }
          if(this.attack.isDashAttack && this.mechanics.distance > 1){this.mechanics.distance = 1}
          if(this.attack.attackStatus=="Stunned"){
          this.enemies[this.$route.params.enemyID].enemyStatus[0] = {status, duration}
          } else if(this.attack.attackStatus=="Bleeding"){
          this.enemies[this.$route.params.enemyID].enemyStatus[1] = {status, duration}
          } else if(this.attack.attackStatus=="Cripple"){
          this.enemies[this.$route.params.enemyID].enemyStatus[4] = {status, duration}
          } else if(this.attack.attackStatus=="Burning"){
          this.enemies[this.$route.params.enemyID].enemyStatus[5] = {status, duration}
          } else if(this.attack.attackStatus=="Poison"){
          this.enemies[this.$route.params.enemyID].enemyStatus[6] = {status, duration}
          } else if(this.attack.attackStatus=="Mirror"){
          this.enemies[this.$route.params.enemyID].enemyStatus[7] = {status, duration}
          } else if(this.attack.attackStatus=="Immortal"){
          if(this.golem1.golemName && this.golem1.golemStatus[2].status != "Immune"){
          this.golem1.golemCurrentHealth -= this.attack.attackEffectDamage
          this.golem1.golemStatus[4] = {status, duration}}
          if(this.golem2.golemName && this.golem2.golemStatus[2].status != "Immune"){
          this.golem2.golemCurrentHealth -= this.attack.attackEffectDamage
          this.golem2.golemStatus[4] = {status, duration}}
          } else if(this.attack.attackStatus=="Hidden"){
          this.classes[this.$route.params.classID].classStatus[4] = {status, duration}
          } else if(this.attack.attackStatus=="Damage Buff"){
          if(this.golem1.golemName && this.golem1.golemStatus[2].status != "Immune"){this.golem1.golemStatus[3] = {status, duration}}
          if(this.golem2.golemName && this.golem2.golemStatus[2].status != "Immune"){this.golem2.golemStatus[3] = {status, duration}}
          } else if(this.attack.attackStatus=="Freeze"){
          this.enemies[this.$route.params.enemyID].enemyStatus[2] = {status, duration}
          }
          this.attack.onCooldown = true
          this.processCooldown()
          if(shouldAttack) {
            if(this.itemEffectType=="Random Spell"){
              this.useEnemyAttack("Item")
            } else {this.useEnemyAttack("Attack")}}
          else{
            if(this.itemEffectType=="Random Spell"){
              this.changeCurrentAction("Action Made", "Item")
            } else {this.changeCurrentAction("Action Made", "Attack")}}
          this.attackOptionsShown = false
          this.tomeHealing++}
        },
       useDefense(){
          let shouldAttack = true
          if(this.enemies[this.$route.params.enemyID].enemyStatus[0].status == "Stunned" || this.enemies[this.$route.params.enemyID].enemyStatus[3].status == "Sleep"){
            shouldAttack = false
          }
          this.processStatus()
          this.processCooldown()
          this.isDefending = true
          if(shouldAttack) {this.useEnemyAttack("Defend")}
          else{this.changeCurrentAction("Action Made", "Defend")}
        },
       useItem(){
          this.item = this.chosenAction
          let shouldAttack = true
          if(this.enemies[this.$route.params.enemyID].enemyStatus[0].status == "Stunned" || this.enemies[this.$route.params.enemyID].enemyStatus[3].status == "Sleep"){
            shouldAttack = false
          }
          this.processStatus()
          this.processCooldown()
          let status = this.item.itemStatus
          let duration = this.item.itemStatusDuration
          if(this.item.itemEffectType=="Health"){
            this.classes[this.$route.params.classID].classCurrentHealth += this.item.itemEffect
            this.classes[this.$route.params.classID].classStatus[2] = {status, duration}
          } else if(this.item.itemEffectType=="Berserk"){
            this.classes[this.$route.params.classID].classStatus[3] = {status, duration}
          } else if(this.item.itemEffectType=="Immune"){
            this.classes[this.$route.params.classID].classStatus = [{}, {}, {}, {}, {}, {}, {}, {}]
            this.classes[this.$route.params.classID].classStatus[5] = {status, duration}
          } else if (this.item.itemEffectType=="Magic Buff"){
            this.classes[this.$route.params.classID].classStatus[3] = {status, duration}
          } else if (this.item.itemEffectType=="Cooldown Reset") {
            this.classes[this.$route.params.classID].classAttacks[0].onCooldown = false
            this.classes[this.$route.params.classID].classAttacks[1].onCooldown = false
            this.classes[this.$route.params.classID].classAttacks[2].onCooldown = false
            this.classes[this.$route.params.classID].classAttacks[3].onCooldown = false
            this.classes[this.$route.params.classID].classAttacks[0].attackCooldown = this.classes[this.$route.params.classID].classAttacks[0].initialAttackCooldown
            this.classes[this.$route.params.classID].classAttacks[1].attackCooldown = this.classes[this.$route.params.classID].classAttacks[1].initialAttackCooldown
            this.classes[this.$route.params.classID].classAttacks[2].attackCooldown = this.classes[this.$route.params.classID].classAttacks[2].initialAttackCooldown
            this.classes[this.$route.params.classID].classAttacks[3].attackCooldown = this.classes[this.$route.params.classID].classAttacks[3].initialAttackCooldown
          } else if (this.item.itemEffectType=="Sleep"){
            this.enemies[this.$route.params.enemyID].enemyStatus[3] = {status, duration}
          } else if (this.item.itemEffectType=="Defended"){
            this.classes[this.$route.params.classID].classStatus[7] = {status, duration}
          } else if (this.item.itemEffectType=="Hidden"){
            this.classes[this.$route.params.classID].classStatus[4] = {status, duration}
          } else if (this.item.itemEffectType=="Sharpened"){
            this.classes[this.$route.params.classID].classStatus[4] = {status, duration}
          } else if (this.item.itemEffectType=="Random Golem"){
            let golemOptions = [items[3][0], items[3][1], items[3][3]]
            let golemRNG = Math.floor(Math.random() * golemOptions.length)
            this.summonedGolem = golemOptions[golemRNG].golemProperties
             if(!this.golem1.golemName){
                this.golem1 = golemOptions[golemRNG].golemProperties
                this.golem1.golemDistance = this.mechanics.distance
              } else {
                this.golem2 = golemOptions[golemRNG].golemProperties2
                this.golem2.golemDistance = this.mechanics.distance
              }
          } else if (this.item.itemEffectType=="Healing Tome"){
            this.healing = this.tomeHealing * 10 + this.item.itemHealing
            this.classes[this.$route.params.classID].classCurrentHealth += this.healing
            this.tomeHealing = 0
          } else if (this.item.itemEffectType=="Random Spell"){
            let spellRNG = Math.floor(Math.random() * attacks[1].length)
            this.chosenAction = attacks[1][spellRNG]
            this.useAttack()
          } else if (this.item.itemStatus=="Poison Coating"){
            this.classes[this.$route.params.classID].classStatus[6] = {status, duration}
          } else if (this.item.itemEffectType=="Decoy"){
            this.decoy = this.item.decoyProperties
            this.decoy.decoyDistance = this.mechanics.distance
          } else if (this.item.itemEffectType=="Trap"){
            if(!this.trap.itemName){this.trap = this.item
            this.trapTimer = this.item.trapTriggerTime
            } else {this.trap2 = this.item
            this.trap2Timer = this.item.trapTriggerTime
            }
          } else if (this.item.itemEffectType=="Golem"){
              if(!this.golem1.golemAttacks){
                this.golem1 = this.item.golemProperties
                this.golem1.golemDistance = this.mechanics.distance
              } else if (!this.golem2.golemName) {
                this.golem2 = this.item.golemProperties2
                this.golem2.golemDistance = this.mechanics.distance
              }
          } else if (this.item.itemEffectType=="Golem Revive"){
                if(!this.golem1.golemName){
                  this.golem1 = this.golemGrave
                  this.golem1.golemCurrentHealth = this.golem1.golemMaxHealth
                } else if (!this.golem2.golemName) {
                  this.golem2 = this.golemGrave
                  this.golem2.golemCurrentHealth = this.golem2.golemMaxHealth
                }
             }
          this.item.itemCount--
          this.itemOptionsShown = false
          if(shouldAttack) {this.useEnemyAttack("Item")}
          this.changeCurrentAction("Action Made", "Item")
        },
       useGolem1Attack() {
        if(this.golem1.golemStatus[0].status!="Stunned"){
        this.golem1AvailableAttacks = []
          for(let i = 0; i < this.golem1.golemAttacks.length; i++){
          if(this.golem1.golemAttacks[i].attackRange >= this.golem1.golemDistance){
              if(this.golem1.golemAttacks[i].onCooldown==false){
              let theAttack = this.golem1.golemAttacks[i]
              this.golem1AvailableAttacks.push(theAttack)}
            }}
         if(this.golem1AvailableAttacks[0]){
         const rng = Math.floor(Math.random() * this.golem1AvailableAttacks.length);
         this.golem1DealtDamage = this.golem1AvailableAttacks[rng].attackDamage;
             if(this.golem1.golemStatus[3].status=="Damage Buff"){this.golem1DealtDamage += this.mechanics.golemDamageBuff}
             this.enemies[this.$route.params.enemyID].enemyCurrentHealth -= this.golem1DealtDamage
             let status = this.golem1AvailableAttacks[rng].attackStatus
             let duration = this.golem1AvailableAttacks[rng].attackStatusDuration
         if(this.golem1AvailableAttacks[rng].attackStatus=="Bleeding"){this.enemies[this.$route.params.enemyID].enemyStatus[1] = {status, duration}}
         if(this.golem1AvailableAttacks[rng].attackStatus=="Stunned"){this.enemies[this.$route.params.enemyID].enemyStatus[0] = {status, duration}}
         if(this.golem1AvailableAttacks[rng].attackStatus=="Burning"){this.enemies[this.$route.params.enemyID].enemyStatus[5] = {status, duration}}
         if(this.golem1AvailableAttacks[rng].isDashAttack && this.mechanics.distance > 1){this.mechanics.distance--}
            this.golem1AvailableAttacks[rng].onCooldown=true
            this.changeCurrentMiscAction("Golem1", this.golem1AvailableAttacks[rng])
         } else {
           if(this.golem1.golemDistance!=1){this.golem1.golemDistance--}
           this.golem1Moved = true
           }
          }this.processGolem1Cooldown()
        },
        useGolem2Attack() {
        if(this.golem2.golemStatus[0].status!="Stunned"){
        this.golem2AvailableAttacks = []
          for(let i = 0; i < this.golem2.golemAttacks.length; i++){
          if(this.golem2.golemAttacks[i].attackRange >= this.golem2.golemDistance){
              if(this.golem2.golemAttacks[i].onCooldown==false){
              let theAttack = this.golem2.golemAttacks[i]
              this.golem2AvailableAttacks.push(theAttack)}
            }}
         if(this.golem2AvailableAttacks[0]){
         const rng = Math.floor(Math.random() * this.golem2AvailableAttacks.length);
         this.golem2DealtDamage = this.golem2AvailableAttacks[rng].attackDamage;
             if(this.golem2.golemStatus[3].status=="Damage Buff"){this.golem2DealtDamage += this.mechanics.golemDamageBuff}
             this.enemies[this.$route.params.enemyID].enemyCurrentHealth -= this.golem2DealtDamage
             let status = this.golem2AvailableAttacks[rng].attackStatus
             let duration = this.golem2AvailableAttacks[rng].attackStatusDuration
         if(this.golem2AvailableAttacks[rng].attackStatus=="Bleeding"){this.enemies[this.$route.params.enemyID].enemyStatus[1] = {status, duration}}
         if(this.golem2AvailableAttacks[rng].attackStatus=="Stunned"){this.enemies[this.$route.params.enemyID].enemyStatus[0] = {status, duration}}
         if(this.golem2AvailableAttacks[rng].attackStatus=="Burning"){this.enemies[this.$route.params.enemyID].enemyStatus[5] = {status, duration}}
         if(this.golem2AvailableAttacks[rng].isDashAttack && this.mechanics.distance > 1){this.mechanics.distance--}
            this.golem2AvailableAttacks[rng].onCooldown=true
            this.changeCurrentMiscAction2("Golem2", this.golem2AvailableAttacks[rng])
         } else {
           if(this.golem2.golemDistance!=1){this.golem2.golemDistance--}
           this.golem2Moved = true
           }
          }this.processGolem2Cooldown()
        },
        useEnemyAttack(action) {
          if(this.classes[this.$route.params.classID].classStatus[7].status=="Defended"){this.isDefending=true}
          this.availableAttacks = [];
            if(this.enemies[this.$route.params.enemyID].enemyStatus[7].status=="Mirror"){
               for(let i = 0; i < this.enemies[this.$route.params.enemyID].enemyAttacks.length; i++) {
                if(this.enemies[this.$route.params.enemyID].enemyAttacks[i].attackRange >= this.mechanics.distance){
                  if(this.enemies[this.$route.params.enemyID].enemyAttacks[i].onCooldown==false){
                    let theAttack = this.enemies[this.$route.params.enemyID].enemyAttacks[i]
                    this.availableAttacks.push(theAttack)}}}
              let rng = Math.floor(Math.random() * this.availableAttacks.length)
              if(this.availableAttacks[0]){
                this.enemyDealtDamage = this.availableAttacks[rng].attackDamage;
                if(this.enemies[this.$route.params.enemyID].enemyStatus[4].status=="Cripple"){this.enemyDealtDamage -= 5}
                this.enemies[this.$route.params.enemyID].enemyCurrentHealth -= this.enemyDealtDamage
                let status = this.availableAttacks[rng].attackStatus
                let duration = this.availableAttacks[rng].attackStatusDuration
                if(this.availableAttacks[rng].attackStatus=="Bleeding" && this.classes[this.$route.params.classID].classStatus[5].status != "Immune"){
                  this.enemies[this.$route.params.enemyID].enemyStatus[1] = {status, duration}
              } else if(this.availableAttacks[rng].attackStatus=="Stunned" && this.classes[this.$route.params.classID].classStatus[5].status != "Immune"){
                  this.enemies[this.$route.params.enemyID].enemyStatus[0] = {status, duration}
              } else if(this.availableAttacks[rng].attackStatus=="Burning" && this.classes[this.$route.params.classID].classStatus[5].status != "Immune"){
                  this.enemies[this.$route.params.enemyID].enemyStatus[5]  = {status, duration}
              } if(this.availableAttacks[rng].attackEffect=="Health Absorb"){this.enemies[this.$route.params.enemyID].enemyCurrentHealth += this.enemyDealtDamage}
              this.changeCurrentEnemyAction("Damage to Self", this.availableAttacks[rng]);
            }
          } else if(this.golem1.golemName && this.golem2.golemName){
              let attackRNG = Math.floor(Math.random() * 2)
            if(attackRNG==0){
              for(let i = 0; i < this.enemies[this.$route.params.enemyID].enemyAttacks.length; i++) {
                if(this.enemies[this.$route.params.enemyID].enemyAttacks[i].attackRange >= this.golem1.golemDistance){
                  if(this.enemies[this.$route.params.enemyID].enemyAttacks[i].onCooldown==false){
                    let theAttack = this.enemies[this.$route.params.enemyID].enemyAttacks[i]
                    this.availableAttacks.push(theAttack)}}}
              if(this.availableAttacks[0]){
                let rng = Math.floor(Math.random() * this.availableAttacks.length)
                this.enemyDealtDamage = this.availableAttacks[rng].attackDamage;
                if(this.enemies[this.$route.params.enemyID].enemyStatus[4].status=="Cripple"){this.enemyDealtDamage -= this.mechanics.crippleDamageDrop}
                this.golem1.golemCurrentHealth -= this.enemyDealtDamage
                let status = this.availableAttacks[rng].attackStatus
                let duration = this.availableAttacks[rng].attackStatusDuration
                if(this.availableAttacks[rng].attackStatus=="Bleeding" && this.golem1.golemStatus[2].status != "Immune"){
                  this.golem1.golemStatus[1] = {status, duration}
              } else if(this.availableAttacks[rng].attackStatus=="Stunned" && this.golem1.golemStatus[2].status != "Immune"){
                  this.golem1.golemStatus[0] = {status, duration}
              } else if(this.availableAttacks[rng].attackStatus=="Burning" && this.golem1.golemStatus[2].status != "Immune"){
                  this.golem1.golemStatus[5] = {status, duration}
              }
                this.changeCurrentEnemyAction("Damage to Golem1", this.availableAttacks[rng])
                if(this.availableAttacks[rng].isDashAttack && this.golem1.golem1Distance > 1 && this.enemies[this.$route.params.enemyID].enemyStatus[2].status!="Freeze"){this.golem1.golemDistance=1}
                this.availableAttacks[rng].onCooldown=true}
                if(!this.availableAttacks[0] && this.enemies[this.$route.params.enemyID].enemyStatus[2].status!="Freeze" && this.decoy.decoyDistance != 1) {
            this.golem1.golemDistance--
            this.enemyMoved=[true, this.golem1.golemName]}
          } else if (attackRNG==1){
              for(let i = 0; i < this.enemies[this.$route.params.enemyID].enemyAttacks.length; i++) {
                if(this.enemies[this.$route.params.enemyID].enemyAttacks[i].attackRange >= this.golem2.golemDistance){
                  if(this.enemies[this.$route.params.enemyID].enemyAttacks[i].onCooldown==false){
                    let theAttack = this.enemies[this.$route.params.enemyID].enemyAttacks[i]
                    this.availableAttacks.push(theAttack)}}}
              if(this.availableAttacks[0]){
                let rng = Math.floor(Math.random() * this.availableAttacks.length)
                this.enemyDealtDamage = this.availableAttacks[rng].attackDamage;
                if(this.enemies[this.$route.params.enemyID].enemyStatus[4].status=="Cripple"){this.enemyDealtDamage -= this.mechanics.crippleDamageDrop}
                this.golem2.golemCurrentHealth -= this.enemyDealtDamage
                let status = this.availableAttacks[rng].attackStatus
                let duration = this.availableAttacks[rng].attackStatusDuration
                if(this.availableAttacks[rng].attackStatus=="Bleeding" && this.golem2.golemStatus[2].status != "Immune"){
                  this.golem2.golemStatus[1] = {status, duration}
              } else if(this.availableAttacks[rng].attackStatus=="Stunned" && this.golem2.golemStatus[2].status != "Immune"){
                  this.golem2.golemStatus[0] = {status, duration}
              } else if(this.availableAttacks[rng].attackStatus=="Burning" && this.golem2.golemStatus[2].status != "Immune"){
                  this.golem2.golemStatus[5] = {status, duration}
              }
                this.changeCurrentEnemyAction("Damage to Golem2", this.availableAttacks[rng])
                if(this.availableAttacks[rng].isDashAttack && this.golem2.golemDistance > 1 && this.enemies[this.$route.params.enemyID].enemyStatus[2].status!="Freeze"){this.golem2.golemDistance=1}
                this.availableAttacks[rng].onCooldown=true}
                if(!this.availableAttacks[0] && this.enemies[this.$route.params.enemyID].enemyStatus[2].status!="Freeze" && this.decoy.decoyDistance != 1) {
            this.golem2.golemDistance--
            this.enemyMoved=[true, this.golem2.golemName]}
         }} else if (this.golem1.golemName && !this.golem2.golemName){
              for(let i = 0; i < this.enemies[this.$route.params.enemyID].enemyAttacks.length; i++) {
                if(this.enemies[this.$route.params.enemyID].enemyAttacks[i].attackRange >= this.golem1.golemDistance){
                  if(this.enemies[this.$route.params.enemyID].enemyAttacks[i].onCooldown==false){
                    let theAttack = this.enemies[this.$route.params.enemyID].enemyAttacks[i]
                    this.availableAttacks.push(theAttack)}}}
              if(this.availableAttacks[0]){
                let rng = Math.floor(Math.random() * this.availableAttacks.length)
                this.enemyDealtDamage = this.availableAttacks[rng].attackDamage;
                if(this.enemies[this.$route.params.enemyID].enemyStatus[4].status=="Cripple"){this.enemyDealtDamage -= 5}
                this.golem1.golemCurrentHealth -= this.enemyDealtDamage
                let status = this.availableAttacks[rng].attackStatus
                let duration = this.availableAttacks[rng].attackStatusDuration
                if(this.availableAttacks[rng].attackStatus=="Bleeding" && this.golem1.golemStatus[2].status != "Immune"){
                  this.golem1.golemStatus[1] = {status, duration}
              } else if(this.availableAttacks[rng].attackStatus=="Stunned" && this.golem1.golemStatus[2].status != "Immune"){
                  this.golem1.golemStatus[0] = {status, duration}
              } else if(this.availableAttacks[rng].attackStatus=="Burning" && this.golem1.golemStatus[2].status != "Immune"){
                  this.golem1.golemStatus[5] = {status, duration}
              }
                this.changeCurrentEnemyAction("Damage to Golem1", this.availableAttacks[rng])
                if(this.availableAttacks[rng].isDashAttack && this.golem1.golem1Distance > 1 && this.enemies[this.$route.params.enemyID].enemyStatus[2].status!="Freeze"){this.golem1.golemDistance=1}
                this.availableAttacks[rng].onCooldown=true}
                if(!this.availableAttacks[0] && this.enemies[this.$route.params.enemyID].enemyStatus[2].status!="Freeze" && this.decoy.decoyDistance != 1) {
            this.golem1.golemDistance--
            this.enemyMoved=[true, this.golem1.golemName]}
          } else if (!this.golem1.golemName && this.golem2.golemName){
              for(let i = 0; i < this.enemies[this.$route.params.enemyID].enemyAttacks.length; i++) {
                if(this.enemies[this.$route.params.enemyID].enemyAttacks[i].attackRange >= this.golem2.golemDistance){
                  if(this.enemies[this.$route.params.enemyID].enemyAttacks[i].onCooldown==false){
                    let theAttack = this.enemies[this.$route.params.enemyID].enemyAttacks[i]
                    this.availableAttacks.push(theAttack)}}}
              if(this.availableAttacks[0]){
                let rng = Math.floor(Math.random() * this.availableAttacks.length)
                this.enemyDealtDamage = this.availableAttacks[rng].attackDamage;
                if(this.enemies[this.$route.params.enemyID].enemyStatus[4].status=="Cripple"){this.enemyDealtDamage -= 5}
                this.golem2.golemCurrentHealth -= this.enemyDealtDamage
                let status = this.availableAttacks[rng].attackStatus
                let duration = this.availableAttacks[rng].attackStatusDuration
                if(this.availableAttacks[rng].attackStatus=="Bleeding" && this.golem2.golemStatus[2].status != "Immune"){
                  this.golem2.golemStatus[1] = {status, duration}
                } else if(this.availableAttacks[rng].attackStatus=="Stunned" && this.golem2.golemStatus[2].status != "Immune"){
                  this.golem2.golemStatus[0] = {status, duration}
                } else if(this.availableAttacks[rng].attackStatus=="Burning" && this.golem2.golemStatus[2].status != "Immune"){
                  this.golem2.golemStatus[5] = {status, duration}
              }
                this.changeCurrentEnemyAction("Damage to Golem2", this.availableAttacks[rng])
                if(this.availableAttacks[rng].isDashAttack && this.golem2.golemDistance > 1 && this.enemies[this.$route.params.enemyID].enemyStatus[2].status!="Freeze"){this.golem2.golemDistance=1}
                this.availableAttacks[rng].onCooldown=true}
                if(!this.availableAttacks[0] && this.enemies[this.$route.params.enemyID].enemyStatus[2].status!="Freeze" && this.decoy.decoyDistance != 1) {
            this.golem2.golemDistance--
            this.enemyMoved=[true, this.golem2.golemName]}
          } else if(this.decoy.decoyName){
            for(let i = 0; i < this.enemies[this.$route.params.enemyID].enemyAttacks.length; i++) {
                if(this.enemies[this.$route.params.enemyID].enemyAttacks[i].attackRange >= this.decoy.decoyDistance){
                  if(this.enemies[this.$route.params.enemyID].enemyAttacks[i].onCooldown==false){
                    let theAttack = this.enemies[this.$route.params.enemyID].enemyAttacks[i]
                    this.availableAttacks.push(theAttack)}}}
              if(this.availableAttacks[0]){
                let rng = Math.floor(Math.random() * this.availableAttacks.length)
                this.enemyDealtDamage = this.availableAttacks[rng].attackDamage;
                if(this.enemies[this.$route.params.enemyID].enemyStatus[4].status=="Cripple"){this.enemyDealtDamage -= 5}
                this.decoy.decoyCurrentHealth -= this.enemyDealtDamage
                let status = this.availableAttacks[rng].attackStatus
                let duration = this.availableAttacks[rng].attackStatusDuration
                if(this.availableAttacks[rng].attackStatus=="Bleeding" && this.decoy.decoyStatus[2].status != "Immune"){
                  this.decoy.decoyStatus[1] = {status, duration}
              } else if(this.availableAttacks[rng].attackStatus=="Stunned" && this.decoy.decoyStatus[2].status != "Immune"){
                  this.decoy.decoyStatus[0] = {status, duration}
              } else if(this.availableAttacks[rng].attackStatus=="Burning" && this.decoy.decoyStatus[2].status != "Immune"){
                  this.decoy.decoyStatus[5] = {status, duration}
              }
                this.changeCurrentEnemyAction("Damage to Decoy", this.availableAttacks[rng])
                if(this.availableAttacks[rng].isDashAttack && this.decoy.decoyDistance > 1 && this.enemies[this.$route.params.enemyID].enemyStatus[2].status!="Freeze"){this.decoy.decoyDistance=1}
                this.availableAttacks[rng].onCooldown=true}
                if(!this.availableAttacks[0] && this.enemies[this.$route.params.enemyID].enemyStatus[2].status!="Freeze" && this.decoy.decoyDistance != 1) {
            this.decoy.decoyDistance--
            this.enemyMoved=[true, this.decoy.decoyName]}
          } else if (this.classes[this.$route.params.classID].classStatus[4].status!="Hidden"){
              for(let i = 0; i < this.enemies[this.$route.params.enemyID].enemyAttacks.length; i++) {
                if(this.enemies[this.$route.params.enemyID].enemyAttacks[i].attackRange >= this.mechanics.distance){
                  if(this.enemies[this.$route.params.enemyID].enemyAttacks[i].onCooldown==false){
                    let theAttack = this.enemies[this.$route.params.enemyID].enemyAttacks[i]
                    this.availableAttacks.push(theAttack)}}}
              let rng = Math.floor(Math.random() * this.availableAttacks.length)
              if(this.availableAttacks[0]){
                if(this.isDefending) {
                  this.enemyDealtDamage = this.availableAttacks[rng].attackDamage / 2;
                  this.classes[this.$route.params.classID].classCurrentHealth -= this.enemyDealtDamage
                  if(this.enemies[this.$route.params.enemyID].enemyStatus[3].status=="Cripple"){this.enemyDealtDamage -= 5}
                  this.isDefending = false;
                  this.changeCurrentEnemyAction("Damage Blocked", this.availableAttacks[rng])
              } else {
                this.enemyDealtDamage = this.availableAttacks[rng].attackDamage;
                if(this.enemies[this.$route.params.enemyID].enemyStatus[4].status=="Cripple"){this.enemyDealtDamage -= 5}
                this.classes[this.$route.params.classID].classCurrentHealth -= this.enemyDealtDamage
                let status = this.availableAttacks[rng].attackStatus
                let duration = this.availableAttacks[rng].attackStatusDuration
                if(this.availableAttacks[rng].attackStatus=="Bleeding" && this.classes[this.$route.params.classID].classStatus[5].status != "Immune"){
                  this.classes[this.$route.params.classID].classStatus[1] = {status, duration}
              } else if(this.availableAttacks[rng].attackStatus=="Stunned" && this.classes[this.$route.params.classID].classStatus[5].status != "Immune"){
                  this.classes[this.$route.params.classID].classStatus[0] = {status, duration}
              } else if(this.availableAttacks[rng].attackStatus=="Burning" && this.classes[this.$route.params.classID].classStatus[5].status != "Immune"){
                  this.classes[this.$route.params.classID].classStatus[5]  = {status, duration}
              } if(this.availableAttacks[rng].attackEffect=="Health Absorb"){this.enemies[this.$route.params.enemyID].enemyCurrentHealth += this.enemyDealtDamage}
              this.changeCurrentEnemyAction("Damage Dealt", this.availableAttacks[rng]);
            }
            if(this.availableAttacks[rng].isDashAttack && this.mechanics.distance > 1 && this.enemies[this.$route.params.enemyID].enemyStatus[2].status!="Freeze"){this.mechanics.distance=1}
            this.availableAttacks[rng].onCooldown=true}
            }
            if(!this.availableAttacks[0] && this.enemies[this.$route.params.enemyID].enemyStatus[2].status!="Freeze" && this.mechanics.distance != 1) {
            this.mechanics.distance--
            this.enemyMoved=[true, "you"]
            }
           this.changeCurrentAction("Action Made", action)
           this.processEnemyCooldown()
           this.checkInRange()
         },
         triggerTrap(){
           if(this.trap.itemName=="Stun Trap"){
             this.enemies[this.$route.params.enemyID].enemyCurrentHealth -= items[2][2].itemStatusEffect
             let status = items[2][2].itemStatus
             let duration = items[2][2].itemStatusDuration
             this.enemies[this.$route.params.enemyID].enemyStatus[0] = {status, duration}
             this.changeCurrentMiscAction("Trap", this.trap)
             this.trap = ""
           } else if (this.trap.itemName=="Fire Trap"){
             this.enemies[this.$route.params.enemyID].enemyCurrentHealth -= items[2][3].itemStatusEffect
             let status = items[2][3].itemStatus
             let duration = items[2][3].itemStatusDuration
             this.enemies[this.$route.params.enemyID].enemyStatus[5] = {status, duration}
             this.changeCurrentMiscAction("Trap", this.trap)
             this.trap = ""
           }
         },
         triggerTrap2(){
           if(this.trap2.itemName=="Stun Trap"){
             this.enemies[this.$route.params.enemyID].enemyCurrentHealth -= items[2][2].itemStatusEffect
             let status = items[2][2].itemStatus
             let duration = items[2][2].itemStatusDuration
             this.enemies[this.$route.params.enemyID].enemyStatus[0] = {status, duration}
             this.changeCurrentMiscAction2("Trap", this.trap2)
             this.trap2 = ""
           } else if (this.trap2.itemName=="Fire Trap"){
             this.enemies[this.$route.params.enemyID].enemyCurrentHealth -= items[2][3].itemStatusEffect
             let status = items[2][3].itemStatus
             let duration = items[2][3].itemStatusDuration
             this.enemies[this.$route.params.enemyID].enemyStatus[5] = {status, duration}
             this.changeCurrentMiscAction2("Trap", this.trap2)
             this.trap2 = ""
           }
         },
         processStatus(){
         if(this.classes[this.$route.params.classID].classStatus[0].status=="Stunned"){this.useEnemyAttack()}
         if(this.classes[this.$route.params.classID].classStatus[1].status=="Bleeding"){this.classes[this.$route.params.classID].classCurrentHealth -= this.mechanics.bleedingDamage}
         if(this.enemies[this.$route.params.enemyID].enemyStatus[1].status=="Bleeding"){this.enemies[this.$route.params.enemyID].enemyCurrentHealth -= this.mechanics.bleedingDamage}
         if(this.golem1.golemName){if(this.golem1.golemStatus[1].status=="Bleeding"){this.golem1.golemCurrentHealth -= this.mechanics.bleedingDamage}}
         if(this.golem2.golemName){if(this.golem2.golemStatus[1].status=="Bleeding"){this.golem2.golemCurrentHealth -= this.mechanics.bleedingDamage}}
         if(this.decoy.decoyName){if(this.decoy.decoyStatus[1]=="Bleeding"){this.decoy.decoyCurrentHealth -= this.mechanics.bleedingDamage}}
         if(this.enemies[this.$route.params.enemyID].enemyStatus[6].status=="Poison"){this.enemies[this.$route.params.enemyID].enemyCurrentHealth -= this.mechanics.poisonDamage}
         if(this.enemies[this.$route.params.enemyID].enemyStatus[5].status=="Burning"){this.enemies[this.$route.params.enemyID].enemyCurrentHealth -= this.mechanics.burningDamage}
         if(this.golem1.golemName){if(this.golem1.golemStatus[5].status=="Burning"){this.golem1.golemCurrentHealth -= this.mechanics.burningDamage}}
         if(this.golem2.golemName){if(this.golem2.golemStatus[5].status=="Burning"){this.golem2.golemCurrentHealth -= this.mechanics.burningDamage}}
         if(this.decoy.decoyName){if(this.decoy.decoyStatus[5]=="Burning"){this.decoy.decoyCurrentHealth -= this.mechanics.burningDamage}}
         if(this.classes[this.$route.params.classID].classStatus[2].status=="Health Regeneration"){this.classes[this.$route.params.classID].classCurrentHealth += this.mechanics.healthRegen}
         if(this.trap.itemName){this.trapTimer--}
         if(this.trapTimer==0){this.triggerTrap()}
         if(this.trap2.itemName){this.trap2Timer--}
         if(this.trap2Timer==0){this.triggerTrap2()}

         this.classes[this.$route.params.classID].classStatus[0].duration-- //stunned
         this.classes[this.$route.params.classID].classStatus[1].duration-- //bleeding
         this.classes[this.$route.params.classID].classStatus[2].duration-- //health regen
         this.classes[this.$route.params.classID].classStatus[3].duration-- //berserk / magic buff
         this.classes[this.$route.params.classID].classStatus[4].duration-- //hidden / sharpened
         this.classes[this.$route.params.classID].classStatus[5].duration-- //immune
         this.classes[this.$route.params.classID].classStatus[6].duration-- //poison coating
         this.classes[this.$route.params.classID].classStatus[7].duration-- //defended

         this.enemies[this.$route.params.enemyID].enemyStatus[0].duration-- //stunned
         this.enemies[this.$route.params.enemyID].enemyStatus[1].duration-- //bleeding
         this.enemies[this.$route.params.enemyID].enemyStatus[2].duration-- //freeze
         this.enemies[this.$route.params.enemyID].enemyStatus[3].duration-- //sleep
         this.enemies[this.$route.params.enemyID].enemyStatus[4].duration-- //cripple
         this.enemies[this.$route.params.enemyID].enemyStatus[5].duration-- //burning
         this.enemies[this.$route.params.enemyID].enemyStatus[6].duration-- //poison
         this.enemies[this.$route.params.enemyID].enemyStatus[7].duration-- //mirror

         if(this.golem1.golemName){
         this.golem1.golemStatus[0].duration-- //stunned
         this.golem1.golemStatus[1].duration-- //bleeding
         this.golem1.golemStatus[2].duration-- //immune
         this.golem1.golemStatus[3].duration-- //damage buff
         this.golem1.golemStatus[4].duration-- //immortal
         this.golem1.golemStatus[5].duration-- //burning
         this.golem1.golemStatus[6].duration--
         }
         if(this.golem2.golemName){
         this.golem2.golemStatus[0].duration--
         this.golem2.golemStatus[1].duration--
         this.golem2.golemStatus[2].duration--
         this.golem2.golemStatus[3].duration--
         this.golem2.golemStatus[4].duration--
         this.golem2.golemStatus[5].duration--
         this.golem2.golemStatus[6].duration--
         }
         if(this.decoy.decoyName){
           this.decoy.decoyStatus[0].duration--
           this.decoy.decoyStatus[1].duration--
           this.decoy.decoyStatus[5].duration--
         }

         if(this.classes[this.$route.params.classID].classStatus[0].duration<=0){this.classes[this.$route.params.classID].classStatus[0].status=""}
         if(this.classes[this.$route.params.classID].classStatus[1].duration<=0){this.classes[this.$route.params.classID].classStatus[1].status=""}
         if(this.classes[this.$route.params.classID].classStatus[2].duration<=0){this.classes[this.$route.params.classID].classStatus[2].status=""}
         if(this.classes[this.$route.params.classID].classStatus[3].duration<=0){this.classes[this.$route.params.classID].classStatus[3].status=""}
         if(this.classes[this.$route.params.classID].classStatus[4].duration<=0){this.classes[this.$route.params.classID].classStatus[4].status=""}
         if(this.classes[this.$route.params.classID].classStatus[5].duration<=0){this.classes[this.$route.params.classID].classStatus[5].status=""}
         if(this.classes[this.$route.params.classID].classStatus[6].duration<=0){this.classes[this.$route.params.classID].classStatus[6].status=""}
         if(this.classes[this.$route.params.classID].classStatus[7].duration<=0){this.classes[this.$route.params.classID].classStatus[7].status=""}

         if(this.enemies[this.$route.params.enemyID].enemyStatus[0].duration<=0){this.enemies[this.$route.params.enemyID].enemyStatus[0].status=""}
         if(this.enemies[this.$route.params.enemyID].enemyStatus[1].duration<=0){this.enemies[this.$route.params.enemyID].enemyStatus[1].status=""}
         if(this.enemies[this.$route.params.enemyID].enemyStatus[2].duration<=0){this.enemies[this.$route.params.enemyID].enemyStatus[2].status=""}
         if(this.enemies[this.$route.params.enemyID].enemyStatus[3].duration<=0){this.enemies[this.$route.params.enemyID].enemyStatus[3].status=""}
         if(this.enemies[this.$route.params.enemyID].enemyStatus[4].duration<=0){this.enemies[this.$route.params.enemyID].enemyStatus[4].status=""}
         if(this.enemies[this.$route.params.enemyID].enemyStatus[5].duration<=0){this.enemies[this.$route.params.enemyID].enemyStatus[5].status=""}
         if(this.enemies[this.$route.params.enemyID].enemyStatus[6].duration<=0){this.enemies[this.$route.params.enemyID].enemyStatus[6].status=""}
         if(this.enemies[this.$route.params.enemyID].enemyStatus[7].duration<=0){this.enemies[this.$route.params.enemyID].enemyStatus[7].status=""}

         if(this.golem1.golemName){
         if(this.golem1.golemStatus[0].duration<=0){this.golem1.golemStatus[0].status=""}
         if(this.golem1.golemStatus[1].duration<=0){this.golem1.golemStatus[1].status=""}
         if(this.golem1.golemStatus[2].duration<=0){this.golem1.golemStatus[2].status=""}
         if(this.golem1.golemStatus[3].duration<=0){this.golem1.golemStatus[3].status=""}
         if(this.golem1.golemStatus[4].duration<=0){this.golem1.golemStatus[4].status=""}
         if(this.golem1.golemStatus[5].duration<=0){this.golem1.golemStatus[5].status=""}
         if(this.golem1.golemStatus[6].duration<=0){this.golem1.golemStatus[6].status=""}
         }
         if(this.golem2.golemName){
         if(this.golem2.golemStatus[0].duration<=0){this.golem2.golemStatus[0].status=""}
         if(this.golem2.golemStatus[1].duration<=0){this.golem2.golemStatus[1].status=""}
         if(this.golem2.golemStatus[2].duration<=0){this.golem2.golemStatus[2].status=""}
         if(this.golem2.golemStatus[3].duration<=0){this.golem2.golemStatus[3].status=""}
         if(this.golem2.golemStatus[4].duration<=0){this.golem2.golemStatus[4].status=""}
         if(this.golem2.golemStatus[5].duration<=0){this.golem2.golemStatus[5].status=""}
         if(this.golem2.golemStatus[6].duration<=0){this.golem2.golemStatus[6].status=""}
         }
         if(this.decoy.decoyName){
           if(this.decoy.decoyStatus[0].duration<=0){this.decoy.decoyStatus[0].status=""}
           if(this.decoy.decoyStatus[1].duration<=0){this.decoy.decoyStatus[1].status=""}
           if(this.decoy.decoyStatus[5].duration<=0){this.decoy.decoyStatus[5].status=""}
         }
         },
         processCooldown(){
          if(this.classes[this.$route.params.classID].classAttacks[0].onCooldown==true){this.classes[this.$route.params.classID].classAttacks[0].attackCooldown--}
          if(this.classes[this.$route.params.classID].classAttacks[1].onCooldown==true){this.classes[this.$route.params.classID].classAttacks[1].attackCooldown--}
          if(this.classes[this.$route.params.classID].classAttacks[2].onCooldown==true){this.classes[this.$route.params.classID].classAttacks[2].attackCooldown--}
          if(this.classes[this.$route.params.classID].classAttacks[3].onCooldown==true){this.classes[this.$route.params.classID].classAttacks[3].attackCooldown--}

          if(this.classes[this.$route.params.classID].classAttacks[0].attackCooldown<=0){this.classes[this.$route.params.classID].classAttacks[0].onCooldown=false; this.classes[this.$route.params.classID].classAttacks[0].attackCooldown = this.classes[this.$route.params.classID].classAttacks[0].initialAttackCooldown}
          if(this.classes[this.$route.params.classID].classAttacks[1].attackCooldown<=0){this.classes[this.$route.params.classID].classAttacks[1].onCooldown=false; this.classes[this.$route.params.classID].classAttacks[1].attackCooldown = this.classes[this.$route.params.classID].classAttacks[1].initialAttackCooldown}
          if(this.classes[this.$route.params.classID].classAttacks[2].attackCooldown<=0){this.classes[this.$route.params.classID].classAttacks[2].onCooldown=false; this.classes[this.$route.params.classID].classAttacks[2].attackCooldown = this.classes[this.$route.params.classID].classAttacks[2].initialAttackCooldown}
          if(this.classes[this.$route.params.classID].classAttacks[3].attackCooldown<=0){this.classes[this.$route.params.classID].classAttacks[3].onCooldown=false; this.classes[this.$route.params.classID].classAttacks[3].attackCooldown = this.classes[this.$route.params.classID].classAttacks[3].initialAttackCooldown}
         },
         processGolem1Cooldown(){
          if(this.golem1.golemAttacks[0].onCooldown==true){this.golem1.golemAttacks[0].attackCooldown--}
          if(this.golem1.golemAttacks[1].onCooldown==true){this.golem1.golemAttacks[1].attackCooldown--}
          if(this.golem1.golemAttacks[0].attackCooldown<=0){this.golem1.golemAttacks[0].onCooldown=false; this.golem1.golemAttacks[0].attackCooldown = this.golem1.golemAttacks[0].initialAttackCooldown}
          if(this.golem1.golemAttacks[1].attackCooldown<=0){this.golem1.golemAttacks[1].onCooldown=false; this.golem1.golemAttacks[1].attackCooldown = this.golem1.golemAttacks[1].initialAttackCooldown}
         },
         processGolem2Cooldown(){
          if(this.golem2.golemAttacks[0].onCooldown==true){this.golem2.golemAttacks[0].attackCooldown--}
          if(this.golem2.golemAttacks[1].onCooldown==true){this.golem2.golemAttacks[1].attackCooldown--}
          if(this.golem2.golemAttacks[0].attackCooldown<=0){this.golem2.golemAttacks[0].onCooldown=false; this.golem2.golemAttacks[0].attackCooldown = this.golem2.golemAttacks[0].initialAttackCooldown}
          if(this.golem2.golemAttacks[1].attackCooldown<=0){this.golem2.golemAttacks[1].onCooldown=false; this.golem2.golemAttacks[1].attackCooldown = this.golem2.golemAttacks[1].initialAttackCooldown}
         },
         processEnemyCooldown(){
          if(this.enemies[this.$route.params.enemyID].enemyAttacks[0].onCooldown==true){this.enemies[this.$route.params.enemyID].enemyAttacks[0].attackCooldown--}
          if(this.enemies[this.$route.params.enemyID].enemyAttacks[1].onCooldown==true){this.enemies[this.$route.params.enemyID].enemyAttacks[1].attackCooldown--}
          if(this.enemies[this.$route.params.enemyID].enemyAttacks[2].onCooldown==true){this.enemies[this.$route.params.enemyID].enemyAttacks[2].attackCooldown--}
          if(this.enemies[this.$route.params.enemyID].enemyAttacks[0].attackCooldown<=0){this.enemies[this.$route.params.enemyID].enemyAttacks[0].onCooldown=false; this.enemies[this.$route.params.enemyID].enemyAttacks[0].attackCooldown = this.enemies[this.$route.params.enemyID].enemyAttacks[0].initialAttackCooldown}
          if(this.enemies[this.$route.params.enemyID].enemyAttacks[1].attackCooldown<=0){this.enemies[this.$route.params.enemyID].enemyAttacks[1].onCooldown=false; this.enemies[this.$route.params.enemyID].enemyAttacks[1].attackCooldown = this.enemies[this.$route.params.enemyID].enemyAttacks[1].initialAttackCooldown}
          if(this.enemies[this.$route.params.enemyID].enemyAttacks[2].attackCooldown<=0){this.enemies[this.$route.params.enemyID].enemyAttacks[2].onCooldown=false; this.enemies[this.$route.params.enemyID].enemyAttacks[2].attackCooldown = this.enemies[this.$route.params.enemyID].enemyAttacks[2].initialAttackCooldown}
         },
         checkInRange(){
         if(this.classes[this.$route.params.classID].classStatus[3].status=="Magic Buff"){
           this.classes[this.$route.params.classID].classAttacks[0].inRange = true
           this.classes[this.$route.params.classID].classAttacks[1].inRange = true
           this.classes[this.$route.params.classID].classAttacks[2].inRange = true
           this.classes[this.$route.params.classID].classAttacks[3].inRange = true
         } else {
           if(this.classes[this.$route.params.classID].classAttacks[0].attackRange >= this.mechanics.distance){this.classes[this.$route.params.classID].classAttacks[0].inRange = true}
           if(this.classes[this.$route.params.classID].classAttacks[1].attackRange >= this.mechanics.distance){this.classes[this.$route.params.classID].classAttacks[1].inRange = true}
           if(this.classes[this.$route.params.classID].classAttacks[2].attackRange >= this.mechanics.distance){this.classes[this.$route.params.classID].classAttacks[2].inRange = true}
           if(this.classes[this.$route.params.classID].classAttacks[3].attackRange >= this.mechanics.distance){this.classes[this.$route.params.classID].classAttacks[3].inRange = true}
           if(this.classes[this.$route.params.classID].classAttacks[0].attackRange < this.mechanics.distance){this.classes[this.$route.params.classID].classAttacks[0].inRange = false}
           if(this.classes[this.$route.params.classID].classAttacks[1].attackRange < this.mechanics.distance){this.classes[this.$route.params.classID].classAttacks[1].inRange = false}
           if(this.classes[this.$route.params.classID].classAttacks[2].attackRange < this.mechanics.distance){this.classes[this.$route.params.classID].classAttacks[2].inRange = false}
           if(this.classes[this.$route.params.classID].classAttacks[3].attackRange < this.mechanics.distance){this.classes[this.$route.params.classID].classAttacks[3].inRange = false}
         }
         },
         checkHP(){
           if(this.classes[this.$route.params.classID].classCurrentHealth > this.classes[this.$route.params.classID].classMaxHealth) {this.classes[this.$route.params.classID].classCurrentHealth = this.classes[this.$route.params.classID].classMaxHealth}
           if(this.enemies[this.$route.params.enemyID].enemyCurrentHealth > this.enemies[this.$route.params.enemyID].enemyMaxHealth) {this.enemies[this.$route.params.enemyID].enemyCurrentHealth = this.enemies[this.$route.params.enemyID].enemyMaxHealth}
           if(this.classes[this.$route.params.classID].classCurrentHealth < 0){this.classes[this.$route.params.classID].classCurrentHealth=0}
           if(this.enemies[this.$route.params.enemyID].enemyCurrentHealth < 0){this.enemies[this.$route.params.enemyID].enemyCurrentHealth=0}
           if(this.golem1.golemName){
             if(this.golem1.golemCurrentHealth > this.golem1.golemMaxHealth){this.golem1.golemCurrentHealth = this.golem1.golemMaxHealth}
             if(this.golem1.golemStatus[4].status=="Immortal" && this.golem1.golemCurrentHealth < 10){this.golem1.golemCurrentHealth = 10}
             else if(this.golem1.golemCurrentHealth<=0){
               this.golemGrave = this.golem1
               this.golem1Died = [true, this.golem1]
               this.golem1 = {}}
        }  if(this.golem2.golemName){
             if(this.golem2.golemCurrentHealth > this.golem2.golemMaxHealth){this.golem2.golemCurrentHealth = this.golem2.golemMaxHealth}
             if(this.golem2.golemStatus[4].status=="Immortal" && this.golem2.golemCurrentHealth < 10){this.golem2.golemCurrentHealth = 10}
             if(this.golem2.golemCurrentHealth<=0){
               this.golemGrave = this.golem2
               this.golem2Died = [true, this.golem2]
               this.golem2 = {}}
           }
           if(this.decoy.decoyName){
             if(this.decoy.decoyCurrentHealth<=0){
               this.decoyDied = [true, this.decoy]
               this.decoy= {}
             }
           }
         },
         checkWin(){
           if(this.classes[this.$route.params.classID].classCurrentHealth==0 && this.classes[this.$route.params.classID].hasFM){
             this.changeCurrentAction("Almost Dead")
             this.classes[this.$route.params.classID].classCurrentHealth = 1
             this.classes[this.$route.params.classID].classStatus = [{}, {}, {}, {}, {}, {}, {}, {}]
             this.showFMOptions = true
           }
            else if(this.classes[this.$route.params.classID].classCurrentHealth==0 && this.enemies[this.$route.params.enemyID].enemyCurrentHealth==0){
             this.changeCurrentAction("You Both Died")
             this.gameOver=true
           } else if (this.classes[this.$route.params.classID].classCurrentHealth==0){
             this.changeCurrentAction("You Died")
             this.gameOver=true
           } else if (this.enemies[this.$route.params.enemyID].enemyCurrentHealth==0){
             this.changeCurrentAction("You Won")
             this.gameOver=true
           }

         },
         checkItemUsage(item){
           if(item.itemEffectType=="Golem" || item.itemEffectType=="Random Golem"){
             if(this.golem1.golemName && this.golem2.golemName){
               return true
             } else {return false}
           } else if (item.itemEffectType=="Golem Revive"){
             let space = true
             let grave = true
             if (this.golem1.golemName && this.golem2.golemName){
               space = false
             }
             if (!this.golemGrave.golemName){
               grave = false
             }
             if(!space || !grave){
               return true
             } else {return false}
           } else {return false}
         },
         die(){
           this.showFMOptions=false
           this.changeCurrentAction("You Died")
           this.gameOver=true
         },
         useFM(){
          this.showFMOptions=false
          let magicRNG = Math.floor(Math.random() * 4)
          if(magicRNG==0){
            this.enemies[this.$route.params.enemyID].enemyCurrentHealth = 0
            this.changeCurrentAction("FM", "Win")
            this.gameOver=true
        } else if(magicRNG==1){
            this.classes[this.$route.params.classID].classCurrentHealth = 0
            this.changeCurrentAction("FM", "Lose")
            this.gameOver=true
        } else if(magicRNG==2){
            this.classes[this.$route.params.classID].classCurrentHealth = 0
            this.enemies[this.$route.params.enemyID].enemyCurrentHealth = 0
            this.changeCurrentAction("FM", "Tie")
            this.gameOver=true
        } else if(magicRNG==3){
            this.changeCurrentAction("FM", "Heal")
            this.classes[this.$route.params.classID].classCurrentHealth = this.classes[this.$route.params.classID].classMaxHealth
          }
          this.classes[this.$route.params.classID].hasFM = false
          this.hadFM = true
         },
         reset(){
           this.classes[this.$route.params.classID].classCurrentHealth = this.classes[this.$route.params.classID].classMaxHealth
           this.classes[this.$route.params.classID].classItems[0].itemCount = this.classes[this.$route.params.classID].classItems[0].initialItemCount
           this.classes[this.$route.params.classID].classItems[1].itemCount = this.classes[this.$route.params.classID].classItems[1].initialItemCount
           this.classes[this.$route.params.classID].classItems[2].itemCount = this.classes[this.$route.params.classID].classItems[2].initialItemCount
           this.classes[this.$route.params.classID].classAttacks[0].attackCooldown = this.classes[this.$route.params.classID].classAttacks[0].initialAttackCooldown
           this.classes[this.$route.params.classID].classAttacks[1].attackCooldown = this.classes[this.$route.params.classID].classAttacks[1].initialAttackCooldown
           this.classes[this.$route.params.classID].classAttacks[2].attackCooldown = this.classes[this.$route.params.classID].classAttacks[2].initialAttackCooldown
           this.classes[this.$route.params.classID].classAttacks[3].attackCooldown = this.classes[this.$route.params.classID].classAttacks[3].initialAttackCooldown
           this.classes[this.$route.params.classID].classAttacks[0].onCooldown=false
           this.classes[this.$route.params.classID].classAttacks[1].onCooldown=false
           this.classes[this.$route.params.classID].classAttacks[2].onCooldown=false
           this.classes[this.$route.params.classID].classAttacks[3].onCooldown=true
           this.classes[this.$route.params.classID].classAttacks[0].inRange = false
           this.classes[this.$route.params.classID].classAttacks[1].inRange = false
           this.classes[this.$route.params.classID].classAttacks[2].inRange = false
           this.classes[this.$route.params.classID].classAttacks[3].inRange = false
           this.classes[this.$route.params.classID].classStatus=[{}, {}, {}, {}, {}, {}, {}, {}]
           if(this.hadFM){this.classes[this.$route.params.classID].hasFM=true; this.hadFM=false}
           this.enemies[this.$route.params.enemyID].enemyCurrentHealth = this.enemies[this.$route.params.enemyID].enemyMaxHealth
           this.enemies[this.$route.params.enemyID].enemyAttacks[0].attackCooldown = this.enemies[this.$route.params.enemyID].enemyAttacks[0].initialAttackCooldown
           this.enemies[this.$route.params.enemyID].enemyAttacks[1].attackCooldown = this.enemies[this.$route.params.enemyID].enemyAttacks[1].initialAttackCooldown
           this.enemies[this.$route.params.enemyID].enemyAttacks[2].attackCooldown = this.enemies[this.$route.params.enemyID].enemyAttacks[2].initialAttackCooldown
           this.enemies[this.$route.params.enemyID].enemyAttacks[0].onCooldown = false
           this.enemies[this.$route.params.enemyID].enemyAttacks[1].onCooldown = false
           this.enemies[this.$route.params.enemyID].enemyAttacks[2].onCooldown = true
           this.enemies[this.$route.params.enemyID].enemyStatus=[{}, {}, {}, {}, {}, {}, {}, {}]
           this.mechanics.distance = this.mechanics.initialDistance
         }
}}
</script>
<style>
#app {
    background-color: #a5d4d1
}
</style>