<template>
  <v-card>
    <v-card-title class="justify-center">H1B</v-card-title>
    <v-card-text>
      <requirements :requirements="requirements" />
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { UserDetails } from '~/pages/index.vue'

@Component
export default class H1BVisa extends Vue {
  @Prop()
  userDetails!: UserDetails

  requirements = [
    'Speciális szakmában nyújtana szolgáltatásokat',
    'Honvédelmi minisztériumnak nyújtana különleges szolgáltatásokat',
    'Kutatói és fejlesztői szolgáltatásokat nyújt',
    'Minimum BSc / főiskolai diploma',
    'Különleges tudás, ismeret birtokában van',
    'A feladat elvégzésére CSAK a jelölt képes',
    'Munkáltatótól származó munkaajánlat',
    'VAGY',
    'Divatmodell',
  ]
}
</script>
