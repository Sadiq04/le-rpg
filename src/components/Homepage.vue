<template>
    <div>
    <h1 style="text-align: left">Choose a class:</h1>
     <b-container>
      <b-table table-variant="secondary" bordered hover :items="classes" :fields="fields">
       <template #cell(className)="data">
        <router-link :to="`enemySelect/${data.index}`">{{ data.value }}</router-link>
      </template>
      </b-table>
     </b-container>
     <router-link style="position: relative; bottom: 5px" to="/characterCreation"><b-button variant="outline-primary">Or Create One</b-button></router-link>
     <router-link style="position: relative; bottom: 5px; left: 700px" to="/about"><b-button size="lg" variant="info">Mechanics</b-button></router-link>
    </div>
</template>

<script>
import { mapState } from "vuex"
export default {
data(){
 return{
     fields:[{ key: 'className', label: 'Class Name' },
             { key: 'classType', label: 'Class Type'},
             { key: 'classMaxHealth', label: 'Health' },
             { key: 'classItemNames', label: 'Class Items' },
             { key: 'classAttackNames', label: 'Class Attack' }]
 }
},
computed: {
     ...mapState([
        'classes',
        'enemies',
        'mechanics'
    ]),

    },
}
</script>