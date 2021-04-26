<template>
    <div>
    <h1 style="text-align: left">Choose an enemy:</h1>
     <b-container>
      <b-table table-variant="secondary" bordered hover :items="enemies" :fields="fields">
       <template #cell(enemyName)="data">
        <router-link :to="`/game/${$route.params.classID}/${data.index}`">{{ data.value }}</router-link>
      </template>
      </b-table>
     </b-container>
    </div>
</template>

<script>
import { mapState } from "vuex"
export default {
data(){
 return{
     fields:[{ key: 'enemyName', label: 'Enemy Name' },
             { key: 'enemyMaxHealth', label: 'Health' },
             { key: 'enemyAttackNames', label: 'Enemy Attack' }]
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