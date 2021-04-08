<template>
  <v-card :color="enabled" height="100%">
    <v-card-title class="justify-center">H1B</v-card-title>
    <v-card-text>
      <requirements :visa-information="visaInformation" />
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
import { VisaInformation } from '~/components/visainformation'

@Component
export default class H1BVisa extends Vue {
  @Prop()
  userDetails!: UserDetails

  visaInformation = new VisaInformation()
    .withBasicInformation(
      'Az USA munkáltató tegyen állásajánlatot a külföldi szakembernek egy a szakismeretét igénylő munkakör betöltésére'
    )
    .withBasicInformation(
      'A szakismeretet igénylő munkakör definició szerint olyan munkakör, melynek ellátásához felsőfokokú végzettség szükséges legalább alapszakon (BA, BSc, BEng) és amely munkakört az iparágban rendszeresen ilyen végzettséggel látnak el'
    )
    .withBasicInformation(
      'A külföldi szakember rendelkezzen a meghirdetett vagy ahhoz közeli szakterületen alapszakon, vagy magasabb fokozaton felőfokú végzettséggel. Az is elfogadható, ha a szakembernek a felsőoktatással egyenértékű munkában eltöltött gyakorlata van, és az is, ha azonos területről rendelkezik munkahelyi tapasztalattal és felsőfokú tanulmányokkal. 3 év gyakorlati tapasztalat egyenértékű egy év felsőfokú tanulmánnyal'
    )
    .withBasicInformation(
      'Az USA munkáltatónak a H-1B vízummal rendelkező számára az u.n. szokásos bért kell fizetnie, azaz azt az átlagbért, amit az adott munkakörben az USA adott régiójában dolgozóknak fizetnek'
    )
    .withLink(
      'info',
      'https://immigrationvisausa.com/hu/munkavallalasi-vizumok#H-1BvizumHung'
    )

  get enabled() {
    return !this.userDetails.selfPetition &&
      (this.userDetails.bsc || this.userDetails.msc)
      ? 'colorActive'
      : 'colorInactive'
  }
}
</script>
