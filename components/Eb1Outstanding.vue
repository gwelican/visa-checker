<template>
  <v-card :color="enabled" height="100%">
    <v-card-title class="justify-center">
      EB1: Kimagasló Professzor/kutató
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
export default class EB1VisaOutstanding extends Vue {
  @Prop()
  userDetails!: UserDetails

  private visaInformation = new VisaInformation()
    .withBasicInformation('Munkaajánlat egy amerikai cégtől ')
    .withExpandableInformation(
      'Minimum 2 kritérium teljesítése a felsorolt 6-ból "**Examples of Documentary Evidence That A Person is an Outstanding Professor Or Researcher" fejezetben:',
      [
        'A kiemelkedő teljesítményért járó főbb díjak vagy díjak átvételének bizonyítéka',
        'Bizonyíték a tagságról olyan egyesületekben, amelyek megkövetelik tagjaiktól a kimagasló teljesítmény bemutatását',
        'Bizonyíték a szakmai publikációkban közzétett anyagról, amelyet mások írtak a jelölt tudományos területen végzett munkájáról',
        'Bizonyíték a részvételre - testületben vagy egyénileg - mások munkájának bírájaként ugyanazon vagy a vele rokon tudományos területen',
        'Bizonyíték a "felfedezés jellegű" tudományos vagy tudományos kutatási hozzájárulásról a szakterületen',
        'Bizonyíték a szakterület tudományos könyveinek vagy cikkeinek (nemzetközi forgalommal bíró tudományos folyóiratokban) szerzőségéről',
      ]
    )
    .withLink(
      'USCIS',
      'https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-first-preference-eb-1'
    )

  get enabled() {
    return (this.userDetails.professor ||
      this.userDetails.extraordinaryAbility) &&
      !this.userDetails.selfPetition
      ? 'colorActive'
      : 'colorInactive'
  }
}
</script>
