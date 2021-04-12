<template>
  <v-card :color="enabled" height="100%">
    <v-card-title class="justify-center">L-1</v-card-title>
    <v-card-text>
      <VisaInformation :visa-information="visaInformation" />
      <VisaOpportunities
        :greencard="false"
        eligible-for-work="true"
        :eligible-for-green-card="true"
        green-card-eligibility-message="Munkaltaton keresztul"
      />
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { UserDetails } from '~/pages/index.vue'
import { VisaInformationData, VisaType } from '~/components/visaInformationData'

@Component({})
export default class L1Visa extends Vue {
  @Prop()
  userDetails!: UserDetails

  visaInformation = new VisaInformationData()
    .withVisaType(VisaType.DUAL_INTENT)
    .withBasicInformation(
      'L-1 vízumot kell igényelnie abban az esetben, ha ön egy nemzetközi vállalat alkalmazottja, és átmenetileg az egyesült államokbeli anyacéghez, leányvállalathoz vagy kirendeltséghez helyezik önt. A nemzetközi vállalat lehet akár amerikai, akár külföldi szervezet.'
    )
    .withBasicRequirement(
      'Egyesült Államokba való beutazási kérelmét megelőző három évből legalább folyamatosan egy évig kellett hogy a nemzetközi cég alkalmazásában álljon az Egyesül Államokon kívül'
    )
    .withBasicRequirement(
      'L1A: Vezető vagy manager pozícióban dolgozik az áthelyező cég Amerikai irodájának'
    )
    .withBasicRequirement(
      'L1B: Szaktudását használva dolgozik az áthelyező cég Amerikai irodájának'
    )
    .withLink(
      'USCIS',
      'https://www.uscis.gov/working-in-the-united-states/temporary-workers/l-1a-intracompany-transferee-executive-or-manager'
    )
    .withLink(
      'immigrationvisausa',
      'https://immigrationvisausa.com/hu/munkavallalasi-vizumok#L-1%20vizumHung'
    )
    .withLink(
      'ustraveldocs',
      'https://www.ustraveldocs.com/hu_hu/hu-niv-typework.asp#'
    )

  get enabled() {
    return !this.userDetails.selfPetition ? 'colorActive' : 'colorInactive'
  }
}
</script>
