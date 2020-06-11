<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <div>
          <h1>Time to play!</h1>
          <p>Just click below to start!</p>
          <v-btn color="primary" @click="handleNewGame">New Game</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({}),
  sockets: {
    // Fired when the server sends something on the "messageChannel" channel.
  },
  mounted() {},
  methods: {
    handleNewGame() {
      this.$router.push({ name: 'Game' })
    }
  }
}
</script>
<style scoped lang="sass"></style>
