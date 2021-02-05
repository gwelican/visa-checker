<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="9">
        <v-card flat>
          <v-card-title> Személyes adatok </v-card-title>
          <v-card-text>
            <v-row justify="space-between">
              <v-col cols="3">
                <v-text-field
                  v-model="userDetails.age"
                  label="Eletkor"
                ></v-text-field>
              </v-col>
              <v-col cols="3">
                <v-checkbox
                  v-model="userDetails.martialStatus"
                  :label="`Házas vagyok`"
                ></v-checkbox>
              </v-col>
              <v-col cols="3">
                <v-checkbox v-model="userDetails.msc" label="Van msc/phd" />
              </v-col>
              <v-col cols="3">
                <v-checkbox
                  v-model="userDetails.bsc"
                  label="Van BSc/főiskolai végzettség"
                />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <v-card>
          <v-card-text>
            <v-row>
              <v-col cols="3">
                <v-checkbox
                  v-model="userDetails.eb5money"
                  label="Befektetek $900.000-t"
                />
              </v-col>
              <v-col cols="3">
                <v-checkbox
                  v-model="userDetails.experienceOfTwoYears"
                  label="Legalább 2 év szakmai gyakorlat"
                />
              </v-col>
              <v-col cols="3">
                <v-row align="center" no-gutters>
                  <v-checkbox
                    v-model="userDetails.extraordinaryAbility"
                    label="Rendkívüli képesség\eredmény"
                  />
                  <v-tooltip top close-delay="2000">
                    <template #activator="{ on, attrs }">
                      <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon dense>mdi-help-circle</v-icon>
                      </v-btn>
                    </template>
                    <span>
                      Kivételes képesség:
                      - tudományokban
                      - művészetekben
                      - üzleti életben
                      - oktatásban
                      - sportban
                    </span>
                  </v-tooltip>
                </v-row>
              </v-col>
              <v-col cols="3">
                <v-row align="center" no-gutters>
                  <v-col>
                    <v-checkbox
                      v-model="userDetails.professor"
                      label="Kutató/professzor"
                    />
                  </v-col>
                  <v-col>
                    <v-tooltip top>
                      <template #activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on">
                          <v-icon dense>mdi-help-circle</v-icon>
                        </v-btn>
                      </template>
                      <span>This is a tooltip</span>
                    </v-tooltip>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-checkbox
                  v-model="userDetails.manager"
                  label="Nemzetközi cégnél vezető"
                />
              </v-col>
              <v-col>
                <v-checkbox
                  v-model="userDetails.selfpetition"
                  label="Saját jogon adom be (SelfPetition) / Nem kell amerikai munkáltató, iskola stb. hozzá"
                />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <j1-visa :user-details="userDetails" />
      </v-col>

      <v-col>
        <eb1-visa-extra-ordinary :user-details="userDetails" />
      </v-col>
      <v-col>
        <eb1-visa-manager :user-details="userDetails" />
      </v-col>
      <v-col>
        <eb1-visa-outstanding :user-details="userDetails" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <l1-visa :user-details="userDetails" />
      </v-col>

      <v-col>
        <eb2-visa-ea :user-details="userDetails" />
      </v-col>
      <v-col>
        <eb2-visa-niw :user-details="userDetails" />
      </v-col>
      <v-col>
        <eb2-visa-ad :user-details="userDetails" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <eb5-visa :user-details="userDetails" />
      </v-col>
      <v-col>
        <eb3-visa-skilled :user-details="userDetails" />
      </v-col>
      <v-col>
        <eb3-visa-professional :user-details="userDetails" />
      </v-col>
      <v-col>
        <eb3-visa-unskilled :user-details="userDetails" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <o1-visa :user-details="userDetails" />
      </v-col>
      <v-col>
        <h1b-visa :user-details="userDetails" />
      </v-col>
      <v-col cols="3">
        <f1-visa :user-details="userDetails" />
      </v-col>
      <v-col cols="3">
        <marriage :user-details="userDetails" />
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
    <v-footer> {{ userDetails }} </v-footer>
  </v-container>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator'
  import J1Visa from '~/components/J1.vue'
  import L1Visa from '~/components/L1.vue'
  import Marriage from '~/components/marriage.vue'
  import EB5Visa from '~/components/Eb5.vue'
  import O1Visa from '~/components/o1.vue'
  import H1Visa from '~/components/H1B.vue'
  import F1Visa from '~/components/F1.vue'
  import Eb2VisaAd from '~/components/Eb2Ad.vue'
  import Eb2VisaEa from '~/components/Eb2Ea.vue'
  import Eb2VisaNiw from '~/components/Eb2Niw.vue'
  import EB3VisaUnskilled from '~/components/Eb3Unskilled.vue'
  import EB3VisaProfessional from '~/components/Eb3Professional.vue'
  import EB3VisaSkilled from '~/components/Eb3Skilled.vue'
  import EB1VisaOutstanding from '~/components/Eb1Outstanding.vue'
  import EB1VisaManager from '~/components/Eb1Manager.vue'
  import EB1VisaExtraOrdinary from '~/components/Eb1ExtraordinaryAbility.vue'

  export class UserDetails {
  age = 18
  martialStatus = false
  eb5money = false
  msc = false
  extraordinaryAbility = false
  professor = false
  bsc = false
  experienceOfTwoYears = false
  manager = false
  selfpetition = false
  }

  @Component({
  components: {
  F1Visa,
  H1bVisa: H1Visa,
  O1Visa,
  Eb1VisaExtraOrdinary: EB1VisaExtraOrdinary,
  Eb1VisaManager: EB1VisaManager,
  Eb1VisaOutstanding: EB1VisaOutstanding,
  Eb3VisaUnskilled: EB3VisaUnskilled,
  Eb3VisaProfessional: EB3VisaProfessional,
  Eb3VisaSkilled: EB3VisaSkilled,
  Eb5Visa: EB5Visa,
  Marriage,
  L1Visa,
  J1Visa,
  Eb2VisaAd,
  Eb2VisaEa,
  Eb2VisaNiw,
  },
  })
  export default class Index extends Vue {
  userDetails: UserDetails = new UserDetails()
  }
</script>

<style lang="scss">
.v-tooltip__content {
  pointer-events: initial;
}
</style>
