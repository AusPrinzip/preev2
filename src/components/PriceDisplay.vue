<template>
  <v-container>
    <v-row align="center"
      justify="center">
      <v-col cols="4">
        <v-text-field
          label="Amount"
          v-model="leftSide"
          prefix="btc"
          outlined
          @change="handler"
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
        <div class="center">
          <v-icon>mdi-equal</v-icon>
      </div>
      </v-col>
      <v-col cols="2">
        <v-text-field
          label="Amount"
          v-model="rightSide"
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
      selected2: "USD",
      leftSide: 10,
      rightSide: null,
      current_price: null
    }),
    mounted () {
      fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`).then(res => res.json()).then(res => {
        this.current_price = res[0].current_price
        this.rightSide = res[0].current_price * this.leftSide
      })
    },
    computed: {
      amount () {
        let stringNum = this.leftSide.toString();
        let output = '0.'
        for (let i = 0; i < 8 - stringNum.length; i++) {
          output += "0"
        }
        return output + stringNum
      }
    },
    methods: {
      handler(e) {
        console.log(e)
        console.log(this.amount)
        
        if (!this.leftSide.includes(".")){
          this.leftSide = this.amount
        } 
        this.rightSide = this.current_price * this.leftSide
      }
    }
  }
</script>

<style lang="css">
.center {
  margin: auto;
  width: 50%;
  padding: 10px;
}
</style>
