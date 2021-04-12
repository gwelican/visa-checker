<template>
  <v-card :color="enabled" height="100%">
    <v-card-title class="justify-center"> EB2: Nemzeti Érdek </v-card-title>
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
export default class EB2Niw extends Vue {
  @Prop()
  userDetails!: UserDetails

  private visaInformation = new VisaInformationData()
    .withVisaType(VisaType.IMMIGRANT)
    .withBasicInformation(
      'A Szövetségi Bevándorlási Hivatal (U.S. Citizenship and Immigration Services, a továbbiakban USCIS) kivételes esetekben felmentheti az EB-2 zöldkártya kérelmezőt a Munkaügyi Igazolás megszerzése alól. Ilyen felmentés a National Interest Waiver amit az USCIS akkor ad, ha a kérelmező bizonyítani tudja, hogy szakismeretei nagymértékben szolgálnának az USA nemzeti érdekeit. Ahhoz, hogy a kérelmező ezen az alapon megkapja a Munkaügyi Igazolás alóli mentességet meg kell feleljen az alábbi négy követelménynek.'
    )
    .withBasicRequirement(
      'EB2: Magas végzettség vagy EB2: Kivételes képzettségnek meg kell felelni'
    )
    .withBasicRequirement(
      'A jelentkező javasolt tevékenysége országos szintű hasznossággal bírjon'
    )
    .withBasicRequirement(
      'A jelentkező lényegesen jobban szolgálja majd az USA nemzeti érdekeit mint egy hasonló, legalább azonos képzettségű USA munkaerő tenné azt.'
    )
    .withExpandableInformation(
      'A jelentkező alapvetően fontos és értékteremtő munkaterületre kerüljön. Ilyen munkaterületek azok, amelyek:',
      [
        'hozzájárulnak az USA gazdaságának növekedéséhez,',
        'növelik USA dolgozók bérét és javítják azok munkakörülményeit,',
        'gyermekek és alul-képzett munkások számára hatékonyabb oktatási és képzési programokat hoznak létre,',
        'javítják az egészségügyi ellátást,',
        'anyagilag elérhető lakásmegoldást biztosítanak a fiatal, az idős és a rászorult USA lakosságnak,',
        'hozzájárulnak az USA környezetvédelmének fejlesztéséhez és természeti erőforrásainak hatékonyabb kihasználásához,',
        'ill. amelyeket valamely érdekelt USA kormányszerv kérelmez.',
      ]
    )
    .withLink(
      'USCIS',
      'https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-second-preference-eb-2'
    )
    .withLink(
      'immigrationvisausa',
      'https://immigrationvisausa.com/hu/munkavallalasi-zoldkartya#NIWHungarian'
    )

  get enabled() {
    return this.userDetails.selfPetition ||
      (this.userDetails.msc && this.userDetails.extraordinaryAbility)
      ? 'colorActive'
      : 'colorInactive'
  }
}
</script>
