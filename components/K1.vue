<template>
  <v-card :color="enabled" height="100%">
    <v-card-title class="justify-center">K1</v-card-title>
    <v-card-text>
      <VisaInformation :visa-information="visaInformation" />
      <VisaOpportunities :greencard="true" eligible-for-work="true" />
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { UserDetails } from '~/pages/index.vue'
import { VisaInformationData, VisaType } from '~/components/visaInformationData'

@Component
export default class K1Visa extends Vue {
  @Prop()
  userDetails!: UserDetails

  private visaInformation = new VisaInformationData()
    .withVisaType(VisaType.IMMIGRANT)
    .withBasicInformation(
      'Amikor amerikai állampolgár külföldi állampolgárral kíván házasságra lépni és az esküvot az Egyesült Államokba tervezik, az amerikai állampolgar, kérvényezheti számára a K-1-es Jegyestársi vízumot. Ez lehetővén teszi a külföldi állampolgár számára, hogy az Egyesült Államokba belépjen és házasságot kössön az amerikai állmpolgárral.'
    )
    .withBasicRequirement('Büntetlen előélet')
    .withBasicRequirement(
      'A jegyestársaknak az elmúlt két évben személyesen is találkozniuk kellett'
    )
    .withBasicRequirement(
      'Mindkét félnek készen kell állnia arra, hogy a K-1-es vízum megszerzését követően és az Egyesült Államokaba való belépés utánt kilencven nappal házasságot kössenek'
    )
    .withLink(
      'USCIS',
      'https://www.uscis.gov/family/family-of-us-citizens/visas-for-fiancees-of-us-citizens'
    )
    .withLink(
      'immigrationvisausa',
      'https://immigrationvisausa.com/hu/fiance-visa-fiancee-visa-k-1'
    )

  get enabled() {
    return !this.userDetails.maritalStatus ? 'colorActive' : 'colorInactive'
  }
}
</script>
