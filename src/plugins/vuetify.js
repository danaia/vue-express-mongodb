import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify, { components: {} })

const options = {
  icons: {
    iconfont: 'mdi' // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
  },
  theme: {
    dark: false,
    themes: {
      dark: {
        // primary: '#1976D2',
        // secondary: '#711F7E',
        // accent: '#DF6F06',
        // error: '#FF5252',
        // info: '#2196F3',
        // success: '#4CAF50',
        // warning: '#FFC107'
      }
    }
  }
}

export default new Vuetify(options)
