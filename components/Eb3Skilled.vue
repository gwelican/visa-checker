<template>
  <v-card :class="enabled">
    <v-card-title class="justify-center">EB3: szakmunkás</v-card-title>
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
export default class EB3VisaSkilled extends Vue {
  @Prop()
  userDetails!: UserDetails

  private visaInformation = new VisaInformation()
    .addBasic(
      'Munkája ellátásához megvan 2 év tapasztalata VAGY szakmai képzettsége'
    )
    .addBasic(
      'Szakmai képzettségnek elfogadható a középiskola utáni szakmai képzés'
    )

  get enabled() {
    return this.userDetails.experienceOfTwoYears
      ? 'colorActive'
      : 'colorInactive'
  }
}
</script>
