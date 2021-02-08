<template>
  <v-card :color="enabled" height="100%">
    <v-card-title class="justify-center">O1 Kivételes képességek</v-card-title>
    <v-card-text>
      <requirements :visa-information="visaInformation" />
      <VisaOpportunities :greencard="true" eligible-for-work="true" />
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

    .withBasicInformation('Nem bevándorló, maximum 3 évnyi tartózkodásra')
    .withBasicInformation('Kivételes képesség:')
    .withBasicInformation('- tudományokban')
    .withBasicInformation('- tanulmányokban')
    .withBasicInformation('- üzleti életben')
    .withBasicInformation('- sportban')
    .withBasicInformation('- művészetekben')
    .withBasicInformation('- színész vagy TV ipar elismert képviselője')
    .withBasicInformation(
      'O-2: Olyan személyek, akik O-1 kategóriás művészt vagy sportolót segítenek'
    )
    .withBasicInformation(
      'O-3: Olyan személyek, akik O-1 vagy O-2 hozzátartozói'
    )

  get enabled() {
    return this.userDetails.extraordinaryAbility
      ? 'colorActive'
      : 'colorInactive'
  }
}
</script>
