import AppLayout from "../layouts/AppLayout.vue";
import WalletLayout from "../layouts/WalletLayout.vue";
import { ROUTES } from "../utils/constant";

const routes = [
  {
    path: ROUTES.DASHBOARD,
    name: "dashboard",
    component: () => import("../pages/AppDashboard.vue"),
    meta: {
      pageTitle: "Dashboard",
      layout: AppLayout,
    },
  },
  {
    path: ROUTES.INVOICES,
    name: "invoices",
    component: () => import("../pages/AppInvoices.vue"),
    meta: {
      pageTitle: "Invoices",
      layout: AppLayout,
    },
  },
  {
    path: ROUTES.MY_WALLET,
    name: "wallets",
    component: () => import("../pages/MyWallets.vue"),
    meta: {
      title: "My Wallets",
      layout: WalletLayout,
    },
  },
  {
    path: "/:catchAll(.*)",
    component: () => import("../pages/NotFound.vue"),
    meta: {
      pageTitle: "Not Found",
      layout: AppLayout,
    },
  },
];

export default routes;
