<template>
  <v-card>
    <v-card-title> EB2: EA </v-card-title>
    <v-card-text>
      <v-card-text>
        <requirements :requirements="requirements"></requirements>
      </v-card-text>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
  import { Component, Prop, Vue } from 'nuxt-property-decorator'
  import { UserDetails } from '~/pages/index.vue'

  @Component
  export default class EB2Ea extends Vue {
  @Prop()
  userDetails!: UserDetails

  private requirements = [
  'Kivételes képesség:',
  '- tudományokban',
  '- mávészetekben',
  '- üzleti életben',
  'Kivételes képesség: "jelentősen meghaladja az adott területen tapasztalható szintet" ',
  'Munkaajánlat szükséges USA cégtől',
  'Minimum 3 kritérium teljesítése a felsorolt 7-ből "*Criteria" fejezetben:',
  'https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-second-preference-eb-2',
  ]
  }
</script>
