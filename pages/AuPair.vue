<template>
  <v-card>
    <v-card-title>Au Pair</v-card-title>
    <v-card-text>
      Requirements:
      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-square-small</v-icon>
          </v-list-item-icon>
          <v-list-item-content
            >Between 18-and-26-years-old.</v-list-item-content
          >
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-square-small</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            Proficient in spoken English
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-square-small</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            Capable of fully participating in the program as evidenced by the
            satisfactory completion of a physical.
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-square-small</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            Personally interviewed, in English, by an organizational
            representative who shall prepare a report of the interview which
            shall be provided to the host family
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-square-small</v-icon>
          </v-list-item-icon>
          <v-list-item-content
            >Successful in passing a background investigation that includes
            verification of school, three, non-family related personal and
            employment references, a criminal background check or its recognized
            equivalent and a personality profile. Such personality profile will
            be based upon a psychometric test designed to measure differences in
            characteristics among applicants against those characteristics
            considered most important to successfully participate in the au pair
            program.
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator'
import { UserDetails } from '~/pages/index.vue'

@Component
export default class AuPair extends Vue {
  @Prop()
  userDetails!: UserDetails
}
</script>
