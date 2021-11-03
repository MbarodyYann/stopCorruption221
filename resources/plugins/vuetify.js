import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

const opts = {
  icons: {
    iconfont: 'mdi' // default - only for display purposes
  },
  theme: {
    themes: {
      light: {
        primary: '#2962FF',
        accent: '#0D47A1',
        secondary: '#8C9EFF',
        gradient: '#000000'
      },
      dark: {
        primary: '#0D47A1',
        accent: '#2962FF',
        secondary: '#8C9EFF'
      }
    }
  }
}

export default new Vuetify(opts)
