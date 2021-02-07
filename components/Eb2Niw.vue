<template>
  <v-card :color="enabled">
    <v-card-title class="justify-center"> EB2: Nemzeti Érdek </v-card-title>
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
export default class EB2Niw extends Vue {
  @Prop()
  userDetails!: UserDetails

  private visaInformation = new VisaInformation()
    .addBasic('Minimum MSc VAGY PhD végzettség')
    .addBasic('5 év munkatapasztalat végzettségnek megfelelő területen')
    .addBasic('VAGY')
    .addBasic('Kivételes képesség:')
    .addBasic('- tudományokban')
    .addBasic('- művészetekben')
    .addBasic('- üzleti életben')
    .addBasic(
      'Kivételes képesség: "jelentősen meghaladja az adott területen tapasztalható szintet" '
    )
    .addBasic(
      'Minimum 3 kritérium teljesítése a felsorolt 7-ből "*Criteria" fejezetben:'
    )
    .addBasic('PLUSZ')
    .addBasic(
      'Bizonyítékok arra vonatkozólag, hogy állami érdek a jelölt beengedése még munkaajánlat nélkül is'
    )

  get enabled() {
    return this.userDetails.selfPetition ||
      (this.userDetails.msc && this.userDetails.extraordinaryAbility)
      ? 'colorActive'
      : 'colorInactive'
  }
}
</script>
