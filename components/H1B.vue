<template>
  <v-card :color="enabled" height="100%">
    <v-card-title class="justify-center">H1B</v-card-title>
    <v-card-text>
      <VisaInformation :visa-information="visaInformation" />
      <VisaOpportunities
        :greencard="false"
        eligible-for-work="true"
        :eligible-for-green-card="true"
        green-card-eligibility-message="Munkaltaton keresztul"
      />
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { UserDetails } from '~/pages/index.vue'
import { VisaInformationData, VisaType } from '~/components/visaInformationData'

@Component
export default class H1BVisa extends Vue {
  @Prop()
  userDetails!: UserDetails

  visaInformation = new VisaInformationData()
    .withVisaType(VisaType.DUAL_INTENT)
    .withBasicInformation(
      'H-1B vízumot kell igényelnie, ha azért utazik az Egyesült Államokba, hogy egy előre egyeztetett szakmai feladattal kapcsolatos szolgáltatást nyújtson. Az erre való jogosultsághoz legalább bachelor (vagy azzal egyenértékű) diplomával kell rendelkeznie azon a szakterületen, amelyben a munkát végezni fogja.'
    )
    .withBasicRequirement(
      'A külföldi szakember rendelkezzen a meghirdetett vagy ahhoz közeli szakterületen alapszakon, vagy magasabb fokozaton felőfokú végzettséggel. Az is elfogadható, ha a szakembernek a felsőoktatással egyenértékű munkában eltöltött gyakorlata van, és az is, ha azonos területről rendelkezik munkahelyi tapasztalattal és felsőfokú tanulmányokkal. 3 év gyakorlati tapasztalat egyenértékű egy év felsőfokú tanulmánnyal'
    )
    .withBasicRequirement('Állásajánlat egy Egyesült Államokbeli munkáltatótól')
    .withBasicRequirement(
      'A szakismeretet igénylő munkakör definició szerint olyan munkakör, melynek ellátásához felsőfokokú végzettség szükséges legalább alapszakon (BA, BSc, BEng) és amely munkakört az iparágban rendszeresen ilyen végzettséggel látnak el'
    )
    .withBasicRequirement(
      'Az USA munkáltatónak a H-1B vízummal rendelkező számára az u.n. szokásos bért kell fizetnie, azaz azt az átlagbért, amit az adott munkakörben az USA adott régiójában dolgozóknak fizetnek'
    )
    .withLink(
      'USCIS',
      'https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-1b-specialty-occupations-dod-cooperative-research-and-development-project-workers-and-fashion'
    )
    .withLink(
      'ImmigrationVisaUSA',
      'https://immigrationvisausa.com/hu/munkavallalasi-vizumok#H-1BvizumHung'
    )
    .withLink(
      'ustraveldocs',
      'https://www.ustraveldocs.com/hu_hu/hu-niv-typework.asp#'
    )

  get enabled() {
    return !this.userDetails.selfPetition &&
      (this.userDetails.bsc || this.userDetails.msc)
      ? 'colorActive'
      : 'colorInactive'
  }
}
</script>
