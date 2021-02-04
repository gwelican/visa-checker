<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="justify-center"> J1(au pair)</v-card-title>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title class="justify-center"> L1</v-card-title>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title class="justify-center"> EB1</v-card-title>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title class="justify-center">EB2</v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="justify-center">EB3</v-card-title>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title class="justify-center">EB5</v-card-title>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title class="justify-center">O1</v-card-title>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title class="justify-center">H1b</v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="justify-center">F1</v-card-title>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title class="justify-center">Hazassag</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator'
  import AuPair from '~/pages/AuPair.vue'
  import L1Visa from '~/pages/L1.vue'
  import Marriage from '~/pages/marriage.vue'
  import Eb5Visa from '~/pages/Eb5.vue'
  import Eb1Visa from '~/pages/Eb1.vue'
  import Eb2VisaAd from '~/pages/Eb2Ad.vue'
  import Eb2VisaEa from '~/pages/Eb2Ea.vue'
  import Eb2VisaNiw from '~/pages/Eb2Niw.vue'
  import Eb3Visa from '~/pages/Eb3.vue'
  import O1Visa from '~/pages/o1.vue'
  import H1Visa from '~/pages/h1.vue'
  import F1Visa from '~/pages/f1.vue'

  @Component({
  components: {
  F1Visa,
  H1Visa,
  O1Visa,
  Eb3Visa,
  Eb2VisaAd,
  Eb2VisaEa,
  Eb2VisaNiw,
  Eb1Visa,
  Eb5Visa,
  Marriage,
  L1Visa,
  AuPair,
  },
  })
  export default class Index extends Vue {}
</script>
