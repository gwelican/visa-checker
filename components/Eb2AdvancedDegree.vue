<template>
  <v-card :color="enabled" height="100%">
    <v-card-title class="justify-center">
      EB2: Magas végzettség(msc, phd)
    </v-card-title>
    <v-card-text>
      <VisaInformation :visa-information="visaInformation" />
      <VisaOpportunities :greencard="true" eligible-for-work="true" />
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { UserDetails } from '~/pages/index.vue'
import { VisaInformationData, VisaType } from '~/components/visaInformationData'

@Component
export default class EB2Ad extends Vue {
  @Prop()
  userDetails!: UserDetails

  private visaInformation = new VisaInformationData()
    .withVisaType(VisaType.IMMIGRANT)
    .withBasicInformation(
      'Azon személyek, akik nem tudnak eleget tenni az EB-1-es rendkivüli tehetségű egyének számára előrelátott zöldkártya kategória követelményeinek, de magas szakképesítéssel rendelkeznek, kérvényezhetik az EB-2-es magas szakképesítésu egyének számára elorelátott zöldkártyát. Azonban ezen a kategórián belül mindenki számára szükséges a "Munkaügyi Igazolás" beszerzése. A kérvényezőnek úgyszintén rendelkeznie kell amerikai munkaadóval, jótékonysági (non-profit) illetve tanulmányi szervezettel, aki kérvényezik számára a zöldkártyát.'
    )
    .withBasicRequirement('Állásajánlat egy Egyesült Államokbeli munkáltatótól')
    .withBasicRequirement(
      'MSc/PhD végzettség vagy Bsc + 5 ev szakmai tapasztalat pályán belül. Ha a pozíció betöltéséhez általában doktori címet kérnek, akkor nem lehet kiváltani Bscvel'
    )
    .withLink(
      'USCIS',
      'https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-second-preference-eb-2'
    )
    .withLink(
      'immigrationvisausa',
      'https://immigrationvisausa.com/hu/munkavallalasi-zoldkartya#AdvDegProEB2Hungarian'
    )
    .withExpandableInformation('Kötelező dokumentumok', [
      'Hivatalos dokumentumok amerikai felsőfokú oktatási intézményektől (diplomák, elismervények, bizonyítványok) vagy ennek megfelelő külföldi felsőfokú oktatási intézménytől vagy',
      'Hivatalos dokumentum olyan amerikai oktatási intézménytol, amely szerint a kérvényező legalább egyetemi végzettséggel rendelkezik, vagy ezzel megegyező külföldi iskolai végzettséggel. Ez mellé fel kell mutatnia legalább öt éves szakmai gyakorlatot is, amelyet az eddigi munkaadónak igazolnia kell.',
      'Amennyiben a munkaterület amelyre a kérvényező átadja a kérvényét nem szerepel a munkaterületek szaksorában, a kérvényezonek fel kell mutatnia bizonyítékot arról, hogy ehhez a munkához, egyetemi végzettség szükséges (a munkaadó kijelentése a magas szakképesítés szükségéről).',
    ])

  get enabled() {
    return this.userDetails.msc && !this.userDetails.selfPetition
      ? 'colorActive'
      : 'colorInactive'
  }
}
</script>
