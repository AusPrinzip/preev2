<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="2">
        <v-text-field
          label="Amount"
          value="10.00"
          prefix="btc"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-select
          :items="items"
          v-model="selected1"
          outlined
        ></v-select>
      </v-col>
      <v-col cols="2">
        <v-icon>
          mdi-equal
        </v-icon>
      </v-col>
      <v-col cols="2">
        <v-text-field
          label="Amount"
          value="10.00"
          prefix="$"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-select
          :items="items"
          v-model="selected2"
          outlined
          big
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'PriceDisplay',

    data: () => ({
      items: ["Bitcoin", "Litecoin", "USD"],
      selected1: "Bitcoin",
      selected2: "USD"
    }),
  }
</script>
