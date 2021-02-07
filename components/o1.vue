<template>
  <v-card :color="enabled">
    <v-card-title class="justify-center">O1 Kivételes képességek</v-card-title>
    <v-card-text>
      <requirements :visa-information="visaInformation" />
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { UserDetails } from '~/pages/index.vue'
import { VisaInformation } from '~/components/visainformation'

@Component
export default class O1Visa extends Vue {
  @Prop()
  userDetails!: UserDetails

  private visaInformation = new VisaInformation()

    .addBasic('Nem bevándorló, maximum 3 évnyi tartózkodásra')
    .addBasic('Kivételes képesség:')
    .addBasic('- tudományokban')
    .addBasic('- tanulmányokban')
    .addBasic('- üzleti életben')
    .addBasic('- sportban')
    .addBasic('- művészetekben')
    .addBasic('- színész vagy TV ipar elismert képviselője')
    .addBasic(
      'O-2: Olyan személyek, akik O-1 kategóriás művészt vagy sportolót segítenek'
    )
    .addBasic('O-3: Olyan személyek, akik O-1 vagy O-2 hozzátartozói')

  get enabled() {
    return this.userDetails.extraordinaryAbility
      ? 'colorActive'
      : 'colorInactive'
  }
}
</script>
