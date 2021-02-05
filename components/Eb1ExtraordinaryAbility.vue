<template>
  <v-card :color="enabled">
    <v-card-title class="justify-center">
      EB1: Kivételes képességek
    </v-card-title>
    <v-card-text>
      <requirements :requirements="requirements"></requirements>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { UserDetails } from '~/pages/index.vue'

@Component
export default class EB1VisaExtraOrdinary extends Vue {
  @Prop()
  userDetails!: UserDetails

  private requirements = [
    'Kivételes képesség:',
    '- tudományokban',
    '- művészetekben',
    '- üzleti életben',
    '- oktatásban',
    '- sportban',
    'Kivételes képesség: nemzeti vagy nemzetközi elismerés az eredményekről, versenyeredmények, oklevelek ',
    'Minimum 3 kritérium teljesítése a felsorolt 10-ből "*Criteria for Extraordinary Ability" fejezetben:',
    'https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-first-preference-eb-1',
  ]

  get enabled() {
    return this.userDetails.extraordinaryAbility ||
      this.userDetails.selfpetition
      ? 'colorActive'
      : 'colorInactive'
  }
}
</script>
