<template>
  <v-card :color="enabled" height="100%">
    <v-card-title class="justify-center">EB5 </v-card-title>
    <v-card-text>
      <requirements :visa-information="visaInformation"></requirements>
      <VisaOpportunities :greencard="true" eligible-for-work="true" />
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { UserDetails } from '~/pages/index.vue'
import { VisaInformation } from '~/components/visainformation'

@Component
export default class EB5Visa extends Vue {
  @Prop()
  userDetails!: UserDetails

  private visaInformation = new VisaInformation()
    .withBasicInformation('Megfelelő mértékű befektetés USA területén')
    .withBasicInformation('Terv szerint 10 munkahely létrehozása/megtartása')

  get enabled() {
    return this.userDetails.eb5money ? 'colorActive' : 'colorInactive'
  }
}
</script>
