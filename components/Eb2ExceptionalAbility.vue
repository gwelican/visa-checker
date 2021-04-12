<template>
  <v-card :color="enabled" height="100%">
    <v-card-title class="justify-center">
      EB2: Kivételes képességek
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
export default class EB2Ea extends Vue {
  @Prop()
  userDetails!: UserDetails

  private visaInformation = new VisaInformationData()
    .withVisaType(VisaType.IMMIGRANT)
    .withBasicInformation(
      'Azon személyek, akik nem tudnak eleget tenni az EB-1-es Rendkivüli képességu személyek számára létrehozott zöldkártya kategóriának, de kiemelkedő képességgel rendelkeznek a muvészet, tudomány vagy az üzletágak terén, kérvényezhetik az EB-2-es zöldkártyát, amely ezen személyek számára áll rendelkezésre. Ebben a kategóriában kötelező a "Munkaügyi hivatal" jóváhagyásának a kérvényezése. A kérvényezőnek úgyszintén rendelkeznie kell támogatóval, kezeskedovel, ami lehet egy amerikai cég vagy (non-profit szervezet) szövetség, oktatási intézmény, amely kérvényezi számára a zöldkártyát.'
    )
    .withBasicRequirement('Állásajánlat egy Egyesült Államokbeli munkáltatótól')
    .withExpandableInformation(
      'Minimum 3 kritérium teljesítése a felsorolt 7-ből "*Criteria" fejezetben:',
      [
        'Hivatalos dokumentumok a kérvényező iskolai végzettségérol, diplomájáról, elismerésekrol, egyetemi oklevél vagy más oktatasi intézmények elismeréseiről.',
        'Ajánlólevelek az eddigi munkaadótól, amely legalább tíz év gyakorlatról szólnak',
        'Engedély azon személyek számára, akiknek munkájához az Egyesült Államokban külön engedély szükséges: orvosok, ügyvédek, stb.',
        'Bizonyíték arról, hogy fizetésük, honoráriumuk, az ország átlagfizetéséhez képest magasabb.',
        'Szakmabeli szervezetekben való tagság.',
        'Elismervény a területen dolgozó szaktársaktól, állami személyiségektol, magán- valamint társadalmi szervezetektől.',
      ]
    )
    .withLink(
      'USCIS',
      'https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-second-preference-eb-2'
    )
    .withLink(
      'immigrationvisausa',
      'https://immigrationvisausa.com/hu/munkavallalasi-zoldkartya#ExcAbilEB2Hungarian'
    )

  get enabled() {
    return this.userDetails.extraordinaryAbility
      ? 'colorActive'
      : 'colorInactive'
  }
}
</script>
