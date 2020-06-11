<template>
  <v-app>
    <!-- APPLICATION TOOLBAR -->
    <v-app-bar app color="primary" dark>
      <v-btn icon color="white" @click="leftDrawer = !leftDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <div class="d-flex align-center" @click="$router.push({ name: 'Home' })">Games n'at</div>
      <v-spacer></v-spacer>
      <v-btn color="primary darken-2" href="#" target="_blank" text>
        <span class="mr-2">Test</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- APPLICAITON SIDE-PANEL -->
    <app-side-drawer :open="leftDrawer" @change="leftDrawer = $event"></app-side-drawer>

    <!-- APPLICATION CONTENT SECTION -->
    <!-- Provides the application the proper gutter -->
    <v-content>
      <!-- APPLICAITON ROOT ROUTE VIEW -->
      <router-view></router-view>

      <!-- APPLICATION SETTINGS DRAWER -->
      <v-bottom-sheet v-model="appSettingsDrawer" inset>
        <v-sheet class="text-center" height="200px">
          <v-btn class="mt-6" text color="error" @click="appSettingsDrawer = !appSettingsDrawer"
            >close</v-btn
          >
          <div class="my-3">This is a bottom sheet using the inset prop</div>
        </v-sheet>
      </v-bottom-sheet>
    </v-content>

    <!-- APPLICATION FOOTER -->
    <v-footer app color="primary">
      <v-btn icon>
        <v-icon>mdi-alert</v-icon>
      </v-btn>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-bookmark</v-icon>
      </v-btn>
      <v-btn icon @click="appSettingsDrawer = true">
        <v-icon>mdi-server</v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
//http://code.meta-platform.com/assets/mdi/preview.html
import AppSideDrawer from '@/components/App/SideDrawer.vue'

export default {
  name: 'App',
  components: { AppSideDrawer },
  data: () => ({
    leftDrawer: false,
    appSettingsDrawer: false
  })
}
</script>
