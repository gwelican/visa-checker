<template>
  <v-dialog max-width="900">
    <template #activator="{ on, attrs }">
      <v-card-actions class="justify-center">
        <v-btn v-bind="attrs" v-on="on">Követelmények</v-btn>
      </v-card-actions>
    </template>
    <v-card v-if="visaInformation">
      <v-card-title class="justify-center">Követelmények</v-card-title>
      <v-card-text class="justify-center">
        <v-list dense disabled>
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
        <a
          v-for="link in visaInformation.links"
          :key="link.href"
          :href="link.href"
        >
          {{ link.text }}
        </a>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { VisaInformation } from '~/components/visainformation'

@Component
export default class Requirements extends Vue {
  // @Prop({ default: [] })
  // requirements!: []

  @Prop({
    default: () => {
      return new VisaInformation()
    },
  })
  visaInformation!: VisaInformation

  private dialog: any
}
</script>
