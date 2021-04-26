<template>
    <div style="height: 800px">
      <router-link to="/"><b-button variant="outline-primary" size="lg" style="position: relative; bottom: 50px; float: left; left: 20px">Home</b-button></router-link>
  <b-form @submit.prevent="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Class Name:"
        style="float: left"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          style="max-width: 500px"
          v-model="form.className"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

       <b-form-group style="position: relative; left: 50px; float: left" label="Choose Class Type:" v-slot="{ ariaDescribedby }">
      <b-form-radio-group
        id="class-select"
        v-model="theClass"
        :options="classSelectOptions"
        :aria-describedby="ariaDescribedby"
        name="Class Type Select"
      ></b-form-radio-group>
    </b-form-group>
    <b-button style="position: absolute; text-align: left; float: left; left: 750px; top: 85px"  @click="chooseClass()" variant="primary">Choose</b-button>
    <div v-if="chosenClass=='Warrior'">
      <h3 style="position: absolute; top: 200px; text-align: left">Choose Attacks: (No more than 3)</h3>
      <b-form-checkbox-group
      stacked
      style="position: absolute; top: 250px; text-align: left"
      v-model="form.classAttacks"
      :options="warriorAttackOptions"
      :state1="state"
      name="Ability Select"
    >
      <b-form-invalid-feedback :state="state"></b-form-invalid-feedback>
      <b-form-valid-feedback :state="state"></b-form-valid-feedback>
    <h3 style="position: absolute; top: 175px; text-align: left">Choose Ultimate:</h3>
  </b-form-checkbox-group>
    <b-form-group style="position: absolute; top:475px; text-align: left" v-slot="{ ariaDescribedby }">
      <b-form-radio-group
        stacked
        id="ult-select"
        v-model="form.ult"
        :options="warriorUltAttacks"
        :aria-describedby="ariaDescribedby"
        name="Ult Select"
      ></b-form-radio-group>
    </b-form-group>
    <h3 style="position: absolute; top: 575px; text-align: left">Choose Items: (No more than 3)</h3>
      <b-form-checkbox-group
      stacked
      style="position: absolute; top: 625px; text-align: left"
      v-model="form.classItems"
      :options="warriorItemOptions"
      :state1="itemState"
      name="Ability Select"
    >
    <b-form-invalid-feedback :state="itemState"></b-form-invalid-feedback>
      <b-form-valid-feedback :state="state"></b-form-valid-feedback>
    </b-form-checkbox-group>
    </div>
    <div v-if="chosenClass=='Mage'">
      <h3 style="position: absolute; top: 200px; text-align: left">Choose Attacks: (No more than 3)</h3>
      <b-form-checkbox-group
      stacked
      style="position: absolute; top: 250px; text-align: left"
      v-model="form.classAttacks"
      :options="mageAttackOptions"
      :state1="state"
      name="Ability Select"
    >
      <b-form-invalid-feedback :state="state"></b-form-invalid-feedback>
      <b-form-valid-feedback :state="state"></b-form-valid-feedback>
    <h3 style="position: absolute; top: 175px; text-align: left">Choose Ultimate:</h3>
  </b-form-checkbox-group>
    <b-form-group style="position: absolute; top:475px; text-align: left" v-slot="{ ariaDescribedby }">
      <b-form-radio-group
        stacked
        id="ult-select"
        v-model="form.ult"
        :options="mageUltAttacks"
        :aria-describedby="ariaDescribedby"
        name="Ult Select"
      ></b-form-radio-group>
    </b-form-group>
    <h3 style="position: absolute; top: 575px; text-align: left">Choose Items: (No more than 3)</h3>
      <b-form-checkbox-group
      stacked
      style="position: absolute; top: 625px; text-align: left"
      v-model="form.classItems"
      :options="mageItemOptions"
      :state1="itemState"
      name="Ability Select"
    >
    <b-form-invalid-feedback :state="itemState"></b-form-invalid-feedback>
      <b-form-valid-feedback :state="state"></b-form-valid-feedback>
    </b-form-checkbox-group>
    </div>
    <div v-if="chosenClass=='Assassin'">
      <h3 style="position: absolute; top: 200px; text-align: left">Choose Attacks: (No more than 3)</h3>
      <b-form-checkbox-group
      stacked
      style="position: absolute; top: 250px; text-align: left"
      v-model="form.classAttacks"
      :options="assassinAttackOptions"
      :state1="state"
      name="Ability Select"
    >
      <b-form-invalid-feedback :state="state"></b-form-invalid-feedback>
      <b-form-valid-feedback :state="state"></b-form-valid-feedback>
    <h3 style="position: absolute; top: 175px; text-align: left">Choose Ultimate:</h3>
  </b-form-checkbox-group>
    <b-form-group style="position: absolute; top:475px; text-align: left" v-slot="{ ariaDescribedby }">
      <b-form-radio-group
        stacked
        id="ult-select"
        v-model="form.ult"
        :options="assassinUltAttacks"
        :aria-describedby="ariaDescribedby"
        name="Ult Select"
      ></b-form-radio-group>
    </b-form-group>
    <h3 style="position: absolute; top: 575px; text-align: left">Choose Items: (No more than 3)</h3>
      <b-form-checkbox-group
      stacked
      style="position: absolute; top: 625px; text-align: left"
      v-model="form.classItems"
      :options="assassinItemOptions"
      :state1="itemState"
      name="Ability Select"
    >
    <b-form-invalid-feedback :state="itemState"></b-form-invalid-feedback>
      <b-form-valid-feedback :state="state"></b-form-valid-feedback>
    </b-form-checkbox-group>
    </div>
    <div v-if="chosenClass=='Alchemist'">
      <h3 style="position: absolute; top: 200px; text-align: left">Choose Attacks: (No more than 3)</h3>
      <b-form-checkbox-group
      stacked
      style="position: absolute; top: 250px; text-align: left"
      v-model="form.classAttacks"
      :options="alchemistAttackOptions"
      :state1="state"
      name="Ability Select"
    >
      <b-form-invalid-feedback :state="state"></b-form-invalid-feedback>
      <b-form-valid-feedback :state="state"></b-form-valid-feedback>
    <h3 style="position: absolute; top: 175px; text-align: left">Choose Ultimate:</h3>
  </b-form-checkbox-group>
    <b-form-group style="position: absolute; top:475px; text-align: left" v-slot="{ ariaDescribedby }">
      <b-form-radio-group
        stacked
        id="ult-select"
        v-model="form.ult"
        :options="alchemistUltAttacks"
        :aria-describedby="ariaDescribedby"
        name="Ult Select"
      ></b-form-radio-group>
    </b-form-group>
    <h3 style="position: absolute; top: 575px; text-align: left">Choose Items: (No more than 3)</h3>
      <b-form-checkbox-group
      stacked
      style="position: absolute; top: 625px; text-align: left"
      v-model="form.classItems"
      :options="alchemistItemOptions"
      :state1="itemState"
      name="Ability Select"
    >
    <b-form-invalid-feedback :state="itemState"></b-form-invalid-feedback>
      <b-form-valid-feedback :state="state"></b-form-valid-feedback>
    </b-form-checkbox-group>
    </div>
      <b-button style="position: absolute; text-align: center; float: center; top: 800px; right: 900px" type="submit" variant="primary">Submit</b-button>
      <h1 v-if="askVeryKindlyToCorrectTheForm" style="position: absolute; text-align: center; float: center; top: 790px; right: 400px">I said no more than 3</h1>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import attacks from "../assets/attacks.js"
