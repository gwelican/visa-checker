<template>
  <v-card :color="enabled">
    <v-card-title class="justify-center">
      EB2: Kivételes képességek
    </v-card-title>
    <v-card-text>
      <requirements :visa-information="visaInformation"></requirements>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { UserDetails } from '~/pages/index.vue'
import { VisaInformation } from '~/components/visainformation'

@Component
export default class EB2Ea extends Vue {
  @Prop()
  userDetails!: UserDetails

  private visaInformation = new VisaInformation()
    .addBasic('Kivételes képesség:')
    .addBasic('- tudományokban')
    .addBasic('- művészetekben')
    .addBasic('- üzleti életben')
    .addBasic(
      'Kivételes képesség: "jelentősen meghaladja az adott területen tapasztalható szintet" '
    )
    .addBasic('Munkaajánlat szükséges USA cégtől')
    .addBasic(
      'Minimum 3 kritérium teljesítése a felsorolt 7-ből "*Criteria" fejezetben:'
    )
    .addLink(
      'uscis',
      'https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-second-preference-eb-2'
    )

  get enabled() {
    return this.userDetails.extraordinaryAbility
      ? 'colorActive'
      : 'colorInactive'
  }
}
</script>
