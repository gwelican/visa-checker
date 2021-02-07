<template>
  <v-card :color="enabled" height="100%">
    <v-card-title class="justify-center">
      EB2: Kivételes képességek
    </v-card-title>
    <v-card-text>
      <requirements :visa-information="visaInformation"></requirements>
      <VisaOpportunities :greencard="true" :work="true" />
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { UserDetails } from '~/pages/index.vue'
import { VisaInformation } from '~/components/visainformation'

@Component
export default class EB2Ea extends Vue {
  @Prop()
  userDetails!: UserDetails

  private visaInformation = new VisaInformation()
    .withBasicInformation('Kivételes képesség:')
    .withBasicInformation('- tudományokban')
    .withBasicInformation('- művészetekben')
    .withBasicInformation('- üzleti életben')
    .withBasicInformation(
      'Kivételes képesség: "jelentősen meghaladja az adott területen tapasztalható szintet" '
    )
    .withBasicInformation('Munkaajánlat szükséges USA cégtől')
    .withBasicInformation(
      'Minimum 3 kritérium teljesítése a felsorolt 7-ből "*Criteria" fejezetben:'
    )
    .withLink(
      'uscis',
      'https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-second-preference-eb-2'
    )
    .withExpandableInformation(
      'Minimum 3 kritérium teljesítése a felsorolt 7-ből "*Criteria" fejezetben:',
      [
        'Hivatalos tanulmányi nyilvántartás, amely azt mutatja, hogy rendelkezik diplomával, bizonyítvánnyal vagy hasonló bizonyítvánnyal egy főiskolán, egyetemen vagy más, a kivételes képességű területekhez kapcsolódó oktatási intézményben.',
        'Bizonyítékok, amelyek legalább 10 éves teljes munkaidős tapasztalatot dokumentálnak az Ön szakmájában (munkakönyv, TB-könyv stb)',
        'Szakma gyakorlásának engedélye vagy szakmája, foglalkozása igazolása (bizonyítványok, igazolások)',
        'Bizonyíték arra, hogy olyan fizetést vagy más díjazást ért el a munkájáért, szolgáltatásaiért, ami bizonyítja kivételes képességeit',
        'Tagság szakmai szövetség(ek) ben',
        'Szakmai társaságok, kormányzati szervek, szakmai vagy üzleti szervezetek elismerik elért eredményeit és az iparához vagy szakterületéhez való jelentős hozzájárulást',
        'A jogosultság egyéb összehasonlítható bizonyítéka is elfogadható.',
      ]
    )

  get enabled() {
    return this.userDetails.extraordinaryAbility
      ? 'colorActive'
      : 'colorInactive'
  }
}
</script>
