import Celulares from './components/Celulares.vue'
import Nosotros from './components/Nosotros.vue'
import Home from './components/Home.vue'
import Contacto from './components/Contacto.vue'
import Administrador from './components/Admin.vue'


export const routes = [
{path: "/Home", component: Home },
{path: "/celulares", component:Celulares},
{path: "/nosotros", component:Nosotros},
{path:"/Contacto", component: Contacto},
{path:"/Admin", component:Administrador}

];
