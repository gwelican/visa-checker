<template>
  <v-container>
    <v-row>
      <v-col v-if="greencard" cols="6" class="text-right">Zöldkártya</v-col>
      <v-col v-if="greencard" cols="6" class="text-left">
        <v-icon>{{ greencard ? 'mdi-check' : 'mdi-close' }}</v-icon>
      </v-col>
      <v-col v-if="!greencard" cols="6" class="text-right">Munka</v-col>
      <v-col v-if="!greencard" cols="6" class="text-left">
        <v-icon>{{ work ? 'mdi-check' : 'mdi-close' }}</v-icon>
      </v-col>
      <v-col v-if="greencard === false" cols="6" class="text-right">
        Zöldkártya szerezhető
      </v-col>
      <v-col v-if="greencard === false" cols="6" class="text-left">
        <v-icon>
          {{ eligibleForGreenCard ? 'mdi-check' : 'mdi-close' }}
        </v-icon>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class VisaOpportunities extends Vue {
  @Prop()
  greencard: boolean

  @Prop()
  work: boolean

  @Prop()
  eligibleForGreenCard: boolean
}
</script>

<style lang="scss">
.center-margin {
  margin: auto;
}
</style>
