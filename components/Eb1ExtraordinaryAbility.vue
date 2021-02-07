<template>
  <v-card :color="enabled">
    <v-card-title class="justify-center">
      EB1: Kivételes képességek
    </v-card-title>
    <v-card-text>
      <requirements :visa-information="visaInformation" />
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
  import { Component, Prop, Vue } from 'nuxt-property-decorator'
  import { UserDetails } from '~/pages/index.vue'
  import { VisaInformation } from '~/components/visainformation'

  @Component
  export default class EB1VisaExtraOrdinary extends Vue {
  @Prop()
  userDetails!: UserDetails

  private visaInformation = new VisaInformation()
  .addBasic('Kivételes képesség:')
  .addBasic('- tudományokban')
  .addBasic('- művészetekben')
  .addBasic('- üzleti életben')
  .addBasic('- oktatásban')
  .addBasic('- sportban')
  .addBasic(
  'Kivételes képesség: nemzeti vagy nemzetközi elismerés az eredményekről, versenyeredmények, oklevelek'
  )
  .addExpandable(
  'Minimum 3 kritérium teljesítése a felsorolt 10-ből "*Criteria for Extraordinary Ability" fejezetben',
  [
  'Bizonyíték kisebb nemzeti vagy nemzetközileg elismert díjak vagy kitüntetések átvételéről',
  'Bizonyíték tagságról a szakterület egyesületeiben, amely tagsághoz kiemelkedő teljesítményt követelnek',
  'Bizonyíték a rólad közzétett anyagra szakmai vagy nagy kereskedelmi kiadványokban vagy más jelentősebb médiában',
  'Bizonyíték arra, hogy felkérést kapott bíraként, mások munkájának értékelésére önállóan vagy testületi részvételben',
  'Bizonyíték az eredeti tudományos, művészeti, atlétikai vagy üzleti vonatkozású eredményeiről, amelyek nagy jelentőséggel bírnak a területen',
  'Bizonyíték a szakmai cikkek, szakmai vagy nagyobb szakfolyóiratokban vagy más nagy médiában írt tudományos cikkéről',
  'Bizonyíték arra, hogy munkáját művészi kiállításokon vagy bemutatókon mutatták be',
  'Bizonyíték arra, hogy a jeles szervezeteknél vezető vagy kritikus szerepet töltött be',
  'Bizonyíték arra, hogy magas fizetést vagy más jelentősen magas díjazást ért el az adott területen dolgozókkal szemben',
  'Bizonyíték az előadóművészetben elért kereskedelmi sikereidről',
  ]
  )

  get enabled() {
  return this.userDetails.extraordinaryAbility ||
  this.userDetails.selfPetition
  ? 'colorActive'
  : 'colorInactive'
  }
  }
</script>
