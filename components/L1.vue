<template>
  <v-card :color="enabled" height="100%">
    <v-card-title class="justify-center">L-1</v-card-title>
    <v-card-text>
      <requirements :visa-information="visaInformation" />
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
import { VisaInformation } from '~/components/visainformation'

@Component({})
export default class L1Visa extends Vue {
  @Prop()
  userDetails!: UserDetails

  visaInformation = new VisaInformation()
    .withBasicInformation(
      'Egyesült Államokba való beutazási kérelmét megelőző három évből legalább folyamatosan egy évig kellett hogy a nemzetközi cég alkalmazásában álljon az Egyesül Államokon kívül'
    )
    .withExpandableInformation('L1A', [
      'Vezető vagy manager pozícióban dolgozik az áthelyező cég Amerikai irodájának',
    ])
    .withExpandableInformation('L1B', [
      'Szaktudását használva dolgozik az áthelyező cég Amerikai irodájának',
    ])

  get enabled() {
    return !this.userDetails.selfPetition ? 'colorActive' : 'colorInactive'
  }
}
</script>
