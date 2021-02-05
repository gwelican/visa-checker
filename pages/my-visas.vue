<template>
  <v-container>
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
            <v-col>
              <v-checkbox v-model="userDetails.msc" :label="`Van msc/phd`" />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-checkbox
                v-model="userDetails.msc"
                :label="`Rendkivuli kepesseg`"
              />
            </v-col>
            <v-col>
              <v-row>
                <v-checkbox
                  v-model="userDetails.msc"
                  :label="`Kutato, professzor`"
                />
                <v-tooltip slot="prepend" top>
                  <template #activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                      <v-icon>mdi-help-circle</v-icon>
                    </v-btn>
                  </template>
                  <span>This is a tooltip</span>
                </v-tooltip>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card
          :color="
            userDetails.age >= 18 && userDetails.age < 26 ? 'green' : 'red'
          "
        >
          <v-card-title class="justify-center"> J1(au pair)</v-card-title>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title class="justify-center"> L1</v-card-title>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title class="justify-center"> EB1</v-card-title>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title class="justify-center">EB2</v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="justify-center">EB3</v-card-title>
        </v-card>
      </v-col>
      <v-col>
        <v-card :color="userDetails.eb5money ? 'green' : 'red'">
          <v-card-title class="justify-center">EB5</v-card-title>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title class="justify-center">O1</v-card-title>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title class="justify-center">H1b</v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="justify-center">F1</v-card-title>
        </v-card>
      </v-col>
      <v-col>
        <v-card :color="userDetails.martialStatus ? 'red' : 'green'">
          <v-card-title class="justify-center">Hazassag</v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <!--      </v-container>-->
    <!--        <au-pair-->
    <!--          v-if="userDetails.age >= 18 && userDetails.age < 26"-->
    <!--          :user-details="userDetails"-->
    <!--        />-->
    <!--        <l1-visa :user-details="userDetails" />-->
    <!--        <marriage-->
    <!--          v-if="!userDetails.martialStatus"-->
    <!--          :user-details="userDetails"-->
    <!--        />-->
    <!--        <eb5-visa v-if="userDetails.eb5money" :user-details="userDetails" />-->
    <!--        <eb1-visa :user-details="userDetails" />-->
    <!--        <eb2-visa :user-details="userDetails" />-->
    <!--        <eb3-visa :user-details="userDetails" />-->
    <!--        <o1-visa :user-details="userDetails" />-->
    <!--        <h1-visa :user-details="userDetails" />-->
    <!--        <f1-visa :user-details="userDetails" />-->
    <!--      </v-container>-->
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
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import AuPair from '~/pages/AuPair.vue'
import L1Visa from '~/pages/L1.vue'
import Marriage from '~/pages/marriage.vue'
import Eb5Visa from '~/pages/Eb5.vue'
import Eb1Visa from '~/pages/Eb1.vue'
import Eb3Visa from '~/pages/Eb3.vue'
import O1Visa from '~/pages/o1.vue'
import H1Visa from '~/pages/h1.vue'
import F1Visa from '~/pages/f1.vue'
import Eb2VisaAd from '~/pages/Eb2aAd.vue'
import Eb2VisaEa from '~/pages/Eb2Ea.vue'
import Eb2VisaNiw from '~/pages/Eb2Niw.vue'

export class UserDetails {
  age = 18
  martialStatus = false
  eb5money = false
  msc = false
}

@Component({
  components: {
    F1Visa,
    H1Visa,
    O1Visa,
    Eb3Visa,
    Eb1Visa,
    Eb5Visa,
    Marriage,
    L1Visa,
    AuPair,
    Eb2VisaAd,
    Eb2VisaEa,
    Eb2VisaNiw,
  },
})
export default class Index extends Vue {
  userDetails: UserDetails = new UserDetails()
}
</script>
