import { createWebHistory, createRouter } from "vue-router";

import AppHome from './views/AppHome.vue';
import AppAbout from './views/AppAbout.vue';
import AppBlog from './views/AppBlog.vue';
import AppContacts from './views/AppContacts.vue';
import SingleProject from './views/SingleProject.vue';
import NotFound from './views/NotFound.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', name: 'home', component: AppHome },
		{ path: '/about', name: 'about', component: AppAbout },
		{ path: '/blog', name: 'blog', component: AppBlog },
		{ path: '/contacts', name: 'contacts', component: AppContacts },
		{ path: '/projects/:slug', name: 'project', component: SingleProject },
		{ path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound }
	]
})

export default router;