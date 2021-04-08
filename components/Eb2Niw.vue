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
    .withBasicInformation(
      'Eb2: Magas végzettség vagy Eb2: Kivételes képzettségnek meg kell felelni'
    )
    .withExpandableInformation(
      'Az összes kritérium teljesítése a "*Criteria for National Interest Waiver" fejezetben:',
      [
        'Munkájának országos jelentősége van.',
        'A jelölt megfelelő helyzetben van ahhoz, hogy az országos érdekeket előre mozdítsa',
        'Az Egyesült Államok számára előnyös lenne, ha konkrét állásajánlat nélkül engedné a letepeledést a jelöltnek',
      ]
    )
    .withLink(
      'USCIS',
      'https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-second-preference-eb-2'
    )

  get enabled() {
    return this.userDetails.selfPetition ||
      (this.userDetails.msc && this.userDetails.extraordinaryAbility)
      ? 'colorActive'
      : 'colorInactive'
  }
}
</script>
