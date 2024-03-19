import AppLayout from '../layouts/AppLayout.vue'
const routes = [
  {
    path: "/",
    name: "dashboard",
    component: () => import("../pages/AppDashboard.vue"),
    meta: {
      pageTitle: "Dashboard",
      layout: AppLayout
    },
  },
  {
    path: "/invoices",
    name: "invoices",
    component: () => import("../pages/AppInvoices.vue"),
    meta: {
      pageTitle: "Invoices",
      layout: AppLayout
    },
  },
  {
    path: "/my-wallets",
    name: "wallets",
    component: () => import("../pages/MyWallets.vue"),
    meta: {
      pageTitle: "My Wallets",
      layout: AppLayout
    },
  },
  {
    path: "/:catchAll(.*)",
    component: () => import("../pages/NotFound.vue"),
    meta: {
      pageTitle: "Not Found",
      layout: AppLayout
    },
  },
];

export default routes;
