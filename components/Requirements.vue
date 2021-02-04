<template>
  <v-list>
    <v-list-item v-for="requirement in requirements" :key="requirement">
      <v-list-item-icon>
        <v-icon>mdi-square-small</v-icon>
      </v-list-item-icon>
      <v-list-item-content>{{ requirement }}</v-list-item-content>
    </v-list-item>
  </v-list>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class Requirements extends Vue {
  @Prop({ default: [] })
  requirements!: []
}
</script>
