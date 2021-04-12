<template>
  <v-card :color="enabled" height="100%">
    <v-card-title class="justify-center">
      EB1: Kimagasló Professzor/kutató
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
export default class EB1VisaOutstanding extends Vue {
  @Prop()
  userDetails!: UserDetails

  private visaInformation = new VisaInformationData()
    .withVisaType(VisaType.IMMIGRANT)
    .withBasicInformation(
      'Külön zöldkártya kategória létezik azon kiemelkedő kutatók és professzorok számára, akik szakterületükön belül, legalább három év gyakorlattal rendelkeznek, valamint munkájukért nemzetközi elismerésben részesültek.'
    )
    .withBasicRequirement('Nemzetközi elismerésben részesültek munkájukér')
    .withBasicRequirement('Legalább három év gyakorlattal rendelkeznek')
    .withBasicRequirement(
      'Teljes munkaideju tanári/eloadói munkaajánlattal rendelkeznek, vagy olyan magán egyetemnél végeznek kutatói munkát, ahol másik három, teljes munkaideju kutató dolgozik, akik megjelentettek munkájukról nyomtatványokat, cikkeket.'
    )
    .withExpandableInformation(
      'Minimum 2 kritérium teljesítése a "**Examples of Documentary Evidence That A Person is an Outstanding Professor Or Researcher" fejezetben:',
      [
        'Dokumentumot arról, hogy a szakterületén belül kiemelkedo teljesítményéért elismerésben, díjban részesült,',
        'Tagja a szakterületéhez kapcsolódó szervezeteknek, melynek tagjai kiemelkedo szaktudású emberek,',
        'Szakfolyóiratokban megjelent cikkek a kérvényező munkájáról. A cikk magába kell, hogy foglalja a szerző nevét, címét, a megjelentetés idejét valamint a folyóirat címét.',
        'A rendkivüli tehetségu személy részvételét, mint egyén vagy pedig, mint egy fórum tagjaként, a szakirányához közeleső zsurimunkában,',
        'Dokumentumok a szakirodalomban megjelentetett kísérletekrol, valamint kutatói munkájának az eredményeiről, vagy',
        'Bizonyíték kutatói munkájának a szakterületéhez való hozzájárulásáról, valamint nyomtatványok e munka nemzetközi hírnevéről.',
      ]
    )
    .withLink(
      'USCIS',
      'https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-first-preference-eb-1'
    )
    .withLink(
      'immigrationvisausa',
      'https://immigrationvisausa.com/hu/munkavallalasi-zoldkartya#OutProfResEB1Hungarian'
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
