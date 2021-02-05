<template>
  <v-card>
    <v-card-title class="justify-center">EB2 : AD</v-card-title>
    <v-card-text>
      <requirements :requirements="requirements"></requirements>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { UserDetails } from '~/pages/index.vue'

@Component
export default class EB2Ad extends Vue {
  @Prop()
  userDetails!: UserDetails

  private requirements = [
    'Minimum MSc VAGY PhD végzettség',
    '5 év munkatapasztalat végzettségnek megfelelő területen',
    '',
    '',
  ]
}
</script>
