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
    'Az elmúlt 3 évben dolgoztál, olyan cégnek, legalább 1' +
      'évig megszakítás nélkül, melynek van USA területén' +
      'irodája',
    'Ismét ezen céghez mész dolgozni, de már az amerikai irodához',
  ]
}
</script>
