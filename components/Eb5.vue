<template>
  <v-card :color="userDetails.eb5money ? 'green' : 'red'">
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

  private requirements = []
}
</script>
