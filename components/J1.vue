<template>
  <v-card :color="enabled">
    <v-card-title class="justify-center">J1</v-card-title>
    <v-card-text>
      <requirements :requirements="requirements" />
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator'
import { UserDetails } from '~/pages/index.vue'
import Requirements from '~/components/Requirements.vue'

@Component({
  components: { Requirements },
})
export default class J1Visa extends Vue {
  @Prop()
  userDetails!: UserDetails

  private requirements = [
    'Cserediákok számára',
    'Kutatók számára',
    'Gyakornokok számára ',
    'Au pair-ek számára ',
    'Csak szervezett és jóváhagyott programban (táboroztatás, hivatalos au-pair szervező cégek stb.)',
    'Nem bevándorlóknak ',
    'Max 2 év után, minimum 2 évre vissza kell térni a származási országba',
    'Visszatérés alól különös indokkal felmentés kérhető ',
  ]

  get enabled() {
    return this.userDetails.age >= 18 && this.userDetails.age <= 26
      ? 'colorActive'
      : 'colorInactive'
      }
      }
    </script>
