<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h3>preev2</h3>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fill-height fluid>
        <PriceDisplay/>
    </v-container>
    </v-main>
  </v-app>
</template>

<script>
import PriceDisplay from './components/PriceDisplay';

export default {
  name: 'App',

  components: {
    PriceDisplay,
  },

  data: () => ({
  }),
};
</script>
