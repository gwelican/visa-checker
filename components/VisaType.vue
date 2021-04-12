<template>
  <div v-if="visaType" class="text-center">{{ visaType }}</div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { VisaType } from '~/components/visaInformationData'

@Component({})
export default class VisaInformation extends Vue {
  @Prop({})
  data: VisaType | undefined

  get visaType() {
    switch (this.data) {
      case VisaType.DUAL_INTENT:
        return 'Nem bevándorló vízum(de kérhet letelepedési jogot)'
      case VisaType.IMMIGRANT:
        return 'Bevándorló vízum'
      case VisaType.NON_IMMIGRANT:
        return 'Nem bevándorló vízum'
      default:
        return undefined
    }
    // if (this.data === undefined) {
    //   return undefined
    // }
    // return this.data === VisaType.IMMIGRANT ? 'Bevándorló' : 'Nem bevándorló'
  }
}
</script>
