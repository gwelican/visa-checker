<template>
  <v-card :color="enabled">
    <v-card-title class="justify-center">EB3: diplomás munkaerő</v-card-title>
    <v-card-text>
      <requirements :visa-information="visaInformation"></requirements>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { UserDetails } from '~/pages/index.vue'
import { VisaInformation } from '~/components/visainformation'

@Component
export default class EB3VisaProfessional extends Vue {
  @Prop()
  userDetails!: UserDetails

  private visaInformation = new VisaInformation()
    .addBasic('Minimum BSc / főiskolai végzettség')
    .addBasic(
      'Olyan munkakörben dolgozik, mely feltöltésére amerikai munkaerővel nincs esély'
    )

  get enabled() {
    return this.userDetails.bsc ? 'colorActive' : 'colorInactive'
  }
}
</script>
