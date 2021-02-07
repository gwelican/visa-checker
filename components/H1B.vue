<template>
  <v-card>
    <v-card-title class="justify-center">H1B</v-card-title>
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
export default class H1BVisa extends Vue {
  @Prop()
  userDetails!: UserDetails

  visaInformation = new VisaInformation()
    .addBasic('Speciális szakmában nyújtana szolgáltatásokat')
    .addBasic('Honvédelmi minisztériumnak nyújtana különleges szolgáltatásokat')
    .addBasic('Kutatói és fejlesztői szolgáltatásokat nyújt')
    .addBasic('Minimum BSc / főiskolai diploma')
    .addBasic('Különleges tudás, ismeret birtokában van')
    .addBasic('A feladat elvégzésére CSAK a jelölt képes')
    .addBasic('Munkáltatótól származó munkaajánlat')
    .addBasic('VAGY')
    .addBasic('Divatmodell')
}
</script>
