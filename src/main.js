import { createApp } from 'vue'
import App from './App.vue'
import { library, Library} from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
library.add(faChevronDown, faMagnifyingGlass, faCircleUser)

createApp(App)._component("font-awesome-icon", FontAwesomeIcon).mount('#app')
