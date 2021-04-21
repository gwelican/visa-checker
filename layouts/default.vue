<template>
  <v-app>
    <v-app-bar dense app>
      <v-tabs center-active centered>
        <v-tab v-for="item in items" :key="item.to" :to="item.to">
          <v-card>
            <v-card-title>
              {{ item.title }}
            </v-card-title>
          </v-card>
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt/>
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <v-row dense>
        <v-col cols="1">
          <div class="tw-justify-self-start">{{ new Date().getFullYear() }}</div>
        </v-col>
        <v-col cols="2">
          <v-row dense>
            <v-col>
              <div class="tw-justify-self-end">&copy; Zsolt Domozi</div>
            </v-col>
            <v-col>
              <div class="tw-justify-self-end">&copy; Peter Varsanyi</div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Vizum',
          to: '/',
        },

      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
