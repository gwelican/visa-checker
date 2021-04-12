<template>
  <v-card :color="enabled" height="100%">
    <v-card-title class="justify-center">
      EB1: Nemzetközi cégvezető
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
export default class EB1VisaManager extends Vue {
  @Prop()
  userDetails!: UserDetails

  private visaInformation = new VisaInformationData()
    .withVisaType(VisaType.IMMIGRANT)
    .withBasicInformation(
      'Amennyiben rendelkezik saját céggel hazájában, valamint az Egyesült Államokban is, és a vállalat legalább egy évig üzemelt hazánkban, kérvényezhető a nemzetközi menedzseri zöldkártya. Úgyszintén, ha valaki menedzseri vagy igazgatói pozíciót tölt be egy cégnél, aminek a leányvállalata az Egyesült Államokban van, kérvényezheti a zöldkártyát, miután véglegesítette az áthelyezését.'
    )
    .withBasicRequirement(
      'A külföldi cég és az amerikai cég között szoros kapcsolat kell, hogy legyen. Ugyanazon személyek rendelkeznek tulajdonjoggal és irányítással mindkét cégben, vagy ugyanazon emberek csoportja irányítja mindkét vállalkozást.'
    )
    .withBasicRequirement(
      'A menedzser szélesköru munkafelügyelettel rendelkezik, irányítja a munkásokat, valamint igazgatja az amerikai céggel kapcsolatos ügyeket.'
    )
    .withBasicRequirement(
      'A menedzser legalább egy teljes évet dolgozott a hazai cégnél az elmúlt három évbol, mielott kérvényezte volna az áthelyezését az Egyesült Államokba.'
    )
    .withLink(
      'USCIS',
      'https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-first-preference-eb-1'
    )
    .withLink(
      'immigrationvisausa',
      'https://immigrationvisausa.com/hu/munkavallalasi-zoldkartya#MultNatMgrEB1Hungarian'
    )

  get enabled() {
    return this.userDetails.manager ? 'colorActive' : 'colorInactive'
  }
}
</script>
