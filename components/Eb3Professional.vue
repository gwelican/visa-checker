<template>
  <v-card :color="enabled">
    <v-card-title class="justify-center">EB3: diplomás munkaerő</v-card-title>
    <v-card-text>
      <requirements :requirements="requirements"></requirements>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { UserDetails } from '~/pages/index.vue'

@Component
export default class EB3VisaProfessional extends Vue {
  @Prop()
  userDetails!: UserDetails

  private requirements = [
  'Minimum BSc / főiskolai végzettség',
  'Olyan munkakörben dolgozik, mely feltöltésére amerikai munkaerővel nincs esély',

  ]

  get enabled() {
    return this.userDetails.bsc ? 'colorActive' : 'colorInactive'
  }
}
</script>
