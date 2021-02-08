<template>
  <v-container>
    <v-row>
      <v-col v-if="greencard" cols="6" class="text-right">Zöldkártya</v-col>
      <v-col v-if="greencard" cols="6" class="text-left">
        <v-icon>{{ greencard ? 'mdi-check' : 'mdi-close' }}</v-icon>
      </v-col>
      <v-col v-if="!greencard" cols="6" class="text-right">Munka</v-col>
      <v-col v-if="!greencard" cols="6" class="text-left">
        <v-icon>{{ eligibleForWork ? 'mdi-check' : 'mdi-close' }}</v-icon>
      </v-col>
      <v-col v-if="greencard === false" cols="6" class="text-right">
        Zöldkártya szerezhető
      </v-col>
      <v-col v-if="greencard === false" cols="6" class="text-left">
        <v-icon>
          {{ eligibleForGreenCard ? 'mdi-check' : 'mdi-close' }}
        </v-icon>
        <span
          v-if="
            greenCardEligibilityMessage &&
            greenCardEligibilityMessage.length > 0
          "
        >
          ({{ greenCardEligibilityMessage }})
        </span>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class VisaOpportunities extends Vue {
  @Prop({ default: false })
  greencard!: boolean

  @Prop({ default: false })
  eligibleForWork!: boolean

  @Prop({ default: false })
  eligibleForGreenCard!: boolean

  @Prop({ default: '' })
  greenCardEligibilityMessage!: string
}
</script>

<style lang="scss">
.center-margin {
  margin: auto;
}
</style>
