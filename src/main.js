import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import LandingComponent from './components/LandingComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import NavigationComponent from './components/NavigationComponent.vue'
import HomeComponent from './components/HomeComponent.vue'
import SongListComponent from './components/SongListComponent.vue'
import SongFilterComponent from './components/SongFilterComponent.vue'
import AboutMeComponent from './components/AboutMeComponent.vue'
import FormComponent from './components/FormComponent.vue'


const app = createApp(App)
const pinia = createPinia()

app.component('Landing', LandingComponent);
app.component('Header', HeaderComponent);
app.component('Navigation', NavigationComponent);
app.component('Home', HomeComponent);
app.component('SongList', SongListComponent);
app.component('SongFilter', SongFilterComponent);
app.component('AboutMe', AboutMeComponent);
app.component('Form', FormComponent);

app.use(router)
app.use(pinia)
app.mount('#app')