import ultAttacks from "../assets/ultAttacks.js"
import items from "../assets/items.js"
export default {
    data() {
      return {
        askVeryKindlyToCorrectTheForm: false,
        theClass: "",
        chosenClass: "",
        form: {
          className: "",
          classType: "",
          classAttacks: [],
          ult: {},
          classItems: []
        },
        classSelectOptions: [
          { text: "Warrior", value: "Warrior" },
          { text: 'Mage', value: "Mage" },
          { text: "Assassin", value: "Assassin"},
          { text: "Alchemist", value: "Alchemist" }
        ],
        warriorAttackOptions: [
          {text: `${attacks[0][0].attackName}: ${attacks[0][0].description}`, value: attacks[0][0]},
          {text: `${attacks[0][1].attackName}: ${attacks[0][1].description}`, value: attacks[0][1]},
          {text: `${attacks[0][2].attackName}: ${attacks[0][2].description}`, value: attacks[0][2]},
          {text: `${attacks[0][3].attackName}: ${attacks[0][3].description}`, value: attacks[0][3]},
          {text: `${attacks[0][4].attackName}: ${attacks[0][4].description}`, value: attacks[0][4]},
          {text: `${attacks[0][5].attackName}: ${attacks[0][5].description}`, value: attacks[0][5]}
        ],
        warriorUltAttacks: [
          {text: `${ultAttacks[0][0].attackName}: ${ultAttacks[0][0].description}`, value: ultAttacks[0][0]},
          {text: `${ultAttacks[0][1].attackName}: ${ultAttacks[0][1].description}`, value: ultAttacks[0][1]},
          {text: `${ultAttacks[0][2].attackName}: ${ultAttacks[0][2].description}`, value: ultAttacks[0][2]}
        ],
        warriorItemOptions: [
          {text: `${items[0][0].itemName}: ${items[0][0].description}`, value: items[0][0]},
          {text: `${items[0][1].itemName}: ${items[0][1].description}`, value: items[0][1]},
          {text: `${items[0][2].itemName}: ${items[0][2].description}`, value: items[0][2]},
          {text: `${items[0][3].itemName}: ${items[0][3].description}`, value: items[0][3]},
          {text: `${items[0][4].itemName}: ${items[0][4].description}`, value: items[0][4]}
        ],
        mageAttackOptions: [
          {text: `${attacks[1][0].attackName}: ${attacks[1][0].description}`, value: attacks[1][0]},
          {text: `${attacks[1][1].attackName}: ${attacks[1][1].description}`, value: attacks[1][1]},
          {text: `${attacks[1][2].attackName}: ${attacks[1][2].description}`, value: attacks[1][2]},
          {text: `${attacks[1][3].attackName}: ${attacks[1][3].description}`, value: attacks[1][3]},
          {text: `${attacks[1][4].attackName}: ${attacks[1][4].description}`, value: attacks[1][4]},
          {text: `${attacks[1][5].attackName}: ${attacks[1][5].description}`, value: attacks[1][5]}
        ],
        mageUltAttacks: [
          {text: `${ultAttacks[1][0].attackName}: ${ultAttacks[1][0].description}`, value: ultAttacks[1][0]},
          {text: `${ultAttacks[1][1].attackName}: ${ultAttacks[1][1].description}`, value: ultAttacks[1][1]},
          {text: `${ultAttacks[1][2].attackName}: ${ultAttacks[1][2].description}`, value: ultAttacks[1][2]}
        ],
        mageItemOptions: [
          {text: `${items[1][0].itemName}: ${items[1][0].description}`, value: items[1][0]},
          {text: `${items[1][1].itemName}: ${items[1][1].description}`, value: items[1][1]},
          {text: `${items[1][2].itemName}: ${items[1][2].description}`, value: items[1][2]},
          {text: `${items[1][3].itemName}: ${items[1][3].description}`, value: items[1][3]},
          {text: `${items[1][4].itemName}: ${items[1][4].description}`, value: items[1][4]}
        ],
        assassinAttackOptions: [
          {text: `${attacks[2][0].attackName}: ${attacks[2][0].description}`, value: attacks[2][0]},
          {text: `${attacks[2][1].attackName}: ${attacks[2][1].description}`, value: attacks[2][1]},
          {text: `${attacks[2][2].attackName}: ${attacks[2][2].description}`, value: attacks[2][2]},
          {text: `${attacks[2][3].attackName}: ${attacks[2][3].description}`, value: attacks[2][3]},
          {text: `${attacks[2][4].attackName}: ${attacks[2][4].description}`, value: attacks[2][4]},
          {text: `${attacks[2][5].attackName}: ${attacks[2][5].description}`, value: attacks[2][5]}
        ],
        assassinUltAttacks: [
          {text: `${ultAttacks[2][0].attackName}: ${ultAttacks[2][0].description}`, value: ultAttacks[2][0]},
          {text: `${ultAttacks[2][1].attackName}: ${ultAttacks[2][1].description}`, value: ultAttacks[2][1]},
          {text: `${ultAttacks[2][2].attackName}: ${ultAttacks[2][2].description}`, value: ultAttacks[2][2]}
        ],
        assassinItemOptions: [
          {text: `${items[2][0].itemName}: ${items[2][0].description}`, value: items[2][0]},
          {text: `${items[2][1].itemName}: ${items[2][1].description}`, value: items[2][1]},
          {text: `${items[2][2].itemName}: ${items[2][2].description}`, value: items[2][2]},
          {text: `${items[2][3].itemName}: ${items[2][3].description}`, value: items[2][3]},
          {text: `${items[2][4].itemName}: ${items[2][4].description}`, value: items[2][4]}
        ],
        alchemistAttackOptions: [
          {text: `${attacks[3][0].attackName}: ${attacks[3][0].description}`, value: attacks[3][0]},
          {text: `${attacks[3][1].attackName}: ${attacks[3][1].description}`, value: attacks[3][1]},
          {text: `${attacks[3][2].attackName}: ${attacks[3][2].description}`, value: attacks[3][2]},
          {text: `${attacks[3][3].attackName}: ${attacks[3][3].description}`, value: attacks[3][3]},
          {text: `${attacks[3][4].attackName}: ${attacks[3][4].description}`, value: attacks[3][4]},
          {text: `${attacks[3][5].attackName}: ${attacks[3][5].description}`, value: attacks[3][5]}
        ],
        alchemistUltAttacks: [
          {text: `${ultAttacks[3][0].attackName}: ${ultAttacks[3][0].description}`, value: ultAttacks[3][0]},
          {text: `${ultAttacks[3][1].attackName}: ${ultAttacks[3][1].description}`, value: ultAttacks[3][1]},
          {text: `${ultAttacks[3][2].attackName}: ${ultAttacks[3][2].description}`, value: ultAttacks[3][2]}
        ],
        alchemistItemOptions: [
          {text: `${items[3][0].itemName}: ${items[3][0].description}`, value: items[3][0]},
          {text: `${items[3][1].itemName}: ${items[3][1].description}`, value: items[3][1]},
          {text: `${items[3][2].itemName}: ${items[3][2].description}`, value: items[3][2]},
          {text: `${items[3][3].itemName}: ${items[3][3].description}`, value: items[3][3]},
          {text: `${items[3][4].itemName}: ${items[3][4].description}`, value: items[3][4]}
        ],}
    },
    computed: {
      state() {
        return this.form.classAttacks.length < 4
      },
      itemState() {
        return this.form.classItems.length < 4
      }
    },
    methods: {
      ...mapActions([
            "addClass"
        ]),
      onSubmit(){
       if(this.form.classItems.length <= 3 && this.form.classAttacks.length <= 3 ){
        this.askVeryKindlyToCorrectTheForm = false
        let {className, classType, classAttacks, ult, classItems} = this.form
        classAttacks.push(ult)
        let hasFM = false
        if(ult.attackName=="Forbidden Magic"){hasFM=true}
        let classMaxHealth = 0
        if(classType=="Warrior"){
          classMaxHealth = 200
      } else if (classType=="Mage"){
          classMaxHealth = 100
      } else if (classType=="Assassin"){
          classMaxHealth = 125
      } else if (classType=="Alchemist"){
          classMaxHealth = 75
      }
      console.log(hasFM)
      let classStatus = [{}, {}, {}, {}, {}, {}, {}, {}]
      let classCurrentHealth = classMaxHealth
        let newClass = {
          className,
          classType,
          classCurrentHealth,
          classMaxHealth,
          classStatus,
          classItems,
          classAttacks,
          hasFM,
          get classItemNames() {return `${this.classItems[0].itemName},  ${this.classItems[1].itemName}, ${this.classItems[2].itemName}`},
          get classAttackNames() {return `${this.classAttacks[0].attackName},  ${this.classAttacks[1].attackName}, ${this.classAttacks[2].attackName}, ${this.classAttacks[3].attackName}`}
          }
          this.addClass(newClass)
          this.form = {
          className: "",
          classType: "",
          classAttacks: [],
          ult: {},
          classItems: []
        }} else {
          this.askVeryKindlyToCorrectTheForm = true
        }
        },
        chooseClass(){
          this.chosenClass = this.theClass
          this.form.classType = this.chosenClass
          this.form.classAttacks = []
          this.form.ult = {}
          this.form.classItems = []
        }
      }
    }
</script>