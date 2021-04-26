<template>
  <div style="text-align: left; height: 1050px" class="about">
     <router-link to="/"><b-button variant="outline-primary" size="lg" style="position: relative; bottom: 50px; float: left; left: 20px">Home</b-button></router-link>
  <h1>Game Mechanics:</h1>
   <div style="position: relative;top: 25px">
      <h2>Bleeding: Does {{ mechanics.bleedingDamage }} damage at the end of the turn.</h2>
      <h2>Burning: Does {{ mechanics.burningDamage }} damage at the end of the turn and increases damage taken by {{ mechanics.burnDamageBuff }}.</h2>
      <h2>Stunned: Prevents the use of any actions.</h2>
      <h2>Health Regen: Restores {{ mechanics.healthRegen }} health at the end of the turn.</h2>
      <h2>Poison Coating: Increases damage dealt by {{ mechanics.coatingDamageBuff }} and applies {{ classes[2].classItems[0].itemEffectType }} after every hit.</h2>
      <h2>Poison: Does {{ mechanics.poisonDamage }} damage at the end of the turn.</h2>
      <h2>Berserk: Prevents the use of defence, back out or item use but increases damage by {{ mechanics.berserkDamageBuff }}.</h2>
      <h2>Magic Buff: Allows the casting of spells from any range and increases the damage of spells by {{ mechanics.talismanDamageBuff }}.</h2>
      <h2>Immune: Clears out all statusses and prevents the gaining of any other statusses.</h2>
      <h2>Hidden: Prevents the enemy from hitting you and increases your damage dealt while hiding by {{ mechanics.hiddenDamageBuff }}, most attacks will make you lose hidden after using them.</h2>
      <h2>Sleep: Prevents the use of any actions and increases damage taken while slept by {{ mechanics.sleepingDamageBuff }}, any damage taken while sleeping will instantly wake you up.</h2>
      <h2>Cripple: Decreases damage dealt by {{ mechanics.crippleDamageDrop }}.</h2>
      <h2>Golem Damage Buff: Increases the damage of golems by {{ mechanics.golemDamageBuff }}.</h2>
      <h2>Sharpened: Increases damage dealt by {{ mechanics.sharpenDamageBuff }}.</h2>
      <h2>Defended: Protects you from attacks without the need to Defend.</h2>
      <h2>Freeze: Prevents enemy movement.</h2>
      <h2>Mirror: Reflects the enemy's attack back at it.</h2>
      <h2>Immortal: Prevents your Golems from dying. (Does not prevent death by Self Destruct.)</h2>
      <h2>P.S Don't reload the page while playing a custom made character, just don't.</h2>
   </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
computed: {
     ...mapState([
        'classes',
        'enemies',
        'mechanics'
    ]),

    },
}
</script>