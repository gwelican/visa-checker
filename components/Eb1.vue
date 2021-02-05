<template>
  <v-card>
    <v-card-title>EB1</v-card-title>
    <v-card-text>
      <requirements :requirements="requirements"></requirements>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { UserDetails } from '~/pages/my-visas.vue'

@Component
export default class Eb1 extends Vue {
  @Prop()
  userDetails!: UserDetails

  private requirements = []
}
</script>
