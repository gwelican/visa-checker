<template>
  <v-card>
    <v-card-title> EB2: NIW </v-card-title>
    <v-card-text>
      <requirements :requirements="requirements"></requirements>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
  import { Component, Prop, Vue } from 'nuxt-property-decorator'
  import { UserDetails } from '~/pages/index.vue'

  @Component
  export default class EB2Niw extends Vue {
  @Prop()
  userDetails!: UserDetails

  private requirements = [
  'Minimum MSc VAGY PhD végzettség',
  '5 év munkatapasztalat végzettségnek megfelelő területen',
  '',
  'VAGY',
  '',
  'Kivételes képesség:',
  '- tudományokban',
  '- mávészetekben',
  '- üzleti életben',
  'Kivételes képesség: "jelentősen meghaladja az adott területen tapasztalható szintet" ',
  'Munkaajánlat szükséges USA cégtől',
  'Minimum 3 kritérium teljesítése a felsorolt 7-ből "*Criteria" fejezetben:',
  '',
  'PLUSZ',
  'Bizonyítékok arra vonatkozólag, hogy állami érdek a jelölt beengedése még munkaajánlat nélkül is',
  '',
  '',

  ]
  }
</script>
