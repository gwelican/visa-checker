<template>
  <v-card :color="enabled">
    <v-card-title class="justify-center">EB5 </v-card-title>
    <v-card-text>
      <requirements :requirements="requirements"></requirements>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { UserDetails } from '~/pages/index.vue'

@Component
export default class EB5Visa extends Vue {
  @Prop()
  userDetails!: UserDetails

  private requirements = [
  'Megfelelő mértékű befektetés USA területén',
  'Terv szerint 10 munkahely létrehozása/megtartása',
  '',
  ]

  get enabled() {
    return this.userDetails.eb5money ? 'colorActive' : 'colorInactive'
  }
}
</script>
