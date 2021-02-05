<template>
  <v-card>
    <v-card-title class="justify-center">L-1</v-card-title>
    <v-card-text>
      <requirements :requirements="requirements" />
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { UserDetails } from '~/pages/index.vue'

@Component({})
export default class L1Visa extends Vue {
  @Prop()
  userDetails!: UserDetails

  requirements = [
    'Az elmult 3 evben dolgoztal, olyan cegnek, legalabb 1' +
      'evig megszakitas nelkul, melynek van az egyesult allamokban\n' +
      'irodaja',
  ]
}
</script>
