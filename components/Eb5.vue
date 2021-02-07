<template>
  <v-card :color="enabled">
    <v-card-title class="justify-center">EB5 </v-card-title>
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
export default class EB5Visa extends Vue {
  @Prop()
  userDetails!: UserDetails

  private visaInformation = new VisaInformation()
    .addBasic('Megfelelő mértékű befektetés USA területén')
    .addBasic('Terv szerint 10 munkahely létrehozása/megtartása')

  get enabled() {
    return this.userDetails.eb5money ? 'colorActive' : 'colorInactive'
  }
}
</script>
