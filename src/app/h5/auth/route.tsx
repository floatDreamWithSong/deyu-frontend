import {
  createRoute,
  lazyRouteComponent,
  Outlet,
} from "@tanstack/react-router";
import { rootRoute } from "@/route";

// Auth routes
const authRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/auth",
  component: () => <Outlet />,
});

const loginRoute = createRoute({
  getParentRoute: () => authRoute,
  path: "/login",
  validateSearch: (search) => ({
    redirect: (search.redirect as string) || "/chat",
  }),
  component: lazyRouteComponent(() => import("./H5LoginPage")),
});
const h5AuthRouteTree = authRoute.addChildren([loginRoute]);

export default h5AuthRouteTree;
