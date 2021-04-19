import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from '../views/Login.vue';

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
	{
		path: '/auth/stock-upload',
		name: 'StockUpload',
		component: () => import('../views/auth/StockUpload.vue'),
	},
	{
		path: '/auth/manage-inv',
		name: 'Inventory',
		component: () => import('../views/auth/Inventory.vue'),
	},
	{
		path: '/auth/itemrequest',
		name: 'ItemRequest',
		component: () => import('../views/auth/ItemRequest.vue'),
	},
	{
		path: '/auth/edititemrequest',
		name: 'EditItemRequest',
		component: () => import('../views/auth/EditItemRequest.vue'),
	},
	{
		path: '/auth/goodissue',
		name: 'GoodIssue',
		component: () => import('../views/auth/GoodIssue.vue'),
	},
	{
		path: '/auth/warehouse',
		name: 'Warehouse',
		component: () => import('../views/auth/Warehouse.vue'),
	},
	{
		path: '/auth/warehouseedit',
		name: 'WarehouseEdit',
		component: () => import('../views/auth/WarehouseEdit.vue'),
	},
	{
		path: '/auth/goodissuepost',
		name: 'GoodIssuePost',
		component: () => import('../views/auth/GoodIssuePost.vue'),
	},
	{
		path: '/auth/users',
		name: 'Users',
		component: () => import('../views/auth/Users.vue'),
	},
	{
		path: '/auth/goodreceipt',
		name: 'GoodReceipt',
		component: () => import('../views/auth/GoodReceipt.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
