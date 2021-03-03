import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '../views/Login.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Login',
		component: Login,
	},
	{
		path: '/resetpassword',
		name: 'ResetPassword',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "about" */ '../views/ResetPassword.vue'
			),
	},
	{
		path: '/firsttimepassword',
		name: 'FirstTimePassword',
		component: () => import('../views/FirstTimePassword.vue'),
	},
	{
		path: '/changepassword',
		name: 'ChangePassword',
		component: () => import('../views/ChangePassword.vue'),
	},
	{
		path: '/auth/dashboard',
		name: 'Dashboard',
		component: () => import('../views/auth/Dashboard.vue'),
	},
	{
		path: '/auth/stock',
		name: 'Stocks',
		component: () => import('../views/auth/Stocks.vue'),
	},
	{
		path: '/auth/add-stock',
		name: 'AddStock',
		component: () => import('../views/auth/AddStock.vue'),
	},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
