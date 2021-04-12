<template>
  <v-card :color="enabled" height="100%">
    <v-card-title class="justify-center">J1</v-card-title>
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

@Component({})
export default class J1Visa extends Vue {
  @Prop()
  userDetails!: UserDetails

  private visaInformation = new VisaInformationData()
    .withVisaType(VisaType.NON_IMMIGRANT)
    .withBasicRequirement('Cserediákok számára')
    .withBasicRequirement('Kutatók számára')
    .withBasicRequirement('Gyakornokok számára ')
    .withBasicRequirement('Au pair-ek számára ')
    .withBasicRequirement(
      'Csak szervezett és jóváhagyott programban (táboroztatás, hivatalos au-pair szervező cégek stb.)'
    )
    .withBasicRequirement('Nem bevándorlóknak ')
    .withBasicRequirement(
      'Max 2 év után, minimum 2 évre vissza kell térni a származási országba'
    )
    .withBasicRequirement(
      'Visszatérés alól különös indokkal felmentés kérhető '
    )
    .withLink(
      'immigrationvisausa',
      'https://immigrationvisausa.com/hu/munkavallalasi-vizumok#J-1vizumHung'
    )

  get enabled() {
    return this.userDetails.age >= 18 &&
      this.userDetails.age <= 26 &&
      !this.userDetails.selfPetition
      ? 'colorActive'
      : 'colorInactive'
  }
}
</script>
