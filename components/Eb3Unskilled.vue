<template>
  <v-card :color="enabled" height="100%">
    <v-card-title class="justify-center">EB3: képzetlen munkaerő</v-card-title>
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
export default class EB3VisaUnskilled extends Vue {
  @Prop()
  userDetails!: UserDetails

  private visaInformation = new VisaInformationData()
    .withVisaType(VisaType.IMMIGRANT)
    .withBasicInformation(
      'Szakemberek és betanított munkások kérvényezhetik a zöldkártyát az EB-3-as kategóriában, azonban ebben a kategóriában kötelező minden kérvényezőnek "Munkaügyi Igazolást" szereznie. A bevándorlónak ugyszintén rendelkeznie kell szponzorral (tamogatóval) amerikai céggel, vagy nem nyereségcélú társasággal (non-profit), valamint oktatási intézménnyel - amely kérvényezi a zöldkártyát a bevándorló számára.'
    )
    .withBasicRequirement('Állásajánlat egy Egyesült Államokbeli munkáltatótól')
    .withBasicRequirement(
      'Munkája ellátásához kevesebb mint 2 év képzés vagy tapasztalat szükséges'
    )
    .withBasicRequirement(
      'Olyan munkakörben dolgozik, amelynek elvégzéséhez az Egyesült Államokban nem áll rendelkezésre munkavállaló'
    )
    .withLink(
      'USCIS',
      'https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-third-preference-eb-3'
    )
    .withLink(
      'immigrationvisausa',
      'https://immigrationvisausa.com/hu/munkavallalasi-zoldkartya#ProSpWEB3Hungarian'
    )

  get enabled() {
    return !this.userDetails.selfPetition ? 'colorActive' : 'colorInactive'
  }
}
</script>
