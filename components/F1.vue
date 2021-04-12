<template>
  <v-card :color="enabled" height="100%">
    <v-card-title class="justify-center">F1</v-card-title>
    <v-card-text>
      <VisaInformation :visa-information="visaInformation" />
      <VisaOpportunities :greencard="false" eligible-for-work="true" />
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { UserDetails } from '~/pages/index.vue'
import { VisaInformationData, VisaType } from '~/components/visaInformationData'

@Component
export default class F1Visa extends Vue {
  @Prop()
  userDetails!: UserDetails

  private visaInformation = new VisaInformationData()
    .withVisaType(VisaType.NON_IMMIGRANT)
    .withBasicInformation(
      'Ez a leggyakoribb típusú diákvízum. Amennyiben ön felsőfokú tanulmányokat szeretne folytatni az Egyesült Államokban egy elismert oktatási intézményben, pl. egy akkreditált amerikai főiskolán vagy egyetemen, magán-középiskolában vagy egy elismert angol nyelvi programban, úgy F-1 típusú vízumot kell igényelnie. Ugyancsak F-1 vízumot kell igényelnie, ha a tanulmányi program több mint heti 18 órás.'
    )
    .withBasicRequirement('Felvétel elnyerése amerikai egyetemre')
    .withLink(
      'USCIS',
      'https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html'
    )
    .withLink(
      'ustraveldocs',
      'https://www.ustraveldocs.com/hu_hu/hu-niv-typefandm.asp'
    )

  get enabled() {
    return !this.userDetails.selfPetition ? 'colorActive' : 'colorInactive'
  }
}
</script>
