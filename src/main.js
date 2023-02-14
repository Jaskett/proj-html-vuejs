import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronDown, faMagnifyingGlass, faRuler, faBook, faDownload, faCartShopping, faAtom } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
library.add(faChevronDown, faMagnifyingGlass, faCircleUser, faRuler, faBook, faDownload, faCartShopping, faAtom)

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
