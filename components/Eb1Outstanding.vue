<template>
  <v-card :color="enabled">
    <v-card-title class="justify-center">
      EB1: Kimagasló Professzor/kutató</v-card-title
    >
    <v-card-text>
      <requirements :requirements="requirements"></requirements>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { UserDetails } from '~/pages/index.vue'

@Component
export default class EB1VisaOutstanding extends Vue {
  @Prop()
  userDetails!: UserDetails

  private requirements = [
    'Nemzetközi elismerés birtokosa',
    'Adott tudományterületen minimum 3 éves tapasztalat oktatóként vagy kutatóként',
    'Mindenképpen USA területén kell tartózkodnia pályájának folytatásához (egyetemen vagy privát munkáltatónál)',
    'Minimum 2 kritérium teljesítése a felsorolt 6-ból "**Examples of Documentary Evidence That A Person is an Outstanding Professor Or Researcher" fejezetben:',
    'https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-first-preference-eb-1',
  ]

  get enabled() {
    return this.userDetails.professor || this.userDetails.extraordinaryAbility
      ? 'colorActive'
      : 'colorInactive'
  }
}
</script>
