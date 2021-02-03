<template>
  <v-card>
    <v-card-title>
      H-1B Specialty Occupations
    </v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item>

          <v-list-item-content>

          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import {Component, Prop, Vue} from "nuxt-property-decorator";
import {UserDetails} from "~/pages/index.vue";

@Component
export default class h1 extends Vue {
  @Prop()
  userDetails!: UserDetails;
}
</script>
