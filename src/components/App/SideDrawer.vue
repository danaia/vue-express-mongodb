<template>
  <v-navigation-drawer
    app
    class="deep-purple accent-4"
    dark
    v-model="isOpen"
    @input="$emit('change', $event)"
  >
    <template v-slot:prepend>
      0
      <v-divider></v-divider>
    </template>

    <ul style="list-style:none; padding:0;">
      <li style="margin:0">
        <v-list>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>item</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </li>
    </ul>
  </v-navigation-drawer>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AppSideDrawer',
  components: {},
  props: {
    open: {
      default: false,
      type: Boolean
    }
  },
  data: () => ({
    //
    isLoading: false,
    matches: null,
    isOpen: false
  }),
  async created() {},
  methods: Object.assign({}, mapActions([])),
  computed: Object.assign({}, mapGetters(['games']))
}
</script>

<style></style>
