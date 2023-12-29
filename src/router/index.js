import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            meta: {
                title: "Home",
                requiresAuth: true
            },
            path: "/",
            component: () => import("@/layouts/MasterLayout.vue"),
            children: [
                {
                    name: "home",
                    path: "home",
                    props: false,
                    component: () => import("@/views/HomeView.vue"),
                },
                {
                    name: "customers",
                    path: "customers",
                    props: false,
                    component: () => import("@/views/CustomersView.vue"),
                },
                {
                    name: "products",
                    path: "products",
                    props: false,
                    component: () => import("@/views/ProductsView.vue"),
                },
                {
                    name: "store",
                    path: "store",
                    props: false,
                    component: () => import("@/views/StoreView.vue"),
                },
                {
                    name: "establishment",
                    path: "establishment",
                    props: false,
                    component: () => import("@/views/EstablishmentView.vue"),
                },
                {
                    name: "vouchers",
                    path: "vouchers",
                    props: false,
                    component: () => import("@/views/VouchersView.vue"),
                },
                {
                    name: "createvouchers",
                    path: "createvouchers",
                    props: false,
                    component: () => import("@/views/CreateVouchersView.vue"),
                },
                {
                    name: "updatevouchers",
                    path: "updatevouchers/:id",
                    props: true,
                    component: () => import("@/views/UpdateVouchersView.vue"),
                    beforeEnter: (to, from, next) => {
                        const hasIdParam = to.params.id;
                        if (!hasIdParam || isNaN(parseInt(hasIdParam)) || !Number.isInteger(parseFloat(hasIdParam))) {
                            // Si no se proporciona un :id, redirige a otra vista, por ejemplo, "acceso-denegado"
                            next({ name: hasIdParam });
                        } else {
                            next(); // Continuar con la navegación si se proporciona un :id
                        }
                    },
                }
            ]
        },
        {
            meta: {
                title: "Login"
            },
            path: "/login",
            name: "login",
            component: () => import("@/views/LoginView.vue")
        }
    ]
})
// Navigation Guard
router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !store.state.isAuthenticated) {
        // Si la ruta requiere autenticación y el usuario no está autenticado, redirigir a la página de inicio de sesión
        next({ name: 'login' });
    } else if (to.name === 'login' && store.state.isAuthenticated) {
        next({ name: 'vouchers' });
    } else if (to.path === '/' && store.state.isAuthenticated) {
        next({ name: 'vouchers' });
    } else {
        next();
    }

});
export default router;


