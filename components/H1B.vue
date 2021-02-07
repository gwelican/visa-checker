<template>
  <v-card>
    <v-card-title class="justify-center">H1B</v-card-title>
    <v-card-text>
      <requirements :visa-information="visaInformation" />
      <VisaOpportunities :greencard="false" :work="true" />
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
    .withBasicInformation('Speciális szakmában nyújtana szolgáltatásokat')
    .withBasicInformation(
      'Honvédelmi minisztériumnak nyújtana különleges szolgáltatásokat'
    )
    .withBasicInformation('Kutatói és fejlesztői szolgáltatásokat nyújt')
    .withBasicInformation('Minimum BSc / főiskolai diploma')
    .withBasicInformation('Különleges tudás, ismeret birtokában van')
    .withBasicInformation('A feladat elvégzésére CSAK a jelölt képes')
    .withBasicInformation('Munkáltatótól származó munkaajánlat')
    .withBasicInformation('VAGY')
    .withBasicInformation('Divatmodell')
}
</script>
