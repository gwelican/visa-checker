<template>
  <v-container :class="{ 'tw-filter tw-blur-sm': dialog }">
    <v-row justify="center">
      <v-dialog v-model="dialog" max-width="50%" persistent>
        <v-card class="headline">
          <v-card-title>Információ</v-card-title>
          <v-card-text
            >Ez a honlap <b>nem</b>:
            <v-list class="text-center">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="red">mdi-close</v-icon>
                </v-list-item-icon>
                <v-list-item-content
                  >ügyvédek által lett készítve</v-list-item-content
                >
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="red">mdi-close</v-icon>
                </v-list-item-icon>
                <v-list-item-content
                  >ad jogi tanácsot, vagy jogi képviseletet</v-list-item-content
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="red">mdi-close</v-icon>
                </v-list-item-icon>
                <v-list-item-content
                  >garantálja, hogy a vízumot/zöldkártyát
                  megkapod</v-list-item-content
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="red">mdi-close</v-icon>
                </v-list-item-icon>
                <v-list-item-content
                  >egy ember, nem speciális esetet vesz figyelembe, hanem
                  nagyvonalakban próbálja meghatározni, milyen vízumokra van
                  esély</v-list-item-content
                >
              </v-list-item>
            </v-list>

            Ez a honlap:
            <v-list class="text-center">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="green">mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content
                  >megpróbál pár kérdés megválaszolása után tippet adni, hogy
                  merre érdemes tovább indulni</v-list-item-content
                >
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="green">mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content
                  >jó információ forrás: összegyűjtött linkekkel es
                  leírásokkal</v-list-item-content
                >
              </v-list-item>
            </v-list>

            <v-row justify="center">
              <v-btn
                @click="
                  dialog = false
                  setConsent()
                "
                >Megértettem</v-btn
              >
            </v-row>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="9">
        <v-card flat>
          <v-card-title> Személyes adatok</v-card-title>
          <v-card-text>
            <v-row justify="space-between">
              <v-col lg="3">
                <v-text-field
                  v-model="userDetails.age"
                  label="Eletkor"
                ></v-text-field>
              </v-col>
              <v-col lg="3">
                <v-checkbox
                  v-model="userDetails.maritalStatus"
                  label="Házas vagyok"
                ></v-checkbox>
              </v-col>
              <v-col lg="3">
                <v-checkbox v-model="userDetails.msc" label="Van msc/phd" />
              </v-col>
              <v-col lg="3">
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
              <v-col lg="3">
                <v-checkbox
                  v-model="userDetails.eb5money"
                  label="Befektetek $900.000-t"
                />
              </v-col>
              <v-col lg="3">
                <v-checkbox
                  v-model="userDetails.experienceOfTwoYears"
                  label="Legalább 2 év szakmai gyakorlat"
                />
              </v-col>
              <v-col lg="3">
                <v-row align="center" no-gutters>
                  <v-checkbox
                    v-model="userDetails.extraordinaryAbility"
                    label="Rendkívüli képesség/eredmény"
                  />
                </v-row>
              </v-col>
              <v-col lg="3">
                <v-row align="center" no-gutters>
                  <v-col>
                    <v-checkbox
                      v-model="userDetails.professor"
                      label="Kutató/professzor"
                    />
                  </v-col>
                  <v-col> </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3">
                <v-checkbox
                  v-model="userDetails.manager"
                  label="Nemzetközi cégnél vezető"
                />
              </v-col>
              <v-col cols="9">
                <v-checkbox
                  v-model="userDetails.selfPetition"
                  label="Saját jogon adom be (SelfPetition) / Nem kell munkáltató/iskola hozzá"
                />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <o1-visa :user-details="userDetails" />
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
        <eb5-visa :user-details="userDetails" />
      </v-col>

      <v-col>
        <eb2-visa-ea :user-details="userDetails" />
      </v-col>
      <v-col>
        <eb2-visa-ad :user-details="userDetails" />
      </v-col>
      <v-col>
        <eb2-visa-niw :user-details="userDetails" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <eb3-visa-professional :user-details="userDetails" />
      </v-col>
      <v-col>
        <eb3-visa-skilled :user-details="userDetails" />
      </v-col>
      <v-col>
        <eb3-visa-unskilled :user-details="userDetails" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <f1-visa :user-details="userDetails" />
      </v-col>
      <v-col>
        <j1-visa :user-details="userDetails" />
      </v-col>
      <v-col>
        <h1b-visa :user-details="userDetails" />
      </v-col>
      <v-col>
        <l1-visa :user-details="userDetails" />
      </v-col>
    </v-row>
    <v-row>
      <v-col lg="3">
        <k1-visa :user-details="userDetails"></k1-visa>
      </v-col>
    </v-row>
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
import Eb2VisaAd from '~/components/Eb2AdvancedDegree.vue'
import Eb2VisaEa from '~/components/Eb2ExceptionalAbility.vue'
import Eb2VisaNiw from '~/components/Eb2Niw.vue'
import EB3VisaUnskilled from '~/components/Eb3Unskilled.vue'
import EB3VisaProfessional from '~/components/Eb3Professional.vue'
import EB3VisaSkilled from '~/components/Eb3Skilled.vue'
import EB1VisaOutstanding from '~/components/Eb1Outstanding.vue'
import EB1VisaManager from '~/components/Eb1Manager.vue'
import EB1VisaExtraOrdinary from '~/components/Eb1ExtraordinaryAbility.vue'
import K1Visa from '~/components/K1.vue'

export class UserDetails {
  age = 18
  maritalStatus = false
  eb5money = false
  msc = false
  extraordinaryAbility = false
  professor = false
  bsc = false
  experienceOfTwoYears = false
  manager = false
  selfPetition = false
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
    K1Visa,
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
  private dialog = true
  mounted() {
    const consent = this.$cookies.get('consent')
    this.dialog = consent !== 'seen'
  }

  private setConsent() {
    this.$cookies.set('consent', 'seen')
  }
}
</script>

<style lang="scss">
.v-tooltip__content {
  pointer-events: initial;
}
</style>
