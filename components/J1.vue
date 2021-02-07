<template>
  <v-card :color="enabled">
    <v-card-title class="justify-center">J1</v-card-title>
    <v-card-text>
      <requirements :visa-information="visaInformation" />
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { UserDetails } from '~/pages/index.vue'

import { VisaInformation } from '~/components/visainformation'

@Component({})
export default class J1Visa extends Vue {
  @Prop()
  userDetails!: UserDetails

  private visaInformation = new VisaInformation()
    .addBasic('Cserediákok számára')
    .addBasic('Kutatók számára')
    .addBasic('Gyakornokok számára ')
    .addBasic('Au pair-ek számára ')
    .addBasic(
      'Csak szervezett és jóváhagyott programban (táboroztatás, hivatalos au-pair szervező cégek stb.)'
    )
    .addBasic('Nem bevándorlóknak ')
    .addBasic(
      'Max 2 év után, minimum 2 évre vissza kell térni a származási országba'
    )
    .addBasic('Visszatérés alól különös indokkal felmentés kérhető ')

  get enabled() {
    return this.userDetails.age >= 18 &&
      this.userDetails.age <= 26 &&
      !this.userDetails.selfPetition
      ? 'colorActive'
      : 'colorInactive'
  }
}
</script>
