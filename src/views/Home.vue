<template>
  <div class="home pa-4">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->

    <v-card max-width="800" class="mx-auto pa-4 primary darken-1">
      <v-card-title class="white--text">Pick your game</v-card-title>
      <v-container class="pa-4">
        <v-row align="center">
          <v-item-group v-model="window" class="shrink mr-6" mandatory tag="v-flex">
            <v-item>
              <div>
                <v-btn icon>
                  <v-icon>mdi-record</v-icon>
                </v-btn>
              </div>
            </v-item>
          </v-item-group>

          <v-col>
            <v-window v-model="window" class="elevation-1" vertical>
              <v-window-item>
                <v-card flat>
                  <v-card-text>
                    <v-row class="mb-4 ml-0" align="center">
                      <v-avatar color="grey" class="mr-4"></v-avatar>
                      <strong class="title">title</strong>
                      <v-spacer></v-spacer>
                      <v-btn icon class="mr-1">
                        <v-icon>mdi-star</v-icon>
                      </v-btn>
                    </v-row>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="green white--text mr-2 mb-2"
                      @click="$router.push({ name: 'About' })"
                    >
                      <span>CTA</span>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-window-item>
            </v-window>
          </v-col>
        </v-row>
      </v-container>
      <!-- <v-card-actions>
      </v-card-actions>-->
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex'
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data: () => ({
    length: 3,
    window: 0,
    items: [
      // {
      //   src: 'backgrounds/bg.jpg'
      // },
      // {
      //   src: 'backgrounds/md.jpg'
      // },
      // {
      //   src: 'backgrounds/bg-2.jpg'
      // },
      {
        src: 'backgrounds/md2.jpg'
      }
    ],
    selected: []
  }),
  async created() {},
  methods: Object.assign({}, mapActions([])),
  computed: Object.assign({}, mapGetters([]))
}
</script>
