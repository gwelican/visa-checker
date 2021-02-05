<template>
  <v-container>
    <v-row>
      <v-col>
        <au-pair />
      </v-col>
      <v-col>
        <v-card>
          <v-card-title class="justify-center">L1</v-card-title>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title class="justify-center">EB1</v-card-title>
        </v-card>
      </v-col>
      <v-col>
        <eb2-visa-ad></eb2-visa-ad>
        <eb2-visa-ea></eb2-visa-ea>
        <eb2-visa-niw></eb2-visa-niw>
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
import J1 from '~/components/J1.vue'
import L1Visa from '~/components/L1.vue'
import Marriage from '~/components/marriage.vue'
import Eb5Visa from '~/components/Eb5.vue'
import Eb1Visa from '~/components/Eb1.vue'
import Eb2VisaAd from '~/components/Eb2aAd.vue'
import Eb2VisaEa from '~/components/Eb2Ea.vue'
import Eb2VisaNiw from '~/components/Eb2Niw.vue'
import Eb3Visa from '~/components/Eb3.vue'
import O1Visa from '~/components/o1.vue'
import H1Visa from '~/components/h1.vue'
import F1Visa from '~/components/f1.vue'

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
    AuPair: J1,
  },
})
export default class Index extends Vue {}
</script>
