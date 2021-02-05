<template>
  <v-card>
    <v-card-title>
      O-1 Visa: Individuals with Extraordinary Ability or Achievement
    </v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item>
          <v-list-item-content> </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { UserDetails } from '~/pages/my-visas.vue'

@Component
export default class o1 extends Vue {
  @Prop()
  userDetails!: UserDetails
}
</script>
