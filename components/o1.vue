<template>
  <v-card :color="enabled" height="100%">
    <v-card-title class="justify-center">O1 Kivételes képességek</v-card-title>
    <v-card-text>
      <VisaInformation
        :visa-information="visaInformation"
        :greencard="true"
        eligible-for-work="true"
      />
      <VisaOpportunities :greencard="true" eligible-for-work="true" />
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { UserDetails } from '~/pages/index.vue'
import { VisaInformationData, VisaType } from '~/components/visaInformationData'

@Component
export default class O1Visa extends Vue {
  @Prop()
  userDetails!: UserDetails

  private visaInformation = new VisaInformationData()

    .withVisaType(VisaType.DUAL_INTENT)
    .withBasicInformation(
      'Az O vízumot olyan személyek kaphatják, akik kiemelkedő képességekkel rendelkeznek a tudományok, művészetek, az oktatás, az üzleti élet vagy a sport területén, vagy kiemelkedő eredményeket értek el a filmgyártás és televíziós műsorkészítés terén, illetve ilyen vízumot kaphatnak a fenti személyek nélkülözhetetlen támogató személyzetének tagjai.'
    )
    .withBasicInformation(
      'Nem bevándorló vizum, maximum 3 évnyi tartózkodásra, EB1re váltható'
    )
    .withExpandableInformation(
      'Kimagasló, nemzetközileg elismert díjat vagy legalább három dokumentumot az alábbiak közül',
      [
        'hazailag vagy nemzetközileg elismert díj vagy kitüntetés a kérelmező szakterületéről',
        'tagság olyan nemzetközi szervezetben, mely elismerten kiemelkedő teljesítményeket kiván meg tagságától',
        'szakfolyóiratokban és jelentős kereskedelmi publikációkban megjelent méltatás a külföldi kérelmező tevékenységéről az adott területen',
        'szakmabeliek munkáinak elbirálója egyéni vagy bizottsági szinten',
        'jelentős hozzájárulások a tudomány, az oktatás vagy az üzleti élet területén',
        'tudományos cikkek publikálása szakfolyóiratokban és egyéb jelentős médiában',
        'valamely neves intezményben kulcsfontosságú vagy magas beosztásban való alkalmazás',
        'magas fizetés vagy dijazás amelyet a jelentkező korábbi munkája elismeréseként kiérdemelt',
        'egyéb hasonló tanúbizonyságok, pl. kiváló szakemberek ajánlólevelei',
      ]
    )
    .withLink(
      'USCIS',
      'https://www.uscis.gov/working-in-the-united-states/temporary-workers/o-1-visa-individuals-with-extraordinary-ability-or-achievement'
    )
    .withLink(
      'immigrationvisaUSA',
      'https://immigrationvisausa.com/hu/munkavallalasi-vizumok#O-1vizumHung'
    )

  get enabled() {
    return this.userDetails.extraordinaryAbility
      ? 'colorActive'
      : 'colorInactive'
  }
}
</script>
