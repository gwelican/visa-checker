<template>
  <v-card>
    <v-card-title class="justify-center">L-1</v-card-title>
    <v-card-text>
      <requirements :visa-information="visaInformation" />
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { UserDetails } from '~/pages/index.vue'
import { VisaInformation } from '~/components/visainformation'

@Component({})
export default class L1Visa extends Vue {
  @Prop()
  userDetails!: UserDetails

  visaInformation = new VisaInformation()
    .addBasic('Az elmúlt 3 évben dolgoztál, olyan cégnek, legalább 1')
    .addBasic('évig megszakítás nélkül, melynek van USA területén')
    .addBasic('irodája')
    .addBasic('Ismét ezen céghez mész dolgozni, de már az amerikai irodához')
}
</script>
