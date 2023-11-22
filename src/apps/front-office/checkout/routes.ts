import { guardedRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import Checkout from "./pages/Checkout";

guardedRoutes([
  {
    path: URLS.checkout.page,
    component: Checkout,
  },
]);
