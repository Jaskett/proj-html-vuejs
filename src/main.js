import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronDown, faMagnifyingGlass, faRuler, faBook, faDownload, faCartShopping, faAtom, faFile, faCircle, faEye, faCalendar, faRightLong, faCopyright, faArrowUpLong } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faChevronDown, faMagnifyingGlass, faCircleUser,  faRuler, faBook, faDownload, faCartShopping, faAtom, faFile, faCircle, faEye, faCalendar, faRightLong, faCopyright, faFacebook, faTwitter, faInstagram, faLinkedin, faArrowUpLong)

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
