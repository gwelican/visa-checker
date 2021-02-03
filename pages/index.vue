<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-row>
          <v-col>
            {{ userDetails }}
          </v-col>
        </v-row>
      </v-card>
      <v-card>
        <v-row>
          <v-col>
            <v-text-field
              v-model="userDetails.age"
              label="Eletkor"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-checkbox
              v-model="userDetails.martialStatus"
              :label="`Hazas`"
            ></v-checkbox>
          </v-col>
          <v-col>
            <v-checkbox
              v-model="userDetails.eb5money"
              :label="`Van $900.000-om befektetni`"
            />
          </v-col>
        </v-row>
      </v-card>
      <v-card>
        Visas:
        <au-pair
          v-if="userDetails.age >= 18 && userDetails.age < 26"
          :user-details="userDetails"
        />
        <l1-visa :user-details="userDetails" />
        <marriage
          v-if="!userDetails.martialStatus"
          :user-details="userDetails"
        />
        <eb5-visa v-if="userDetails.eb5money" :user-details="userDetails" />
        <eb1-visa :user-details="userDetails" />
        <eb2-visa :user-details="userDetails" />
        <eb3-visa :user-details="userDetails" />
        <o1-visa :user-details="userDetails" />
        <h1-visa :user-details="userDetails" />
        <f1-visa :user-details="userDetails" />
      </v-card>
      <!--      <v-card>-->
      <!--        <v-card-title class="headline">-->
      <!--          Welcome to the Vuetify + Nuxt.js template-->
      <!--        </v-card-title>-->
      <!--        <v-card-text>-->
      <!--          <p>Vuetify is a progressive Material Design component framework for Vue.js. It was-->
      <!--            designed to empower developers to create amazing applications.</p>-->
      <!--          <p>-->
      <!--            For more information on Vuetify, check out the <a-->
      <!--            href="https://vuetifyjs.com"-->
      <!--            target="_blank"-->
      <!--            rel="noopener noreferrer"-->
      <!--          >-->
      <!--            documentation-->
      <!--          </a>.-->
      <!--          </p>-->
      <!--          <p>-->
      <!--            If you have questions, please join the official <a-->
      <!--            href="https://chat.vuetifyjs.com/"-->
      <!--            target="_blank"-->
      <!--            rel="noopener noreferrer"-->
      <!--            title="chat"-->
      <!--          >-->
      <!--            discord-->
      <!--          </a>.-->
      <!--          </p>-->
      <!--          <p>-->
      <!--            Find a bug? Report it on the github <a-->
      <!--            href="https://github.com/vuetifyjs/vuetify/issues"-->
      <!--            target="_blank"-->
      <!--            rel="noopener noreferrer"-->
      <!--            title="contribute"-->
      <!--          >-->
      <!--            issue board-->
      <!--          </a>.-->
      <!--          </p>-->
      <!--          <p>Thank you for developing with Vuetify and I look forward to bringing more exciting-->
      <!--            features in the future.</p>-->
      <!--          <div class="text-xs-right">-->
      <!--            <em><small>&mdash; John Leider</small></em>-->
      <!--          </div>-->
      <!--          <hr class="my-3">-->
      <!--          <a-->
      <!--            href="https://nuxtjs.org/"-->
      <!--            target="_blank"-->
      <!--            rel="noopener noreferrer"-->
      <!--          >-->
      <!--            Nuxt Documentation-->
      <!--          </a>-->
      <!--          <br>-->
      <!--          <a-->
      <!--            href="https://github.com/nuxt/nuxt.js"-->
      <!--            target="_blank"-->
      <!--            rel="noopener noreferrer"-->
      <!--          >-->
      <!--            Nuxt GitHub-->
      <!--          </a>-->
      <!--        </v-card-text>-->
      <!--        <v-card-actions>-->
      <!--          <v-spacer/>-->
      <!--          <v-btn-->
      <!--            color="primary"-->
      <!--            nuxt-->
      <!--            to="/inspire"-->
      <!--          >-->
      <!--            Continue-->
      <!--          </v-btn>-->
      <!--        </v-card-actions>-->
      <!--      </v-card>-->
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import AuPair from '~/pages/AuPair.vue'
import L1Visa from '~/pages/L1.vue'
import Marriage from '~/pages/Marriage.vue'
import Eb5Visa from '~/pages/Eb5.vue'
import Eb1Visa from '~/pages/Eb1.vue'
import Eb2Visa from '~/pages/Eb2.vue'
import Eb3Visa from '~/pages/Eb3.vue'
import O1Visa from '~/pages/O1.vue'
import H1Visa from '~/pages/h1.vue'
import F1Visa from '~/pages/f1.vue'

export class UserDetails {
  age = 18
  martialStatus = false
  eb5money = false
}

@Component({
  components: {
    F1Visa,
    H1Visa,
    O1Visa,
    Eb3Visa,
    Eb2Visa,
    Eb1Visa,
    Eb5Visa,
    Marriage,
    L1Visa,
    AuPair,
  },
})
export default class Index extends Vue {
  userDetails: UserDetails = new UserDetails()
}
</script>
