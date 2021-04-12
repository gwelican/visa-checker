<template>
  <v-card :color="enabled" height="100%">
    <v-card-title class="justify-center">
      EB1: Kivételes képességek
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
export default class EB1VisaExtraOrdinary extends Vue {
  @Prop()
  userDetails!: UserDetails

  private visaInformation = new VisaInformationData()
    .withVisaType(VisaType.IMMIGRANT)
    .withBasicInformation(
      'Rendkivüli tehetségű emberek a muvészetek, tudományok, üzlet és a sport területérol kérvényezhetik az EB-1-es zöldkártyát és a szaktudásuknak megfelelő területen dolgozhatnak.'
    )
    .withBasicInformation(
      'Ebben a zöldkártya kategóriában nem szükséges munkaajánlattal rendelkezni, valamint nem szükséges lefolytatni a Munkaügyi Hivatallal a munkahely meghírdetését és annak bizonyítását, hogy erre a munkára nincs amerikai munkás.'
    )
    .withBasicInformation(
      'Azon egyének akik az EB-1-es kategoriában kérvenyezik a zöldkártyát, akár sport, muvészetek, vagy pedig kutatások területén, bizonyitaniuk kell hogy tudásuk azon kevesek közé tartozik akik nemzetközi és hazai téren rendkívüli sikereket értek el. '
    )
    .withBasicInformation(
      'Sokan szereztek kimelkedő tehetségu zöldkártyát, ha nem is rendelkeztek egyetemi végzettséggel, doktorátussal, vagy pedig nagy nemzetközi hírnévvel. Sok esetben elegendő, ha bizonyítani tudják, azt hogy országukon belül, tudásuk, tehetségük a legjobbak közé sorolja a kérvényezőt.'
    )
    .withBasicRequirement(
      'bizonyítani kell, hogy a kérvényező munkája kiemelkedik a kortársak munkájából. Rendkivülinek tekinthető az a munka, amelyben a kérvényezőnek már mindenki által elismert helye van a művészi ágon belül és széleskörben elismert előadónak számít.'
    )
    .withExpandableInformation(
      'Minimum 3 kritérium teljesítése "*Criteria for Extraordinary Ability" fejezetben',
      [
        'Olyan nemzetközi és hazai elismervényeket, oklevéleket amelyek rendkivüli teljesítményről tanuskodnak;',
        'Olyan szövetségeknek a tagságát, akik rendkivüli teljesítményu egyénekkel foglalkoznak egy bizonyos területen belül;',
        'Különböző nyomtatványok, újságcikkek a rendkivüli képességu egyén munkájáról és sikeréről;',
        'Részvétel különböző bizottságok tagjaként, valamint zsurizés azon egyénekkel szemben, akik hasonló munkaterületen tevékenykednek;',
        'Tudományos munkával való hozzájárulások, amelyek kiemelkednek az adott szakterületen;',
        'Szerzője tudományos cikkeknek, nyomtatványoknak, könyveknek;',
        'Elismert szövetségek munkása;',
        'Magas fizetés, esetleg pénzjutalom a szakterületen adott munkáért; vagy',
        'Ajánlólevél a szakterületen rendkivüli egyéniségektől;',
      ]
    )
    .withLink(
      'USCIS',
      'https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-first-preference-eb-1'
    )

  get enabled() {
    return this.userDetails.extraordinaryAbility ||
      this.userDetails.selfPetition
      ? 'colorActive'
      : 'colorInactive'
  }
}
</script>
