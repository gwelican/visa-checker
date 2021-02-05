<template>
  <v-card :color="enabled">
    <v-card-title class="justify-center">O1 Kivételes képességek</v-card-title>
    <v-card-text>
      <requirements :requirements="requirements" />
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
  import { Component, Prop, Vue } from 'nuxt-property-decorator'
  import { UserDetails } from '~/pages/index.vue'

  @Component
  export default class O1Visa extends Vue {
  @Prop()
  userDetails!: UserDetails

  private requirements = [
  'Nem bevándorló, maximum 3 évnyi tartózkodásra',
  'Kivételes képesség:',
  '- tudományokban',
  '- tanulmányokban',
  '- üzleti életben',
  '- sportban',
  '- művészetekben',
  '- színész vagy TV ipar elismert képviselője',
  'O-2: Olyan személyek, akik O-1 kategóriás művészt vagy sportolót segítenek',
  'O-3: Olyan személyek, akik O-1 vagy O-2 hozzátartozói',
  ]

  get enabled() {
  return this.userDetails.extraordinaryAbility
  ? 'colorActive'
  : 'colorInactive'
  }
  }
</script>
