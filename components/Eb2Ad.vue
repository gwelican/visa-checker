<template>
  <v-card :color="enabled" height="100%">
    <v-card-title class="justify-center">
      EB2: Minimum MSc végzettség
    </v-card-title>
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
export default class EB2Ad extends Vue {
  @Prop()
  userDetails!: UserDetails

  private visaInformation = new VisaInformation()
    .withBasicInformation('Minimum MSc VAGY PhD végzettség')
    .withBasicInformation(
      '5 év munkatapasztalat végzettségnek megfelelő területen'
    )
    .withBasicInformation('Munkaajánlat szükséges USA cégtől')

  get enabled() {
    return this.userDetails.msc ? 'colorActive' : 'colorInactive'
  }
}
</script>
