<template>
  <v-card :color="enabled" height="100%">
    <v-card-title class="justify-center">Hazassag</v-card-title>
    <v-card-text>
      <VisaInformation :visa-information="visaInformation" />
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { UserDetails } from '~/pages/index.vue'
import { VisaInformationData } from '~/components/visaInformationData'

@Component
export default class Marriage extends Vue {
  @Prop()
  userDetails!: UserDetails

  private visaInformation = new VisaInformationData()

  get enabled() {
    return !this.userDetails.maritalStatus && !this.userDetails.selfPetition
      ? 'colorActive'
      : 'colorInactive'
  }
}
</script>
