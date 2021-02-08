<template>
  <v-card :color="enabled" height="100%">
    <v-card-title class="justify-center"> EB2: Nemzeti Érdek </v-card-title>
    <v-card-text>
      <requirements :visa-information="visaInformation"></requirements>
      <VisaOpportunities :greencard="true" eligible-for-work="true" />
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { UserDetails } from '~/pages/index.vue'
import { VisaInformation } from '~/components/visainformation'

@Component
export default class EB2Niw extends Vue {
  @Prop()
  userDetails!: UserDetails

  private visaInformation = new VisaInformation()
    .withBasicInformation('Minimum MSc VAGY PhD végzettség')
    .withBasicInformation(
      '5 év munkatapasztalat végzettségnek megfelelő területen'
    )
    .withBasicInformation('VAGY')
    .withBasicInformation('Kivételes képesség:')
    .withBasicInformation('- tudományokban')
    .withBasicInformation('- művészetekben')
    .withBasicInformation('- üzleti életben')
    .withBasicInformation(
      'Kivételes képesség: "jelentősen meghaladja az adott területen tapasztalható szintet" '
    )
    .withBasicInformation(
      'Az összes kritérium teljesítése a "*Criteria for National Interest Waiver" fejezetben:'
    )
    .withBasicInformation('PLUSZ')
    .withBasicInformation(
      'Bizonyítékok arra vonatkozólag, hogy állami érdek a jelölt beengedése még munkaajánlat nélkül is'
    )
    .withExpandableInformation(
      'Az összes kritérium teljesítése a "*Criteria for National Interest Waiver" fejezetben:',
      [
        'Munkájának országos jelentősége van.',
        'A jelölt megfelelő helyzetben van ahhoz, hogy az országos érdekeket előre mozdítsa',
        'Az Egyesült Államok számára előnyös lenne, ha konkrét állásajánlat nélkül engedné a letepeledést a jelöltnek',
      ]
    )

  get enabled() {
    return this.userDetails.selfPetition ||
      (this.userDetails.msc && this.userDetails.extraordinaryAbility)
      ? 'colorActive'
      : 'colorInactive'
  }
}
</script>
