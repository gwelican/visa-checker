<template>
  <v-card :color="enabled">
    <v-card-title class="justify-center">
      EB1: Kivételes képességek
    </v-card-title>
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
export default class EB1VisaExtraOrdinary extends Vue {
  @Prop()
  userDetails!: UserDetails

  private visaInformation = new VisaInformation()
    .addBasic('Kivételes képesség:')
    .addBasic('- tudományokban')
    .addBasic('- művészetekben')
    .addBasic('- üzleti életben')
    .addBasic('- oktatásban')
    .addBasic('- sportban')
    .addBasic(
      'Kivételes képesség: nemzeti vagy nemzetközi elismerés az eredményekről, versenyeredmények, oklevelek'
    )
    .addExpandable(
      'Minimum 3 kritérium teljesítése a felsorolt 10-ből "*Criteria for Extraordinary Ability" fejezetben',
      [
        'Evidence of receipt of lesser nationally or internationally recognized prizes or awards for excellence',
        'Evidence of your membership in associations in the field which demand outstanding achievement of their members',
        'Evidence of published material about you in professional or major trade publications or other major media',
        'Evidence that you have been asked to judge the work of others, either individually or on a panel',
        'Evidence of your original scientific, scholarly, artistic, athletic, or business-related contributions of major significance to the field',
        'Evidence of your authorship of scholarly articles in professional or major trade publications or other major media',
        'Evidence that your work has been displayed at artistic exhibitions or showcases',
        'Evidence of your performance of a leading or critical role in distinguished organizations',
        'Evidence that you command a high salary or other significantly high remuneration in relation to others in the field',
        'Evidence of your commercial successes in the performing arts',
      ]
    )

  get enabled() {
    return this.userDetails.extraordinaryAbility ||
      this.userDetails.selfPetition
      ? 'colorActive'
      : 'colorInactive'
  }
}
</script>
