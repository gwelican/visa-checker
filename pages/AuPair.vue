<template>
  <v-card>
    <v-card-title>J1</v-card-title>
    <v-card-text>
      Kovetelmenyek:
      <requirements :requirements="requirements" />
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
  import { Prop, Component, Vue } from 'nuxt-property-decorator'
  import { UserDetails } from '~/pages/my-visas.vue'
  import Requirements from '~/components/Requirements.vue'

  @Component({
  components: { Requirements },
  })
  export default class AuPair extends Vue {
  @Prop()
  userDetails!: UserDetails

  private requirements = [
  'Cserediákok számára',
  'Kutatók számára',
  'Gyakornokok számára ',
  'Au pair-ek számára ',
  'Csak szervezett és jóváhagyott programban ',
  'Nem bevándorlóknak ',
  'Max 2 év után 2 évre induló országba vissza kell térni',
  'Visszatérés alól különös indokkal felmentés kérhető ',
  ]
  }
</script>
