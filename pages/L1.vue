<template>
  <v-card>
    <v-card-title>L-1 Intracompany Transferee</v-card-title>
    <v-card-text>
      Requirements:
      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-square-small</v-icon>
          </v-list-item-icon>
          <v-list-item-content
            >Generally have been working for a qualifying organization abroad
            for one continuous year within the three years immediately preceding
            his or her admission to the United States; and
          </v-list-item-content>
        </v-list-item>
        L1A
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-square-small</v-icon>
          </v-list-item-icon>
          <v-list-item-content
            >Be seeking to enter the United States to provide service in an
            executive or managerial capacity for a branch of the same employer
            or one of its qualifying organizations.
          </v-list-item-content>
        </v-list-item>
        L1B
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-square-small</v-icon>
          </v-list-item-icon>
          <v-list-item-content
            >Be seeking to enter the United States to provide services in a
            specialized knowledge capacity to a branch of the same employer or
            one of its qualifying organizations.
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { UserDetails } from '~/pages/index.vue'

@Component
export default class L1 extends Vue {
  @Prop()
  userDetails!: UserDetails
}
</script>
