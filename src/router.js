import { createWebHistory, createRouter } from "vue-router";

import { Apphome } from './views/AppHome.vue';
import { AppBlog } from './views/AppAbout.vue';
import { AppContacts } from './views/AppBlog.vue';
import { AppAbout } from './views/AppContacts.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', name: 'home', component: 'AppHome' },
		{ path: '/about', name: 'about', component: 'AppAbout' },
		{ path: '/blog', name: 'blog', component: 'AppBlog' },
		{ path: '/contacts', name: 'contacts', component: 'AppContacts' }
	]
})

export default router;