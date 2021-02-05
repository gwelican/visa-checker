<template>
  <v-card :class="enabled">
    <v-card-title class="justify-center">EB3: szakmunkás</v-card-title>
    <v-card-text>
      <requirements :requirements="requirements"></requirements>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { UserDetails } from '~/pages/index.vue'

@Component
export default class EB3VisaSkilled extends Vue {
  @Prop()
  userDetails!: UserDetails

  private requirements = [
    'Munkája ellátásához megvan 2 év tapasztalata VAGY szakmai képzettsége',
    'Szakmai képzettségnek elfogadható a középiskola utáni szakmai képzés',
  ]

  get enabled() {
    return this.userDetails.experienceOfTwoYears
      ? 'colorActive'
      : 'colorInactive'
  }
}
</script>
