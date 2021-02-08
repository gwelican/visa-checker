<template>
  <v-card>
    <v-card-title class="justify-center">L-1</v-card-title>
    <v-card-text>
      <requirements :visa-information="visaInformation" />
      <VisaOpportunities
        :greencard="false"
        eligible-for-work="true"
        :eligible-for-green-card="true"
        green-card-eligibility-message="Munkaltaton keresztul"
      />
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
    .withBasicInformation(
      'Az elmúlt 3 évben dolgoztál, olyan cégnek, legalább 1'
    )
    .withBasicInformation('évig megszakítás nélkül, melynek van USA területén')
    .withBasicInformation('irodája')
    .withBasicInformation(
      'Ismét ezen céghez mész dolgozni, de már az amerikai irodához'
    )
}
</script>
