<template>
  <v-dialog max-width="900">
    <template #activator="{ on, attrs }">
      <v-card-actions class="justify-center">
        <v-btn v-bind="attrs" v-on="on">Követelmények</v-btn>
      </v-card-actions>
    </template>
    <v-card>
      <v-card-title class="justify-center">Követelmények</v-card-title>
      <v-card-text class="justify-center">
        <v-list dense disabled>
          <v-list-item-group>
            <v-list-item v-for="requirement in requirements" :key="requirement">
              <v-list-item-icon>
                <v-icon>mdi-square-small</v-icon>
              </v-list-item-icon>
              <v-list-item-content>{{ requirement }}</v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card-text>
    </v-card>
    <v-card v-if="links && links.length > 0">
      <v-card-title>Hasznos linkek</v-card-title>
      <v-card-text>
        <a v-for="link in links" :key="link" :href="link.href">
          {{ link.text }}
        </a>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class Requirements extends Vue {
  @Prop({ default: [] })
  requirements!: []

  @Prop({ default: [] })
  links!: []

  private dialog: any
}
</script>
