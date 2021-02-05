<template>
  <v-app>
    <v-app-bar dense app>
      <v-tabs center-active centered>
        <v-tab v-for="item in items" :key="item.to" :to="item.to">
          <v-card>
            <v-card-title>
              <!--              <v-icon>{{ item.icon }}</v-icon>-->
              {{ item.title }}
            </v-card-title>
            <!--            <v-card-actions>-->
            <!--              <v-btn :to="item.to"></v-btn>-->
            <!--            </v-card-actions>-->
          </v-card>
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
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
        {
          icon: 'mdi-chart-bubble',
          title: 'Zoldkartya',
          to: '/greencard',
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
