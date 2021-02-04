<template>
  <v-card>
    <v-card-title>
      Employment-Based Immigration: Second Preference: EA
    </v-card-title>
    <v-card-text>
      <v-card-text>
        <requirements :requirements="requirements"></requirements>
      </v-card-text>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { UserDetails } from '~/pages/my-visas.vue'

@Component
export default class Eb2Ea extends Vue {
  @Prop()
  userDetails!: UserDetails

  private requirements = []
}
</script>
