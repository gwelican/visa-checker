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

  private requirements = []

  get enabled() {
    return this.userDetails.bsc && this.userDetails.experienceOfTwoYears
      ? 'colorActive'
      : 'colorInactive'
  }
}
</script>
