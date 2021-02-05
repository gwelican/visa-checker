<template>
  <v-card :color="enabled">
    <v-card-title class="justify-center">EB3: képzetlen munkaerő</v-card-title>
    <v-card-text>
      <requirements :requirements="requirements"></requirements>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { UserDetails } from '~/pages/index.vue'

@Component({})
export default class EB3VisaUnskilled extends Vue {
  @Prop()
  userDetails!: UserDetails

  private requirements = []

  get enabled() {
    return 'colorActive'
  }
}
</script>
