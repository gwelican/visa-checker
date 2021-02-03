<template>
  <v-card>
    <v-card-title>EB-5 Immigrant Investor Program
    </v-card-title>
  </v-card>
</template>
<script lang="ts">
import {Component, Prop, Vue} from "nuxt-property-decorator";
import {UserDetails} from "~/pages/index.vue";

@Component
export default class Eb5 extends Vue {
  @Prop()
  userDetails!: UserDetails;
}
</script>
