<template>
  <v-card height="100%">
    <v-card-title class="justify-center">F1</v-card-title>
    <v-card-text>
      <requirements :visa-information="visaInformation" />
      <VisaOpportunities :greencard="false" :work="true" />
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { UserDetails } from '~/pages/index.vue'
import { VisaInformation } from '~/components/visainformation'

@Component
export default class F1Visa extends Vue {
  @Prop()
  userDetails!: UserDetails

  private visaInformation = new VisaInformation()
    .withBasicInformation('Felvétel elnyerése amerikai egyetemre esetben')
    .withBasicInformation('Tanulmányok idejére érvényes')
}
</script>
