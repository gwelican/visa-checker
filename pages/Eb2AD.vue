<template>
  <v-card>
    <v-card-title>
      Employment-Based Immigration: Second Preference
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
  import Requirements from '~/components/Requirements.vue'

  @Component
  export default class Eb2Ad extends Vue {
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
