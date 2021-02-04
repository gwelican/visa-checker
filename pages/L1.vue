<template>
  <v-card>
    <v-card-title>L-1 Intracompany Transferee</v-card-title>
    <v-card-text>
      Requirements:
      <requirements :requirements="requirements" />
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { UserDetails } from '~/pages/index.vue'

@Component({})
export default class L1 extends Vue {
  @Prop()
  userDetails!: UserDetails

  requirements = [
    'Az elmult 3 evben dolgoztal, olyan cegnek, legalabb 1' +
      'evig megszakitas nelkul, melynek van az egyesult allamokban\n' +
      'irodaja',
  ]
}
</script>
