<template>
  <v-card :color="enabled" height="100%">
    <v-card-title class="justify-center">EB5 </v-card-title>
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
export default class EB5Visa extends Vue {
  @Prop()
  userDetails!: UserDetails

  private visaInformation = new VisaInformationData()
    .withVisaType(VisaType.IMMIGRANT)
    .withBasicInformation(
      'Az EB-5 Bevándorló Beruházó Program értelmében 900 ezer dollár beruházása egy u.n. Regionális Központba zöldkártyára jogosítja fel a külföldi beruházót anélkül, hogy saját maga az USA-ban céget alapítana és azt menedzselné. Ez a típusú bevándorlás lehetővé teszi, hogy a befektető az USA bármely államában letelepedjen, ott bármilyen tevékenységet folytasson, pl. vállalkozása legyen, alkalmazottként dolgozzon, tanuljon vagy nyugállományba vonuljon. '
    )
    .withBasicRequirement(
      'A befektetőnek bizonyítania kell, hogy a befektetett összeget törvényes úton szerezte, pl. munkavállalóként, vállalkozóként, beruházás útján, örökléssel, vagy ajándékba kapta.'
    )
    .withBasicRequirement(
      'A Regionális Központnak bizonyítaniuk kell, hogy az újonnan létrehozott üzleti vállalkozás müködése révén befektetőnként legalább 10 új munkahely létesül. '
    )
    .withLink(
      'USCIS',
      'https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-fifth-preference-eb-5/about-the-eb-5-visa-classification'
    )
    .withLink(
      'immigrationvisausa',
      'https://immigrationvisausa.com/hu/eb5-immigrant-investor-program'
    )

  get enabled() {
    return this.userDetails.eb5money ? 'colorActive' : 'colorInactive'
  }
}
</script>
