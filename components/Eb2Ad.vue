<template>
  <v-card :color="enabled">
    <v-card-title class="justify-center">
      EB2: Minimum MSc végzettség
    </v-card-title>
    <v-card-text>
      <requirements :visa-information="visaInformation"></requirements>
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
    .addBasic('Minimum MSc VAGY PhD végzettség')
    .addBasic('5 év munkatapasztalat végzettségnek megfelelő területen')
    .addBasic('Munkaajánlat szükséges USA cégtől')

  get enabled() {
    return this.userDetails.msc ? 'colorActive' : 'colorInactive'
  }
}
</script>
