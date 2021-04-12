<template>
  <v-dialog max-width="900">
    <template #activator="{ on, attrs }">
      <v-card-actions class="justify-center">
        <v-btn v-bind="attrs" v-on="on">Követelmények</v-btn>
      </v-card-actions>
      <v-card-text class="justify-center">
        <VisaType :data="visaInformation.visaType" />
      </v-card-text>
    </template>
    <v-card
      v-if="
        visaInformation.basicInformation &&
        visaInformation.basicInformation.length > 0
      "
    >
      <v-card-title class="justify-center">Általános információk</v-card-title>
      <v-card-text class="tw-pt-6">
        <v-list class="details">
          <v-list-item
            v-for="info in visaInformation.basicInformation"
            :key="info"
          >
            <v-list-item-content>{{ info }}</v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
    <v-card v-if="visaInformation">
      <v-card-title class="justify-center">Követelmények</v-card-title>
      <v-card-text class="justify-center tw-pt-6">
        <v-list
          v-if="
            visaInformation.basicRequirements &&
            visaInformation.basicRequirements.length > 0
          "
          class="details"
          dense
          disabled
        >
          <v-list-item-group>
            <v-list-item
              v-for="basicRequirement in visaInformation.basicRequirements"
              :key="basicRequirement"
            >
              <v-list-item-icon>
                <v-icon>mdi-square-small</v-icon>
              </v-list-item-icon>
              <v-list-item-content>{{ basicRequirement }}</v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-expansion-panels v-if="visaInformation.groupedRequirements">
          <v-expansion-panel
            v-for="(requirements, title) in visaInformation.groupedRequirements"
            :key="title"
            class="tw-bg-gray-500"
          >
            <v-expansion-panel-header>{{ title }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list>
                <v-list-item
                  v-for="requirement in requirements"
                  :key="requirement"
                >
                  <v-list-item-icon
                    ><v-icon>mdi-square-small</v-icon></v-list-item-icon
                  >
                  <v-list-item-content>{{ requirement }}</v-list-item-content>
                </v-list-item>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>

    <v-card v-if="visaInformation.links && visaInformation.links.length > 0">
      <v-card-title>Hasznos linkek</v-card-title>
      <v-card-text>
        <v-row v-for="link in visaInformation.links" :key="link.href">
          <v-col>
            <a :href="link.href">
              {{ link.text }}
            </a>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { VisaInformationData } from '~/components/visaInformationData'
import VisaType from '~/components/VisaType.vue'
@Component({
  components: { VisaType },
})
export default class VisaInformation extends Vue {
  @Prop({
    default: () => {
      return new VisaInformationData()
    },
  })
  visaInformation!: VisaInformationData

  private dialog: any
}
</script>
<style lang="scss">
.details {
  @apply tw-bg-gray-700 tw-rounded #{!important};
}
</style>
