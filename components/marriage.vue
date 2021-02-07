<template>
  <v-card :color="enabled" height="100%">
    <v-card-title class="justify-center">Hazassag</v-card-title>
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
export default class Marriage extends Vue {
  @Prop()
  userDetails!: UserDetails

  private visaInformation = new VisaInformation()

  get enabled() {
    return !this.userDetails.maritalStatus && !this.userDetails.selfPetition
      ? 'colorActive'
      : 'colorInactive'
  }
}
</script>
